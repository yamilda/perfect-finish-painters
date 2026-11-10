import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "Open-Concept Living & Dining Repaint in South Jersey | Perfect Finish",
  description:
    "Drywall repair around the pass-through plus a full interior repaint tied this open-concept living and dining space together. A recent Perfect Finish project in South Jersey.",
  openGraph: {
    title: "Open-Concept Living & Dining Repaint in South Jersey",
    description: "Drywall repair and a full repaint that pulled an open-concept living and dining area together — a recent Perfect Finish project.",
    type: "article",
    locale: "en_US",
    url: "https://perfectfinishpainter.com/blog/open-concept-living-dining-repaint-south-jersey",
    images: [{ url: "/projects/open-concept-living-dining.webp", width: 1600, height: 767, alt: "Open-concept living and dining repaint before and after in South Jersey" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Open-Concept Living & Dining Repaint in South Jersey",
    description: "Drywall repair and a full repaint that pulled an open-concept living and dining area together — a recent Perfect Finish project.",
    images: ["/projects/open-concept-living-dining.webp"],
  },
  alternates: { canonical: "https://perfectfinishpainter.com/blog/open-concept-living-dining-repaint-south-jersey" },
};

export default function OpenConceptRepaintPost() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://perfectfinishpainter.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://perfectfinishpainter.com/blog" },
      { "@type": "ListItem", position: 3, name: "Open-Concept Living & Dining Repaint", item: "https://perfectfinishpainter.com/blog/open-concept-living-dining-repaint-south-jersey" },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Open-Concept Living & Dining Repaint in South Jersey",
    image: "https://perfectfinishpainter.com/projects/open-concept-living-dining.webp",
    author: { "@type": "Person", name: "Brandon Panameno", url: "https://perfectfinishpainter.com/about" },
    publisher: { "@type": "Organization", name: "Perfect Finish Painters", logo: { "@type": "ImageObject", url: "https://perfectfinishpainter.com/logo.webp" } },
    datePublished: "2026-06-07",
    dateModified: "2026-06-07",
    description: "A recent open-concept living and dining repaint in South Jersey — drywall repair around the pass-through plus a full interior repaint.",
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <div className="pt-28 sm:pt-36 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-[#64748b]">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-[#2563eb] transition-colors">Blog</Link></li>
              <li>/</li>
              <li className="text-[#1e3a5f] font-medium">Open-Concept Living &amp; Dining</li>
            </ol>
          </nav>
        </div>
      </div>

      <article className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#94a3b8] text-sm">Project Highlight · June 2026</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mt-2 mb-8">
            Open-Concept Living &amp; Dining Repaint in South Jersey
          </h1>

          <figure className="mb-8 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/projects/open-concept-living-dining.webp"
              alt="Open-concept living and dining repaint before and after — drywall repaired around the pass-through and the whole space repainted in South Jersey"
              width={1600}
              height={767}
              className="w-full h-auto"
              priority
            />
            <figcaption className="text-sm text-[#64748b] px-4 py-2 bg-[#f8fafc]">Before &amp; after: patched, mid-repair drywall on the left — a clean, cohesive open-concept space on the right.</figcaption>
          </figure>

          <div className="prose prose-lg max-w-none text-[#374151] space-y-6">
            <p className="text-lg leading-relaxed">
              Open-concept layouts look great, but they&apos;re harder to paint than they seem. When the living room flows into the dining area through a pass-through, every wall is visible from every angle — so a sloppy patch or an uneven color jumps right out. This South Jersey home needed drywall repair around the pass-through opening and a full repaint to tie the connected spaces together.
            </p>

            <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">What Did This Open-Concept Repaint Involve?</h2>
            <ul className="space-y-3 ml-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#2563eb] mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span><strong>Repaired the drywall</strong> around the pass-through opening — patched, taped, mudded, and sanded so the opening looks clean and built-in.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#2563eb] mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span><strong>Repainted the whole connected space</strong> in one consistent color so the living and dining areas read as one cohesive room.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#2563eb] mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span><strong>Protected the floors and big windows</strong> and cut clean lines around the trim, the slider, and the pass-through.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">Why Is Color Consistency Everything in an Open Layout?</h2>
            <p className="text-lg leading-relaxed">
              In a closed-off room, a small color or sheen variation hides. In an open-concept space, your eye travels across every surface at once, so any inconsistency stands out. We keep the color, the sheen, and the cut lines uniform across the whole connected area — that&apos;s what makes an open layout feel intentional and finished rather than pieced together.
            </p>

            <p className="text-lg leading-relaxed">
              Have an open living/dining/kitchen area that needs repair and a refresh? We handle the drywall and the repaint as one clean job across Mays Landing, Egg Harbor Township, and the South Jersey shore towns.
            </p>
          </div>

          <div className="mt-12 bg-[#f1f5f9] rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-3">Refreshing an Open-Concept Space?</h2>
            <p className="text-[#64748b] mb-6">Drywall repair + a cohesive repaint, done as one job. Get a free estimate from Perfect Finish Painters.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quiz" className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 shadow-lg">
                Get Free Estimate
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
              <a href="tel:+16093774226" className="border-2 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2">
                Call (609) 377-4226
              </a>
            </div>
          </div>
        </div>
      </article>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
