// Asks SJ Tech's spam guard before a lead is delivered. Fails open: no secret, a timeout,
// a network error or a non-200 all count as "not spam", so a real lead is never lost.
import crypto from "node:crypto";

export const LEAD_GUARD_SITE = "perfect-finish-painters";
const DEFAULT_URL = "https://sjtechllc.com/api/lead-guard";
const cap = (v: unknown, n = 5000) => (typeof v === "string" ? v.slice(0, n) : undefined);

export type GuardLead = {
  name?: string; email?: string; phone?: string; message?: string;
  fields?: Record<string, string | undefined>;
};

export async function isSpamByLeadGuard(
  lead: GuardLead,
  opts: {
    formType?: string; elapsedMs?: unknown;
    env?: Record<string, string | undefined>;
    fetchFn?: typeof fetch; timeoutMs?: number; now?: () => number;
  } = {}
): Promise<boolean> {
  const env = opts.env ?? process.env;
  const secret = env.LEAD_GUARD_SECRET?.trim();
  if (!secret) return false;
  const fields: Record<string, string> = {};
  for (const [k, v] of Object.entries(lead.fields ?? {})) { const c = cap(v); if (c) fields[k] = c; }
  const elapsed = Number(opts.elapsedMs);
  const body = JSON.stringify({
    formType: opts.formType ?? "contact-form",
    lead: { name: cap(lead.name, 200), email: cap(lead.email, 320), phone: cap(lead.phone, 50), message: cap(lead.message), fields },
    ...(Number.isFinite(elapsed) && elapsed >= 0 ? { elapsedMs: Math.round(elapsed) } : {}),
  });
  const ts = Math.floor((opts.now ?? Date.now)() / 1000).toString();
  const sig = crypto.createHmac("sha256", secret).update(`${ts}.${body}`).digest("hex");
  try {
    const res = await (opts.fetchFn ?? fetch)(env.LEAD_GUARD_URL?.trim() || DEFAULT_URL, {
      method: "POST",
      headers: { "content-type": "application/json", "x-sjtech-client": LEAD_GUARD_SITE, "x-sjtech-timestamp": ts, "x-sjtech-signature": sig },
      body,
      signal: AbortSignal.timeout(opts.timeoutMs ?? 6000),
    });
    if (!res.ok) return false;
    const data = (await res.json()) as { verdict?: string };
    return data?.verdict === "spam";
  } catch {
    return false; // fail open: never lose a real lead because the guard is down
  }
}
