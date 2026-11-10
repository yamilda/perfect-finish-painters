import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "Garage Drywall Finishing & Painting in South Jersey | Perfect Finish",
  description:
    "See how we turned a bare, taped-drywall garage into a clean, fully finished and painted space in South Jersey. Drywall finishing, ceiling and wall painting by Perfect Finish Painters.",
  openGraph: {
    title: "Garage Drywall Finishing & Painting in South Jersey",
    description: "Bare taped drywall to a fully finished, painted garage — a recent Perfect Finish project in South Jersey.",
    type: "article",
    locale: "en_US",
    url: "https://perfectfinishpainter.com/blog/garage-drywall-finishing-south-jersey",
    images: [{ url: "/projects/garage-finishing-1.webp", width: 1600, height: 599, alt: "Garage drywall finishing before and after in South Jersey" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Drywall Finishing & Painting in South Jersey",
    description: "Bare taped drywall to a fully finished, painted garage — a recent Perfect Finish project in South Jersey.",
    images: ["/projects/garage-finishing-1.webp"],
  },
  alternates: { canonical: "https://perfectfinishpainter.com/blog/garage-drywall-finishing-south-jersey" },
};

export default function GarageDrywallFinishingPost() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://perfectfinishpainter.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://perfectfinishpainter.com/blog" },
      { "@type": "ListItem", position: 3, name: "Garage Drywall Finishing in South Jersey", item: "https://perfectfinishpainter.com/blog/garage-drywall-finishing-south-jersey" },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Garage Drywall Finishing & Painting in South Jersey",
    image: "https://perfectfinishpainter.com/projects/garage-finishing-1.webp",
    author: { "@type": "Person", name: "Brandon Panameno", url: "https://perfectfinishpainter.com/about" },
    publisher: { "@type": "Organization", name: "Perfect Finish Painters", logo: { "@type": "ImageObject", url: "https://perfectfinishpainter.com/logo.webp" } },
    datePublished: "2026-06-07",
    dateModified: "2026-06-07",
    description: "A recent garage drywall finishing and painting project in South Jersey — from bare, taped drywall to a clean, fully finished and painted space.",
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
              <li className="text-[#1e3a5f] font-medium">Garage Drywall Finishing</li>
            </ol>
          </nav>
        </div>
      </div>

      <article className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#94a3b8] text-sm">Project Highlight · June 2026</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mt-2 mb-8">
            Garage Drywall Finishing &amp; Painting in South Jersey
          </h1>

          <figure className="mb-8 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/projects/garage-finishing-1.webp"
              alt="Garage drywall finishing before and after — bare taped drywall transformed into a smooth painted wall in South Jersey"
              width={1600}
              height={599}
              className="w-full h-auto"
              priority
            />
            <figcaption className="text-sm text-[#64748b] px-4 py-2 bg-[#f8fafc]">Before &amp; after: bare, taped drywall on the left — a smooth, fully painted wall on the right.</figcaption>
          </figure>

          <div className="prose prose-lg max-w-none text-[#374151] space-y-6">
            <p className="text-lg leading-relaxed">
              A garage doesn&apos;t have to look like a garage. This South Jersey homeowner had a big garage space with the drywall hung and taped but nowhere near finished — raw seams, exposed screw heads, and that rough, gray look you get before any real finishing happens. They wanted it turned into a clean, bright, usable room. Here&apos;s how we got there.
            </p>

            <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">What Was the Starting Point?</h2>
            <p className="text-lg leading-relaxed">
              The walls and ceiling were hung and the joints were taped, but that&apos;s only step one. Taped drywall has visible seams, dimples over every screw, and an uneven surface that shows every flaw once the light hits it. Paint over that as-is and you&apos;ll see every joint and fastener for the life of the room. The whole space needed to be properly finished before a drop of paint went on.
            </p>

            <figure className="my-8 rounded-2xl overflow-hidden shadow-lg not-prose">
              <Image
                src="/projects/garage-finishing-2.webp"
                alt="Garage with taped drywall and a scaffold mid-project, then the finished painted walls and ceiling in South Jersey"
                width={1600}
                height={599}
                className="w-full h-auto"
                loading="lazy"
              />
              <figcaption className="text-sm text-[#64748b] px-4 py-2 bg-[#f8fafc]">Mid-finishing on the left, the completed room on the right — clean walls, finished ceiling, ready to use.</figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">What Did the Garage Drywall Finishing Involve?</h2>
            <ul className="space-y-3 ml-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#2563eb] mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span><strong>Finished the drywall</strong> — coated and feathered every seam, filled the screw dimples, and sanded the whole space smooth so no joints telegraph through the paint.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#2563eb] mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span><strong>Primed everything</strong> — fresh drywall and joint compound drink up paint unevenly, so a full primer coat was essential for a uniform finish.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#2563eb] mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span><strong>Painted walls and ceiling</strong> — a clean, bright finish that makes the whole space feel like a real room instead of a garage.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#2563eb] mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span><strong>Protected the trim and windows</strong> — crisp cut lines around every window so the finished room looks sharp, not sloppy.</span>
              </li>
            </ul>

            <figure className="my-8 rounded-2xl overflow-hidden shadow-lg not-prose">
              <Image
                src="/projects/garage-finishing-3.webp"
                alt="Finished and painted garage interior with clean walls and ceiling in South Jersey"
                width={1600}
                height={599}
                className="w-full h-auto"
                loading="lazy"
              />
              <figcaption className="text-sm text-[#64748b] px-4 py-2 bg-[#f8fafc]">The finished space — smooth, bright, and ready for whatever the homeowner wants to use it for.</figcaption>
            </figure>

            <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">Why Does Finishing the Drywall Matter?</h2>
            <p className="text-lg leading-relaxed">
              Whether you&apos;re turning a garage into a gym, a workshop, a bonus room, or just want it looking finished, the difference is in the prep. A properly finished and primed surface is what makes paint look smooth and professional — and it&apos;s exactly the step a lot of homeowners (and some contractors) try to rush. We don&apos;t. The result is a room that looks built, not patched together.
            </p>

            <p className="text-lg leading-relaxed">
              Got a garage, basement, or addition with bare or taped drywall? We handle the whole thing — finishing, priming, and painting — across Mays Landing, Egg Harbor Township, and the South Jersey shore towns. Curious about paint sheen for a space like this? See our guide on <Link href="/blog/difference-between-flat-and-satin-paint-finish" className="text-[#2563eb] underline hover:text-[#1d4ed8] transition-colors">flat vs. satin finishes</Link>.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-[#f1f5f9] rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-3">Have a Space That Needs Finishing?</h2>
            <p className="text-[#64748b] mb-6">Garage, basement, addition — we finish the drywall and paint it right. Get a free estimate from Perfect Finish Painters.</p>
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
