// Contact-form lead delivery: Senku (Brandon's lead dashboard) and the owner email run
// concurrently, so one failing never drops the other. SJ Tech gets a hidden BCC copy
// (LEAD_EMAIL_BCC). Never log or echo lead fields.

export const SENKU_URL = "https://app.senkulab.com/api/quiz-submission";
export const SENKU_SLUG = "perfect-finish-painters";
const BUSINESS = "Perfect Finish Painters";
const TIMEOUT_MS = 8000;

const LIMITS = {
  name: 100,
  phone: 30,
  email: 254,
  service: 100,
  notes: 4000,
  submissionId: 36,
  utmSource: 200,
  utmMedium: 200,
  utmCampaign: 200,
} as const;

export type Lead = Partial<Record<keyof typeof LIMITS, string>> & { name: string; phone: string };

export type Normalized =
  | { ok: true; spam: boolean; lead: Lead }
  | { ok: false; error: string };

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;

export function normalizeLead(input: unknown): Normalized {
  if (!input || typeof input !== "object" || Array.isArray(input)) return { ok: false, error: "Invalid request" };
  const body = input as Record<string, unknown>;
  // Honeypot: bots fill the hidden "website" field. Pretend success, send nothing.
  if (typeof body.website === "string" && body.website.trim()) return { ok: true, spam: true, lead: { name: "", phone: "" } };

  const lead: Record<string, string> = {};
  for (const [key, max] of Object.entries(LIMITS)) {
    const raw = body[key];
    if (raw == null || raw === "") continue;
    if (typeof raw !== "string" || raw.length > max) return { ok: false, error: `Invalid ${key}` };
    if (raw.trim()) lead[key] = raw.trim();
  }
  if (!lead.name || !lead.phone) return { ok: false, error: "Name and phone are required" };
  const digits = lead.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15) return { ok: false, error: "Enter a valid phone number" };
  if (lead.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) return { ok: false, error: "Enter a valid email address" };
  if (lead.submissionId && !UUID.test(lead.submissionId)) return { ok: false, error: "Invalid submissionId" };
  return { ok: true, spam: false, lead: lead as Lead };
}

const esc = (v: string) =>
  v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");

function emailHtml(lead: Lead) {
  const row = (label: string, value?: string) =>
    value
      ? `<tr><td style="padding:10px 0;color:#667085;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;vertical-align:top;width:120px">${label}</td><td style="padding:10px 0;color:#101828;font-size:15px;line-height:1.5;white-space:pre-wrap">${esc(value)}</td></tr>`
      : "";
  const tel = lead.phone.replace(/[^\d+]/g, "");
  return `<!doctype html><html><body style="margin:0;padding:0;background:#eef2f6;font-family:Arial,Helvetica,sans-serif;color:#101828">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#eef2f6;padding:28px 12px"><tr><td align="center">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:620px;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 8px 30px rgba(16,24,40,.10)">
<tr><td style="background:#1e3a5f;padding:28px 32px;border-bottom:4px solid #2563eb"><div style="color:#93c5fd;font-size:12px;font-weight:800;letter-spacing:.16em;text-transform:uppercase">Website Lead</div><h1 style="margin:8px 0 2px;color:#fff;font-size:26px;line-height:1.2">New message from your website</h1><p style="margin:0;color:#cbd5e1;font-size:15px">${BUSINESS}</p></td></tr>
<tr><td style="padding:26px 32px 30px"><p style="margin:0 0 14px;color:#475467;font-size:14px;line-height:1.6">A customer sent a message through the contact form on perfectfinishpainter.com.</p>
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border-top:1px solid #e4e7ec;border-bottom:1px solid #e4e7ec">${row("Name", lead.name)}${row("Phone", lead.phone)}${row("Email", lead.email)}${row("Service", lead.service)}${row("Message", lead.notes)}</table>
${tel ? `<a href="tel:${esc(tel)}" style="display:inline-block;margin-top:22px;background:#2563eb;color:#fff;text-decoration:none;font-size:14px;font-weight:700;padding:12px 20px;border-radius:8px">Call customer</a>` : ""}
${lead.email ? `<p style="margin:18px 0 0;color:#667085;font-size:13px">Reply to this email to answer the customer directly.</p>` : ""}</td></tr>
<tr><td style="background:#f8fafc;padding:18px 32px;text-align:center;color:#667085;font-size:12px;border-top:1px solid #e4e7ec">Sent by your website &middot; SJ Tech</td></tr>
</table></td></tr></table></body></html>`;
}

type Env = { resendApiKey?: string; from?: string; to?: string; bcc?: string };

export async function deliverLead(lead: Lead, env: Env, submissionId: string, fetchFn: typeof fetch = fetch) {
  const senku = fetchFn(SENKU_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      slug: SENKU_SLUG,
      name: lead.name,
      phone: lead.phone,
      email: lead.email,
      projectTypes: lead.service,
      notes: lead.notes,
      leadSource: "contact-form",
      utm_source: lead.utmSource || "website",
      utm_medium: lead.utmMedium,
      utm_campaign: lead.utmCampaign,
    }),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  }).then((r) => { void r.body?.cancel().catch(() => {}); return r.status; });

  const email = env.resendApiKey && env.from && env.to
    ? fetchFn("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.resendApiKey}`,
          "Content-Type": "application/json",
          "Idempotency-Key": `pf-lead/${submissionId}`,
        },
        body: JSON.stringify({
          from: env.from,
          to: [env.to],
          ...(env.bcc ? { bcc: env.bcc.split(",").map((a) => a.trim()).filter(Boolean) } : {}),
          ...(lead.email ? { reply_to: lead.email } : {}),
          subject: `New website message — ${lead.name.replace(/[\r\n]+/g, " ")}`,
          html: emailHtml(lead),
          text: [
            `Name: ${lead.name}`,
            `Phone: ${lead.phone}`,
            lead.email && `Email: ${lead.email}`,
            lead.service && `Service: ${lead.service}`,
            lead.notes && `\nMessage:\n${lead.notes}`,
          ].filter(Boolean).join("\n"),
        }),
        signal: AbortSignal.timeout(TIMEOUT_MS),
      }).then((r) => { void r.body?.cancel().catch(() => {}); return r.status; })
    : Promise.resolve(0);

  const [s, e] = await Promise.allSettled([senku, email]);
  const senkuStatus = s.status === "fulfilled" ? s.value : -1;
  const emailStatus = e.status === "fulfilled" ? e.value : -1;
  const senkuSaved = senkuStatus >= 200 && senkuStatus < 300;
  const emailed = emailStatus >= 200 && emailStatus < 300;
  return { ok: senkuSaved || emailed, senkuStatus, emailStatus, senkuSaved, emailed };
}
