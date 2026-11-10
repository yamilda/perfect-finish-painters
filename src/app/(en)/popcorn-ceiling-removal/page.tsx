import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollReveal from "@/components/ScrollReveal";
import { areaServedCities } from "@/data/service-areas";

export const metadata: Metadata = {
  title: "Popcorn Ceiling Removal in South Jersey | Perfect Finish",
  description:
    "Pro popcorn ceiling removal in Atlantic County NJ — clean, dust-contained process. Serving Mays Landing & South Jersey. Free estimate — 609-377-4226.",
  openGraph: {
    title: "Popcorn Ceiling Removal in South Jersey | Perfect Finish",
    description: "Pro popcorn ceiling removal in Atlantic County NJ — clean, dust-contained process. Serving Mays Landing & South Jersey. Free estimate — 609-377-4226.",
    type: "website",
    locale: "en_US",
    url: "https://perfectfinishpainter.com/popcorn-ceiling-removal",
    images: [{ url: "/og-card.jpg", width: 1200, height: 630, alt: "Perfect Finish Painters — interior, exterior & drywall in Mays Landing, NJ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Popcorn Ceiling Removal in South Jersey | Perfect Finish",
    description: "Pro popcorn ceiling removal in Atlantic County NJ — clean, dust-contained process. Serving Mays Landing & South Jersey. Free estimate — 609-377-4226.",
    images: ["/og-card.jpg"],
  },
  alternates: { canonical: "https://perfectfinishpainter.com/popcorn-ceiling-removal" },
};

export default function PopcornCeilingRemovalPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://perfectfinishpainter.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://perfectfinishpainter.com/services" },
      { "@type": "ListItem", position: 3, name: "Popcorn Ceiling Removal", item: "https://perfectfinishpainter.com/popcorn-ceiling-removal" },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Popcorn Ceiling Removal",
    description: "Professional popcorn ceiling removal including dust containment, texture scraping, skim coating, priming, and painting for a smooth, modern ceiling finish throughout Atlantic County NJ.",
    provider: { "@id": "https://perfectfinishpainter.com/#business" },
    areaServed: areaServedCities,
    url: "https://perfectfinishpainter.com/popcorn-ceiling-removal",
    image: [
      "https://perfectfinishpainter.com/projects/popcorn-ceiling-removal-before-mays-landing-nj.webp",
      "https://perfectfinishpainter.com/projects/popcorn-ceiling-removal-after-mays-landing-nj.webp",
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    speakable: {

      "@type": "SpeakableSpecification",

      cssSelector: [".speakable-q", ".speakable-a"],

    },
    mainEntity: [
      { "@type": "Question", name: "How much does popcorn ceiling removal cost in NJ?", acceptedAnswer: { "@type": "Answer", text: "Popcorn ceiling removal in Atlantic County typically costs $2-$4 per square foot depending on ceiling height, room size, and whether asbestos testing is needed. Most single rooms run $400-$800. Free estimates — call 609-377-4226." } },
      { "@type": "Question", name: "Does popcorn ceiling contain asbestos?", acceptedAnswer: { "@type": "Answer", text: "Popcorn ceilings installed before 1980 may contain asbestos. We recommend testing before removal. If asbestos is present, a licensed abatement contractor handles removal before we do the finish work." } },
      { "@type": "Question", name: "How long does popcorn ceiling removal take?", acceptedAnswer: { "@type": "Answer", text: "A single room typically takes one day including scraping, skim coating, and priming. Larger projects or homes with multiple rooms take 2-4 days. Painting the finished ceiling adds one more day." } },
      { "@type": "Question", name: "Can you paint over popcorn ceilings instead of removing them?", acceptedAnswer: { "@type": "Answer", text: "Yes. If the popcorn texture is in good condition and you like the look, we can paint over it. However, most homeowners prefer removal for a clean, modern smooth finish that increases home value." } },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Breadcrumb */}
      <div className="pt-28 sm:pt-36 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-[#64748b]">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/services" className="hover:text-[#2563eb] transition-colors">Services</Link></li>
              <li>/</li>
              <li className="text-[#1e3a5f] font-medium">Popcorn Ceiling Removal</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-6">
            Popcorn Ceiling Removal in Mays Landing &amp; Atlantic County, NJ
          </h1>
          <p className="text-[#64748b] text-lg mb-6 leading-relaxed">
            Popcorn ceilings — also called textured or &quot;cottage cheese&quot; ceilings — were popular decades ago, but today most homeowners want them gone. They collect dust, make rooms feel dated, and are nearly impossible to paint over cleanly. Perfect Finish Painters handles the full popcorn ceiling removal process from start to finish, leaving you with a smooth, modern ceiling that transforms any room. We serve Mays Landing, Egg Harbor Township, Galloway, Northfield, Linwood, and all of Atlantic County.
          </p>
          <p className="text-[#64748b] text-lg mb-8 leading-relaxed">
            We pair popcorn ceiling removal with <Link href="/interior-painting" className="text-[#2563eb] hover:underline">interior painting</Link> so your ceilings and walls look brand new. If there&apos;s any underlying damage, our <Link href="/drywall-repair" className="text-[#2563eb] hover:underline">drywall repair</Link> team fixes it before we prime and paint.
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
      </section>

      {/* Why Remove */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">Why Do Homeowners Remove Popcorn Ceilings?</h2>
          </ScrollReveal>
          <p className="text-[#64748b] text-lg leading-relaxed">
            Popcorn texture was originally applied to hide imperfections and dampen sound, but it comes with major downsides. The bumpy surface traps dust, cobwebs, and allergens that are difficult to clean. It gives rooms a dated, unappealing look that can hurt your home&apos;s value. Painting over popcorn texture is messy and rarely looks good — the bumps show through and rollers pull off chunks of texture. Removing the texture entirely and finishing with a smooth ceiling is the only way to get a truly modern, clean result.
          </p>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">How Do You Remove a Popcorn Ceiling? Our Process</h2>
          </ScrollReveal>
          <div className="space-y-8">
            <ScrollReveal>
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">Dust Containment &amp; Surface Protection</h3>
                <p className="text-[#64748b] leading-relaxed">
                  Before any scraping begins, we cover your floors and furniture with heavy-duty plastic sheeting and drop cloths. We tape off walls, light fixtures, and vents to contain dust and debris. Our goal is to leave your home as clean as we found it — the only difference will be your beautiful new ceiling.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">Texture Removal &amp; Surface Prep</h3>
                <p className="text-[#64748b] leading-relaxed">
                  We mist the ceiling with water to soften the texture, then carefully scrape it off using wide drywall knives. Once the texture is removed, we inspect the surface for cracks, nail pops, or imperfections and apply skim coat as needed to create a perfectly smooth surface. This step is critical — skipping it leads to a rough, uneven finish.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">Smooth Finish &amp; Paint Application</h3>
                <p className="text-[#64748b] leading-relaxed">
                  After the surface is smooth and dry, we prime the entire ceiling to seal the drywall and ensure even paint adhesion. Then we apply two coats of premium ceiling paint for a clean, modern look. The result is a flat, bright ceiling that makes the whole room feel bigger and more updated.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Recent Project — visual proof */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-3">Recent Project: Popcorn Ceiling Removal in Mays Landing, NJ</h2>
          </ScrollReveal>
          <p className="text-[#64748b] text-lg leading-relaxed mb-8">
            A start-to-finish ceiling job on a bayfront home in Mays Landing. The original textured ceiling was scraped and torn out down to the joists, hung with new drywall, taped and skim-coated smooth, then finished with a clean knockdown texture and fresh ceiling paint — all with the room fully masked to keep dust contained, exactly the process described above.
          </p>
          <figure>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <Image src="/projects/popcorn-ceiling-removal-before-mays-landing-nj.webp" alt="Before: dated popcorn-textured ceiling in a Mays Landing, NJ home with the room masked for dust containment" width={1536} height={2048} className="rounded-xl w-full h-auto" sizes="(max-width:640px) 50vw, 320px" />
              <Image src="/projects/popcorn-ceiling-removal-demo-mays-landing-nj.webp" alt="During: the textured ceiling removed down to the joists in a Mays Landing, NJ home" width={1536} height={2048} className="rounded-xl w-full h-auto" sizes="(max-width:640px) 50vw, 320px" loading="lazy" />
              <Image src="/projects/popcorn-ceiling-removal-drywall-mays-landing-nj.webp" alt="During: new drywall hung and the first mud coat applied to the ceiling in Mays Landing, NJ" width={1536} height={2048} className="rounded-xl w-full h-auto" sizes="(max-width:640px) 50vw, 320px" loading="lazy" />
              <Image src="/projects/popcorn-ceiling-removal-after-mays-landing-nj.webp" alt="After: smooth knockdown-textured ceiling finished and painted in a Mays Landing, NJ home" width={1536} height={2048} className="rounded-xl w-full h-auto" sizes="(max-width:640px) 50vw, 320px" loading="lazy" />
            </div>
            <figcaption className="text-[#64748b] text-sm mt-3 italic">
              Before, tear-out, new drywall, and the finished result — a real Perfect Finish Painters popcorn ceiling removal in Mays Landing, NJ.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Cost */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">How Much Does Popcorn Ceiling Removal Cost in Atlantic County, NJ?</h2>
          </ScrollReveal>
          <p className="text-[#64748b] text-lg leading-relaxed">
            Most rooms cost between <strong className="text-[#1e3a5f]">$300 and $800</strong> depending on room size, ceiling height, and the condition of the surface underneath. Multi-room projects often qualify for volume pricing. We provide free, detailed estimates before any work begins — no surprises and no obligation. Take our 60-second quiz or call (609) 377-4226 to get started.
          </p>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">What Other Services Do We Offer?</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Interior Painting", desc: "Walls, ceilings, trim, and accent walls in any room.", href: "/interior-painting" },
              { title: "Exterior Painting", desc: "Siding, shutters, doors, and trim to boost curb appeal.", href: "/exterior-painting" },
              { title: "Drywall Repair", desc: "Patch holes, fix cracks, and restore smooth surfaces.", href: "/drywall-repair" },
              { title: "Cabinet Painting", desc: "Transform your kitchen cabinets without replacing them.", href: "/cabinet-painting" },
              { title: "Shed Restoration", desc: "Bring your shed back to life with repair and painting.", href: "/shed-restoration" },
              { title: "Flooring Installation", desc: "Professional flooring to complete your renovation.", href: "/flooring" },
            ].map((service) => (
              <Link key={service.title} href={service.href} className="bg-white rounded-xl p-5 shadow-sm border border-[#e2e8f0] hover:border-[#2563eb] transition-colors block">
                <h3 className="text-[#1e3a5f] font-semibold mb-1">{service.title}</h3>
                <p className="text-[#64748b] text-sm">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">Where Do We Offer Popcorn Ceiling Removal in Atlantic County?</h2></ScrollReveal>
          <p className="text-[#64748b] text-lg leading-relaxed">
            Popcorn ceilings went out of style for a reason. We remove them cleanly throughout Atlantic County — with dust containment, sanded-smooth finish, and ready-to-paint drywall. Houses from the 70s and 80s in <Link href="/painters-pleasantville-nj" className="text-[#2563eb] hover:underline">Pleasantville</Link> and <Link href="/painters-mays-landing-nj" className="text-[#2563eb] hover:underline">Mays Landing</Link> often have them through the whole first floor. Other common work areas: <Link href="/painters-egg-harbor-township-nj" className="text-[#2563eb] hover:underline">Egg Harbor Township</Link>, <Link href="/painters-galloway-nj" className="text-[#2563eb] hover:underline">Galloway</Link>, <Link href="/painters-northfield-nj" className="text-[#2563eb] hover:underline">Northfield</Link>, and <Link href="/painters-linwood-nj" className="text-[#2563eb] hover:underline">Linwood</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1e3a5f]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready for Smooth, Modern Ceilings?</h2>
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
