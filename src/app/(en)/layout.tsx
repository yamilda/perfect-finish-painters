import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { areaServedCities } from "@/data/service-areas";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://perfectfinishpainter.com"),
  title: "Painters in Atlantic County NJ | Perfect Finish",
  description: "Licensed painters in Atlantic County NJ. Interior & exterior painting, drywall repair, and flooring from Mays Landing. Free estimates — 609-377-4226.",
  keywords: "painters in Mays Landing NJ, South Jersey painting company, Mays Landing painters, interior painting South Jersey, exterior painting NJ, drywall repair Mays Landing, house painters near me, painting contractors Atlantic County",
  openGraph: {
    title: "Painters in Mays Landing NJ | Perfect Finish Painters",
    description: "Trusted South Jersey painting company. Interior & exterior painting, drywall repair, and flooring. Free estimates in 60 seconds.",
    type: "website",
    locale: "en_US",
    url: "https://perfectfinishpainter.com",
    images: [
      {
        url: "/og-card.jpg",
        width: 1200,
        height: 630,
        alt: "Perfect Finish Painters — interior, exterior & drywall in Mays Landing, NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Painters in Mays Landing NJ | Perfect Finish Painters",
    description: "Trusted South Jersey painting company. Interior & exterior painting, drywall repair, and flooring. Free estimates in 60 seconds.",
    images: ["/og-card.jpg"],
  },
  alternates: {
    canonical: "https://perfectfinishpainter.com",
  },
  verification: {
    google: "q8waW2HZ8B6WKuz42YYlJb6WWh9y7kP3mELR_6FX_qM",
  },
  other: {
    "fb:app_id": "2982905135253221",
  },
};

// Service-area business — `address` is required by Google's Rich Results validator
// even when locality-only. `areaServed` carries the full coverage list.
// Reviews/aggregateRating are emitted on /reviews (where review content renders) and
// merge into this same entity via shared `@id`.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HousePainter",
  "@id": "https://perfectfinishpainter.com/#business",
  name: "Perfect Finish Painters",
  description: "Professional interior & exterior painting, drywall repair, and flooring services in Mays Landing and South Jersey.",
  url: "https://perfectfinishpainter.com",
  telephone: "+1-609-377-4226",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mays Landing",
    addressRegion: "NJ",
    postalCode: "08330",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.45,
    longitude: -74.73,
  },
  areaServed: areaServedCities,
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "17:00" },
  ],
  priceRange: "$$",
  logo: "https://perfectfinishpainter.com/logo.webp",
  // NJ Home Improvement Contractor license — surfaced for AI knowledge graphs
  // and rich-result extraction. Real license, verifiable via NJ Division of
  // Consumer Affairs. Required by NJ HICPA on all consumer-facing materials.
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    "@id": "https://perfectfinishpainter.com/#nj-hic",
    name: "New Jersey Home Improvement Contractor",
    credentialCategory: "license",
    identifier: "13VH14120900",
    recognizedBy: {
      "@type": "GovernmentOrganization",
      name: "New Jersey Division of Consumer Affairs",
      url: "https://www.njconsumeraffairs.gov/hic/",
    },
  },
  sameAs: [
    "https://www.facebook.com/PerfectFinishPainters",
    "https://www.instagram.com/perfectfinishpainter/",
    "https://www.yelp.com/biz/perfect-finish-painters-mays-landing",
    "https://g.page/r/CYlKM00sLEMiEAI",
  ],
  award: [
    "5-Star Rated on Google",
    "5-Star Rated on Facebook",
    "Top Rated Painter on Yelp — Mays Landing",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Painting Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Painting", provider: { "@id": "https://perfectfinishpainter.com/#business" } } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exterior Painting", provider: { "@id": "https://perfectfinishpainter.com/#business" } } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drywall Repair", provider: { "@id": "https://perfectfinishpainter.com/#business" } } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flooring Installation", provider: { "@id": "https://perfectfinishpainter.com/#business" } } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shed Restoration & Painting", provider: { "@id": "https://perfectfinishpainter.com/#business" } } },
    ],
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-609-377-4226",
    contactType: "customer service",
    areaServed: "US",
    availableLanguage: ["English", "Spanish"],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://perfectfinishpainter.com/#website",
  name: "Perfect Finish Painters",
  url: "https://perfectfinishpainter.com",
  publisher: { "@id": "https://perfectfinishpainter.com/#business" },
  inLanguage: "en-US",
};

export default function EnRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google" content="nositelinkssearchbox" />
        {/* Quiz lives at app.senkulab.com via 307 from /quiz —
            warm DNS+TCP+TLS so the redirect doesn't pay a cold handshake. */}
        <link rel="preconnect" href="https://app.senkulab.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://app.senkulab.com" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-822VB2RDNH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-822VB2RDNH');
          `}
        </Script>
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '3251744804997418');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=3251744804997418&ev=PageView&noscript=1"
            alt=""
            aria-hidden="true"
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-clip`}
      >
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <main id="main-content">{children}</main>
        <Script
          src="https://semetry.vercel.app/tracker.js"
          data-site-key="perfect-finish-painters"
          strategy="afterInteractive"
        />
        <Analytics />
      </body>
    </html>
  );
}
