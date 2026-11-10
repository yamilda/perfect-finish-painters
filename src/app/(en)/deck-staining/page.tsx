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
  title: "Deck Staining in Atlantic County NJ | Perfect Finish",
  description:
    "Pro deck staining across Atlantic County NJ — cleaning, sanding, premium stain & seal. Serving Mays Landing & South Jersey. Free quote — 609-377-4226.",
  openGraph: {
    title: "Deck Staining in Atlantic County NJ | Perfect Finish",
    description:
      "Pro deck staining across Atlantic County NJ — cleaning, sanding, premium stain & seal. Serving Mays Landing & South Jersey. Free quote — 609-377-4226.",
    type: "website",
    locale: "en_US",
    url: "https://perfectfinishpainter.com/deck-staining",
    images: [{ url: "/og-card.jpg", width: 1200, height: 630, alt: "Perfect Finish Painters — interior, exterior & drywall in Mays Landing, NJ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deck Staining in Atlantic County NJ | Perfect Finish",
    description:
      "Pro deck staining across Atlantic County NJ — cleaning, sanding, premium stain & seal. Serving Mays Landing & South Jersey. Free quote — 609-377-4226.",
    images: ["/og-card.jpg"],
  },
  alternates: { canonical: "https://perfectfinishpainter.com/deck-staining" },
};

export default function DeckStainingPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://perfectfinishpainter.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://perfectfinishpainter.com/services" },
      { "@type": "ListItem", position: 3, name: "Deck Staining", item: "https://perfectfinishpainter.com/deck-staining" },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Deck Staining",
    description: "Professional deck staining and sealing in Atlantic County NJ. Includes pressure washing, sanding, board and nail repair, premium semi-transparent or solid stain, and UV-resistant sealer. Most decks completed in 2–3 days.",
    provider: { "@id": "https://perfectfinishpainter.com/#business" },
    areaServed: areaServedCities,
    url: "https://perfectfinishpainter.com/deck-staining",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    speakable: {

      "@type": "SpeakableSpecification",

      cssSelector: [".speakable-q", ".speakable-a"],

    },
    mainEntity: [
      { "@type": "Question", name: "How much does deck staining cost in Atlantic County NJ?", acceptedAnswer: { "@type": "Answer", text: "Most deck staining projects in Atlantic County cost between $400 and $2,500 depending on square footage, condition, and whether old finish needs stripping. A typical 300 sq ft deck runs $800–$1,500. Free on-site estimates — call 609-377-4226." } },
      { "@type": "Question", name: "How long does deck stain last in South Jersey?", acceptedAnswer: { "@type": "Answer", text: "In South Jersey's humidity and salt air, semi-transparent stains typically last 2–3 years on horizontal surfaces and 4–5 years on railings and risers. Solid stains last longer, 4–7 years, but look more like paint. We use premium penetrating stains built for shore climate to maximize longevity." } },
      { "@type": "Question", name: "Should I stain or paint my deck?", acceptedAnswer: { "@type": "Answer", text: "Stain is almost always the better choice for decks. Paint sits on the surface and peels — especially on horizontal walking boards that take foot traffic and standing water. Stain soaks in, shows the wood grain, and wears down instead of peeling. We only recommend painting a deck when the wood is too far gone to show grain nicely." } },
      { "@type": "Question", name: "When is the best time of year to stain a deck in NJ?", acceptedAnswer: { "@type": "Answer", text: "Late spring through early fall — ideally when temperatures are 50–90°F with low humidity and no rain in the 48-hour forecast. May, June, and September tend to be the most reliable windows in South Jersey. We avoid staining in direct midday sun, which dries the stain too fast and prevents deep penetration." } },
      { "@type": "Question", name: "Can you stain a brand-new pressure-treated deck?", acceptedAnswer: { "@type": "Answer", text: "Not right away. New pressure-treated lumber needs to dry out for 3–6 months before it will accept stain — otherwise the stain sits on the surface and peels. We'll tell you honestly when your deck is ready. In the meantime, a clear water-repellent sealer protects the wood until it's dry enough to stain." } },
      { "@type": "Question", name: "Do you strip old failing stain before restaining?", acceptedAnswer: { "@type": "Answer", text: "Yes, if the old finish is peeling or flaking, we chemically strip and sand it off before applying new stain. Staining over failing finish is the #1 reason deck jobs fail within a year. It's more work up front, but it's the only way to get a result that lasts." } },
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
              <li className="text-[#1e3a5f] font-medium">Deck Staining</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-6">
            Deck Staining in Mays Landing &amp; Atlantic County, NJ
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-[#64748b] text-lg mb-6 leading-relaxed">
                South Jersey decks get punished. Humidity, salt air, UV, and standing rain break down stain faster here than almost anywhere else in the state. If your deck is gray, splintering, or peeling, it&apos;s telling you the old finish has failed. Restaining now — before the wood rots — is cheaper than replacing boards later.
              </p>
              <p className="text-[#64748b] text-lg mb-8 leading-relaxed">
                We pressure wash, sand down rough grain, repair loose boards and popped nails, then apply premium penetrating stain and a UV-resistant sealer. Most decks in the Mays Landing area run <strong className="text-[#1e3a5f]">$800 to $2,500</strong> and finish in 2–3 days depending on size and condition.
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
                <Image src="/deck-exterior-painting-before-after-south-jersey-nj.webp" alt="Before and after of weathered horizontal wood siding and a dark sliding door beside an unstained gray deck, refreshed to orange-brown siding with a white slider frame" width={600} height={450} className="w-full h-auto" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">What&apos;s Included in Deck Staining?</h2></ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "On-site deck inspection and stain recommendation",
              "Pressure washing to remove dirt, mildew & old finish",
              "Chemical stripping when old stain is peeling",
              "Sanding rough grain, railings & tops of boards",
              "Replacing popped nails with deck screws",
              "Repair or replacement of rotted boards",
              "Premium semi-transparent or solid stain application",
              "UV-resistant sealer on horizontal surfaces",
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
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">How Do You Stain a Deck? Our Process</h2></ScrollReveal>
          <div className="space-y-6">
            {[
              { step: "1", title: "Inspection & Prep Plan", desc: "We walk the deck with you, check for rot, loose boards, and failing finish, and agree on a stain color and opacity (semi-transparent, semi-solid, or solid). We'll tell you honestly if a board or two needs replacing before we start." },
              { step: "2", title: "Pressure Wash & Strip", desc: "We pressure wash off dirt, mildew, and loose finish. If the old stain is peeling, we chemically strip it — staining over failing finish is the #1 reason deck jobs fail early, so we don't cut corners here." },
              { step: "3", title: "Sand & Repair", desc: "We sand down raised grain, splinters, and any glossy spots the stripper missed. Popped nails get replaced with deck screws. Rotted boards get swapped out." },
              { step: "4", title: "Stain & Seal", desc: "We apply premium penetrating stain in 1–2 coats using brushes and pads for full absorption. Horizontal surfaces get an extra UV-resistant sealer to protect against foot traffic and standing water." },
              { step: "5", title: "Cleanup & Walkthrough", desc: "Plants and grass get rinsed, railings get wiped down, and we do a final walkthrough with you. We'll tell you exactly how long to stay off the deck before using it again." },
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
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">Where Do We Offer Deck Staining in Atlantic County?</h2></ScrollReveal>
          <p className="text-[#64748b] text-lg leading-relaxed mb-4">
            We stain decks throughout the Atlantic County area — from shore homes that take the brunt of salt air to inland decks shaded by pines. Shore and bayside decks in <Link href="/painters-brigantine-nj" className="text-[#2563eb] hover:underline">Brigantine</Link>, <Link href="/painters-margate-nj" className="text-[#2563eb] hover:underline">Margate</Link>, and <Link href="/painters-somers-point-nj" className="text-[#2563eb] hover:underline">Somers Point</Link> need stain every 2–3 years because salt eats horizontal finishes fast. Inland decks in <Link href="/painters-mays-landing-nj" className="text-[#2563eb] hover:underline">Mays Landing</Link>, <Link href="/painters-hammonton-nj" className="text-[#2563eb] hover:underline">Hammonton</Link>, and <Link href="/painters-galloway-nj" className="text-[#2563eb] hover:underline">Galloway</Link> can stretch to 3–4 years between coats.
          </p>
          <p className="text-[#64748b] text-lg leading-relaxed">
            Pair deck staining with our <Link href="/exterior-painting" className="text-[#2563eb] hover:underline">exterior house painting</Link> or <Link href="/shed-restoration" className="text-[#2563eb] hover:underline">shed restoration</Link> to knock out your whole outdoor refresh in one shot and save on trip costs.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1e3a5f]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Bring Your Deck Back?</h2>
          <p className="text-white/70 text-lg mb-8">Free on-site estimate. Honest assessment. No pressure.</p>
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
