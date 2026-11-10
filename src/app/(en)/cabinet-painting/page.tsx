import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollReveal from "@/components/ScrollReveal";
import { areaServedCities } from "@/data/service-areas";

export const metadata: Metadata = {
  title: "Cabinet Painting in Atlantic County NJ | Perfect Finish",
  description:
    "Kitchen cabinet painting across Atlantic County NJ. Transform cabinets without replacing them. Serving Mays Landing & South Jersey. Free estimates.",
  openGraph: {
    title: "Cabinet Painting in Atlantic County NJ | Perfect Finish",
    description: "Kitchen cabinet painting across Atlantic County NJ. Transform cabinets without replacing them. Serving Mays Landing & South Jersey. Free estimates.",
    type: "website",
    locale: "en_US",
    url: "https://perfectfinishpainter.com/cabinet-painting",
    images: [{ url: "/og-card.jpg", width: 1200, height: 630, alt: "Perfect Finish Painters — interior, exterior & drywall in Mays Landing, NJ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabinet Painting in Atlantic County NJ | Perfect Finish",
    description: "Kitchen cabinet painting across Atlantic County NJ. Transform cabinets without replacing them. Serving Mays Landing & South Jersey. Free estimates.",
    images: ["/og-card.jpg"],
  },
  alternates: { canonical: "https://perfectfinishpainter.com/cabinet-painting" },
};

export default function CabinetPaintingPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://perfectfinishpainter.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://perfectfinishpainter.com/services" },
      { "@type": "ListItem", position: 3, name: "Cabinet Painting", item: "https://perfectfinishpainter.com/cabinet-painting" },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Cabinet Painting",
    description: "Professional kitchen cabinet painting including cleaning, sanding, priming, and alkyd enamel paint application for a durable, factory-smooth finish throughout Atlantic County NJ.",
    provider: { "@id": "https://perfectfinishpainter.com/#business" },
    areaServed: areaServedCities,
    url: "https://perfectfinishpainter.com/cabinet-painting",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    speakable: {

      "@type": "SpeakableSpecification",

      cssSelector: [".speakable-q", ".speakable-a"],

    },
    mainEntity: [
      { "@type": "Question", name: "How much does cabinet painting cost in Atlantic County NJ?", acceptedAnswer: { "@type": "Answer", text: "Most kitchen cabinet painting jobs in Atlantic County cost between $2,500 and $5,500 depending on the number of cabinets, door style, and condition. We provide free on-site estimates — call 609-377-4226." } },
      { "@type": "Question", name: "Is it better to paint or replace kitchen cabinets?", acceptedAnswer: { "@type": "Answer", text: "If your cabinets are structurally sound, painting saves 60-70% compared to full replacement and can be completed in 3-5 days. New cabinets typically cost $15,000-$30,000+ and take weeks to install." } },
      { "@type": "Question", name: "What kind of paint do you use on cabinets?", acceptedAnswer: { "@type": "Answer", text: "We use alkyd enamel paint that cures to a hard, durable factory-like finish. It resists chips, scratches, and moisture — critical for kitchen cabinets that see daily use." } },
      { "@type": "Question", name: "How long does cabinet painting take?", acceptedAnswer: { "@type": "Answer", text: "Most kitchen cabinet painting jobs take 3-5 days including cleaning, sanding, priming, and two coats of finish paint. We work room by room so you can still use your kitchen during the process." } },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Breadcrumb */}
      <div className="pt-28 sm:pt-36 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-[#64748b]">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/services" className="hover:text-[#2563eb] transition-colors">Services</Link></li>
              <li>/</li>
              <li className="text-[#1e3a5f] font-medium">Cabinet Painting</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-6">
            Cabinet Painting in Mays Landing &amp; Atlantic County, NJ
          </h1>
          <p className="text-[#64748b] text-lg mb-6 leading-relaxed">
            Your kitchen cabinets take up more visual space than almost anything else in the room. If they look dated, worn, or the wrong color, it drags down the entire kitchen. Cabinet painting is the fastest, most affordable way to completely transform your kitchen without the cost and disruption of a full cabinet replacement. Perfect Finish Painters serves Mays Landing, Egg Harbor Township, Northfield, Galloway, and all of Atlantic County.
          </p>
          <p className="text-[#64748b] text-lg mb-8 leading-relaxed">
            We also handle <Link href="/interior-painting" className="text-[#2563eb] hover:underline">interior painting</Link> so you can update your walls, trim, and cabinets all in one project for a complete kitchen refresh.
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
      </section>

      {/* Why Paint Instead of Replace */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">Why Paint Instead of Replace Your Cabinets?</h2>
          </ScrollReveal>
          <p className="text-[#64748b] text-lg leading-relaxed">
            New kitchen cabinets typically cost <strong className="text-[#1e3a5f]">$15,000 or more</strong> installed — and the project can take weeks, leaving your kitchen torn apart. Professional cabinet painting delivers the same dramatic transformation for <strong className="text-[#1e3a5f]">$1,200 to $3,500</strong>, depending on cabinet count and condition. The work takes just 2 to 4 days, and you can use your kitchen throughout most of the process. If your cabinet boxes are structurally solid, painting is the smart move — you get a fresh, modern look at a fraction of the cost.
          </p>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">How Do You Paint Cabinets? Our Process</h2>
          </ScrollReveal>
          <div className="space-y-8">
            <ScrollReveal>
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">Cabinet Cleaning, Sanding &amp; Prep</h3>
                <p className="text-[#64748b] leading-relaxed">
                  We remove all doors, drawers, and hardware, then label everything for precise reinstallation. Every surface is degreased with TSP to remove years of kitchen grime, grease, and oils. We sand all surfaces by hand to create the ideal profile for paint adhesion, and fill any dents or imperfections with wood filler.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">Priming &amp; Paint Application</h3>
                <p className="text-[#64748b] leading-relaxed">
                  We apply a bonding primer designed specifically for cabinetry to ensure long-term adhesion. Then we apply two coats of alkyd or enamel paint that cures to a hard, durable shell — resistant to fingerprints, moisture, and daily kitchen wear. We use brushes, rollers, or spray application depending on the cabinet style to achieve a smooth, factory-quality finish.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">Hardware Reinstallation &amp; Final Inspection</h3>
                <p className="text-[#64748b] leading-relaxed">
                  Once the paint has fully cured, we reinstall all doors, drawers, and hardware — or install new hardware if you&apos;re upgrading. We adjust hinges for proper alignment and do a final walkthrough with you to make sure every detail meets your expectations.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Cost */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">How Much Does Cabinet Painting Cost in Atlantic County, NJ?</h2>
          </ScrollReveal>
          <p className="text-[#64748b] text-lg leading-relaxed">
            Most kitchen cabinet painting projects in Atlantic County cost between <strong className="text-[#1e3a5f]">$1,200 and $3,500</strong> depending on the number of cabinets, their condition, and the finish you choose. The typical project takes 2 to 4 days. We provide free, detailed estimates before any work begins — take our 60-second quiz or call <a href="tel:+16093774226" className="text-[#2563eb] hover:underline">(609) 377-4226</a> to get started.
          </p>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">What Other Services Do We Offer?</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Interior Painting", desc: "Walls, ceilings, trim, and accent walls in any room.", href: "/interior-painting" },
              { title: "Exterior Painting", desc: "Siding, shutters, doors, and trim to boost curb appeal.", href: "/exterior-painting" },
              { title: "Drywall Repair", desc: "Patch holes, fix cracks, and restore smooth surfaces.", href: "/drywall-repair" },
              { title: "Popcorn Ceiling Removal", desc: "Remove dated texture for a smooth, modern ceiling.", href: "/popcorn-ceiling-removal" },
              { title: "Shed Restoration", desc: "Bring your shed back to life with repair and painting.", href: "/shed-restoration" },
              { title: "Flooring Installation", desc: "Professional flooring to complete your renovation.", href: "/flooring" },
            ].map((service) => (
              <Link key={service.title} href={service.href} className="bg-white rounded-xl p-5 shadow-sm border border-[#e2e8f0] hover:border-[#2563eb] transition-colors block">
                <h3 className="text-[#1e3a5f] font-semibold mb-1">{service.title}</h3>
                <p className="text-[#64748b] text-sm">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">Where Do We Offer Cabinet Painting in Atlantic County?</h2></ScrollReveal>
          <p className="text-[#64748b] text-lg leading-relaxed">
            We paint kitchen cabinets throughout Atlantic County. Whether you&apos;re updating a 90s oak kitchen in <Link href="/painters-egg-harbor-township-nj" className="text-[#2563eb] hover:underline">Egg Harbor Township</Link> or <Link href="/painters-galloway-nj" className="text-[#2563eb] hover:underline">Galloway</Link>, refreshing a builder-grade kitchen in <Link href="/painters-linwood-nj" className="text-[#2563eb] hover:underline">Linwood</Link> or <Link href="/painters-northfield-nj" className="text-[#2563eb] hover:underline">Northfield</Link>, or reviving an older kitchen in <Link href="/painters-hammonton-nj" className="text-[#2563eb] hover:underline">Hammonton</Link> or <Link href="/painters-mays-landing-nj" className="text-[#2563eb] hover:underline">Mays Landing</Link>, the process is the same — clean, sand, prime, spray. What changes is the cabinet material and how much prep each one needs.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1e3a5f]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Kitchen?</h2>
          <p className="text-white/70 text-lg mb-8">Get a free personalized estimate in 60 seconds.</p>
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
