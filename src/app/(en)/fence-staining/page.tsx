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
  title: "Fence Staining in Atlantic County NJ | Perfect Finish",
  description:
    "Professional fence staining & sealing across Atlantic County NJ — wood prep, premium stain, weather-resistant finish. Free quote — 609-377-4226.",
  openGraph: {
    title: "Fence Staining in Atlantic County NJ | Perfect Finish",
    description:
      "Professional fence staining & sealing across Atlantic County NJ — wood prep, premium stain, weather-resistant finish. Free quote — 609-377-4226.",
    type: "website",
    locale: "en_US",
    url: "https://perfectfinishpainter.com/fence-staining",
    images: [{ url: "/og-card.jpg", width: 1200, height: 630, alt: "Perfect Finish Painters — interior, exterior & drywall in Mays Landing, NJ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fence Staining in Atlantic County NJ | Perfect Finish",
    description:
      "Professional fence staining & sealing across Atlantic County NJ — wood prep, premium stain, weather-resistant finish. Free quote — 609-377-4226.",
    images: ["/og-card.jpg"],
  },
  alternates: { canonical: "https://perfectfinishpainter.com/fence-staining" },
};

export default function FenceStainingPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://perfectfinishpainter.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://perfectfinishpainter.com/services" },
      { "@type": "ListItem", position: 3, name: "Fence Staining", item: "https://perfectfinishpainter.com/fence-staining" },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Fence Staining",
    description: "Professional fence staining, sealing, and painting in Atlantic County NJ. Pressure washing, prep, premium stain in semi-transparent or solid, and UV/water-resistant sealer. Serves cedar, pressure-treated, and picket fences.",
    provider: { "@id": "https://perfectfinishpainter.com/#business" },
    areaServed: areaServedCities,
    url: "https://perfectfinishpainter.com/fence-staining",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    speakable: {

      "@type": "SpeakableSpecification",

      cssSelector: [".speakable-q", ".speakable-a"],

    },
    mainEntity: [
      { "@type": "Question", name: "How much does fence staining cost in Atlantic County NJ?", acceptedAnswer: { "@type": "Answer", text: "Fence staining in Atlantic County runs roughly $3–$8 per linear foot depending on fence height, condition, and whether old finish needs stripping. A typical 100-foot privacy fence runs $600–$1,500. We always provide a free measured estimate before starting — call 609-377-4226." } },
      { "@type": "Question", name: "How long does fence stain last in South Jersey?", acceptedAnswer: { "@type": "Answer", text: "Semi-transparent stains on South Jersey fences typically last 2–4 years, solid stains 4–7 years. Fences facing south take more sun and fade faster. Shore-area fences exposed to salt air need restaining sooner than inland fences. We use penetrating stains designed for the coastal climate." } },
      { "@type": "Question", name: "Stain or paint my fence?", acceptedAnswer: { "@type": "Answer", text: "Stain almost every time. Paint peels on fences because wood expands and contracts with humidity, and each panel has end-grain exposed to rain. Stain soaks in and fades rather than peels — it ages gracefully instead of looking chipped. We only recommend paint when a fence has been painted before and the old finish can't be fully stripped." } },
      { "@type": "Question", name: "When is the best time to stain a fence in NJ?", acceptedAnswer: { "@type": "Answer", text: "Late spring through early fall, with 2–3 days of dry weather on either side of the job. May, June, and September are ideal — warm enough for the stain to cure, not so hot that it dries before penetrating. We avoid staining wet wood, so we'll reschedule after rain." } },
      { "@type": "Question", name: "Can you stain a brand-new pressure-treated fence?", acceptedAnswer: { "@type": "Answer", text: "Not immediately. New pressure-treated lumber needs to dry out 3–6 months before stain will soak in properly. Staining too early is why new fences often look blotchy within a year. For cedar fences, you can stain much sooner — typically within a few weeks of install." } },
      { "@type": "Question", name: "Do you handle both privacy fences and picket fences?", acceptedAnswer: { "@type": "Answer", text: "Yes. We stain and paint privacy fences, picket fences, split-rail, post-and-rail, and fence gates. Each style has different surface area and prep demands — we quote based on actual linear footage and complexity, not a flat per-panel rate." } },
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
              <li className="text-[#1e3a5f] font-medium">Fence Staining</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-6">
            Fence Staining in Mays Landing &amp; Atlantic County, NJ
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-[#64748b] text-lg mb-6 leading-relaxed">
                A fence is one of the largest wooden surfaces on most South Jersey properties — and one of the most neglected. Untreated, wood fences gray out and crack in 1–2 seasons. Painted fences peel. Stained fences, done right, age quietly and last decades. We stain, seal, and occasionally paint cedar, pressure-treated, and picket fences across Atlantic County.
              </p>
              <p className="text-[#64748b] text-lg mb-8 leading-relaxed">
                Typical fence staining in the Mays Landing area runs <strong className="text-[#1e3a5f]">$3–$8 per linear foot</strong>, so a standard 100-foot privacy fence usually lands between $600 and $1,500. Old finish stripping and repair add to the cost but extend the next stain job by years.
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
                <Image src="/fence-gate-painting-black-northfield-nj.webp" alt="Black pointed-picket wooden fence with a lattice skirt, painted beside a house with purple siding and a brick chimney in Northfield" width={600} height={450} className="w-full h-auto" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">What&apos;s Included in Fence Staining?</h2></ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "On-site walk-through and linear-foot measure",
              "Pressure washing & mildew treatment",
              "Stripping failing finish when needed",
              "Sanding splinters and raised grain",
              "Replacing popped nails and loose pickets",
              "Premium penetrating stain — semi-transparent, semi-solid, or solid",
              "UV-resistant sealer where it matters",
              "Gate hinges, posts, and trim included",
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
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">How Do You Stain a Fence? Our Process</h2></ScrollReveal>
          <div className="space-y-6">
            {[
              { step: "1", title: "Measure & Assess", desc: "We walk the whole fence, note rot or loose pickets, measure actual linear feet (not a flat panel rate), and agree on stain opacity and color." },
              { step: "2", title: "Wash & Strip", desc: "Pressure wash to remove dirt, algae, and mildew. If old stain is flaking, we chemically strip before restaining — staining over failing finish is the #1 reason fence jobs fail inside a year." },
              { step: "3", title: "Repair & Sand", desc: "Sand splinters, raised grain, and any glossy spots. Replace popped nails with galvanized screws. Swap out rotted pickets or rails where needed." },
              { step: "4", title: "Stain Application", desc: "We brush or spray-then-backbrush premium penetrating stain in 1–2 coats for even absorption. Both sides of the fence get coated where accessible." },
              { step: "5", title: "Cleanup", desc: "Plants, lawn, and hardscape get rinsed. Drop cloths and tape come off. We walk the final result with you before we leave." },
            ].map((item) => (
              <ScrollReveal key={item.step}>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#2563eb] rounded-full flex items-center justify-center text-white font-bold shrink-0">{item.step}</div>
                  <div>
                    <h3 className="text-[#1e3a5f] font-semibold text-lg">{item.title}</h3>
                    <p className="text-[#64748b] mt-1">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">Where Do We Offer Fence Staining in Atlantic County?</h2></ScrollReveal>
          <p className="text-[#64748b] text-lg leading-relaxed">
            We stain fences across <Link href="/painters-mays-landing-nj" className="text-[#2563eb] hover:underline">Mays Landing</Link>, <Link href="/painters-egg-harbor-township-nj" className="text-[#2563eb] hover:underline">Egg Harbor Township</Link>, <Link href="/painters-galloway-nj" className="text-[#2563eb] hover:underline">Galloway</Link>, <Link href="/painters-northfield-nj" className="text-[#2563eb] hover:underline">Northfield</Link>, <Link href="/painters-linwood-nj" className="text-[#2563eb] hover:underline">Linwood</Link>, and throughout Atlantic County. Pair with <Link href="/deck-staining" className="text-[#2563eb] hover:underline">deck staining</Link> or <Link href="/exterior-painting" className="text-[#2563eb] hover:underline">exterior house painting</Link> to knock out the yard in one trip.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1e3a5f]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Can We Make Your Old Fence Look New Again?</h2>
          <p className="text-white/70 text-lg mb-8">Free measured estimate. Honest assessment. No pressure.</p>
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
