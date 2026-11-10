import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "Kitchen Drywall Repair in South Jersey | Perfect Finish",
  description:
    "A damaged kitchen wall patched seamless and repainted. Drywall repair by Perfect Finish Painters in South Jersey.",
  openGraph: {
    title: "Kitchen Drywall Repair & Repaint in South Jersey",
    description: "Seamless drywall repair and a clean repaint that makes the patch disappear — a recent Perfect Finish kitchen project.",
    type: "article",
    locale: "en_US",
    url: "https://perfectfinishpainter.com/blog/kitchen-drywall-repair-south-jersey",
    images: [{ url: "/og-card.jpg", width: 1200, height: 630, alt: "Perfect Finish Painters — interior, exterior & drywall in Mays Landing, NJ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kitchen Drywall Repair & Repaint in South Jersey",
    description: "Seamless drywall repair and a clean repaint that makes the patch disappear — a recent Perfect Finish kitchen project.",
    images: ["/og-card.jpg"],
  },
  alternates: { canonical: "https://perfectfinishpainter.com/blog/kitchen-drywall-repair-south-jersey" },
};

export default function KitchenDrywallRepairPost() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://perfectfinishpainter.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://perfectfinishpainter.com/blog" },
      { "@type": "ListItem", position: 3, name: "Kitchen Drywall Repair in South Jersey", item: "https://perfectfinishpainter.com/blog/kitchen-drywall-repair-south-jersey" },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Kitchen Drywall Repair & Repaint in South Jersey",
    image: "https://perfectfinishpainter.com/projects/kitchen-drywall-repair.webp",
    author: { "@type": "Person", name: "Brandon Panameno", url: "https://perfectfinishpainter.com/about" },
    publisher: { "@type": "Organization", name: "Perfect Finish Painters", logo: { "@type": "ImageObject", url: "https://perfectfinishpainter.com/logo.webp" } },
    datePublished: "2026-06-07",
    dateModified: "2026-06-07",
    description: "A recent kitchen drywall repair and repaint in South Jersey — patched, damaged drywall made seamless and freshly painted.",
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
              <li className="text-[#1e3a5f] font-medium">Kitchen Drywall Repair</li>
            </ol>
          </nav>
        </div>
      </div>

      <article className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#94a3b8] text-sm">Project Highlight · June 2026</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mt-2 mb-8">
            Kitchen Drywall Repair &amp; Repaint in South Jersey
          </h1>

          <figure className="mb-8 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/projects/kitchen-drywall-repair.webp"
              alt="Kitchen drywall repair before and after — a patched, damaged wall made seamless and repainted in South Jersey"
              width={1600}
              height={1065}
              className="w-full h-auto"
              priority
            />
            <figcaption className="text-sm text-[#64748b] px-4 py-2 bg-[#f8fafc]">Before &amp; after: a damaged, patched wall behind the counter — repaired seamless and repainted.</figcaption>
          </figure>

          <div className="prose prose-lg max-w-none text-[#374151] space-y-6">
            <p className="text-lg leading-relaxed">
              Kitchens take a beating. Plumbing access, an old backsplash removal, a wall outlet that got chewed up — and you&apos;re left with gouged, patched drywall that catches the eye every time you walk in. This South Jersey kitchen had exactly that: a rough, cut-up section of wall behind the counter. The fix isn&apos;t just slapping mud on it — it&apos;s repairing it so the patch disappears.
            </p>

            <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">What Did This Kitchen Drywall Repair Involve?</h2>
            <ul className="space-y-3 ml-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#2563eb] mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span><strong>Cut out and patched</strong> the damaged drywall, then taped and mudded the seams so the repair is structurally sound.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#2563eb] mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span><strong>Feathered and sanded</strong> the joint compound out wide so there&apos;s no ridge or bump where the patch meets the original wall.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#2563eb] mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span><strong>Primed and repainted</strong> the wall so the color and sheen are uniform — you can&apos;t tell where the damage was.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">Why Does the Patch Have to Disappear?</h2>
            <p className="text-lg leading-relaxed">
              A bad drywall repair is almost worse than the damage — you get a raised, glossy patch that stands out under kitchen lighting. The trick is in the feathering and the priming: spreading the compound out far enough and priming so the repaired area doesn&apos;t flash a different sheen than the rest of the wall. Done right, the wall just looks like a wall again.
            </p>

            <p className="text-lg leading-relaxed">
              Have damaged drywall in your kitchen, bathroom, or anywhere else? We repair and repaint it seamlessly across Mays Landing, Egg Harbor Township, and the South Jersey shore towns.
            </p>
          </div>

          <div className="mt-12 bg-[#f1f5f9] rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-3">Got Drywall Damage to Fix?</h2>
            <p className="text-[#64748b] mb-6">We repair it so the patch disappears, then repaint to match. Get a free estimate from Perfect Finish Painters.</p>
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
