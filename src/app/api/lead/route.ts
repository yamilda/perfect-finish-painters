export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { deliverLead, normalizeLead } from "@/lib/lead";

const MAX_BYTES = 16_000;
const ALLOWED_HOSTS = new Set(["perfectfinishpainter.com", "www.perfectfinishpainter.com", "localhost", "127.0.0.1"]);

export async function POST(req: Request) {
  const origin = req.headers.get("origin");
  if (origin) {
    let host = "";
    try { host = new URL(origin).hostname; } catch {}
    if (!ALLOWED_HOSTS.has(host) && !host.endsWith(".vercel.app")) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
  }
  if (Number(req.headers.get("content-length") || 0) > MAX_BYTES) {
    return NextResponse.json({ error: "Request too large" }, { status: 413 });
  }

  let body: unknown;
  try {
    const raw = await req.text();
    if (new TextEncoder().encode(raw).length > MAX_BYTES) {
      return NextResponse.json({ error: "Request too large" }, { status: 413 });
    }
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const n = normalizeLead(body);
  if (!n.ok) return NextResponse.json({ error: n.error }, { status: 400 });
  if (n.spam) return NextResponse.json({ ok: true });

  const submissionId = n.lead.submissionId || crypto.randomUUID();
  const r = await deliverLead(n.lead, {
    resendApiKey: process.env.RESEND_API_KEY,
    from: process.env.LEAD_EMAIL_FROM,
    to: process.env.LEAD_EMAIL_TO,
    bcc: process.env.LEAD_EMAIL_BCC,
  }, submissionId);

  // PII-free delivery receipt for Vercel logs.
  console.info(JSON.stringify({ evt: "lead_delivery", submissionId, senku: r.senkuStatus, email: r.emailStatus }));

  if (!r.ok) {
    return NextResponse.json({ error: "We couldn't send your message. Please call (609) 377-4226." }, { status: 502 });
  }
  return NextResponse.json({ ok: true, id: submissionId });
}
