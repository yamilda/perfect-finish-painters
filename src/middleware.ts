import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const { pathname, search } = request.nextUrl;

  // www.perfectfinishpainter.com → perfectfinishpainter.com (apex is canonical)
  if (host.startsWith("www.")) {
    const apex = request.nextUrl.clone();
    apex.host = host.slice(4);
    return NextResponse.redirect(apex, 301);
  }

  // Strip junk query params from pages (not API routes or _next assets) — kills
  // /?q={search_term_string} stragglers from old SearchAction schema. Attribution
  // params must survive the strip or every ad/social click loses its campaign
  // tagging (GA4 campaign, Google Ads gclid, Meta fbclid) before gtag/fbq run.
  // `service` = quiz pre-select (BOOK NOW links) — /quiz forwards it to Senku.
  const KEEP_PARAM = /^(utm_|gclid$|gbraid$|wbraid$|fbclid$|msclkid$|ttclid$|li_fat_id$|ref$|_gl$|service$)/;
  if (search && !pathname.startsWith("/api") && !pathname.startsWith("/_next")) {
    const keys = [...request.nextUrl.searchParams.keys()];
    if (!keys.some((k) => KEEP_PARAM.test(k))) {
      const cleanUrl = new URL(pathname, request.url);
      return NextResponse.redirect(cleanUrl, 301);
    }
  }

  // The old x-pathname header is no longer set — layouts now live under
  // route groups (en)/(es) so language is determined at the layout level
  // rather than via headers() (which forced dynamic rendering on every page).
  return NextResponse.next();
}

export const config = {
  // Tab/home-screen icons are requested as /icon.png?<hash>; keep them out of
  // the query-string cleaner so they don't take a 301 hop on every load.
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png).*)"],
};
