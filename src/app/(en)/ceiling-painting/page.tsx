import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollReveal from "@/components/ScrollReveal";
import { areaServedCities } from "@/data/service-areas";

export const metadata: Metadata = {
  title: "Ceiling Painting in Atlantic County NJ | Perfect Finish",
  description:
    "Pro ceiling painting across Atlantic County NJ — flat, vaulted, popcorn & crown molding. Serving Mays Landing & South Jersey. Free estimates.",
  openGraph: {
    title: "Ceiling Painting in Atlantic County NJ | Perfect Finish",
    description: "Pro ceiling painting across Atlantic County NJ — flat, vaulted, popcorn & crown molding. Serving Mays Landing & South Jersey. Free estimates.",
    type: "website",
    locale: "en_US",
    url: "https://perfectfinishpainter.com/ceiling-painting",
    images: [{ url: "/og-card.jpg", width: 1200, height: 630, alt: "Perfect Finish Painters — interior, exterior & drywall in Mays Landing, NJ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ceiling Painting in Atlantic County NJ | Perfect Finish",
    description: "Pro ceiling painting across Atlantic County NJ — flat, vaulted, popcorn & crown molding. Serving Mays Landing & South Jersey. Free estimates.",
    images: ["/og-card.jpg"],
  },
  alternates: { canonical: "https://perfectfinishpainter.com/ceiling-painting" },
};

export default function CeilingPaintingPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://perfectfinishpainter.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://perfectfinishpainter.com/services" },
      { "@type": "ListItem", position: 3, name: "Ceiling Painting", item: "https://perfectfinishpainter.com/ceiling-painting" },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Ceiling Painting",
    description: "Professional ceiling painting services including flat ceilings, vaulted and cathedral ceilings, popcorn texture, crown molding, and ceiling repair throughout Atlantic County NJ.",
    provider: { "@id": "https://perfectfinishpainter.com/#business" },
    areaServed: areaServedCities,
    url: "https://perfectfinishpainter.com/ceiling-painting",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does it cost to paint a ceiling in NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "$200-$600 depending on size, height, condition. Free estimates — 609-377-4226.",
        },
      },
      {
        "@type": "Question",
        name: "Do you paint popcorn ceilings or just remove them?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Both. Paint over if good condition, or remove for smooth finish. See our popcorn ceiling removal page.",
        },
      },
      {
        "@type": "Question",
        name: "How many coats does a ceiling need?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most need two coats for even coverage, especially going from dark to white or covering stains.",
        },
      },
      {
        "@type": "Question",
        name: "Can you paint vaulted ceilings in Atlantic County homes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We have equipment and experience for high vaulted and cathedral ceilings safely.",
        },
      },
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
              <li className="text-[#1e3a5f] font-medium">Ceiling Painting</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-6">
            Ceiling Painting in Mays Landing &amp; Atlantic County, NJ
          </h1>
          <p className="text-[#64748b] text-lg mb-6 leading-relaxed">
            A fresh ceiling transforms a room instantly — it brightens the space, makes walls look cleaner, and gives the entire area a finished, updated feel. Whether you have flat ceilings, vaulted ceilings, popcorn texture, or decorative crown molding, Perfect Finish Painters delivers flawless ceiling painting results throughout Mays Landing, Egg Harbor Township, Galloway, Northfield, and all of Atlantic County.
          </p>
          <p className="text-[#64748b] text-lg mb-8 leading-relaxed">
            We pair ceiling painting with <Link href="/interior-painting" className="text-[#2563eb] hover:underline">interior painting</Link> for a complete room refresh, and our <Link href="/drywall-repair" className="text-[#2563eb] hover:underline">drywall repair</Link> team handles any cracks or water damage before we paint. Need popcorn texture removed first? Check out our <Link href="/popcorn-ceiling-removal" className="text-[#2563eb] hover:underline">popcorn ceiling removal</Link> service.
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

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">What Ceiling Painting Services Do We Offer in Atlantic County?</h2>
          </ScrollReveal>
          <div className="space-y-8">
            <ScrollReveal>
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">Flat &amp; Smooth Ceiling Painting</h3>
                <p className="text-[#64748b] leading-relaxed">
                  Flat ceilings are the most common type in Atlantic County homes, and a fresh coat of ceiling paint is one of the fastest ways to brighten any room. We use proper roller technique and premium ceiling paint to deliver even, drip-free coverage that looks flawless from every angle. Whether your ceiling has yellowed over time, shows scuffs, or just needs a refresh, a smooth flat ceiling painting makes the entire room feel new.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">Vaulted &amp; Cathedral Ceiling Painting</h3>
                <p className="text-[#64748b] leading-relaxed">
                  Vaulted and cathedral ceilings add drama and openness to a home, but painting them is a challenge most homeowners can&apos;t tackle safely. We have the professional equipment — including extension ladders, scaffolding, and specialized rolling systems — to safely reach every inch of your high ceilings. Our team delivers smooth, even coverage on angled surfaces without drips, streaks, or missed spots.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">Painted Ceiling Trim &amp; Crown Molding</h3>
                <p className="text-[#64748b] leading-relaxed">
                  Crown molding and ceiling trim deserve the same attention to detail as the ceiling itself. We carefully tape and cut in clean lines where the ceiling meets the trim, ensuring crisp edges and a professional finish. Whether you want your trim painted to match the ceiling, contrast with an accent color, or coordinate with your walls, we deliver precision tape work and smooth results every time.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">Ceiling Repair &amp; Painting Combined</h3>
                <p className="text-[#64748b] leading-relaxed">
                  Cracks, water stains, peeling paint, and nail pops are common ceiling issues in older homes. Painting over these problems without fixing them first leads to a poor result that won&apos;t last. We repair the underlying damage — patching cracks, sealing water stains with stain-blocking primer, and smoothing imperfections — before applying two coats of ceiling paint for a seamless finish. Need more extensive repairs? Our <Link href="/drywall-repair" className="text-[#2563eb] hover:underline">drywall repair</Link> service handles it all.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Cost */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">How Much Does Ceiling Painting Cost in NJ?</h2>
          </ScrollReveal>
          <p className="text-[#64748b] text-lg leading-relaxed">
            Most ceiling painting projects cost between <strong className="text-[#1e3a5f]">$200 and $600 per ceiling</strong> depending on the size of the room, ceiling height, surface condition, and whether repairs are needed beforehand. Vaulted and cathedral ceilings typically cost more due to the additional equipment and time required. Multi-room projects often qualify for volume pricing. We provide free, detailed estimates before any work begins — no surprises and no obligation. Take our 60-second quiz or call (609) 377-4226 to get started.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">Ceiling Painting FAQs — Atlantic County, NJ</h2>
          </ScrollReveal>
          <div className="space-y-6">
            <ScrollReveal>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e2e8f0]">
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">How much does it cost to paint a ceiling in NJ?</h3>
                <p className="text-[#64748b] leading-relaxed">$200–$600 depending on size, height, and condition. Free estimates — call <a href="tel:+16093774226" className="text-[#2563eb] hover:underline">(609) 377-4226</a>.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e2e8f0]">
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">Do you paint popcorn ceilings or just remove them?</h3>
                <p className="text-[#64748b] leading-relaxed">Both. We can paint over popcorn texture if it&apos;s in good condition, or remove it entirely for a smooth finish. See our <Link href="/popcorn-ceiling-removal" className="text-[#2563eb] hover:underline">popcorn ceiling removal</Link> page for details.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e2e8f0]">
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">How many coats does a ceiling need?</h3>
                <p className="text-[#64748b] leading-relaxed">Most ceilings need two coats for even coverage, especially when going from a dark color to white or covering water stains and discoloration.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e2e8f0]">
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">Can you paint vaulted ceilings in Atlantic County homes?</h3>
                <p className="text-[#64748b] leading-relaxed">Yes. We have the equipment and experience to safely paint high vaulted and cathedral ceilings with even, professional-quality coverage.</p>
              </div>
            </ScrollReveal>
          </div>
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
              { title: "Popcorn Ceiling Removal", desc: "Remove outdated texture for a smooth, modern ceiling.", href: "/popcorn-ceiling-removal" },
              { title: "Drywall Repair", desc: "Patch holes, fix cracks, and restore smooth surfaces.", href: "/drywall-repair" },
              { title: "Cabinet Painting", desc: "Transform your kitchen cabinets without replacing them.", href: "/cabinet-painting" },
              { title: "Shed Restoration", desc: "Bring your shed back to life with repair and painting.", href: "/shed-restoration" },
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
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">Where Do We Offer Ceiling Painting in Atlantic County?</h2></ScrollReveal>
          <p className="text-[#64748b] text-lg leading-relaxed">
            We handle ceiling painting across Atlantic County — vaulted and cathedral ceilings in <Link href="/painters-mays-landing-nj" className="text-[#2563eb] hover:underline">Mays Landing</Link> and <Link href="/painters-egg-harbor-township-nj" className="text-[#2563eb] hover:underline">Egg Harbor Township</Link> craftsman homes, popcorn-texture ceilings throughout <Link href="/painters-pleasantville-nj" className="text-[#2563eb] hover:underline">Pleasantville</Link> and <Link href="/painters-vineland-nj" className="text-[#2563eb] hover:underline">Vineland</Link> 80s ranches, and fresh flat ceilings in <Link href="/painters-galloway-nj" className="text-[#2563eb] hover:underline">Galloway</Link> and <Link href="/painters-northfield-nj" className="text-[#2563eb] hover:underline">Northfield</Link> new builds. Stain-blocking primer for water marks is included on every ceiling job.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1e3a5f]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready for Fresh, Bright Ceilings?</h2>
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

      <Footer />
      <FloatingCTA />
    </div>
  );
}
