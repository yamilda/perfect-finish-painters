import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollReveal from "@/components/ScrollReveal";
import ServicesSection from "@/components/ServicesSection";
import SherwinWilliamsBanner from "@/components/SherwinWilliamsBanner";
import FAQSection from "@/components/FAQSection";
import { serviceAreas } from "@/data/service-areas";

export const metadata: Metadata = {
  title: "Painting Services in Atlantic County NJ | Perfect Finish",
  description: "Interior & exterior painting with Sherwin-Williams Duration & Emerald paint. Drywall repair, flooring, cabinet painting & more across Atlantic County NJ.",
  openGraph: {
    title: "Painting Services in Atlantic County NJ | Perfect Finish",
    description: "Interior & exterior painting with Sherwin-Williams Duration & Emerald paint. Drywall repair, flooring, cabinet painting & more across Atlantic County NJ.",
    type: "website",
    locale: "en_US",
    url: "https://perfectfinishpainter.com/services",
    images: [{ url: "/og-card.jpg", width: 1200, height: 630, alt: "Perfect Finish Painters — interior, exterior & drywall in Mays Landing, NJ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Painting Services in Atlantic County NJ | Perfect Finish",
    description: "Interior & exterior painting with Sherwin-Williams Duration & Emerald paint. Drywall repair, flooring, cabinet painting & more across Atlantic County NJ.",
    images: ["/og-card.jpg"],
  },
  alternates: {
    canonical: "https://perfectfinishpainter.com/services",
  },
};

export default function ServicesPage() {
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
        name: "Services",
        item: "https://perfectfinishpainter.com/services",
      },
    ],
  };

  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Painting Services by Perfect Finish Painters",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Interior Painting", url: "https://perfectfinishpainter.com/interior-painting" },
      { "@type": "ListItem", position: 2, name: "Exterior Painting", url: "https://perfectfinishpainter.com/exterior-painting" },
      { "@type": "ListItem", position: 3, name: "Drywall Repair", url: "https://perfectfinishpainter.com/drywall-repair" },
      { "@type": "ListItem", position: 4, name: "Flooring Installation", url: "https://perfectfinishpainter.com/flooring" },
      { "@type": "ListItem", position: 5, name: "Shed Restoration & Painting", url: "https://perfectfinishpainter.com/shed-restoration" },
      { "@type": "ListItem", position: 6, name: "Ceiling Painting", url: "https://perfectfinishpainter.com/ceiling-painting" },
      { "@type": "ListItem", position: 7, name: "Cabinet Painting", url: "https://perfectfinishpainter.com/cabinet-painting" },
      { "@type": "ListItem", position: 8, name: "Popcorn Ceiling Removal", url: "https://perfectfinishpainter.com/popcorn-ceiling-removal" },
      { "@type": "ListItem", position: 9, name: "Wallpaper Removal", url: "https://perfectfinishpainter.com/wallpaper-removal" },
      { "@type": "ListItem", position: 10, name: "Commercial Painting", url: "https://perfectfinishpainter.com/commercial-painting" },
      { "@type": "ListItem", position: 11, name: "Deck Staining", url: "https://perfectfinishpainter.com/deck-staining" },
      { "@type": "ListItem", position: 12, name: "Fence Staining", url: "https://perfectfinishpainter.com/fence-staining" },
      { "@type": "ListItem", position: 13, name: "Garage Door Painting", url: "https://perfectfinishpainter.com/garage-door-painting" },
      { "@type": "ListItem", position: 14, name: "Epoxy Floor Coating", url: "https://perfectfinishpainter.com/epoxy-floor-coating" },
      { "@type": "ListItem", position: 15, name: "Govee Permanent Outdoor Lighting", url: "https://perfectfinishpainter.com/govee-permanent-lighting" },
      { "@type": "ListItem", position: 16, name: "Garage Makeovers", url: "https://perfectfinishpainter.com/garage-makeovers" },
    ],
  };

  const paintFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What paint brands does Perfect Finish Painters use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We exclusively use Sherwin-Williams premium paint lines including Duration Exterior with PermaLast® technology, Emerald Interior paint & primer in one, Duration Home for high-traffic areas, and Emerald Urethane Trim Enamel for doors, windows, and trim. All are under 50 g/L VOC.",
        },
      },
      {
        "@type": "Question",
        name: "What is Sherwin-Williams Duration paint?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sherwin-Williams Duration Exterior is formulated with PermaLast® acrylic co-polymer technology that delivers 70% higher film build than other top-line exterior paints. It won't peel or blister, offers true one-coat coverage on repaints, has less than 50 g/L VOC, and is available in matte, satin, and semi-gloss finishes. Ideal for South Jersey's coastal climate.",
        },
      },
      {
        "@type": "Question",
        name: "What is Sherwin-Williams Emerald paint?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sherwin-Williams Emerald Interior is a paint and primer in one with advanced stain-blocking technology, anti-microbial agents that inhibit mold and mildew growth, and exceptional washability in all finishes. It delivers one-coat coverage with less than 50 g/L VOC and is available in flat, matte, eg-shel, satin, and semi-gloss finishes. It resists yellowing over time and water streaking.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(paintFaqJsonLd) }}
      />

      {/* Hero */}
      <section className="pt-36 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-4">
              Painting Services in South Jersey
            </h1>
            <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
              From interior walls to exterior siding, Perfect Finish Painters handles all your painting and home improvement needs in Mays Landing and throughout Atlantic County.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Sherwin-Williams Designer Paint Banner */}
      <ScrollReveal>
        <SherwinWilliamsBanner />
      </ScrollReveal>

      {/* Full Services Section */}
      <ServicesSection />

      {/* Detailed Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">
              What to Expect from Perfect Finish Painters
            </h2>
            <p className="text-[#64748b] text-lg mb-6 leading-relaxed">
              For interior painting, most rooms in the Mays Landing area cost between $500 and $1,000 depending on room size, wall condition, and paint quality. A single room typically takes one day to complete, while a full interior takes 3 to 5 days. We use premium paints from trusted brands and always include proper surface preparation — filling holes, sanding, taping, and priming — before applying paint.
            </p>
            <p className="text-[#64748b] text-lg mb-6 leading-relaxed">
              For exterior painting in South Jersey, we recommend 100% acrylic latex paints with UV and mildew resistance to stand up to the coastal humidity, salt air, and seasonal weather changes common in the Atlantic County area. We power wash surfaces, scrape and sand loose paint, apply primer to bare wood, and caulk gaps before painting. Exterior projects are quoted after a free on-site or photo-based assessment.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-[#1e3a5f] text-center mb-4">
              How Does It Work?
            </h2>
            <p className="text-[#64748b] text-center mb-12 max-w-2xl mx-auto">
              Getting your project started is simple. Just three easy steps.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2563eb] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg shadow-blue-500/25">
                  1
                </div>
                <h3 className="text-[#1e3a5f] font-semibold text-xl mb-3">Take the Quiz</h3>
                <p className="text-[#64748b]">
                  Answer a few quick questions about your project — room size, paint type, timeline, and more.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2563eb] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg shadow-blue-500/25">
                  2
                </div>
                <h3 className="text-[#1e3a5f] font-semibold text-xl mb-3">Get Your Estimate</h3>
                <p className="text-[#64748b]">
                  Receive a personalized estimate within 24 hours. No obligation, no pressure.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2563eb] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg shadow-blue-500/25">
                  3
                </div>
                <h3 className="text-[#1e3a5f] font-semibold text-xl mb-3">Schedule &amp; Relax</h3>
                <p className="text-[#64748b]">
                  If you love the estimate, we schedule your project and handle everything from there.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ScrollReveal>
        <FAQSection items={paintFaqJsonLd.mainEntity} description="Got questions? We've got answers." />
      </ScrollReveal>

      {/* Service Areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">Which Areas Do We Serve?</h2>
          <div className="flex flex-wrap gap-3">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/${area.slug}`}
                className="bg-[#f1f5f9] text-[#1e3a5f] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#2563eb] hover:text-white transition-colors"
              >
                {area.name}, NJ
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
