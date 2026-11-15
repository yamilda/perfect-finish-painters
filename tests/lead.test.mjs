// Contact-form lead route: SJ Tech spam guard + delivery. Every request goes to a fake
// fetch, so nothing here reaches Senku, Resend or the guard. Run: npm test
import assert from "node:assert/strict";
import crypto from "node:crypto";
import test, { mock } from "node:test";
import { handleLead, SENKU_URL } from "../src/lib/lead.ts";
import { isSpamByLeadGuard, LEAD_GUARD_SITE } from "../src/lib/lead-guard.ts";

const GUARD_URL = "https://sjtechllc.com/api/lead-guard";
const RESEND_URL = "https://api.resend.com/emails";
const ID = "33333333-3333-4333-8333-333333333333";
const SECRET = "fake-guard-secret-for-tests";
const ENV = {
  LEAD_GUARD_SECRET: SECRET,
  RESEND_API_KEY: "re_fake_for_tests",
  LEAD_EMAIL_FROM: "Website Leads <leads@example.test>",
  LEAD_EMAIL_TO: "owner@example.test",
  LEAD_EMAIL_BCC: "copy@example.test",
};
const lead = {
  name: "Casey Example",
  phone: "609-555-0142",
  email: "casey@example.test",
  service: "Interior Painting",
  notes: "Two bedrooms and a hallway.",
  website: "",
  submissionId: ID,
  utmSource: "google",
  elapsedMs: 8423,
};

const warn = mock.method(console, "warn", () => {});
const info = mock.method(console, "info", () => {});

// Records every call and answers by URL. `guard` decides what the spam guard replies.
function fakeFetch(guard = () => Response.json({ verdict: "pass", id: "g1" })) {
  const calls = [];
  const fetchFn = async (url, init) => {
    calls.push({ url: String(url), init });
    return String(url) === GUARD_URL ? guard(init) : new Response("{}", { status: 200 });
  };
  return { calls, fetchFn, urls: () => calls.map((c) => c.url) };
}

test("guard says spam: same success response as a real lead, and nothing is delivered", async () => {
  warn.mock.resetCalls();
  info.mock.resetCalls();
  const spam = fakeFetch(() => Response.json({ verdict: "spam", id: "g2" }));
  const r = await handleLead(lead, ENV, spam.fetchFn);

  const pass = fakeFetch();
  assert.deepEqual(r, await handleLead(lead, ENV, pass.fetchFn));
  assert.deepEqual(r, { status: 200, body: { ok: true, id: ID } });
  assert.deepEqual(spam.urls(), [GUARD_URL]); // no Senku, no owner email, no BCC
  // One log line, no lead details in it.
  assert.deepEqual(warn.mock.calls.map((c) => c.arguments), [["lead filtered by SJ Tech guard"]]);
  assert.equal(info.mock.callCount(), 1); // only the real lead got a delivery receipt
});

test("guard says pass: Senku and the owner email go out exactly as before", async () => {
  const f = fakeFetch();
  const r = await handleLead(lead, ENV, f.fetchFn);

  assert.deepEqual(r, { status: 200, body: { ok: true, id: ID } });
  assert.deepEqual(f.urls(), [GUARD_URL, SENKU_URL, RESEND_URL]);
  assert.deepEqual(JSON.parse(f.calls[1].init.body), {
    slug: "perfect-finish-painters",
    name: "Casey Example",
    phone: "609-555-0142",
    email: "casey@example.test",
    projectTypes: "Interior Painting",
    notes: "Two bedrooms and a hallway.",
    leadSource: "contact-form",
    utm_source: "google",
  });
  const email = JSON.parse(f.calls[2].init.body);
  assert.deepEqual(email.to, ["owner@example.test"]);
  assert.deepEqual(email.bcc, ["copy@example.test"]);
  assert.equal(email.reply_to, "casey@example.test");
  assert.equal(f.calls[2].init.headers["Idempotency-Key"], `pf-lead/${ID}`);
});

test("guard down (network error, timeout, 500, bad JSON, odd verdict): lead is still delivered", async () => {
  const failures = {
    "network error": () => { throw new TypeError("fetch failed"); },
    timeout: () => { throw new DOMException("The operation was aborted due to timeout", "TimeoutError"); },
    "500": () => new Response("down", { status: 500 }),
    "bad JSON": () => new Response("<html>oops</html>", { status: 200 }),
    "odd verdict": () => Response.json({ verdict: "maybe" }),
  };
  for (const [name, guard] of Object.entries(failures)) {
    const f = fakeFetch(guard);
    const r = await handleLead(lead, ENV, f.fetchFn);
    assert.deepEqual(r, { status: 200, body: { ok: true, id: ID } }, name);
    assert.deepEqual(f.urls(), [GUARD_URL, SENKU_URL, RESEND_URL], name);
  }
});

