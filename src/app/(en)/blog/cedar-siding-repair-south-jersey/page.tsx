import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "Cedar Siding Repair in South Jersey | Perfect Finish",
  description: "Get expert cedar siding repair in South Jersey from Perfect Finish Painters. Restore your home's exterior with our professional services in Mays Landing, NJ.",
  openGraph: {
    title: "Expert Cedar Siding Repair: Restoring Your South Jersey Home's Charm",
    description: "Get expert cedar siding repair in South Jersey from Perfect Finish Painters. Restore your home's exterior with our professional services in Mays Landing, NJ.",
    type: "article",
    locale: "en_US",
    url: "https://perfectfinishpainter.com/blog/cedar-siding-repair-south-jersey",
    images: [{ url: "/og-card.jpg", width: 1200, height: 630, alt: "Expert Cedar Siding Repair: Restoring Your South Jersey Home's Charm" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Cedar Siding Repair: Restoring Your South Jersey Home's Charm",
    description: "Get expert cedar siding repair in South Jersey from Perfect Finish Painters. Restore your home's exterior with our professional services in Mays Landing, NJ.",
    images: ["/og-card.jpg"],
  },
  alternates: { canonical: "https://perfectfinishpainter.com/blog/cedar-siding-repair-south-jersey" },
};

export default function BlogPost() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://perfectfinishpainter.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://perfectfinishpainter.com/blog" },
      { "@type": "ListItem", position: 3, name: "Expert Cedar Siding Repair: Restoring Your South Jersey Home's Charm", item: "https://perfectfinishpainter.com/blog/cedar-siding-repair-south-jersey" },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Expert Cedar Siding Repair: Restoring Your South Jersey Home's Charm",
    image: "https://perfectfinishpainter.com/exterior-siding-staining-before-after-egg-harbor-township-nj.webp",
    author: { "@type": "Person", name: "Brandon Panameno", url: "https://perfectfinishpainter.com/about" },
    publisher: { "@type": "Organization", name: "Perfect Finish Painters", logo: { "@type": "ImageObject", url: "https://perfectfinishpainter.com/logo.webp" } },
    datePublished: "2026-03-01",
    dateModified: "2026-03-01",
    description: "Get expert cedar siding repair in South Jersey from Perfect Finish Painters. Restore your home's exterior with our professional services in Mays Landing, NJ.",
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
              <li className="text-[#1e3a5f] font-medium">Cedar Siding Repair</li>
            </ol>
          </nav>
        </div>
      </div>

      <article className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#94a3b8] text-sm">March 2026</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mt-2 mb-8">
            Expert Cedar Siding Repair: Restoring Your South Jersey Home&apos;s Charm
          </h1>

          <figure className="mb-8 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/exterior-siding-staining-before-after-egg-harbor-township-nj.webp"
              alt="Before and after of weathered horizontal wood siding and a dark sliding door on a deck in Egg Harbor Township, refreshed to orange-brown siding with a white slider frame"
              width={1200}
              height={675}
              className="w-full h-auto"
            />
            <figcaption className="text-sm text-[#64748b] px-4 py-2 bg-[#f8fafc]">Horizontal wood siding and a sliding door in Egg Harbor Township, before and after the exterior finish.</figcaption>
          </figure>

          <div className="prose prose-lg max-w-none text-[#374151] space-y-6" dangerouslySetInnerHTML={{ __html: `<h2>What Makes Cedar Siding So Popular in South Jersey?</h2><p>Cedar siding is renowned for its timeless elegance and natural resistance to decay, making it a favorite among homeowners in South Jersey areas like Mays Landing, NJ. This wood type offers excellent insulation and a rustic charm that complements the region's coastal and suburban landscapes. However, exposure to harsh weather, moisture, and pests can lead to damage, necessitating professional cedar siding repair to maintain its integrity and appearance.</p><h2>What Are the Common Issues with Cedar Siding?</h2><p>Over time, cedar siding can face several challenges that affect its functionality and aesthetics. Recognizing these early can prevent costly replacements.</p><ul><li><strong>Rot and Decay:</strong> Moisture infiltration can cause wood rot, especially in humid South Jersey climates.</li><li><strong>Cracking and Splitting:</strong> Temperature fluctuations and sun exposure may lead to cracks in the siding.</li><li><strong>Insect Damage:</strong> Termites and other pests are common culprits in damaging cedar structures.</li><li><strong>Fading and Discoloration:</strong> UV rays can fade the natural color, requiring repainting or staining as part of South Jersey painting services.</li></ul><h3>Signs You Need Cedar Siding Repair</h3><p>Look out for visible warping, soft spots in the wood, or peeling paint. If you notice these, it's time to call in experts like Perfect Finish Painters for a thorough inspection.</p><h2>What Does the Cedar Siding Repair Process Look Like?</h2><p>At Perfect Finish Painters, our repair process is meticulous and tailored to South Jersey homes. We start with a detailed assessment to identify all issues.</p><ol><li><strong>Inspection:</strong> Evaluating the extent of damage.</li><li><strong>Preparation:</strong> Removing damaged sections and cleaning the area.</li><li><strong>Repair:</strong> Replacing boards, sealing gaps, and applying protective treatments.</li><li><strong>Finishing:</strong> Painting or staining to match your home's exterior, leveraging our expertise in South Jersey painting services.</li></ol><h3>Benefits of Professional Repair</h3><p>Opting for professional cedar siding repair ensures longevity, energy efficiency, and increased property value. Our team uses high-quality materials suited to the local environment, preventing future issues.</p><h2>Why Choose Perfect Finish Painters for Cedar Siding Repair in South Jersey?</h2><p>Based in Mays Landing, NJ, Perfect Finish Painters brings years of experience in exterior home improvements. We combine cedar siding repair with comprehensive South Jersey painting services to deliver stunning results. Our commitment to quality and customer satisfaction sets us apart in the region.</p>` }} />

          <figure className="my-8 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/shed-exterior-painting-before-after-mays-landing-nj.webp"
              alt="Before and after of a weathered tan wood shed in Mays Landing repainted white, with black double doors, black shutters, and black corner trim"
              width={1200}
              height={675}
              className="w-full h-auto"
              loading="lazy"
            />
            <figcaption className="text-sm text-[#64748b] px-4 py-2 bg-[#f8fafc]">A Mays Landing shed repainted from weathered tan wood to white, with black doors, shutters, and corner trim.</figcaption>
          </figure>

          <div className="mt-12 bg-[#f1f5f9] rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-3">Ready to Revive Your Cedar Siding?</h2>
            <p className="text-[#64748b] mb-6">Don&apos;t let damaged siding detract from your South Jersey home&apos;s beauty. Contact Perfect Finish Painters today for a free consultation on cedar siding repair and our expert painting services in Mays Landing, NJ. Let&apos;s restore your home to its perfect finish!</p>
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