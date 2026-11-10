import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "Bathroom Repaint in South Jersey | Perfect Finish Painters",
  description:
    "A tired bathroom refreshed with a clean repaint — walls, trim, and beadboard ceiling — using moisture-resistant paint built for South Jersey humidity. A recent Perfect Finish project.",
  openGraph: {
    title: "Bathroom Repaint in South Jersey",
    description: "A dated bathroom brought back to life with the right moisture-resistant paint and crisp prep — a recent Perfect Finish project.",
    type: "article",
    locale: "en_US",
    url: "https://perfectfinishpainter.com/blog/bathroom-repaint-south-jersey",
    images: [{ url: "/projects/bathroom-repaint.webp", width: 1600, height: 1218, alt: "Bathroom repaint before and after in South Jersey" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Repaint in South Jersey",
    description: "A dated bathroom brought back to life with the right moisture-resistant paint and crisp prep — a recent Perfect Finish project.",
    images: ["/projects/bathroom-repaint.webp"],
  },
  alternates: { canonical: "https://perfectfinishpainter.com/blog/bathroom-repaint-south-jersey" },
};

export default function BathroomRepaintPost() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://perfectfinishpainter.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://perfectfinishpainter.com/blog" },
      { "@type": "ListItem", position: 3, name: "Bathroom Repaint in South Jersey", item: "https://perfectfinishpainter.com/blog/bathroom-repaint-south-jersey" },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Bathroom Repaint in South Jersey",
    image: "https://perfectfinishpainter.com/projects/bathroom-repaint.webp",
    author: { "@type": "Person", name: "Brandon Panameno", url: "https://perfectfinishpainter.com/about" },
    publisher: { "@type": "Organization", name: "Perfect Finish Painters", logo: { "@type": "ImageObject", url: "https://perfectfinishpainter.com/logo.webp" } },
    datePublished: "2026-06-07",
    dateModified: "2026-06-07",
    description: "A recent bathroom repaint in South Jersey — walls, trim, and beadboard ceiling refreshed with moisture-resistant paint.",
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
              <li className="text-[#1e3a5f] font-medium">Bathroom Repaint</li>
            </ol>
          </nav>
        </div>
      </div>

      <article className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#94a3b8] text-sm">Project Highlight · June 2026</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mt-2 mb-8">
            Bathroom Repaint in South Jersey
          </h1>

          <figure className="mb-8 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/projects/bathroom-repaint.webp"
              alt="Bathroom repaint before and after — walls, trim, and beadboard ceiling refreshed in South Jersey"
              width={1600}
              height={1218}
              className="w-full h-auto"
              priority
            />
            <figcaption className="text-sm text-[#64748b] px-4 py-2 bg-[#f8fafc]">Before &amp; after: a tired bathroom refreshed top to bottom with a clean, moisture-ready finish.</figcaption>
          </figure>

          <div className="prose prose-lg max-w-none text-[#374151] space-y-6">
            <p className="text-lg leading-relaxed">
              A fresh coat of paint is the fastest, most affordable way to make a dated bathroom feel new again — but bathrooms are also one of the trickiest rooms to paint well. Constant moisture, steam, and temperature swings will chew through the wrong paint fast. For this South Jersey bathroom, the goal was a clean, bright update that actually holds up to daily showers.
            </p>

            <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">What Did This Bathroom Repaint Involve?</h2>
            <ul className="space-y-3 ml-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#2563eb] mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span><strong>Prepped for moisture</strong> — cleaned the surfaces, addressed any flaking, and primed so the new paint bonds and resists peeling in a humid room.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#2563eb] mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span><strong>Used the right paint</strong> — a mildew-resistant, washable finish made for bathrooms, so steam and splashes wipe clean instead of staining.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#2563eb] mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span><strong>Painted walls, trim, and the beadboard ceiling</strong> — crisp cut lines around the vanity, window, and fixtures for a finished, intentional look.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">Why Does the Paint Matter in a Bathroom?</h2>
            <p className="text-lg leading-relaxed">
              In most rooms you can get away with a standard finish. Not in a bathroom. The combination of humidity and frequent cleaning means you want a paint specifically formulated to resist mildew and stand up to wiping. Pair that with proper prep and the room stays looking fresh for years instead of peeling at the corners after a season of hot showers.
            </p>

            <p className="text-lg leading-relaxed">
              Thinking about refreshing a bathroom, powder room, or laundry room? We handle the prep and the right products across Mays Landing, Egg Harbor Township, and the South Jersey shore towns. Not sure on sheen? See our guide on <Link href="/blog/difference-between-flat-and-satin-paint-finish" className="text-[#2563eb] underline hover:text-[#1d4ed8] transition-colors">flat vs. satin finishes</Link>.
            </p>
          </div>

          <div className="mt-12 bg-[#f1f5f9] rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-3">Ready to Refresh Your Bathroom?</h2>
            <p className="text-[#64748b] mb-6">We use moisture-resistant paint and proper prep so it lasts. Get a free estimate from Perfect Finish Painters.</p>
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
