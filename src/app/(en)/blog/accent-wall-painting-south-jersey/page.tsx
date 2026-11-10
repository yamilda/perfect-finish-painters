import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "Accent Wall Painting in South Jersey | Perfect Finish Painters",
  description:
    "A bold navy accent wall transformed this South Jersey living room. See how the right accent wall adds depth and drama to a space — color choice, prep, and crisp lines by Perfect Finish Painters.",
  openGraph: {
    title: "Accent Wall Painting in South Jersey",
    description: "How a single bold accent wall transformed a living room — a recent Perfect Finish project in South Jersey.",
    type: "article",
    locale: "en_US",
    url: "https://perfectfinishpainter.com/blog/accent-wall-painting-south-jersey",
    images: [{ url: "/projects/living-room-accent-wall.webp", width: 1600, height: 599, alt: "Living room accent wall before and after in South Jersey" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accent Wall Painting in South Jersey",
    description: "How a single bold accent wall transformed a living room — a recent Perfect Finish project in South Jersey.",
    images: ["/projects/living-room-accent-wall.webp"],
  },
  alternates: { canonical: "https://perfectfinishpainter.com/blog/accent-wall-painting-south-jersey" },
};

export default function AccentWallPost() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://perfectfinishpainter.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://perfectfinishpainter.com/blog" },
      { "@type": "ListItem", position: 3, name: "Accent Wall Painting in South Jersey", item: "https://perfectfinishpainter.com/blog/accent-wall-painting-south-jersey" },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Accent Wall Painting in South Jersey",
    image: "https://perfectfinishpainter.com/projects/living-room-accent-wall.webp",
    author: { "@type": "Person", name: "Brandon Panameno", url: "https://perfectfinishpainter.com/about" },
    publisher: { "@type": "Organization", name: "Perfect Finish Painters", logo: { "@type": "ImageObject", url: "https://perfectfinishpainter.com/logo.webp" } },
    datePublished: "2026-06-07",
    dateModified: "2026-06-07",
    description: "A recent accent wall painting project in South Jersey — a bold navy feature wall that added depth and drama to a living room.",
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
              <li className="text-[#1e3a5f] font-medium">Accent Wall Painting</li>
            </ol>
          </nav>
        </div>
      </div>

      <article className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#94a3b8] text-sm">Project Highlight · June 2026</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mt-2 mb-8">
            Accent Wall Painting in South Jersey
          </h1>

          <figure className="mb-8 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/projects/living-room-accent-wall.webp"
              alt="Living room accent wall before and after — a plain wall turned into a bold navy feature wall in South Jersey"
              width={1600}
              height={599}
              className="w-full h-auto"
              priority
            />
            <figcaption className="text-sm text-[#64748b] px-4 py-2 bg-[#f8fafc]">Before &amp; after: a plain wall on the left, a bold navy feature wall that anchors the whole room on the right.</figcaption>
          </figure>

          <div className="prose prose-lg max-w-none text-[#374151] space-y-6">
            <p className="text-lg leading-relaxed">
              An accent wall is one of the highest-impact, lowest-cost upgrades you can make to a room. Paint a single wall a deep, saturated color and a flat, forgettable space suddenly has depth, a focal point, and a designer feel. For this South Jersey living room, we took the vaulted-ceiling wall and turned it into a rich navy feature that pulls the whole room together.
            </p>

            <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">Why Does an Accent Wall Work?</h2>
            <p className="text-lg leading-relaxed">
              The magic of an accent wall is contrast. Against the light walls and the warm wood floor, a deep navy reads as bold but not overwhelming, and the recessed lighting makes the color glow rather than feel heavy. Choosing the right wall matters too — the wall with the vaulted angle and the window draws the eye naturally, so it&apos;s the perfect candidate.
            </p>

            <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">How Do You Get Crisp Lines on a Dark Color?</h2>
            <p className="text-lg leading-relaxed">
              Dark accent colors are unforgiving — every wavy line or bleed-through shows. That&apos;s where the work is:
            </p>
            <ul className="space-y-3 ml-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#2563eb] mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span><strong>Clean cut lines</strong> where the accent meets the ceiling, adjacent walls, and trim — razor-straight, no bleed.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#2563eb] mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span><strong>Full, even coverage</strong> — dark colors usually need extra coats to avoid a patchy, streaky look. We build it up until it&apos;s solid.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#2563eb] mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span><strong>The right wall and color</strong> — we help you pick both so it lands as intentional, not random.</span>
              </li>
            </ul>

            <p className="text-lg leading-relaxed">
              Thinking about an accent wall in your living room, bedroom, or office? We&apos;ll help you choose the wall and the color, and we&apos;ll get the lines crisp — across Mays Landing, Egg Harbor Township, and the South Jersey shore towns.
            </p>
          </div>

          <div className="mt-12 bg-[#f1f5f9] rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-3">Want an Accent Wall That Pops?</h2>
            <p className="text-[#64748b] mb-6">We&apos;ll help with the color and nail the lines. Get a free estimate from Perfect Finish Painters.</p>
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
