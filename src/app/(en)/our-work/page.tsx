import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollReveal from "@/components/ScrollReveal";
import OurWorkGallery from "@/components/OurWorkGallery";



export const metadata: Metadata = {
  title: "Our Work | Perfect Finish Painters Project Gallery",
  description:
    "See the transformations Perfect Finish Painters has created across South Jersey — interior, exterior, drywall repair, flooring, and more. View our gallery.",
  openGraph: {
    title: "Our Work | Perfect Finish Painters — Project Gallery",
    description: "See the transformations Perfect Finish Painters has created across South Jersey. Browse our project gallery.",
    type: "website",
    locale: "en_US",
    url: "https://perfectfinishpainter.com/our-work",
    images: [{ url: "/og-card.jpg", width: 1200, height: 630, alt: "Perfect Finish Painters — interior, exterior & drywall in Mays Landing, NJ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work | Perfect Finish Painters — Project Gallery",
    description: "See the transformations Perfect Finish Painters has created across South Jersey. Browse our project gallery.",
    images: ["/og-card.jpg"],
  },
  alternates: {
    canonical: "https://perfectfinishpainter.com/our-work",
  },
};

export default function OurWorkPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://perfectfinishpainter.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Our Work",
        item: "https://perfectfinishpainter.com/our-work",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1e3a5f]">
          <Image
            src="/shed-exterior-painting-before-after-mays-landing-nj.webp"
            alt=""
            aria-hidden
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a5f]/80 via-[#1e3a5f]/60 to-[#1e3a5f]" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <span className="inline-block bg-[#2563eb]/20 text-[#60a5fa] text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-[#2563eb]/30">
              Portfolio & Transformations
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              See What a <span className="text-[#60a5fa]">Perfect Finish</span> Looks Like
            </h1>
            <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
              Real projects. Real transformations. Browse our work and see why South Jersey homeowners trust us with their spaces.
            </p>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal>
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mt-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <div className="text-3xl sm:text-4xl font-bold text-white">100+</div>
                <div className="text-white/70 text-xs sm:text-sm mt-1">Projects Done</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <div className="text-3xl sm:text-4xl font-bold text-[#60a5fa]">5.0</div>
                <div className="text-white/70 text-xs sm:text-sm mt-1">Star Rating</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <div className="text-3xl sm:text-4xl font-bold text-white">0</div>
                <div className="text-white/70 text-xs sm:text-sm mt-1">Complaints</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our approach — intro section before the gallery. Adds substance + context to a
          page that was otherwise mostly images, and gives crawlers real text to index. */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-6">
              How Every Perfect Finish Project Comes Together
            </h2>
            <p className="text-[#64748b] text-lg leading-relaxed mb-5">
              Every project in the gallery below started the same way — a free in-home walkthrough, an itemized written estimate, and a clear start date. From there the work follows our four-step rhythm: <strong>prep, prime, paint, protect.</strong> No shortcuts on the part you don&apos;t see.
            </p>
            <p className="text-[#64748b] text-lg leading-relaxed mb-5">
              <strong>Prep</strong> is the longest stage and the one that decides how long the finish lasts. We scrape, sand, fill cracks and nail pops, patch drywall, caulk seams, and mask every surface that isn&apos;t getting painted — floors, fixtures, hardware, plants on exterior jobs. On older South Jersey homes we often address peeling paint, plaster repair, or moisture issues before any new coat goes on.
            </p>
            <p className="text-[#64748b] text-lg leading-relaxed mb-5">
              <strong>Prime</strong> matters more than most homeowners realize. The right primer locks the surface, evens absorption, and stops bleed-through. We use high-adhesion primers on glossy surfaces, stain-blocking primers over water marks, and rust-inhibiting primers on metal. On coastal exteriors we back-prime new wood and seal end-grain — small details that decide whether the paint film survives salt air.
            </p>
            <p className="text-[#64748b] text-lg leading-relaxed mb-5">
              <strong>Paint</strong> is the visible part. We use premium Sherwin-Williams and Benjamin Moore products on interiors and marine-grade exterior coatings on shore homes — never the cheapest gallon to pad margin. Two coats minimum on every project, cut lines clean, and brush and roller marks knocked down so the finish reads smooth.
            </p>
            <p className="text-[#64748b] text-lg leading-relaxed">
              <strong>Protect</strong> is the cleanup. Dropcloths and plastic come up daily so you can use the rest of the home, fixtures and outlet covers go back on, hardware reinstalls clean, and the room is walk-through ready when we leave. You shouldn&apos;t be able to tell painters were in your home outside of the room that got the work.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Project Gallery — not wrapped in ScrollReveal because the gallery is too tall
          to ever hit a 15% intersection threshold, which left it stuck at opacity:0.
          Each card already has its own fadeSlideUp animation in OurWorkGallery.tsx. */}
      <OurWorkGallery />

      {/* Before & After Callout */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2563eb] rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Every Project Gets the Perfect Finish Treatment
                </h2>
                <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                  Prep. Prime. Paint. Protect. We don&apos;t cut corners — we paint them. Every surface gets proper preparation, premium paint, and our signature attention to detail.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
                  <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="text-2xl mb-1">🛡️</div>
                    <div className="text-white font-semibold text-sm">Full Surface Prep</div>
                  </div>
                  <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="text-2xl mb-1">🎨</div>
                    <div className="text-white font-semibold text-sm">Premium Paints</div>
                  </div>
                  <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="text-2xl mb-1">✨</div>
                    <div className="text-white font-semibold text-sm">Clean Edges</div>
                  </div>
                  <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="text-2xl mb-1">🧹</div>
                    <div className="text-white font-semibold text-sm">Spotless Cleanup</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Follow Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
              See More on Social Media
            </h2>
            <p className="text-[#64748b] max-w-2xl mx-auto text-lg mb-8">
              Follow us for behind-the-scenes videos, project updates, and tips from our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.facebook.com/PerfectFinishPainters"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1877f2] hover:bg-[#166fe5] text-white px-6 py-3 rounded-full font-semibold transition-colors shadow-lg shadow-blue-500/25"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Follow on Facebook
              </a>
              <a
                href="https://www.instagram.com/perfectfinishpainter/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] hover:opacity-90 text-white px-6 py-3 rounded-full font-semibold transition-opacity shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Follow on Instagram
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1e3a5f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2563eb] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#60a5fa] rounded-full blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready for Your Own Transformation?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
              Get a free personalized estimate in 60 seconds. No pressure, no spam — just honest pricing for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quiz"
                className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
              >
                Start 60-Second Quiz
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="tel:+16093774226"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
              >
                Call (609) 377-4226
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
