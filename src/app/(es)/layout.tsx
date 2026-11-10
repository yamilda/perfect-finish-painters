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
  title: "Pintores en el sur de New Jersey | Perfect Finish Painters",
  description: "Pintores profesionales en Atlantic County, NJ. Pintura interior y exterior, reparación de drywall y pisos. Estimados gratis — 609-377-4226.",
  openGraph: {
    type: "website",
    locale: "es_US",
    url: "https://perfectfinishpainter.com/pintores-cerca-de-mi",
    images: [
      {
        url: "/logo.webp",
        width: 1970,
        height: 748,
        alt: "Perfect Finish Painters logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-card.jpg"],
  },
  verification: {
    google: "q8waW2HZ8B6WKuz42YYlJb6WWh9y7kP3mELR_6FX_qM",
  },
  other: {
    "fb:app_id": "2982905135253221",
  },
};

// Same HousePainter entity as (en) — merged via shared `@id`.
// Spanish pages set their own page-level OG/Twitter copy.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HousePainter",
  "@id": "https://perfectfinishpainter.com/#business",
  name: "Perfect Finish Painters",
  description: "Servicios profesionales de pintura interior y exterior, reparación de drywall y pisos en Mays Landing y el sur de New Jersey.",
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
  sameAs: [
    "https://www.facebook.com/PerfectFinishPainters",
    "https://www.instagram.com/perfectfinishpainter/",
    "https://www.yelp.com/biz/perfect-finish-painters-mays-landing",
    "https://g.page/r/CYlKM00sLEMiEAI",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Pintura",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pintura Interior", provider: { "@id": "https://perfectfinishpainter.com/#business" } } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pintura Exterior", provider: { "@id": "https://perfectfinishpainter.com/#business" } } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reparación de Drywall", provider: { "@id": "https://perfectfinishpainter.com/#business" } } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Instalación de Pisos", provider: { "@id": "https://perfectfinishpainter.com/#business" } } },
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
  inLanguage: "es-US",
};

export default function EsRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="google" content="nositelinkssearchbox" />
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main-content" className="skip-link">Saltar al contenido principal</a>
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
