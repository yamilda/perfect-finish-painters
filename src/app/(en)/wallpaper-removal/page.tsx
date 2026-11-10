import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollReveal from "@/components/ScrollReveal";
import { areaServedCities } from "@/data/service-areas";

export const metadata: Metadata = {
  title: "Wallpaper Removal in Atlantic County NJ | Perfect Finish",
  description:
    "Wallpaper removal & wall prep across Atlantic County NJ — clean removal, drywall repair, paint-ready finish. Free estimate — 609-377-4226.",
  openGraph: {
    title: "Wallpaper Removal in Atlantic County NJ | Perfect Finish",
    description: "Wallpaper removal & wall prep across Atlantic County NJ — clean removal, drywall repair, paint-ready finish. Free estimate — 609-377-4226.",
    type: "website",
    locale: "en_US",
    url: "https://perfectfinishpainter.com/wallpaper-removal",
    images: [{ url: "/og-card.jpg", width: 1200, height: 630, alt: "Perfect Finish Painters — interior, exterior & drywall in Mays Landing, NJ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wallpaper Removal in Atlantic County NJ | Perfect Finish",
    description: "Wallpaper removal & wall prep across Atlantic County NJ — clean removal, drywall repair, paint-ready finish. Free estimate — 609-377-4226.",
    images: ["/og-card.jpg"],
  },
  alternates: { canonical: "https://perfectfinishpainter.com/wallpaper-removal" },
};

export default function WallpaperRemovalPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://perfectfinishpainter.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://perfectfinishpainter.com/services" },
      { "@type": "ListItem", position: 3, name: "Wallpaper Removal", item: "https://perfectfinishpainter.com/wallpaper-removal" },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Wallpaper Removal",
    description: "Professional wallpaper removal services including single and double layer removal, wall repair, skim coating, priming, and paint-ready wall prep throughout Atlantic County NJ.",
    provider: { "@id": "https://perfectfinishpainter.com/#business" },
    areaServed: areaServedCities,
    url: "https://perfectfinishpainter.com/wallpaper-removal",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does wallpaper removal cost in NJ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "$1-$3 per square foot depending on layers and wall condition. Free estimates — 609-377-4226.",
        },
      },
      {
        "@type": "Question",
        name: "Can you paint the walls immediately after wallpaper removal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Walls need repair, skim coating, priming, and drying before painting. We handle the full process.",
        },
      },
      {
        "@type": "Question",
        name: "Do you repair damage caused by wallpaper removal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Wallpaper removal often tears drywall paper. We patch, skim coat, and prime before painting.",
        },
      },
      {
        "@type": "Question",
        name: "How long does wallpaper removal take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A single room typically takes one to two days including wall prep. Multi-room projects quoted individually.",
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
              <li className="text-[#1e3a5f] font-medium">Wallpaper Removal</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-6">
            Wallpaper Removal in Mays Landing &amp; Atlantic County, NJ
          </h1>
          <p className="text-[#64748b] text-lg mb-6 leading-relaxed">
            Outdated wallpaper can make any room feel stuck in the past. Whether you&apos;re dealing with one stubborn layer or multiple layers stacked over decades, Perfect Finish Painters provides clean, professional wallpaper removal that leaves your walls ready for a fresh coat of paint. We serve Mays Landing, Egg Harbor Township, Galloway, Northfield, and all of Atlantic County.
          </p>
          <p className="text-[#64748b] text-lg mb-8 leading-relaxed">
            Wallpaper removal is just the first step — we handle the full process from stripping to <Link href="/drywall-repair" className="text-[#2563eb] hover:underline">drywall repair</Link> and wall prep, all the way through to <Link href="/interior-painting" className="text-[#2563eb] hover:underline">interior painting</Link>. One crew, one project, one clean result.
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
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">What Wallpaper Removal Services Do We Offer in Atlantic County?</h2>
          </ScrollReveal>
          <div className="space-y-8">
            <ScrollReveal>
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">Single &amp; Double Layer Wallpaper Removal</h3>
                <p className="text-[#64748b] leading-relaxed">
                  Many older homes in Atlantic County have wallpaper that&apos;s been layered over itself — sometimes two, three, or even four layers deep. Each layer requires careful steaming, scoring, and scraping to remove without damaging the wall underneath. We handle single-layer peel-and-strip jobs as well as the toughest multi-layer removals, leaving the wall surface clean and ready for the next step.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">Wall Repair After Wallpaper Removal</h3>
                <p className="text-[#64748b] leading-relaxed">
                  Wallpaper removal almost always reveals some level of wall damage — torn drywall paper, gouges, adhesive residue, and uneven surfaces are all common. We skim coat the entire wall surface to create a smooth, even base that&apos;s ready for primer and paint. For more extensive damage like deep gouges or crumbling drywall, our <Link href="/drywall-repair" className="text-[#2563eb] hover:underline">drywall repair</Link> team patches and rebuilds the surface before finishing.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">Paint-Ready Wall Prep &amp; Priming</h3>
                <p className="text-[#64748b] leading-relaxed">
                  After wallpaper is removed and walls are repaired, proper priming is essential before any paint goes on. We apply a high-quality primer that seals the repaired surface, blocks residual adhesive stains, and provides a uniform base for paint. From there, we can handle the full <Link href="/interior-painting" className="text-[#2563eb] hover:underline">interior painting</Link> so you get a complete transformation — from dated wallpaper to a beautiful, modern painted finish.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Professional */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">Why Should Wallpaper Removal Be Done by a Professional?</h2>
          </ScrollReveal>
          <p className="text-[#64748b] text-lg leading-relaxed">
            DIY wallpaper removal is one of the most common home improvement projects that ends in frustration and costly damage. Without proper steaming equipment, the right scraping tools, and experience reading wall conditions, it&apos;s easy to gouge drywall, tear off the paper face layer, or leave behind adhesive that causes paint to bubble and peel. Professionals know how to control moisture, work systematically from top to bottom, and handle surprises like lead paint or mold behind old wallpaper. We handle the full process — removal, wall repair, priming, and painting — so you get a finished result without the headaches.
          </p>
        </div>
      </section>

      {/* Cost */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">How Much Does Wallpaper Removal Cost in Atlantic County, NJ?</h2>
          </ScrollReveal>
          <p className="text-[#64748b] text-lg leading-relaxed">
            Most wallpaper removal projects cost between <strong className="text-[#1e3a5f]">$1 and $3 per square foot</strong> depending on the number of layers, the type of wallpaper, adhesive condition, and the state of the walls underneath. Rooms with multiple layers or extensive wall damage will be on the higher end. We provide free, detailed estimates before any work begins — no surprises and no obligation. Take our 60-second quiz or call (609) 377-4226 to get started.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">Wallpaper Removal FAQs — South Jersey</h2>
          </ScrollReveal>
          <div className="space-y-6">
            <ScrollReveal>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e2e8f0]">
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">How much does wallpaper removal cost in NJ?</h3>
                <p className="text-[#64748b] leading-relaxed">$1–$3 per square foot depending on layers and wall condition. Free estimates — call (609) 377-4226.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e2e8f0]">
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">Can you paint the walls immediately after wallpaper removal?</h3>
                <p className="text-[#64748b] leading-relaxed">No. Walls need repair, skim coating, priming, and drying before painting. We handle the full process so you get a lasting, professional finish.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e2e8f0]">
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">Do you repair damage caused by wallpaper removal?</h3>
                <p className="text-[#64748b] leading-relaxed">Yes. Wallpaper removal often tears drywall paper and reveals gouges or adhesive residue. We patch, skim coat, and prime before painting.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e2e8f0]">
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">How long does wallpaper removal take?</h3>
                <p className="text-[#64748b] leading-relaxed">A single room typically takes one to two days including wall prep. Multi-room projects are quoted individually based on scope.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">What Other Services Do We Offer?</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Interior Painting", desc: "Walls, ceilings, trim, and accent walls in any room.", href: "/interior-painting" },
              { title: "Exterior Painting", desc: "Siding, shutters, doors, and trim to boost curb appeal.", href: "/exterior-painting" },
              { title: "Drywall Repair", desc: "Patch holes, fix cracks, and restore smooth surfaces.", href: "/drywall-repair" },
              { title: "Popcorn Ceiling Removal", desc: "Remove outdated texture for a smooth, modern ceiling.", href: "/popcorn-ceiling-removal" },
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
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">Where Do We Offer Wallpaper Removal in Atlantic County?</h2></ScrollReveal>
          <p className="text-[#64748b] text-lg leading-relaxed">
            Wallpaper from the 80s and 90s is all over Atlantic County. We strip it cleanly in <Link href="/painters-mays-landing-nj" className="text-[#2563eb] hover:underline">Mays Landing</Link>, <Link href="/painters-egg-harbor-township-nj" className="text-[#2563eb] hover:underline">Egg Harbor Township</Link>, <Link href="/painters-galloway-nj" className="text-[#2563eb] hover:underline">Galloway</Link>, <Link href="/painters-northfield-nj" className="text-[#2563eb] hover:underline">Northfield</Link>, <Link href="/painters-linwood-nj" className="text-[#2563eb] hover:underline">Linwood</Link>, and <Link href="/painters-hammonton-nj" className="text-[#2563eb] hover:underline">Hammonton</Link> — then repair whatever the glue ruined and leave walls paint-ready. Old glue on plaster walls vs drywall needs different approaches. We handle both.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1e3a5f]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Rid of Outdated Wallpaper?</h2>
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
