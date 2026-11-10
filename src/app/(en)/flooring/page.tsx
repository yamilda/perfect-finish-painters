import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { areaServedCities } from "@/data/service-areas";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Flooring Installation in Atlantic County NJ | Perfect Finish",
  description:
    "Hardwood, laminate, vinyl plank & tile flooring installation in Atlantic County NJ. Pairs with a fresh paint job. Free estimate — 609-377-4226.",
  openGraph: {
    title: "Flooring Installation in Atlantic County NJ | Perfect Finish",
    description: "Hardwood, laminate, vinyl plank & tile flooring installation in Atlantic County NJ. Pairs with a fresh paint job. Free estimate — 609-377-4226.",
    type: "website",
    locale: "en_US",
    url: "https://perfectfinishpainter.com/flooring",
    images: [{ url: "/og-card.jpg", width: 1200, height: 630, alt: "Perfect Finish Painters — interior, exterior & drywall in Mays Landing, NJ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flooring Installation in Atlantic County NJ | Perfect Finish",
    description: "Hardwood, laminate, vinyl plank & tile flooring installation in Atlantic County NJ. Pairs with a fresh paint job. Free estimate — 609-377-4226.",
    images: ["/og-card.jpg"],
  },
  alternates: { canonical: "https://perfectfinishpainter.com/flooring" },
};

export default function FlooringPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://perfectfinishpainter.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://perfectfinishpainter.com/services" },
      { "@type": "ListItem", position: 3, name: "Flooring", item: "https://perfectfinishpainter.com/flooring" },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Flooring Installation",
    description: "Professional flooring installation including hardwood, laminate, vinyl plank, and tile. Includes subfloor preparation, leveling, and baseboard installation throughout South Jersey.",
    provider: { "@id": "https://perfectfinishpainter.com/#business" },
    areaServed: areaServedCities,
    url: "https://perfectfinishpainter.com/flooring",
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      <div className="pt-28 sm:pt-36 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-[#64748b]">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/services" className="hover:text-[#2563eb] transition-colors">Services</Link></li>
              <li>/</li>
              <li className="text-[#1e3a5f] font-medium">Flooring</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-6">Flooring Installation in South Jersey</h1>
              <p className="text-[#64748b] text-lg mb-6 leading-relaxed">
                Complete your renovation with professional flooring installation from Perfect Finish Painters. We install hardwood, laminate, vinyl plank, and tile flooring throughout Mays Landing and South Jersey — and it pairs perfectly with a fresh paint job.
              </p>
              <p className="text-[#64748b] text-lg mb-8 leading-relaxed">
                Flooring installation starts at <strong className="text-[#1e3a5f]">$3 per square foot</strong> for laminate and vinyl plank, with hardwood and tile priced based on material and room size. We include subfloor prep, leveling, and baseboard installation.
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
                <Image src="/bedroom-flooring-installation-painting-before-after-egg-harbor-township-nj.webp" alt="Before and after of a bedroom in Egg Harbor Township: bare OSB subfloor replaced with light wood-look vinyl plank, light gray walls, and white trim" width={600} height={450} className="w-full h-auto" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">What Flooring Types Do You Install?</h2></ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Hardwood flooring installation",
              "Laminate flooring installation",
              "Vinyl plank (LVP) flooring",
              "Tile flooring for kitchens & bathrooms",
              "Subfloor preparation & leveling",
              "Baseboard & transition strip installation",
              "Old flooring removal & disposal",
              "Pairs perfectly with a fresh paint job",
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
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">Where Do We Offer Flooring Installation in Atlantic County?</h2></ScrollReveal>
          <p className="text-[#64748b] text-lg leading-relaxed">
            We install flooring across Atlantic County — hardwood and luxury vinyl plank in <Link href="/painters-mays-landing-nj" className="text-[#2563eb] hover:underline">Mays Landing</Link>, <Link href="/painters-egg-harbor-township-nj" className="text-[#2563eb] hover:underline">Egg Harbor Township</Link>, <Link href="/painters-galloway-nj" className="text-[#2563eb] hover:underline">Galloway</Link>, <Link href="/painters-northfield-nj" className="text-[#2563eb] hover:underline">Northfield</Link>, and <Link href="/painters-linwood-nj" className="text-[#2563eb] hover:underline">Linwood</Link> residential builds, plus tile work in <Link href="/painters-hammonton-nj" className="text-[#2563eb] hover:underline">Hammonton</Link> historic renovations. Paired with our painting service, we can flip a room top-to-bottom in a single week.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1e3a5f]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready for New Floors?</h2>
          <p className="text-white/70 text-lg mb-8">Get a free estimate — we handle everything from removal to installation.</p>
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
