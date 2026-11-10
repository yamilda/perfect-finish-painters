import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollReveal from "@/components/ScrollReveal";
import { areaServedCities } from "@/data/service-areas";

export const metadata: Metadata = {
  title: "Commercial Painting in Atlantic County NJ | Perfect Finish",
  description:
    "Commercial painting contractor in Atlantic County NJ — offices, retail, restaurants. Flexible scheduling. Serving Mays Landing & South Jersey.",
  openGraph: {
    title: "Commercial Painting in Atlantic County NJ | Perfect Finish",
    description: "Commercial painting contractor in Atlantic County NJ — offices, retail, restaurants. Flexible scheduling. Serving Mays Landing & South Jersey.",
    type: "website",
    locale: "en_US",
    url: "https://perfectfinishpainter.com/commercial-painting",
    images: [{ url: "/og-card.jpg", width: 1200, height: 630, alt: "Perfect Finish Painters — interior, exterior & drywall in Mays Landing, NJ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Painting in Atlantic County NJ | Perfect Finish",
    description: "Commercial painting contractor in Atlantic County NJ — offices, retail, restaurants. Flexible scheduling. Serving Mays Landing & South Jersey.",
    images: ["/og-card.jpg"],
  },
  alternates: { canonical: "https://perfectfinishpainter.com/commercial-painting" },
};

export default function CommercialPaintingPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://perfectfinishpainter.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://perfectfinishpainter.com/services" },
      { "@type": "ListItem", position: 3, name: "Commercial Painting", item: "https://perfectfinishpainter.com/commercial-painting" },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Commercial Painting",
    description: "Professional commercial painting for offices, retail spaces, restaurants, and commercial buildings in Atlantic County NJ. Flexible scheduling with evenings and weekends available for minimal business disruption.",
    provider: { "@id": "https://perfectfinishpainter.com/#business" },
    areaServed: areaServedCities,
    url: "https://perfectfinishpainter.com/commercial-painting",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    speakable: {

      "@type": "SpeakableSpecification",

      cssSelector: [".speakable-q", ".speakable-a"],

    },
    mainEntity: [
      { "@type": "Question", name: "Do you paint commercial buildings in Atlantic County NJ?", acceptedAnswer: { "@type": "Answer", text: "Yes. We paint offices, retail stores, restaurants, warehouses, and multi-unit buildings throughout Atlantic County and South Jersey. We offer flexible scheduling including evenings and weekends to minimize business disruption." } },
      { "@type": "Question", name: "How much does commercial painting cost in South Jersey?", acceptedAnswer: { "@type": "Answer", text: "Commercial painting is quoted per square foot based on the scope of work, surface condition, and building access. We provide free on-site estimates for all commercial projects — call 609-377-4226." } },
      { "@type": "Question", name: "Can you paint my business after hours?", acceptedAnswer: { "@type": "Answer", text: "Yes. We offer evening and weekend scheduling for commercial clients who need to stay open during the work. We coordinate with your schedule to minimize impact on your operations." } },
      { "@type": "Question", name: "Are you licensed and insured for commercial painting in NJ?", acceptedAnswer: { "@type": "Answer", text: "Yes. We are a licensed NJ Home Improvement Contractor (HIC #13VH14120900) and carry full liability insurance and workers compensation coverage for all commercial and residential projects." } },
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
              <li className="text-[#1e3a5f] font-medium">Commercial Painting</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-6">
            Commercial Painting in Atlantic County, NJ
          </h1>
          <p className="text-[#64748b] text-lg mb-6 leading-relaxed">
            First impressions matter for your business. Whether you&apos;re refreshing an office, updating a retail storefront, or repainting an entire commercial building, Perfect Finish Painters delivers professional results with minimal disruption to your operations. We serve Mays Landing and all of Atlantic County with flexible scheduling that works around your business hours.
          </p>
          <p className="text-[#64748b] text-lg mb-8 leading-relaxed">
            We bring the same quality and attention to detail from our <Link href="/interior-painting" className="text-[#2563eb] hover:underline">interior painting</Link> and <Link href="/exterior-painting" className="text-[#2563eb] hover:underline">exterior painting</Link> residential services to every commercial project — clean prep, premium products, and a finished result you&apos;ll be proud to show your customers.
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

      {/* Services We Offer */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">What Commercial Painting Services Do We Offer?</h2>
          </ScrollReveal>
          <div className="space-y-8">
            <ScrollReveal>
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">Office &amp; Retail Space Painting</h3>
                <p className="text-[#64748b] leading-relaxed">
                  A clean, professional paint job sets the tone for your workspace. We paint offices, lobbies, conference rooms, hallways, and retail interiors using durable, low-VOC paints that dry quickly and hold up to heavy foot traffic. Whether you&apos;re refreshing existing colors or rebranding with a new palette, we deliver crisp, consistent results.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">Restaurant &amp; Hospitality Painting</h3>
                <p className="text-[#64748b] leading-relaxed">
                  Restaurants, bars, and hospitality spaces take a beating from moisture, cooking grease, and constant traffic. We use scrubbable, moisture-resistant paints in kitchens and dining areas that stand up to daily cleaning. We understand that downtime costs you money, so we work fast and schedule around your service hours.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">Commercial Exterior Painting</h3>
                <p className="text-[#64748b] leading-relaxed">
                  Your building&apos;s exterior is the first thing customers see. We paint commercial exteriors including storefronts, siding, trim, doors, and signage areas using weather-resistant coatings designed for South Jersey&apos;s climate. We handle power washing, surface prep, and full paint application with minimal disruption to your daily operations.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">Why Do Atlantic County Businesses Choose Us?</h2>
          </ScrollReveal>
          <p className="text-[#64748b] text-lg mb-6 leading-relaxed">
            We know that for businesses, timing and disruption matter as much as the final result. That&apos;s why we offer <strong className="text-[#1e3a5f]">flexible scheduling including evenings and weekends</strong> so your painting project doesn&apos;t interfere with your customers or employees. We work fast without cutting corners, delivering a quality finish on a timeline that respects your business operations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {[
              "Evenings and weekend scheduling available",
              "Fast turnaround without sacrificing quality",
              "Minimal disruption to your business",
              "Low-VOC paints for occupied spaces",
              "Durable, high-traffic-rated finishes",
              "Free on-site estimates for commercial properties",
              "Consistent results across large spaces",
              "Clean, professional crew on every job",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-[#f1f5f9] rounded-xl p-4 border border-[#e2e8f0]">
                <svg className="w-5 h-5 text-[#2563eb] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[#374151]">{item}</span>
              </div>
            ))}
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
              { title: "Cabinet Painting", desc: "Transform your kitchen cabinets without replacing them.", href: "/cabinet-painting" },
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
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">Where Do We Offer Commercial Painting in South Jersey?</h2></ScrollReveal>
          <p className="text-[#64748b] text-lg leading-relaxed">
            We paint commercial spaces throughout South Jersey — retail storefronts in <Link href="/painters-atlantic-city-nj" className="text-[#2563eb] hover:underline">Atlantic City</Link> and <Link href="/painters-pleasantville-nj" className="text-[#2563eb] hover:underline">Pleasantville</Link>, office buildings in <Link href="/painters-egg-harbor-township-nj" className="text-[#2563eb] hover:underline">Egg Harbor Township</Link> and <Link href="/painters-mays-landing-nj" className="text-[#2563eb] hover:underline">Mays Landing</Link>, and restaurants across <Link href="/painters-vineland-nj" className="text-[#2563eb] hover:underline">Vineland</Link>. We schedule around your hours — evenings, weekends, or overnight — so your business keeps running.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1e3a5f]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Your Business Painted?</h2>
          <p className="text-white/70 text-lg mb-8">Get a free estimate — we work around your schedule.</p>
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
