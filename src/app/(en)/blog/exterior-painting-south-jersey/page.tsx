import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "Exterior Painting in South Jersey | Perfect Finish Painters",
  description: "Boost your home's curb appeal with expert exterior painting in South Jersey. Perfect Finish Painters in Mays Landing, NJ, offers durable, professional services.",
  openGraph: {
    title: "Enhance Your Home's Curb Appeal with Professional Exterior Painting in South Jersey",
    description: "Boost your home's curb appeal with expert exterior painting in South Jersey. Perfect Finish Painters in Mays Landing, NJ, offers durable, professional services.",
    type: "article",
    locale: "en_US",
    url: "https://perfectfinishpainter.com/blog/exterior-painting-south-jersey",
    images: [{ url: "/og-card.jpg", width: 1200, height: 630, alt: "Perfect Finish Painters — interior, exterior & drywall in Mays Landing, NJ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enhance Your Home's Curb Appeal with Professional Exterior Painting in South Jersey",
    description: "Boost your home's curb appeal with expert exterior painting in South Jersey. Perfect Finish Painters in Mays Landing, NJ, offers durable, professional services.",
    images: ["/og-card.jpg"],
  },
  alternates: { canonical: "https://perfectfinishpainter.com/blog/exterior-painting-south-jersey" },
};

export default function BlogPost() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://perfectfinishpainter.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://perfectfinishpainter.com/blog" },
      { "@type": "ListItem", position: 3, name: "Enhance Your Home's Curb Appeal with Professional Exterior Painting in South Jersey", item: "https://perfectfinishpainter.com/blog/exterior-painting-south-jersey" },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Enhance Your Home's Curb Appeal with Professional Exterior Painting in South Jersey",
    image: "https://perfectfinishpainter.com/exterior-door-painting-black-linwood-nj.webp",
    author: { "@type": "Person", name: "Brandon Panameno", url: "https://perfectfinishpainter.com/about" },
    publisher: { "@type": "Organization", name: "Perfect Finish Painters", logo: { "@type": "ImageObject", url: "https://perfectfinishpainter.com/logo.webp" } },
    datePublished: "2026-03-01",
    dateModified: "2026-03-01",
    description: "Boost your home's curb appeal with expert exterior painting in South Jersey. Perfect Finish Painters in Mays Landing, NJ, offers durable, professional services.",
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
              <li className="text-[#1e3a5f] font-medium">Enhance Your Home&apos;s Curb Appeal</li>
            </ol>
          </nav>
        </div>
      </div>

      <article className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#94a3b8] text-sm">March 2026</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mt-2 mb-8">
            Enhance Your Home&apos;s Curb Appeal with Professional Exterior Painting in South Jersey
          </h1>

          <figure className="mb-8 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/exterior-door-painting-black-linwood-nj.webp"
              alt="Exterior front door painted black in Linwood NJ"
              width={1200}
              height={675}
              className="w-full h-auto"
            />
            <figcaption className="text-sm text-[#64748b] px-4 py-2 bg-[#f8fafc]">A small exterior touch — a repainted front door in Linwood — can completely change a home&apos;s curb appeal.</figcaption>
          </figure>

          <div className="prose prose-lg max-w-none text-[#374151] space-y-6" dangerouslySetInnerHTML={{ __html: `<h2>Why Does Exterior Painting Matter?</h2><p>Exterior painting is more than just a cosmetic upgrade—it's an essential investment in your home's longevity and value. For homeowners in South Jersey, including areas like Mays Landing, NJ, the coastal climate can take a toll on your property's exterior. At Perfect Finish Painters, we provide top-notch exterior painting services to protect and beautify your home.</p><h2>What Are the Benefits of Professional Exterior Painting?</h2><p>Choosing professional exterior painting in South Jersey offers numerous advantages:</p><ul><li><strong>Increased Curb Appeal:</strong> A fresh coat of paint can make your home stand out in the neighborhood.</li><li><strong>Protection from Weather:</strong> High-quality paints shield against rain, wind, and UV rays common in Mays Landing, NJ.</li><li><strong>Boosted Property Value:</strong> Well-maintained exteriors can increase your home's market value.</li><li><strong>Preventive Maintenance:</strong> Painting helps prevent issues like wood rot and mildew.</li></ul><h3>Why South Jersey Homes Need Specialized Care</h3><p>The humid summers and salty air in South Jersey demand paints that resist moisture and fading. Our team at Perfect Finish Painters uses premium, weather-resistant products designed for local conditions.</p><h2>What Does the Exterior Painting Process Involve?</h2><p>Our professional painters follow a meticulous process to ensure lasting results:</p><ol><li><strong>Inspection and Preparation:</strong> We assess surfaces and clean thoroughly.</li><li><strong>Priming:</strong> Applying primer for better adhesion.</li><li><strong>Painting:</strong> Using high-quality paints with even coverage.</li><li><strong>Finishing Touches:</strong> Sealing and cleanup for a perfect finish.</li></ol><h3>Tips for Choosing Colors</h3><p>When selecting colors for exterior painting in South Jersey, consider your home's architecture, neighborhood aesthetics, and natural surroundings. Neutral tones with bold accents work well in Mays Landing, NJ.</p><h2>Why Choose Perfect Finish Painters?</h2><p>As a trusted painting company in South Jersey, we bring years of experience, licensed professionals, and a commitment to customer satisfaction. Contact us for a free quote on exterior painting services today.</p>` }} />

          <figure className="my-8 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/front-door-refinishing-before-after-somers-point-nj.webp"
              alt="Front door refinishing before and after in Somers Point NJ"
              width={1200}
              height={675}
              className="w-full h-auto"
              loading="lazy"
            />
            <figcaption className="text-sm text-[#64748b] px-4 py-2 bg-[#f8fafc]">Front door refinishing in Somers Point — proper prep + a weather-rated exterior finish make these last.</figcaption>
          </figure>

          <div className="mt-12 bg-[#f1f5f9] rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-3">Ready to Refresh Your Home&apos;s Exterior?</h2>
            <p className="text-[#64748b] mb-6">Contact Perfect Finish Painters in Mays Landing, NJ, for expert exterior painting services in South Jersey. Our team is here to help you achieve a stunning, durable finish. Schedule your consultation now!</p>
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