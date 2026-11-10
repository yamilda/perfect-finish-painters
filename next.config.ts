import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    // NOTE: /quiz must NOT be redirected here — config redirects run before
    // filesystem routes, so an entry for /quiz would shadow
    // src/app/(en)/quiz/page.tsx and its UTM-forwarding redirect to
    // app.senkulab.com (which is exactly what happened until 2026-07-26).
    return [
      {
        // Legacy combined URL — the service is now split into two dedicated
        // pages (/deck-staining + /fence-staining). Point the old URL at deck
        // staining (the primary term; it cross-links fence staining), not the
        // unrelated /shed-restoration it was wrongly sent to.
        source: "/deck-fence-staining",
        destination: "/deck-staining",
        permanent: true,
      },
    ];
  },
  async headers() {
    // Content-Security-Policy listing the actual third parties we use:
    // - Google Tag Manager / Analytics (GA4)
    // - Facebook Pixel
    // - Vercel Analytics
    // - Semetry (SJ Tech analytics: semetry.vercel.app tracker + /api/events)
    // - Google Maps iframe (on /contact)
    // 'unsafe-inline' on script-src + style-src is required because Next.js
    // emits inline hydration scripts and Tailwind injects inline styles.
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net https://va.vercel-scripts.com https://www.google-analytics.com https://semetry.vercel.app",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob: https://www.facebook.com https://www.google-analytics.com https://www.googletagmanager.com https://*.google-analytics.com",
      "font-src 'self' data: https://fonts.gstatic.com",
      "connect-src 'self' https://www.google-analytics.com https://www.facebook.com https://connect.facebook.net https://vitals.vercel-insights.com https://*.google-analytics.com https://semetry.vercel.app",
      "frame-src https://www.google.com https://www.facebook.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ].join("; ");

    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
          { key: "Content-Security-Policy", value: csp },
        ],
      },
      {
        // public/ filenames are stable (not content-hashed) and photos DO get
        // swapped in place — `immutable` would pin stale images in browsers/CDN
        // for a year with no way to bust them. Next serves its own immutable
        // header for hashed /_next/static assets, so this rule only covers
        // public/ and must stay revalidatable.
        source: "/(.*)\\.(jpg|jpeg|png|gif|ico|svg|webp|woff|woff2)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
        ],
      },
    ];
  },
};

export default nextConfig;
