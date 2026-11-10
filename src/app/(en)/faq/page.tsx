import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Painting FAQ | Perfect Finish Painters, South Jersey",
  description:
    "Common painting questions for South Jersey homeowners: pricing, scheduling, prep, paint brands, warranty, and service areas. From Perfect Finish Painters.",
  openGraph: {
    title: "FAQ | Perfect Finish Painters",
    description:
      "Painting FAQs for South Jersey homeowners: pricing, scheduling, prep, paint brands, warranty, payment, service areas.",
    type: "website",
    locale: "en_US",
    url: "https://perfectfinishpainter.com/faq",
    images: [{ url: "/og-card.jpg", width: 1200, height: 630, alt: "Perfect Finish Painters — interior, exterior & drywall in Mays Landing, NJ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Perfect Finish Painters",
    description:
      "Painting FAQs for South Jersey homeowners: pricing, scheduling, prep, paint brands, warranty, payment, service areas.",
    images: ["/og-card.jpg"],
  },
  alternates: { canonical: "https://perfectfinishpainter.com/faq" },
};

interface FaqItem {
  q: string;
  a: string;
}

interface FaqGroup {
  heading: string;
  items: FaqItem[];
}

const groups: FaqGroup[] = [
  {
    heading: "Pricing & Estimates",
    items: [
      {
        q: "How much does it cost to hire a painter in South Jersey?",
        a: "Most interior rooms in Atlantic County fall between $500 and $1,000 per room depending on size, wall condition, and paint quality. A full interior repaint for a typical 3-bedroom home ranges from $4,500 to $8,500. Exterior repaints generally run $3,500 to $9,000 for single-family homes depending on siding type and square footage. These are ranges for budgeting — your signed estimate will be specific to your project.",
      },
      {
        q: "Do you offer free estimates?",
        a: "Yes. Estimates are 100% free with no obligation to hire us. The fastest path is our 60-second online quiz, which gives you a rough ballpark instantly. For a firm written estimate we do a short site visit or review photos you send us. Most estimates come back within 24 hours.",
      },
      {
        q: "Is the quiz price the same as the final estimate?",
        a: "The quiz gives you a reasonable range based on the most common project types in our area. The final written estimate may be higher or lower depending on what we see in person — for example, drywall condition, number of coats needed, access issues, or paint brand choice. We never raise the price after the estimate is signed unless scope changes.",
      },
      {
        q: "Do you match competitor prices?",
        a: "We don't compete purely on price, but if you have a written estimate from another licensed and insured painter for the same scope of work, let us know. If we can match it while keeping our quality standard and warranty, we will. If the other quote skips prep work or cuts corners on paint, we'll tell you honestly instead of matching.",
      },
    ],
  },
  {
    heading: "Scheduling & Timelines",
    items: [
      {
        q: "How long does a typical painting project take?",
        a: "A single interior room usually takes one day. A full interior repaint for a 3-bedroom home typically runs 3 to 5 working days. Exterior painting for a single-family home is usually 4 to 7 days depending on siding, prep, and weather. Your estimate will include a specific timeline with buffer days for weather on exterior projects.",
      },
      {
        q: "How far out are you booked?",
        a: "Lead time varies by season. Spring and early fall (our busy seasons) typically have a 3 to 6 week lead time. Winter and mid-summer are often 1 to 2 weeks out. Emergencies, small interior jobs, and repaints of failed work elsewhere can sometimes be fit in sooner — just ask.",
      },
      {
        q: "What happens if it rains on the day of exterior work?",
        a: "We don't paint exteriors in rain, heavy dew, or below 50°F surface temperature — paint won't bond properly and will fail early. We monitor forecasts, and if weather looks bad we'll contact you the day before to reschedule. We'll always give you the earliest realistic reschedule date.",
      },
      {
        q: "Do you work weekends or evenings?",
        a: "Saturdays are part of our regular schedule. Sundays are reserved for our crew. Commercial clients with access restrictions (offices, retail, restaurants) can arrange evening and weekend work — let us know when you request the estimate.",
      },
    ],
  },
  {
    heading: "Prep, Process & Quality",
    items: [
      {
        q: "What does your prep work include?",
        a: "Interior prep is sanding, patching holes and cracks, caulking gaps at trim, spot-priming any stains, taping off trim and ceilings, and protecting furniture and floors with drop cloths. Exterior prep is power washing, scraping loose paint, sanding edges smooth, replacing rotted wood if needed, priming bare wood, and caulking gaps. Prep is usually half the job — shortcuts on prep are why cheap paint jobs fail after 2 years.",
      },
      {
        q: "Do I need to move my furniture?",
        a: "No. We move furniture to the center of the room and cover it with drop cloths. For very heavy items, very fragile antiques, or valuables, we may ask you to move them or put them away before we start. We always put rooms back the way we found them when the job ends.",
      },
      {
        q: "What paint brands do you use?",
        a: "We primarily use Sherwin-Williams (Duration and Emerald lines for exteriors, Emerald and Duration Home for interiors) and Benjamin Moore (Aura and Regal Select). Both are premium paints designed for the humidity and salt air of South Jersey. We can apply paint you supply as well — we'll just note it on the estimate so the warranty is clear.",
      },
      {
        q: "Do you caulk and fill before painting?",
        a: "Yes, that's standard on every interior and exterior job. Skipping caulk is the main reason paint cracks along trim after a winter. We caulk all gaps between trim and wall, door and window frames, and wherever siding meets trim on the exterior.",
      },
    ],
  },
  {
    heading: "Warranty, Payment & Insurance",
    items: [
      {
        q: "What warranty do you offer?",
        a: "We offer a labor warranty against peeling, flaking, and blistering caused by our workmanship. The specific term is on your project contract — typically 1 year for interior work and 2 to 3 years for exterior work depending on prep scope and paint line. Paint product warranties are separate and come from the manufacturer.",
      },
      {
        q: "How do I pay?",
        a: "Most residential projects are split between a deposit at scheduling and the balance on completion. Very small projects are paid in full when finished. Larger projects may include a progress payment. We accept check, cash, and electronic payment — details are on your invoice.",
      },
      {
        q: "Are you licensed and insured?",
        a: "Yes. Perfect Finish Painters LLC is registered in New Jersey (NJ HIC #13VH14120900) and carries general liability and workers' compensation insurance. A certificate of insurance naming your project, HOA, or property management company as additional insured is available on request at no cost.",
      },
      {
        q: "What happens if my paint fails during the warranty period?",
        a: "Contact us with photos of the issue. If it's a workmanship failure covered by the warranty, we come out and fix it at no charge. If the cause is something outside our control — water damage behind the siding, structural movement, another contractor's work — we'll explain what we see and what it would take to fix.",
      },
    ],
  },
  {
    heading: "Service Areas & Logistics",
    items: [
      {
        q: "What areas do you serve?",
        a: "We serve Mays Landing and the surrounding Atlantic County and South Jersey towns including Egg Harbor Township, Galloway, Hammonton, Northfield, Linwood, Somers Point, Pleasantville, Atlantic City, Margate, Ventnor, Brigantine, Absecon, and Vineland. If your town isn't listed, call us — we sometimes take projects outside our regular area.",
      },
      {
        q: "Do you work on rental properties and shore rentals?",
        a: "Yes, regularly. Shore rentals get their own recommendations — we push harder-wearing satin finishes and exterior paints built for salt air. We can coordinate between turnovers if you give us the calendar, and we're comfortable working with property managers who aren't on-site.",
      },
      {
        q: "Do you handle HOA and condo associations?",
        a: "Yes. We've painted multi-unit buildings and common-area interiors for HOAs in the area. We can provide additional insured certificates, coordinate with your property manager, and work on a schedule that minimizes disruption to residents.",
      },
      {
        q: "Can you match a color I already have?",
        a: "Yes. Bring us a sample — a chip of existing paint, a lid of leftover paint, or just a cabinet knob from the room — and we'll have it color-matched at Sherwin-Williams or Benjamin Moore. Computer color matching is accurate enough for touch-up work and for matching adjacent rooms.",
      },
    ],
  },
];

export default function FAQPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://perfectfinishpainter.com" },
      { "@type": "ListItem", position: 2, name: "FAQ", item: "https://perfectfinishpainter.com/faq" },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".speakable-q", ".speakable-a"],
    },
    mainEntity: groups.flatMap((g) =>
      g.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      }))
    ),
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="pt-28 sm:pt-36 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-[#64748b]">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-[#1e3a5f] font-medium">FAQ</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="pt-8 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-4">
              Painting FAQs for South Jersey Homeowners
            </h1>
            <p className="text-[#64748b] text-lg leading-relaxed max-w-3xl">
              Common questions we get from customers around Mays Landing, Atlantic County, and the
              shore. Don&apos;t see yours?{" "}
              <Link href="/contact" className="text-[#2563eb] font-semibold hover:underline">
                Contact us
              </Link>{" "}
              or call{" "}
              <a href="tel:+16093774226" className="text-[#2563eb] font-semibold hover:underline">
                (609) 377-4226
              </a>{" "}
              and we&apos;ll answer directly.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {groups.map((group) => (
            <div key={group.heading}>
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6 pb-2 border-b border-[#e2e8f0]">
                  {group.heading}
                </h2>
              </ScrollReveal>
              <div className="space-y-4">
                {group.items.map((item) => (
                  <ScrollReveal key={item.q}>
                    <details className="bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden group">
                      <summary className="cursor-pointer px-6 py-4 font-semibold text-[#1e3a5f] hover:bg-[#f8fafc] transition-colors flex justify-between items-center">
                        <span className="speakable-q">{item.q}</span>
                        <svg
                          className="w-5 h-5 text-[#64748b] transition-transform group-open:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-6 pb-5 text-[#64748b] leading-relaxed speakable-a">
                        {item.a}
                      </div>
                    </details>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1e3a5f]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still have a question?</h2>
          <p className="text-white/70 text-lg mb-8">
            Brandon answers the phone personally. One call and you&apos;ll know if Perfect Finish
            is the right fit for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quiz"
              className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 shadow-lg"
            >
              Start 60-Second Quiz
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="tel:+16093774226"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              Call (609) 377-4226
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
