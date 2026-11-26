import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { areaServedCities } from "@/data/service-areas";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Exterior House Painters, Atlantic County NJ | Perfect Finish",
  description:
    "Exterior house painters in Atlantic County NJ: siding, stucco, trim, doors and shutters, prepped for shore weather. 5.0 on Google. Free estimate: 609-377-4226.",
  openGraph: {
    title: "Exterior House Painters, Atlantic County NJ | Perfect Finish",
    description: "Exterior house painters in Atlantic County NJ: siding, stucco, trim, doors and shutters, prepped for shore weather. 5.0 on Google. Free estimate: 609-377-4226.",
    type: "website",
    locale: "en_US",
    url: "https://perfectfinishpainter.com/exterior-painting",
    images: [{ url: "/og-card.jpg", width: 1200, height: 630, alt: "Perfect Finish Painters — interior, exterior & drywall in Mays Landing, NJ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exterior House Painters, Atlantic County NJ | Perfect Finish",
    description: "Exterior house painters in Atlantic County NJ: siding, stucco, trim, doors and shutters, prepped for shore weather. 5.0 on Google. Free estimate: 609-377-4226.",
    images: ["/og-card.jpg"],
  },
  alternates: { canonical: "https://perfectfinishpainter.com/exterior-painting" },
};

// Real exterior jobs. New job photos drop in here: add an entry with its file in /public.
const exteriorProjects = [
  { src: "/front-door-refinishing-before-after-somers-point-nj.webp", width: 3076, height: 2048, town: "Somers Point", title: "Front door refinish", alt: "Front door refinishing before and after in Somers Point NJ" },
  { src: "/garage-door-painting-wood-stain-before-after-brigantine-nj.webp", width: 3076, height: 2048, town: "Brigantine", title: "Garage door wood-grain finish", alt: "Before and after of a carriage-style garage door in Brigantine: white panels refinished to a brown wood-grain look, with gray shingle siding and a white frame" },
  { src: "/shed-exterior-painting-before-after-mays-landing-nj.webp", width: 1440, height: 1440, town: "Mays Landing", title: "Shed repaint with black trim", alt: "Before and after of a weathered tan wood shed in Mays Landing repainted white, with black double doors, black shutters, and black corner trim" },
  { src: "/exterior-door-painting-black-linwood-nj.webp", width: 1440, height: 1920, town: "Linwood", title: "Exterior door repaint", alt: "A black six-panel exterior door with white trim set against beige horizontal siding" },
  { src: "/fence-gate-painting-black-northfield-nj.webp", width: 1200, height: 1600, town: "Northfield", title: "Fence and gate painting", alt: "Black pointed-picket wooden fence with a lattice skirt, painted beside a house with purple siding and a brick chimney" },
];

export default function ExteriorPaintingPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://perfectfinishpainter.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://perfectfinishpainter.com/services" },
      { "@type": "ListItem", position: 3, name: "Exterior Painting", item: "https://perfectfinishpainter.com/exterior-painting" },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Exterior Painting",
    alternateName: "Exterior House Painting",
    description: "Full exterior painting for siding, stucco, brick, shutters, doors, trim, and fascia. Includes power washing, scraping, priming, and weather-resistant acrylic latex paint application.",
    image: exteriorProjects.map((p) => `https://perfectfinishpainter.com${p.src}`),
    provider: { "@id": "https://perfectfinishpainter.com/#business" },
    areaServed: areaServedCities,
    url: "https://perfectfinishpainter.com/exterior-painting",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    speakable: {

      "@type": "SpeakableSpecification",

      cssSelector: [".speakable-q", ".speakable-a"],

    },
    mainEntity: [
      { "@type": "Question", name: "How often should I repaint my house exterior in New Jersey?", acceptedAnswer: { "@type": "Answer", text: "Exterior paint in NJ typically lasts 5-7 years. Homes near the shore in Margate, Ventnor, and Brigantine may need repainting sooner due to salt air and humidity." } },
      { "@type": "Question", name: "What is the best exterior paint for South Jersey homes?", acceptedAnswer: { "@type": "Answer", text: "We recommend 100% acrylic latex paint with UV and mildew resistance. Benjamin Moore Aura Exterior and Sherwin-Williams Duration hold up well against coastal humidity and temperature swings." } },
      { "@type": "Question", name: "Do you power wash before exterior painting?", acceptedAnswer: { "@type": "Answer", text: "Yes. Every exterior job includes power washing, scraping loose paint, sanding rough areas, priming bare wood, and caulking gaps before we apply any paint." } },
      { "@type": "Question", name: "How much does exterior painting cost in Atlantic County NJ?", acceptedAnswer: { "@type": "Answer", text: "Exterior pricing depends on the size of your home, number of stories, surface condition, and materials. We provide free on-site estimates — call 609-377-4226." } },
      { "@type": "Question", name: "Do you paint vinyl siding?", acceptedAnswer: { "@type": "Answer", text: "Yes. We paint vinyl, aluminum, wood, stucco, and brick exteriors. Each surface requires different prep and paint selection — we assess before quoting." } },
      { "@type": "Question", name: "Can you paint a stucco house?", acceptedAnswer: { "@type": "Answer", text: "Yes. Stucco gets washed, cracks get filled, and it gets a masonry primer where needed before a breathable exterior finish goes on, so moisture can still escape instead of blistering the paint." } },
      { "@type": "Question", name: "Can you paint a house exterior in the winter?", acceptedAnswer: { "@type": "Answer", text: "Exterior paint needs dry weather and air and surface temperatures above the minimum on the can, so most exterior painting in South Jersey happens from spring through fall. In the colder months we focus on interior work, and we can still come out for your exterior estimate so you are on the schedule for spring." } },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="pt-28 sm:pt-36 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-[#64748b]">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/services" className="hover:text-[#2563eb] transition-colors">Services</Link></li>
              <li>/</li>
              <li className="text-[#1e3a5f] font-medium">Exterior Painting</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-6">Exterior Painting in Mays Landing &amp; Atlantic County, NJ</h1>
              <p className="text-[#64748b] text-lg mb-6 leading-relaxed">
                Boost your curb appeal and protect your home from the elements. Perfect Finish Painters provides full exterior painting for homes and businesses throughout Mays Landing and Atlantic County — from siding and shutters to doors, trim, and fascia.
              </p>
              <p className="text-[#64748b] text-lg mb-8 leading-relaxed">
                South Jersey&apos;s coastal humidity, salt air, and seasonal temperature swings demand the right paint. We use <strong className="text-[#1e3a5f]">100% acrylic latex paints</strong> with UV and mildew resistance from brands like Benjamin Moore and Sherwin-Williams. Every exterior project is quoted after a free on-site or photo-based assessment.
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
                <Image src="/exterior-siding-staining-before-after-egg-harbor-township-nj.webp" alt="Before and after of weathered horizontal wood siding and a dark sliding door on a deck in Egg Harbor Township, refreshed to orange-brown siding with a white slider frame" width={600} height={450} className="w-full h-auto" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Detailed Service Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-12 mb-4">What Exterior Painting Services Do We Offer in Atlantic County?</h2>
          <h3 className="text-xl font-semibold text-[#1e3a5f] mt-8 mb-3">House Painting for South Jersey Shore Properties</h3>
          <p className="text-[#64748b] mb-4">For homes in Margate, Ventnor, and Brigantine, salt air is the enemy. We use mildew-resistant primers and top-coat paints rated for coastal environments. Our exterior jobs in shore towns are built to last through nor&apos;easters, salt spray, and intense summer sun.</p>
          <h3 className="text-xl font-semibold text-[#1e3a5f] mt-8 mb-3">Siding, Shutters, Doors &amp; Trim Painting</h3>
          <p className="text-[#64748b] mb-4">We paint all exterior surfaces — vinyl and wood siding, shutters, front doors, garage doors, fascia, and trim. Every surface gets proper prep including power washing, scraping, and priming before paint goes on.</p>
          <h3 className="text-xl font-semibold text-[#1e3a5f] mt-8 mb-3">Surface Prep — Power Washing, Scraping &amp; Priming</h3>
          <p className="text-[#64748b] mb-4">Proper prep is what separates a paint job that lasts from one that peels in two years. We power wash all surfaces, scrape loose paint, sand rough spots, caulk gaps, and apply primer before the finish coat. This is non-negotiable on every job.</p>
          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-12 mb-4">How Often Should You Repaint Your Home in NJ?</h2>
          <p className="text-[#64748b] mb-4">Exterior paint in New Jersey typically lasts 5–7 years, depending on sun exposure, weather, and paint quality. Shore homes in Atlantic County may need repainting sooner due to salt air exposure. Signs it&apos;s time include fading, chalking, peeling, or visible bare wood. We&apos;ll assess your home&apos;s condition and recommend the right schedule during your free estimate.</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Recent Exterior Projects Around Atlantic County</h2></ScrollReveal>
          <p className="text-[#64748b] text-lg mb-8 leading-relaxed">Every photo here is our own work. See more in <Link href="/our-work" className="text-[#2563eb] hover:underline">our project gallery</Link>.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {exteriorProjects.map((p) => (
              <figure key={p.src} className="rounded-2xl overflow-hidden border border-[#e2e8f0] bg-white shadow-sm">
                <div className="relative aspect-[4/3] bg-[#e2e8f0]">
                  <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw" loading="lazy" className="object-cover" />
                </div>
                <figcaption className="p-4">
                  <span className="block font-semibold text-[#1e3a5f]">{p.title}</span>
                  <span className="block text-sm text-[#64748b]">{p.town}, NJ</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">What&apos;s Included in Exterior Painting?</h2></ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Siding, stucco, brick & vinyl surfaces",
              "Shutters, doors, trim & fascia boards",
              "Power washing & surface preparation",
              "Scraping and sanding loose paint",
              "Primer on bare wood and problem areas",
              "Caulking gaps and sealing joints",
              "Weather-resistant acrylic latex paint",
              "UV & mildew protection for coastal climate",
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
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">When Is the Best Time to Paint a House Exterior in South Jersey?</h2></ScrollReveal>
          <p className="text-[#64748b] text-lg leading-relaxed mb-4">
            Late spring through early fall. Exterior paint needs a dry surface, no rain in the forecast while it cures, and air and surface temperatures above the minimum printed on the can. In South Jersey that usually means May through October, with spring and early fall the easiest stretches because the summer heat and humidity aren&apos;t working against the paint.
          </p>
          <p className="text-[#64748b] text-lg leading-relaxed">
            Spring calendars fill up fast, so the best time to get your estimate is before the season starts. For more on timing and products, read <Link href="/blog/exterior-painting-before-fall-south-jersey" className="text-[#2563eb] hover:underline">why to paint your exterior before fall</Link> and <Link href="/blog/best-exterior-paint-south-jersey" className="text-[#2563eb] hover:underline">the best exterior paint for South Jersey homes</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">Where Do We Offer Exterior Painting in Atlantic County?</h2></ScrollReveal>
          <p className="text-[#64748b] text-lg leading-relaxed">
            South Jersey exteriors take a beating from sun, salt, and humidity. Shore and bayside homes in <Link href="/painters-brigantine-nj" className="text-[#2563eb] hover:underline">Brigantine</Link>, <Link href="/painters-margate-nj" className="text-[#2563eb] hover:underline">Margate</Link>, <Link href="/painters-ventnor-nj" className="text-[#2563eb] hover:underline">Ventnor</Link>, and <Link href="/painters-somers-point-nj" className="text-[#2563eb] hover:underline">Somers Point</Link> need salt-tolerant coatings; inland homes in <Link href="/painters-mays-landing-nj" className="text-[#2563eb] hover:underline">Mays Landing</Link> and <Link href="/painters-absecon-nj" className="text-[#2563eb] hover:underline">Absecon</Link> fight mostly UV and seasonal temperature swings. We spec the paint system to match where you live.
          </p>
          <p className="text-[#64748b] text-lg leading-relaxed mt-4">
            We also paint exteriors in <Link href="/painters-egg-harbor-township-nj" className="text-[#2563eb] hover:underline">Egg Harbor Township</Link>, <Link href="/painters-galloway-nj" className="text-[#2563eb] hover:underline">Galloway</Link>, <Link href="/painters-hammonton-nj" className="text-[#2563eb] hover:underline">Hammonton</Link>, <Link href="/painters-linwood-nj" className="text-[#2563eb] hover:underline">Linwood</Link>, <Link href="/painters-northfield-nj" className="text-[#2563eb] hover:underline">Northfield</Link>, and <Link href="/painters-atlantic-city-nj" className="text-[#2563eb] hover:underline">Atlantic City</Link>. While we&apos;re at your house, the same crew handles <Link href="/deck-staining" className="text-[#2563eb] hover:underline">deck staining</Link>, <Link href="/fence-staining" className="text-[#2563eb] hover:underline">fence staining</Link>, <Link href="/garage-door-painting" className="text-[#2563eb] hover:underline">garage doors</Link>, <Link href="/shed-restoration" className="text-[#2563eb] hover:underline">sheds</Link>, and <Link href="/govee-permanent-lighting" className="text-[#2563eb] hover:underline">Govee permanent roofline lights</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1e3a5f]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Boost Your Curb Appeal?</h2>
          <p className="text-white/70 text-lg mb-8">Get a free personalized estimate in 60 seconds.</p>
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

      <FAQSection items={faqJsonLd.mainEntity} />

      <Footer />
      <FloatingCTA />
    </div>
  );
}
