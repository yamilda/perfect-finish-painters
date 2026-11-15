export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { handleLead } from "@/lib/lead";

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

  // Validation, honeypot, SJ Tech spam guard and delivery live in handleLead (tests/lead.test.mjs).
  const r = await handleLead(body);
  return NextResponse.json(r.body, { status: r.status });
}
