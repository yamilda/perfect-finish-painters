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
  title: "Drywall Repair in Atlantic County NJ | Perfect Finish",
  description:
    "Drywall repair in Atlantic County NJ — holes, cracks, water damage, texture matching, skim coating. Same-day service. Free estimate — 609-377-4226.",
  openGraph: {
    title: "Drywall Repair in Atlantic County NJ | Perfect Finish",
    description: "Drywall repair in Atlantic County NJ — holes, cracks, water damage, texture matching, skim coating. Same-day service. Free estimate — 609-377-4226.",
    type: "website",
    locale: "en_US",
    url: "https://perfectfinishpainter.com/drywall-repair",
    images: [{ url: "/og-card.jpg", width: 1200, height: 630, alt: "Perfect Finish Painters — interior, exterior & drywall in Mays Landing, NJ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drywall Repair in Atlantic County NJ | Perfect Finish",
    description: "Drywall repair in Atlantic County NJ — holes, cracks, water damage, texture matching, skim coating. Same-day service. Free estimate — 609-377-4226.",
    images: ["/og-card.jpg"],
  },
  alternates: { canonical: "https://perfectfinishpainter.com/drywall-repair" },
};

export default function DrywallRepairPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://perfectfinishpainter.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://perfectfinishpainter.com/services" },
      { "@type": "ListItem", position: 3, name: "Drywall Repair", item: "https://perfectfinishpainter.com/drywall-repair" },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Drywall Repair",
    description: "Professional drywall repair including hole patching, crack repair, water damage restoration, and texture matching. Smooth, seamless finish ready for paint throughout South Jersey.",
    provider: { "@id": "https://perfectfinishpainter.com/#business" },
    areaServed: areaServedCities,
    url: "https://perfectfinishpainter.com/drywall-repair",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    speakable: {

      "@type": "SpeakableSpecification",

      cssSelector: [".speakable-q", ".speakable-a"],

    },
    mainEntity: [
      { "@type": "Question", name: "How much does drywall repair cost in Atlantic County NJ?", acceptedAnswer: { "@type": "Answer", text: "Small repairs start at $150. Larger repairs involving water damage or multiple rooms are quoted after a free assessment. Call 609-377-4226 for a free estimate." } },
      { "@type": "Question", name: "Can you repair water-damaged drywall in South Jersey?", acceptedAnswer: { "@type": "Answer", text: "Yes. We handle water damage restoration including removing damaged sections, treating for mold, installing new drywall, and matching existing texture." } },
      { "@type": "Question", name: "Do you match existing drywall texture?", acceptedAnswer: { "@type": "Answer", text: "Yes. We match orange peel, knockdown, smooth, and other textures so repairs are invisible once painted." } },
      { "@type": "Question", name: "How long does drywall repair take?", acceptedAnswer: { "@type": "Answer", text: "Small repairs are often completed same day. Larger water damage repairs typically take 2-3 days including drying time between coats." } },
      { "@type": "Question", name: "Do you serve Egg Harbor Township and Galloway for drywall repair?", acceptedAnswer: { "@type": "Answer", text: "Yes. We handle drywall repair throughout Atlantic County including Mays Landing, EHT, Galloway, Northfield, Linwood, Somers Point, and all surrounding areas." } },
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
              <li className="text-[#1e3a5f] font-medium">Drywall Repair</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-6">Drywall Repair in Mays Landing &amp; Atlantic County, NJ</h1>
              <p className="text-[#64748b] text-lg mb-6 leading-relaxed">
                From small nail holes to large patches, Perfect Finish Painters restores your walls to a smooth, paint-ready finish. We handle cracks, water damage, texture matching, and everything in between — often combined with interior painting for a seamless result. We serve drywall repair customers throughout Atlantic County — Mays Landing, Egg Harbor Township, Galloway, Northfield, Linwood, Somers Point, and all surrounding areas.
              </p>
              <p className="text-[#64748b] text-lg mb-8 leading-relaxed">
                Small repairs start at <strong className="text-[#1e3a5f]">$150</strong> and same-day service is available for minor jobs. Larger repairs involving water damage or multiple rooms are quoted after a free assessment.
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
                <Image src="/drywall-ceiling-repair-before-after-mays-landing-nj.webp" alt="Drywall repair project by Perfect Finish Painters in South Jersey" width={600} height={450} className="w-full h-auto" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Detailed Service Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-12 mb-4">What Types of Drywall Repair Do You Handle?</h2>
          <h3 className="text-xl font-semibold text-[#1e3a5f] mt-8 mb-3">Small Holes &amp; Nail Pops</h3>
          <p className="text-[#64748b] mb-4">Nail pops and small holes are the most common drywall issues in Atlantic County homes, especially in older construction. We fill, sand, and blend them so they disappear completely — no visible patches.</p>
          <h3 className="text-xl font-semibold text-[#1e3a5f] mt-8 mb-3">Large Hole &amp; Panel Replacement</h3>
          <p className="text-[#64748b] mb-4">Door handle holes, plumbing access cuts, and accidental damage all leave gaps that need proper patching. We cut clean, install new drywall, tape the seams, and finish to a smooth surface that&apos;s ready for paint.</p>
          <h3 className="text-xl font-semibold text-[#1e3a5f] mt-8 mb-3">Water Damage Drywall Restoration</h3>
          <p className="text-[#64748b] mb-4">Leaky roofs, burst pipes, and bathroom moisture cause staining, bubbling, and soft spots in drywall. We remove the damaged sections, treat for mold if needed, install new drywall, and finish with paint. This is common in South Jersey coastal homes where humidity runs high.</p>
          <h3 className="text-xl font-semibold text-[#1e3a5f] mt-8 mb-3">Texture Matching — Orange Peel, Knockdown &amp; Smooth</h3>
          <p className="text-[#64748b] mb-4">The hardest part of drywall repair is making the fix invisible. We match your existing texture — whether it&apos;s orange peel, knockdown, skip trowel, or smooth — so repaired areas blend seamlessly with the surrounding wall.</p>
          <h3 className="text-xl font-semibold text-[#1e3a5f] mt-8 mb-3">Ceiling Skim Coating &amp; Crack Repair</h3>
          <p className="text-[#64748b] mb-4">Ceiling cracks and uneven surfaces are common in aging South Jersey homes. We skim coat ceilings to a smooth finish and repair hairline cracks caused by settling. We also handle popcorn ceiling removal — see our <Link href="/popcorn-ceiling-removal" className="text-[#2563eb] hover:underline">popcorn ceiling removal page</Link> for details.</p>
          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-12 mb-4">How Much Does Drywall Repair Cost in Atlantic County, NJ?</h2>
          <p className="text-[#64748b] mb-4">Small repairs like nail pops and minor holes start around $150. Larger patches, water damage, and texture matching are quoted on-site based on the scope of work. We offer same-day service for small repairs in most of Atlantic County. Take our free estimate quiz or call <a href="tel:+16093774226" className="text-[#2563eb] hover:underline">609-377-4226</a>.</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">What Do We Repair?</h2></ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Small nail holes and screw pops",
              "Large holes and patch repairs",
              "Crack repair and joint compound finishing",
              "Water damage restoration",
              "Texture matching (smooth, orange peel, knockdown)",
              "Ceiling repairs and skim coating",
              "Seamless finish ready for paint",
              "Same-day repairs for small jobs",
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

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">Where Do We Offer Drywall Repair in Atlantic County?</h2></ScrollReveal>
          <p className="text-[#64748b] text-lg leading-relaxed">
            Water damage, impact holes, hairline cracks — we fix it across Atlantic County. Common calls come from <Link href="/painters-mays-landing-nj" className="text-[#2563eb] hover:underline">Mays Landing</Link>, <Link href="/painters-egg-harbor-township-nj" className="text-[#2563eb] hover:underline">Egg Harbor Township</Link>, and <Link href="/painters-galloway-nj" className="text-[#2563eb] hover:underline">Galloway</Link> older homes with settling cracks, and <Link href="/painters-somers-point-nj" className="text-[#2563eb] hover:underline">Somers Point</Link>, <Link href="/painters-absecon-nj" className="text-[#2563eb] hover:underline">Absecon</Link>, and <Link href="/painters-linwood-nj" className="text-[#2563eb] hover:underline">Linwood</Link> shore homes dealing with humidity-related tape failures. Texture matching included — the repair blends in, it doesn&apos;t patch out.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1e3a5f]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Drywall Fixed?</h2>
          <p className="text-white/70 text-lg mb-8">Get a free estimate — most small repairs done same day.</p>
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