test("no LEAD_GUARD_SECRET: the guard is not called and the lead is delivered", async () => {
  for (const secret of [undefined, "", "   "]) {
    const f = fakeFetch();
    const r = await handleLead(lead, { ...ENV, LEAD_GUARD_SECRET: secret }, f.fetchFn);
    assert.deepEqual(r, { status: 200, body: { ok: true, id: ID } });
    assert.deepEqual(f.urls(), [SENKU_URL, RESEND_URL]);
  }
});

test("guard request is signed HMAC-SHA256(secret, `${ts}.${body}`) and carries only what the visitor typed", async () => {
  const f = fakeFetch();
  await handleLead(lead, ENV, f.fetchFn);
  const { init } = f.calls[0];
  const ts = init.headers["x-sjtech-timestamp"];

  assert.equal(init.method, "POST");
  assert.equal(init.headers["content-type"], "application/json");
  assert.equal(init.headers["x-sjtech-client"], "perfect-finish-painters");
  assert.equal(LEAD_GUARD_SITE, "perfect-finish-painters");
  assert.match(ts, /^\d{10}$/);
  assert.ok(Math.abs(Number(ts) - Date.now() / 1000) < 5);
  assert.equal(
    init.headers["x-sjtech-signature"],
    crypto.createHmac("sha256", SECRET).update(`${ts}.${init.body}`).digest("hex"),
  );
  assert.ok(init.signal instanceof AbortSignal);
  // No honeypot, submissionId or UTM values in what the guard sees.
  assert.deepEqual(JSON.parse(init.body), {
    formType: "contact-form",
    lead: {
      name: "Casey Example",
      email: "casey@example.test",
      phone: "609-555-0142",
      message: "Two bedrooms and a hallway.",
      fields: { service: "Interior Painting" },
    },
    elapsedMs: 8423,
  });
});

test("isSpamByLeadGuard: fixed clock signature, URL override, elapsedMs omitted when unknown, long text capped", async () => {
  const calls = [];
  const fetchFn = async (url, init) => { calls.push({ url, init }); return Response.json({ verdict: "spam" }); };
  const env = { LEAD_GUARD_SECRET: ` ${SECRET} `, LEAD_GUARD_URL: "https://guard.example.test/check" };
  const spam = await isSpamByLeadGuard(
    { name: "Casey Example", phone: "609-555-0142", message: "x".repeat(6000), fields: { service: undefined } },
    { env, fetchFn, now: () => 1_763_200_000_123 },
  );

  assert.equal(spam, true);
  const { url, init } = calls[0];
  const body = JSON.parse(init.body);
  assert.equal(url, "https://guard.example.test/check");
  assert.equal(init.headers["x-sjtech-timestamp"], "1763200000");
  assert.equal(
    init.headers["x-sjtech-signature"],
    crypto.createHmac("sha256", SECRET).update(`1763200000.${init.body}`).digest("hex"),
  );
  assert.equal("elapsedMs" in body, false);
  assert.equal(body.lead.message.length, 5000);
  assert.deepEqual(body.lead.fields, {});
});

test("isSpamByLeadGuard: a guard that never answers is abandoned at the timeout and counts as pass", async () => {
  // The interval stands in for the open socket a real request holds: the timeout timer on
  // its own does not keep Node running.
  const hang = (_url, init) =>
    new Promise((_, reject) => {
      const socket = setInterval(() => {}, 1000);
      init.signal.addEventListener("abort", () => { clearInterval(socket); reject(init.signal.reason); });
    });
  const started = Date.now();
  const spam = await isSpamByLeadGuard({ name: "Casey Example" }, { env: ENV, fetchFn: hang, timeoutMs: 30 });
  assert.equal(spam, false);
  assert.ok(Date.now() - started < 2000);
});

test("existing checks still run first: honeypot and invalid leads never reach the guard", async () => {
  const f = fakeFetch(() => Response.json({ verdict: "spam" }));
  assert.deepEqual(await handleLead({ ...lead, website: "https://spam.example" }, ENV, f.fetchFn), { status: 200, body: { ok: true } });
  assert.equal((await handleLead({ ...lead, phone: "123" }, ENV, f.fetchFn)).status, 400);
  assert.equal((await handleLead({ ...lead, name: "" }, ENV, f.fetchFn)).status, 400);
  assert.equal((await handleLead([lead], ENV, f.fetchFn)).status, 400);
  assert.deepEqual(f.urls(), []);
});

test("delivery failure still returns the 502 call-us error after a guard pass", async () => {
  const calls = [];
  const fetchFn = async (url) => {
    calls.push(String(url));
    return String(url) === GUARD_URL ? Response.json({ verdict: "pass" }) : new Response("no", { status: 500 });
  };
  const r = await handleLead(lead, ENV, fetchFn);
  assert.equal(r.status, 502);
  assert.match(r.body.error, /\(609\) 377-4226/);
  assert.deepEqual(calls, [GUARD_URL, SENKU_URL, RESEND_URL]);
});
