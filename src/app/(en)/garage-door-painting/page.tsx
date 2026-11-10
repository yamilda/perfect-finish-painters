import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { areaServedCities } from "@/data/service-areas";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Garage Door Painting in Atlantic County NJ | Perfect Finish",
  description:
    "Pro garage door painting in Atlantic County NJ — wood stain or solid color, UV & salt-tolerant. Serving Mays Landing & South Jersey. Free quote: 609-377-4226.",
  openGraph: {
    title: "Garage Door Painting in Atlantic County NJ | Perfect Finish",
    description:
      "Pro garage door painting in Atlantic County NJ — wood stain or solid color, UV & salt-tolerant. Serving Mays Landing & South Jersey. Free quote: 609-377-4226.",
    type: "website",
    locale: "en_US",
    url: "https://perfectfinishpainter.com/garage-door-painting",
    images: [{ url: "/garage-door-painting-wood-stain-before-after-brigantine-nj.webp", width: 1200, height: 900, alt: "Garage door painting wood stain before and after in Brigantine NJ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Door Painting in Atlantic County NJ | Perfect Finish",
    description:
      "Pro garage door painting in Atlantic County NJ — wood stain or solid color, UV & salt-tolerant. Serving Mays Landing & South Jersey. Free quote: 609-377-4226.",
    images: ["/garage-door-painting-wood-stain-before-after-brigantine-nj.webp"],
  },
  alternates: { canonical: "https://perfectfinishpainter.com/garage-door-painting" },
};

export default function GarageDoorPaintingPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://perfectfinishpainter.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://perfectfinishpainter.com/services" },
      { "@type": "ListItem", position: 3, name: "Garage Door Painting", item: "https://perfectfinishpainter.com/garage-door-painting" },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Garage Door Painting",
    description: "Professional garage door painting and wood-grain staining in Atlantic County NJ. Surface prep, priming, and weather-resistant coatings for steel, aluminum, and wood garage doors. Most single doors complete in 1 day.",
    provider: { "@id": "https://perfectfinishpainter.com/#business" },
    areaServed: areaServedCities,
    url: "https://perfectfinishpainter.com/garage-door-painting",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    speakable: {

      "@type": "SpeakableSpecification",

      cssSelector: [".speakable-q", ".speakable-a"],

    },
    mainEntity: [
      { "@type": "Question", name: "How much does garage door painting cost in Atlantic County NJ?", acceptedAnswer: { "@type": "Answer", text: "Most garage door painting in Atlantic County runs $300–$900 for a single door and $600–$1,500 for a double door, depending on material, condition, and finish type. Wood-grain stain finishes cost more than solid colors because of the added labor. Free on-site estimates — call 609-377-4226." } },
      { "@type": "Question", name: "Can you paint a steel or aluminum garage door?", acceptedAnswer: { "@type": "Answer", text: "Yes. Steel and aluminum doors need a different prep than wood — light sanding to create tooth, a bonding primer, and a direct-to-metal exterior paint. Skipping the primer is why most DIY metal door paint jobs peel within a year. We prep them right so the finish holds." } },
      { "@type": "Question", name: "Wood stain vs solid color — which looks better?", acceptedAnswer: { "@type": "Answer", text: "Depends on the door. Faux wood-grain stain looks stunning on flat steel doors with panel details and boosts curb appeal more than any other low-cost upgrade. Solid colors are cleaner and easier to match to your trim and shutters. We'll bring samples so you can see both against your house." } },
      { "@type": "Question", name: "How long does garage door paint last in South Jersey?", acceptedAnswer: { "@type": "Answer", text: "With proper prep and quality exterior paint, a garage door painted in South Jersey typically holds up 7–10 years. Shore homes in Brigantine, Margate, and Somers Point may see fading faster due to salt air and UV, closer to 5–7 years before a refresh is worth it." } },
      { "@type": "Question", name: "How long does the job take?", acceptedAnswer: { "@type": "Answer", text: "Most single-door jobs take one day including prep, priming, and two coats of paint. Double doors or wood-grain stain finishes can take 1–2 days. We do the work on-site without removing the door so you're not left without garage access." } },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="pt-28 sm:pt-36 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-[#64748b]">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/services" className="hover:text-[#2563eb] transition-colors">Services</Link></li>
              <li>/</li>
              <li className="text-[#1e3a5f] font-medium">Garage Door Painting</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-6">
            Garage Door Painting in Mays Landing &amp; Atlantic County, NJ
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-[#64748b] text-lg mb-6 leading-relaxed">
                Nothing changes a house&apos;s curb appeal faster than a freshly painted garage door. It&apos;s the single biggest surface on the front of most homes — and when it&apos;s faded, peeling, or the wrong color, it drags down the whole exterior. A quality repaint or wood-grain stain costs a fraction of replacing the door and lasts 7–10 years.
              </p>
              <p className="text-[#64748b] text-lg mb-8 leading-relaxed">
                We paint and stain steel, aluminum, and wood garage doors across Atlantic County. Single doors typically run <strong className="text-[#1e3a5f]">$300–$900</strong>, double doors <strong className="text-[#1e3a5f]">$600–$1,500</strong>, and most jobs finish in a single day without removing the door.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quiz" className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 shadow-lg">
                  Get Free Estimate
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
                <a href="tel:+16093774226" className="border-2 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2">
                  Call (609) 377-4226
                </a>
              </div>
            </div>
            <ScrollReveal direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image src="/garage-door-painting-wood-stain-before-after-brigantine-nj.webp" alt="Garage door wood-grain stain before and after in Brigantine NJ by Perfect Finish Painters" width={600} height={450} className="w-full h-auto" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">What&apos;s Included in Garage Door Painting?</h2></ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "On-site inspection and color consultation",
              "Washing & degreasing the door surface",
              "Light sanding for adhesion",
              "Bonding primer for steel & aluminum",
              "Solid color or faux wood-grain stain",
              "Two finish coats for depth & durability",
              "Trim, frame, and jamb painting",
              "Free color samples before we start",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-[#e2e8f0]">
                <svg className="w-5 h-5 text-[#2563eb] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[#374151]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">Solid Color or Wood-Grain Stain &mdash; Which Is Right for You?</h2></ScrollReveal>
          <p className="text-[#64748b] text-lg leading-relaxed mb-4">
            Solid colors are simple, clean, and easy to match to your trim and shutters. They&apos;re usually the right call if your house already has strong color accents or you&apos;re painting to sell.
          </p>
          <p className="text-[#64748b] text-lg leading-relaxed mb-4">
            Faux wood-grain stain is where we get the most <em>wow</em> reactions. On a flat steel door with panel details, a properly applied wood-grain gel stain makes the door look like solid mahogany or cedar from the street. It costs more than solid paint because of the layered application, but for colonial, craftsman, and coastal-style homes it&apos;s the single best curb appeal upgrade under $1,500.
          </p>
          <p className="text-[#64748b] text-lg leading-relaxed">
            Pair garage door work with <Link href="/exterior-painting" className="text-[#2563eb] hover:underline">full exterior painting</Link>, <Link href="/deck-staining" className="text-[#2563eb] hover:underline">deck staining</Link>, or <Link href="/shed-restoration" className="text-[#2563eb] hover:underline">shed restoration</Link> for a complete outdoor refresh in one trip.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">Where Do We Offer Garage Door Painting in Atlantic County?</h2></ScrollReveal>
          <p className="text-[#64748b] text-lg leading-relaxed">
            We paint and stain garage doors in <Link href="/painters-brigantine-nj" className="text-[#2563eb] hover:underline">Brigantine</Link>, <Link href="/painters-margate-nj" className="text-[#2563eb] hover:underline">Margate</Link>, <Link href="/painters-somers-point-nj" className="text-[#2563eb] hover:underline">Somers Point</Link>, <Link href="/painters-mays-landing-nj" className="text-[#2563eb] hover:underline">Mays Landing</Link>, <Link href="/painters-egg-harbor-township-nj" className="text-[#2563eb] hover:underline">Egg Harbor Township</Link>, and throughout Atlantic County. Shore-town doors need salt-tolerant coatings; inland doors take more UV abuse. We spec the finish to match the location.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1e3a5f]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Curb Appeal?</h2>
          <p className="text-white/70 text-lg mb-8">Free on-site estimate. Color samples brought to your door.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quiz" className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 shadow-lg">
              Start 60-Second Quiz
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
            <a href="tel:+16093774226" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2">
              Call (609) 377-4226
            </a>
          </div>
        </div>
      </section>

      <FAQSection items={faqJsonLd.mainEntity} />

      <Footer />
      <FloatingCTA />
    </div>
  );
}
