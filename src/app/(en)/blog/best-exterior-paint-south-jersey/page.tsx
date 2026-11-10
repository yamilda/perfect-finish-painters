import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "Best Exterior Paint for South Jersey Homes | Perfect Finish",
  description:
    "What's the best exterior paint for South Jersey homes? Which paints hold up to coastal humidity and salt air? Tips from Perfect Finish Painters, Mays Landing.",
  openGraph: {
    title: "Best Exterior Paint for South Jersey Homes",
    description: "Which exterior paints hold up best to South Jersey's coastal climate? Our recommendations.",
    type: "article",
    locale: "en_US",
    url: "https://perfectfinishpainter.com/blog/best-exterior-paint-south-jersey",
    images: [{ url: "/og-card.jpg", width: 1200, height: 630, alt: "Perfect Finish Painters — interior, exterior & drywall in Mays Landing, NJ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Exterior Paint for South Jersey Homes",
    description: "Which exterior paints hold up best to South Jersey's coastal climate? Our recommendations.",
    images: ["/og-card.jpg"],
  },
  alternates: { canonical: "https://perfectfinishpainter.com/blog/best-exterior-paint-south-jersey" },
};

export default function BestExteriorPaintPost() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://perfectfinishpainter.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://perfectfinishpainter.com/blog" },
      { "@type": "ListItem", position: 3, name: "Best Exterior Paint for South Jersey", item: "https://perfectfinishpainter.com/blog/best-exterior-paint-south-jersey" },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Exterior Paint for South Jersey Homes",
    image: "https://perfectfinishpainter.com/deck-exterior-painting-before-after-south-jersey-nj.webp",
    author: { "@type": "Person", name: "Brandon Panameno", url: "https://perfectfinishpainter.com/about" },
    publisher: { "@type": "Organization", name: "Perfect Finish Painters", logo: { "@type": "ImageObject", url: "https://perfectfinishpainter.com/logo.webp" } },
    datePublished: "2025-02-01",
    dateModified: "2025-02-01",
    description: "What's the best exterior paint for homes in South Jersey? Learn which paints hold up to coastal humidity, salt air, and seasonal weather.",
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
              <li className="text-[#1e3a5f] font-medium">Best Exterior Paint</li>
            </ol>
          </nav>
        </div>
      </div>

      <article className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#94a3b8] text-sm">February 2025</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mt-2 mb-8">
            Best Exterior Paint for South Jersey Homes
          </h1>

          <figure className="mb-8 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/deck-exterior-painting-before-after-south-jersey-nj.webp"
              alt="Before and after of weathered horizontal wood siding and a dark sliding door beside an unstained gray deck, refreshed to orange-brown siding with a white slider frame"
              width={1200}
              height={675}
              className="w-full h-auto"
            />
            <figcaption className="text-sm text-[#64748b] px-4 py-2 bg-[#f8fafc]">A recent South Jersey siding and sliding-door repaint — the kind of exterior coating discussed below.</figcaption>
          </figure>

          <div className="prose prose-lg max-w-none text-[#374151] space-y-6">
            <p className="text-lg leading-relaxed">
              Living near the Jersey Shore means your home&apos;s exterior takes a beating. Between the coastal humidity, salt air, UV exposure, and seasonal temperature swings, the wrong paint will fade, peel, or chalk within a couple of years. Choosing the right product makes the difference between a paint job that lasts 3 years and one that lasts 7+.
            </p>

            <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">What Should You Look For?</h2>
            <p className="text-lg leading-relaxed">
              For South Jersey exteriors, you want a paint that checks these boxes:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#2563eb] mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span><strong>100% acrylic latex</strong> — the gold standard for exterior durability. Acrylic resins flex with temperature changes instead of cracking.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#2563eb] mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span><strong>Built-in UV protection</strong> — prevents fading, especially on south-facing walls that get direct sun all day.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#2563eb] mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span><strong>Mildew resistance</strong> — essential near the coast where humidity stays high through summer.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#2563eb] mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span><strong>Good adhesion</strong> — sticks to previously painted, primed, or bare surfaces without peeling.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">What Do We Recommend?</h2>

            <h3 className="text-xl font-semibold text-[#1e3a5f] mt-6 mb-2">Benjamin Moore Aura Exterior</h3>
            <p className="text-lg leading-relaxed">
              Our go-to for most exterior jobs. Aura&apos;s Color Lock technology resists fading even on the darkest colors, and it handles South Jersey&apos;s humidity without blistering. It&apos;s self-priming on most surfaces, which saves time and money. Premium price, but it lasts significantly longer than budget options.
            </p>

            <h3 className="text-xl font-semibold text-[#1e3a5f] mt-6 mb-2">Sherwin-Williams Duration</h3>
            <p className="text-lg leading-relaxed">
              Another excellent choice. Duration has a thick, smooth formula that covers in fewer coats and resists peeling and blistering. Great for wood siding and trim. It includes a lifetime limited warranty, which says a lot about Sherwin-Williams&apos; confidence in the product.
            </p>

            <h3 className="text-xl font-semibold text-[#1e3a5f] mt-6 mb-2">Benjamin Moore Regal Select Exterior</h3>
            <p className="text-lg leading-relaxed">
              A solid mid-range option that still performs well in coastal conditions. Good UV and mildew resistance at a lower price point than Aura. We often recommend this for budget-conscious homeowners who still want a quality result.
            </p>

            <figure className="my-8 rounded-2xl overflow-hidden shadow-lg not-prose">
              <Image
                src="/exterior-siding-staining-before-after-egg-harbor-township-nj.webp"
                alt="Before and after of weathered horizontal wood siding and a dark sliding door on a deck in Egg Harbor Township, refreshed to orange-brown siding with a white slider frame"
                width={1200}
                height={675}
                className="w-full h-auto"
                loading="lazy"
              />
              <figcaption className="text-sm text-[#64748b] px-4 py-2 bg-[#f8fafc]">Horizontal wood siding and a sliding door in Egg Harbor Township, before and after a fresh exterior finish.</figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">Why Does Prep Matter More Than the Paint?</h2>
            <p className="text-lg leading-relaxed">
              Even the best paint will fail if the surface isn&apos;t properly prepared. Before any exterior job, we power wash, scrape loose paint, sand rough spots, prime bare wood, and caulk gaps. This prep work is what makes a paint job last 7+ years instead of 3. Skipping prep is the most common reason exterior paint fails early.
            </p>

            <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">How Often Should You Repaint?</h2>
            <p className="text-lg leading-relaxed">
              With quality paint and proper prep, most South Jersey exteriors last 5 to 7 years. Homes closer to the ocean may need attention sooner due to salt air. Watch for fading, chalking (a powdery residue when you rub the surface), peeling, or bare wood — those are signs it&apos;s time.
            </p>
            <p className="text-lg leading-relaxed">
              If you&apos;re unsure which sheen to choose, check out our guide on <Link href="/blog/difference-between-flat-and-satin-paint-finish" className="text-[#2563eb] underline hover:text-[#1d4ed8] transition-colors">the difference between flat and satin finishes</Link>.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-[#f1f5f9] rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-3">Need Your Exterior Painted?</h2>
            <p className="text-[#64748b] mb-6">Get a free estimate from Perfect Finish Painters. We use the products recommended in this guide.</p>
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
