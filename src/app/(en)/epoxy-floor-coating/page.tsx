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
  title: "Epoxy Floor Coating in Atlantic County NJ | Perfect Finish",
  description:
    "Pro epoxy floor coating in Atlantic County NJ — garage floors, basements, workshops. Durable, stain-resistant finish. Free quote — 609-377-4226.",
  openGraph: {
    title: "Epoxy Floor Coating in Atlantic County NJ | Perfect Finish",
    description:
      "Pro epoxy floor coating in Atlantic County NJ — garage floors, basements, workshops. Durable, stain-resistant finish. Free quote — 609-377-4226.",
    type: "website",
    locale: "en_US",
    url: "https://perfectfinishpainter.com/epoxy-floor-coating",
    images: [{ url: "/basement-floor-epoxy-coating-before-after-galloway-nj.webp", width: 1200, height: 900, alt: "Basement floor epoxy coating before and after in Galloway NJ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Epoxy Floor Coating in Atlantic County NJ | Perfect Finish",
    description:
      "Pro epoxy floor coating in Atlantic County NJ — garage floors, basements, workshops. Durable, stain-resistant finish. Free quote — 609-377-4226.",
    images: ["/basement-floor-epoxy-coating-before-after-galloway-nj.webp"],
  },
  alternates: { canonical: "https://perfectfinishpainter.com/epoxy-floor-coating" },
};

export default function EpoxyFloorCoatingPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://perfectfinishpainter.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://perfectfinishpainter.com/services" },
      { "@type": "ListItem", position: 3, name: "Epoxy Floor Coating", item: "https://perfectfinishpainter.com/epoxy-floor-coating" },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Epoxy Floor Coating",
    description: "Professional epoxy and polyaspartic floor coating in Atlantic County NJ. Surface grinding, crack repair, primer, base color coat, decorative flake or metallic options, and UV-resistant topcoat. Installed in garages, basements, workshops, and commercial spaces.",
    provider: { "@id": "https://perfectfinishpainter.com/#business" },
    areaServed: areaServedCities,
    url: "https://perfectfinishpainter.com/epoxy-floor-coating",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    speakable: {

      "@type": "SpeakableSpecification",

      cssSelector: [".speakable-q", ".speakable-a"],

    },
    mainEntity: [
      { "@type": "Question", name: "How much does epoxy floor coating cost in Atlantic County NJ?", acceptedAnswer: { "@type": "Answer", text: "Most epoxy floor coatings in Atlantic County run $5–$12 per square foot installed, depending on surface prep, system type, and decorative options. A typical 2-car garage (400–500 sq ft) runs $2,000–$4,500. Concrete crack or spall repair adds to the cost. Free on-site estimates — call 609-377-4226." } },
      { "@type": "Question", name: "How long does an epoxy floor last?", acceptedAnswer: { "@type": "Answer", text: "A properly prepped and installed epoxy system holds up 10–20 years in residential garages and basements. The #1 reason epoxy fails early is poor surface prep — skipping grinding or applying over sealed concrete. We diamond-grind every floor before coating, which is what separates a 20-year job from a 2-year job." } },
      { "@type": "Question", name: "Can you coat my basement floor?", acceptedAnswer: { "@type": "Answer", text: "Yes, as long as moisture levels are acceptable. We test basement slabs for moisture before quoting — high-moisture slabs need a moisture-mitigating primer or a different coating system entirely. If your basement leaks or gets standing water, we'll tell you honestly whether epoxy is the right call or not." } },
      { "@type": "Question", name: "DIY epoxy kit vs professional install — what's the difference?", acceptedAnswer: { "@type": "Answer", text: "Big-box DIY kits use water-based epoxy with 40–50% solids and a paint roller. Professional systems use 100%-solids epoxy or polyaspartic with diamond-ground prep and squeegee-plus-backroll application. DIY kits typically fail within 2–5 years, especially under hot tires. Pro systems are built to last decades." } },
      { "@type": "Question", name: "How long until I can use the floor after coating?", acceptedAnswer: { "@type": "Answer", text: "Foot traffic typically 24 hours after the final coat, light vehicle traffic 3 days, full service (hot tires, heavy tools) 7 days. Polyaspartic topcoats cure faster and can be ready for vehicles in 24 hours — we'll recommend the right system based on how fast you need to get back to using the space." } },
      { "@type": "Question", name: "What decorative options are available?", acceptedAnswer: { "@type": "Answer", text: "Solid color, decorative color flakes (the garage-floor look most people recognize), metallic epoxy (swirling depth effect for showrooms and man caves), and quartz broadcast for commercial or industrial spaces. We bring samples so you can see colors and textures in your actual lighting before committing." } },
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
              <li className="text-[#1e3a5f] font-medium">Epoxy Floor Coating</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-6">
            Epoxy Floor Coating in Mays Landing &amp; Atlantic County, NJ
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-[#64748b] text-lg mb-6 leading-relaxed">
                An epoxy floor transforms a dusty concrete slab into a showroom. Garage, basement, workshop, commercial — a properly installed epoxy system shrugs off oil, chemicals, hot tires, and foot traffic for 10–20 years. The catch is surface prep. Big-box DIY kits skip the grinding and peel within 2 years. We don&apos;t.
              </p>
              <p className="text-[#64748b] text-lg mb-8 leading-relaxed">
                We diamond-grind every floor, repair cracks and spalls, and install 100%-solids epoxy or polyaspartic systems with decorative flake, metallic, or solid-color finishes. Typical 2-car garages in the Mays Landing area run <strong className="text-[#1e3a5f]">$2,000–$4,500</strong>.
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
                <Image src="/basement-floor-epoxy-coating-before-after-galloway-nj.webp" alt="Basement floor epoxy coating before and after in Galloway NJ by Perfect Finish Painters" width={600} height={450} className="w-full h-auto" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">What&apos;s Included in Epoxy Floor Coating?</h2></ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "On-site inspection & moisture test",
              "Diamond grinding to open concrete pores",
              "Crack & spall repair with structural filler",
              "Penetrating epoxy primer",
              "100%-solids epoxy or polyaspartic base coat",
              "Decorative flake, metallic, or solid color",
              "UV-resistant urethane or polyaspartic topcoat",
              "Dust containment during grinding",
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
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">Where Do Epoxy Floors Make Sense?</h2></ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#f1f5f9] rounded-xl p-6">
              <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">Garage Floors</h3>
              <p className="text-[#64748b]">Handles hot tires, oil, antifreeze, and seasonal salt. Flake coatings hide tire marks and debris. Most common residential install.</p>
            </div>
            <div className="bg-[#f1f5f9] rounded-xl p-6">
              <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">Basements</h3>
              <p className="text-[#64748b]">Turns a damp, dusty slab into a finished living space. Moisture test required — high-moisture slabs need a specialty system.</p>
            </div>
            <div className="bg-[#f1f5f9] rounded-xl p-6">
              <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">Workshops & Hobby Spaces</h3>
              <p className="text-[#64748b]">Easy to sweep, chemical-resistant, bright under shop lights. Solid colors hide wear; flake hides everything.</p>
            </div>
            <div className="bg-[#f1f5f9] rounded-xl p-6">
              <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">Commercial & Retail</h3>
              <p className="text-[#64748b]">Metallic and quartz systems for showrooms, office floors, and customer-facing spaces. Pair with <Link href="/commercial-painting" className="text-[#2563eb] hover:underline">commercial painting</Link> for full interior refresh.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">Where Do We Offer Epoxy Floor Coating in Atlantic County?</h2></ScrollReveal>
          <p className="text-[#64748b] text-lg leading-relaxed">
            We install epoxy floors in <Link href="/painters-mays-landing-nj" className="text-[#2563eb] hover:underline">Mays Landing</Link>, <Link href="/painters-egg-harbor-township-nj" className="text-[#2563eb] hover:underline">Egg Harbor Township</Link>, <Link href="/painters-galloway-nj" className="text-[#2563eb] hover:underline">Galloway</Link>, <Link href="/painters-northfield-nj" className="text-[#2563eb] hover:underline">Northfield</Link>, <Link href="/painters-hammonton-nj" className="text-[#2563eb] hover:underline">Hammonton</Link>, and across Atlantic County. Shore-area basements get moisture-tested first — salt air and high water tables mean prep matters even more than the coating itself.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1e3a5f]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Upgrade Your Floor?</h2>
          <p className="text-white/70 text-lg mb-8">Free on-site estimate. Moisture test included.</p>
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
