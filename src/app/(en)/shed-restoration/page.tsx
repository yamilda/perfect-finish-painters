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
  title: "Shed Restoration in Atlantic County NJ | Perfect Finish",
  description:
    "Shed restoration & painting in Atlantic County NJ — wood rot repair, scraping, priming, weather-resistant finish. Free estimate — 609-377-4226.",
  openGraph: {
    title: "Shed Restoration in Atlantic County NJ | Perfect Finish",
    description: "Shed restoration & painting in Atlantic County NJ — wood rot repair, scraping, priming, weather-resistant finish. Free estimate — 609-377-4226.",
    type: "website",
    locale: "en_US",
    url: "https://perfectfinishpainter.com/shed-restoration",
    images: [{ url: "/og-card.jpg", width: 1200, height: 630, alt: "Perfect Finish Painters — interior, exterior & drywall in Mays Landing, NJ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shed Restoration in Atlantic County NJ | Perfect Finish",
    description: "Shed restoration & painting in Atlantic County NJ — wood rot repair, scraping, priming, weather-resistant finish. Free estimate — 609-377-4226.",
    images: ["/og-card.jpg"],
  },
  alternates: { canonical: "https://perfectfinishpainter.com/shed-restoration" },
};

export default function ShedRestorationPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://perfectfinishpainter.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://perfectfinishpainter.com/services" },
      { "@type": "ListItem", position: 3, name: "Shed Restoration", item: "https://perfectfinishpainter.com/shed-restoration" },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Shed Restoration & Painting",
    description: "Professional shed restoration including wood rot repair, scraping, sanding, priming, and weather-resistant exterior painting for sheds, outbuildings, and storage structures throughout Atlantic County NJ.",
    provider: { "@id": "https://perfectfinishpainter.com/#business" },
    areaServed: areaServedCities,
    url: "https://perfectfinishpainter.com/shed-restoration",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    speakable: {

      "@type": "SpeakableSpecification",

      cssSelector: [".speakable-q", ".speakable-a"],

    },
    mainEntity: [
      { "@type": "Question", name: "How much does shed restoration cost in Atlantic County NJ?", acceptedAnswer: { "@type": "Answer", text: "Most shed restoration projects in Atlantic County cost between $500 and $2,000 depending on size, condition, and how much repair work is needed. We provide free on-site estimates — call 609-377-4226." } },
      { "@type": "Question", name: "Can you fix rotted wood on my shed before painting?", acceptedAnswer: { "@type": "Answer", text: "Yes. We repair or replace rotted boards, patch damaged areas, and ensure the structure is solid before any paint goes on. Painting over rot just hides the problem — we fix it first." } },
      { "@type": "Question", name: "How long does a shed paint job last in South Jersey?", acceptedAnswer: { "@type": "Answer", text: "With proper prep and quality exterior paint, a shed paint job in South Jersey typically lasts 5-7 years. Salt air and humidity near the coast can shorten that, which is why we use weather-resistant products designed for the Atlantic County climate." } },
      { "@type": "Question", name: "Do you paint all types of sheds?", acceptedAnswer: { "@type": "Answer", text: "Yes. We paint and restore wood sheds, vinyl-sided sheds, metal sheds, and outbuildings of all sizes. Each material requires different prep and paint selection — we assess before quoting." } },
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
              <li className="text-[#1e3a5f] font-medium">Shed Restoration</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-6">Shed Restoration &amp; Painting in Atlantic County, NJ</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-[#64748b] text-lg mb-6 leading-relaxed">
                Your shed takes a beating from South Jersey weather — sun, rain, humidity, and salt air break down paint and rot out wood faster than most people realize. By the time it looks bad, the damage is already deep. We don&apos;t just slap paint on a rotting shed. We fix it first, then paint it right so it lasts.
              </p>
              <p className="text-[#64748b] text-lg mb-8 leading-relaxed">
                Whether your shed needs a fresh coat of paint or a full restoration with wood repair, scraping, sanding, and priming — we handle the whole job. We use weather-resistant exterior paint built to hold up in the Atlantic County climate so you&apos;re not doing this again in two years.
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
                <Image src="/shed-exterior-painting-before-after-mays-landing-nj.webp" alt="Before and after of a weathered tan wood shed in Mays Landing repainted white, with black double doors, black shutters, and black corner trim" width={600} height={450} className="w-full h-auto" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">What&apos;s Included in Shed Restoration?</h2></ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Full shed inspection and assessment",
              "Wood rot repair and board replacement",
              "Scraping and sanding loose or peeling paint",
              "Priming bare wood and repaired areas",
              "Weather-resistant exterior paint application",
              "Trim, door, and window frame painting",
              "Caulking gaps and sealing joints",
              "Free on-site estimate",
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
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">Why Restore Instead of Replace?</h2></ScrollReveal>
          <p className="text-[#64748b] text-lg leading-relaxed mb-4">
            A new shed costs thousands. A full restoration — wood repair, new paint, sealed joints — costs a fraction of that and gives you years more life out of the structure you already have. Most sheds we restore look brand new when we&apos;re done and hold up for 5-7 years before needing another coat.
          </p>
          <p className="text-[#64748b] text-lg leading-relaxed">
            We serve homeowners across <Link href="/painters-mays-landing-nj" className="text-[#2563eb] hover:underline">Mays Landing</Link>, <Link href="/painters-egg-harbor-township-nj" className="text-[#2563eb] hover:underline">Egg Harbor Township</Link>, <Link href="/painters-galloway-nj" className="text-[#2563eb] hover:underline">Galloway</Link>, <Link href="/painters-northfield-nj" className="text-[#2563eb] hover:underline">Northfield</Link>, and all of Atlantic County. If your shed is looking rough, give us a call — we&apos;ll come take a look and tell you honestly whether it makes sense to restore or if you&apos;re better off replacing it.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1e3a5f]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Can We Bring Your Old Shed Back to Life?</h2>
          <p className="text-white/70 text-lg mb-8">Free estimates. No pressure. Just honest work.</p>
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
