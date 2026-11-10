import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { serviceAreas } from "@/data/service-areas";

interface CityPageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return serviceAreas.map((area) => ({
    city: area.slug,
  }));
}

const spanishAlternates: Record<string, string> = {
  "painters-pleasantville-nj": "/pintores-pleasantville-nj",
  "painters-atlantic-city-nj": "/pintores-atlantic-city-nj-es",
  "painters-vineland-nj": "/pintores-vineland-nj",
};

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city } = await params;
  const area = serviceAreas.find((a) => a.slug === city);
  if (!area) return {};

  const spanishPage = spanishAlternates[area.slug];

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    keywords: `painters in ${area.name} NJ, ${area.name} painting company, house painters ${area.name}, interior painting ${area.name} NJ, exterior painting ${area.name} NJ, drywall repair ${area.name}`,
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      type: "website",
      locale: "en_US",
      url: `https://perfectfinishpainter.com/${area.slug}`,
      images: [
        {
          url: "https://perfectfinishpainter.com/og-card.jpg",
          width: 1200,
          height: 630,
          alt: "Perfect Finish Painters — interior, exterior & drywall in Mays Landing, NJ",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: area.metaTitle,
      description: area.metaDescription,
      images: ["https://perfectfinishpainter.com/og-card.jpg"],
    },
    alternates: {
      canonical: `https://perfectfinishpainter.com/${area.slug}`,
      ...(spanishPage && {
        languages: {
          en: `/${area.slug}`,
          es: spanishPage,
        },
      }),
    },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { city } = await params;
  const area = serviceAreas.find((a) => a.slug === city);
  if (!area) notFound();

  // City-specific Service with geo-aware areaServed. Merges by @id with the HousePainter
  // in the root layout — avoids duplicate LocalBusiness entities on the same page.
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Painting Services in ${area.name}, NJ`,
    description: area.description,
    url: `https://perfectfinishpainter.com/${area.slug}`,
    serviceType: "House Painting",
    provider: { "@id": "https://perfectfinishpainter.com/#business" },
    areaServed: {
      "@type": "City",
      name: area.name,
      geo: {
        "@type": "GeoCoordinates",
        latitude: area.latitude,
        longitude: area.longitude,
      },
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: `${area.state}, USA`,
      },
    },
    // Image schema only when a real project block renders on the page (no unbacked image claims).
    ...(area.project && {
      image: area.project.images.map((im) => `https://perfectfinishpainter.com${im.src}`),
    }),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://perfectfinishpainter.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `Painters in ${area.name} NJ`,
        item: `https://perfectfinishpainter.com/${area.slug}`,
      },
    ],
  };

  // FAQPage schema — every Q&A in here must match what visibly renders below.
  const faqJsonLd = area.localFaqs && area.localFaqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: area.localFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;

  const otherAreas = serviceAreas.filter((a) => a.slug !== area.slug);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* Breadcrumb */}
      <div className="pt-28 sm:pt-36 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-[#64748b]">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-[#2563eb] transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-[#1e3a5f] font-medium">
                Painters in {area.name} NJ
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-6">
            Professional Painters in {area.name}, NJ
          </h1>
          <p className="text-[#64748b] text-lg mb-8 leading-relaxed">
            {area.content.intro}
          </p>
          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">Do You Offer Interior Painting in {area.name}?</h2>
          <p className="text-[#64748b] mb-4">
            Whether you need a single room refreshed or a full interior repaint, our team handles <Link href="/interior-painting" className="text-[#2563eb] hover:underline">interior painting</Link> projects of all sizes in {area.name}. We also offer <Link href="/drywall-repair" className="text-[#2563eb] hover:underline">drywall repair</Link> to fix any wall damage before painting begins.
          </p>
          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">How Do You Handle Exterior Painting in {area.name}?</h2>
          <p className="text-[#64748b] mb-4">
            South Jersey weather takes a toll on exterior paint. Our <Link href="/exterior-painting" className="text-[#2563eb] hover:underline">exterior painting</Link> service uses premium, weather-resistant products that protect your {area.name} home against humidity, UV, and coastal conditions. We also offer <Link href="/shed-restoration" className="text-[#2563eb] hover:underline">shed restoration &amp; painting</Link>.
          </p>
          <p className="text-[#64748b] text-lg mb-8 leading-relaxed">
            {area.content.body}
          </p>
          <p className="text-[#64748b] text-lg mb-10 leading-relaxed">
            {area.content.closing}
          </p>

          {/* Recent local project — real proof, unique caption per page */}
          {area.project && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">{area.project.title}</h2>
              <p className="text-[#64748b] mb-6 leading-relaxed">{area.project.caption}</p>
              <figure>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {area.project.images.map((im) => (
                    <Image
                      key={im.src}
                      src={im.src}
                      alt={im.alt}
                      width={1536}
                      height={2048}
                      className="rounded-xl w-full h-auto"
                      sizes="(max-width:640px) 50vw, 360px"
                      loading="lazy"
                    />
                  ))}
                </div>
                <figcaption className="text-[#64748b] text-sm mt-3 italic">
                  Before and after — a real Perfect Finish Painters project in {area.name}, NJ.
                </figcaption>
              </figure>
            </div>
          )}

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/quiz"
              className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 shadow-lg shadow-black/25"
            >
              Get Free Estimate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="tel:+16093774226"
              className="border-2 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (609) 377-4226
            </a>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a5f] mb-8">
            What Painting Services Are Available in {area.name}, NJ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Interior Painting", desc: "Walls, ceilings, trim, and accent walls in any room.", href: "/interior-painting" },
              { title: "Exterior Painting", desc: "Siding, shutters, doors, and trim to boost curb appeal.", href: "/exterior-painting" },
              { title: "Drywall Repair", desc: "Patch holes, fix cracks, and restore smooth surfaces.", href: "/drywall-repair" },
              { title: "Flooring Installation", desc: "Professional flooring to complete your renovation.", href: "/flooring" },
              { title: "Deck Staining", desc: "Clean, sand, stain, and seal your deck for South Jersey weather.", href: "/deck-staining" },
              { title: "Fence Staining", desc: "Stain and seal wood fences to hold up against coastal weather.", href: "/fence-staining" },
              { title: "Garage Door Painting", desc: "Solid color or wood-grain stain finishes for instant curb appeal.", href: "/garage-door-painting" },
              { title: "Epoxy Floor Coating", desc: "Diamond-ground, 100%-solids epoxy for garages and basements.", href: "/epoxy-floor-coating" },
              { title: "Govee Permanent Lighting", desc: "Year-round roofline lighting, installed straight and sealed by painters.", href: "/govee-permanent-lighting" },
              { title: "Shed Restoration", desc: "Bring your shed back to life with repair and painting.", href: "/shed-restoration" },
              { title: "Commercial Painting", desc: "Office, retail, and commercial property painting.", href: "/services" },
            ].map((service) => (
              <Link key={service.title} href={service.href} className="bg-white rounded-xl p-5 shadow-sm border border-[#e2e8f0] hover:border-[#2563eb] transition-colors block">
                <h3 className="text-[#1e3a5f] font-semibold mb-1">{service.title}</h3>
                <p className="text-[#64748b] text-sm">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a5f] mb-8">
            Why Do {area.name} Homeowners Choose Perfect Finish Painters?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-[#2563eb] mb-2">100+</div>
              <p className="text-[#64748b]">Projects Completed in South Jersey</p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-[#2563eb] mb-2">5-Star</div>
              <p className="text-[#64748b]">Rating Across All Reviews</p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-[#2563eb] mb-2">24hr</div>
              <p className="text-[#64748b]">Estimate Response Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local FAQs */}
      {area.localFaqs && area.localFaqs.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a5f] mb-8">
              {area.name} Painting Questions, Answered
            </h2>
            <div className="space-y-6">
              {area.localFaqs.map((faq, i) => (
                <div key={i} className="border-l-4 border-[#2563eb] pl-5">
                  <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">{faq.question}</h3>
                  <p className="text-[#64748b] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Service Areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a5f] mb-6">
            We Also Serve These South Jersey Communities
          </h2>
          <div className="flex flex-wrap gap-3">
            {otherAreas.map((other) => (
              <Link
                key={other.slug}
                href={`/${other.slug}`}
                className="bg-white text-[#1e3a5f] px-4 py-2 rounded-full text-sm font-medium border border-[#e2e8f0] hover:border-[#2563eb] hover:text-[#2563eb] transition-colors"
              >
                {other.name}, NJ
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
