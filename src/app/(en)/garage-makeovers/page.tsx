import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { areaServedCities } from "@/data/service-areas";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollReveal from "@/components/ScrollReveal";

const title = "Garage Makeovers in Atlantic County NJ | Perfect Finish";
const description =
  "Full garage makeovers in Atlantic County NJ: drywall, paint, epoxy flake floors, garage doors, even golf simulator setups. One crew. Free quote: 609-377-4226.";
const url = "https://perfectfinishpainter.com/garage-makeovers";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    url,
    images: [{ url: "/garage-finished-painted-walls-flake-floor-south-jersey-nj.webp", width: 1600, height: 1200, alt: "Finished garage with sage green walls and a blue-gray epoxy flake floor" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/garage-finished-painted-walls-flake-floor-south-jersey-nj.webp"],
  },
  alternates: { canonical: url },
};

// The golf simulator garage (Nov 2026): Perfect Finish did the drywall, paint, epoxy floor and simulator setup.
const golfGarage = [
  { src: "/garage-drywall-taping-in-progress-south-jersey-nj.webp", label: "1. Drywall", caption: "New drywall taped and mudded from a rolling scaffold.", alt: "Garage with new drywall taped and mudded, a rolling scaffold, and a metal garage door" },
  { src: "/garage-finished-painted-walls-flake-floor-south-jersey-nj.webp", label: "2. Paint", caption: "Sanded smooth and painted a soft sage green.", alt: "Finished garage with sage green painted walls, recessed lights, and a blue-gray epoxy flake floor" },
  { src: "/garage-epoxy-flake-floor-coating-south-jersey-nj.webp", label: "3. Floor", caption: "Blue-gray epoxy flake floor, then the golf simulator setup.", alt: "Garage floor finished in a blue-gray epoxy flake coating, with sage green walls" },
];

export default function GarageMakeoversPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://perfectfinishpainter.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://perfectfinishpainter.com/services" },
      { "@type": "ListItem", position: 3, name: "Garage Makeovers", item: url },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Garage Makeover",
    alternateName: ["Garage Remodeling", "Garage Renovation", "Garage Golf Simulator Room"],
    description:
      "Full garage makeovers: drywall installation and finishing, wall and ceiling painting, epoxy flake floor coating, garage door refinishing, and setup for golf simulators and home gyms.",
    image: golfGarage.map((p) => `https://perfectfinishpainter.com${p.src}`),
    provider: { "@id": "https://perfectfinishpainter.com/#business" },
    areaServed: areaServedCities,
    url,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".speakable-q", ".speakable-a"],
    },
    mainEntity: [
      {
        "@type": "Question",
        name: "What does a garage makeover include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Whatever your garage needs, done by one crew: hanging and finishing drywall, painting the walls and ceiling, an epoxy flake floor, and refinishing the garage door. We plan it around how you want to use the space, whether that's a golf simulator room, a home gym, a workshop, or just a clean garage.",
        },
      },
      {
        "@type": "Question",
        name: "Can you set up a golf simulator in my garage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. This fall we took a garage from new drywall to a finished golf simulator room: drywall, paint, an epoxy flake floor, and the simulator setup. Tell us which simulator you have or plan to buy, and we'll plan the room around it.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a garage makeover cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the size of the garage and what it needs, so we quote it after a free on-site look. For reference, the epoxy floor alone on most 2-car garages runs $2,000 to $4,500. Call 609-377-4226 or start the 60-second quote form.",
        },
      },
      {
        "@type": "Question",
        name: "Can you do just part of the garage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Drywall, paint, the floor, or the garage door can each be done on their own. Doing it all together means one crew and one schedule, and the floor goes down after the walls and ceiling are painted.",
        },
      },
    ],
  };

  const steps = [
    { title: "Walkthrough and plan", body: "We look at the garage with you, talk about how you want to use it, and give you a free estimate for the parts you want done." },
    { title: "Drywall", body: "New drywall hung, taped, mudded, and sanded smooth, or existing walls patched and repaired." },
    { title: "Walls and ceiling paint", body: "Primed and painted in the color you pick, with clean cut lines around windows, doors, and trim." },
    { title: "Epoxy floor", body: "The floor goes down last, after the painting, so nothing drips on it. We grind the concrete so the coating bonds, then lay the epoxy and flake." },
    { title: "Door and setup", body: "Garage door refinished if you want it, then the room is set up for how you'll use it, like the golf simulator in the garage above." },
  ];

  const ideas = [
    { title: "Golf simulator room", body: "Smooth walls, bright paint, and a durable floor under the hitting mat. We've built one." },
    { title: "Home gym", body: "An epoxy floor wipes clean, and rubber gym mats sit right on top of it." },
    { title: "Workshop", body: "Bright walls under shop lights and a chemical-resistant floor that sweeps clean." },
    { title: "Hangout or game room", body: "Finished walls and a good-looking floor make it feel like part of the house." },
  ];

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
              <li className="text-[#1e3a5f] font-medium">Garage Makeovers</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-6">Garage Makeovers in Atlantic County, NJ</h1>
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl mb-8 bg-[#e2e8f0]">
            <Image
              src="/garage-finished-painted-walls-flake-floor-south-jersey-nj.webp"
              alt="Finished garage with sage green painted walls, recessed lights, and a blue-gray epoxy flake floor"
              fill
              priority
              sizes="(min-width: 896px) 896px, 100vw"
              className="object-cover"
            />
          </div>
          <p className="text-[#64748b] text-lg mb-6 leading-relaxed">
            Most garages are bare drywall, a stained concrete slab, and boxes. A garage makeover turns it into a room you actually use: a golf simulator room, a home gym, a workshop, or a clean garage you&apos;re not embarrassed to open.
          </p>
          <p className="text-[#64748b] text-lg mb-8 leading-relaxed">
            Perfect Finish handles the whole thing with one crew: <Link href="/drywall-repair" className="text-[#2563eb] hover:underline">drywall</Link>, <Link href="/interior-painting" className="text-[#2563eb] hover:underline">walls and ceiling paint</Link>, an <Link href="/epoxy-floor-coating" className="text-[#2563eb] hover:underline">epoxy flake floor</Link>, and a refinished <Link href="/garage-door-painting" className="text-[#2563eb] hover:underline">garage door</Link>. No juggling three contractors and three schedules.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/quiz" className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 shadow-lg">
              Get Free Estimate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
            <a href="tel:+16093774226" className="border-2 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2">
              Call (609) 377-4226
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">How Did We Turn a Garage Into a Golf Simulator Room?</h2></ScrollReveal>
          <p className="text-[#64748b] text-lg mb-8 leading-relaxed">
            This fall we did a whole garage, start to finish: drywall, paint, an epoxy flake floor, and the golf simulator setup. Here&apos;s how it went.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {golfGarage.map((p) => (
              <figure key={p.src} className="rounded-2xl overflow-hidden border border-[#e2e8f0] bg-white shadow-sm">
                <div className="relative aspect-[4/3] bg-[#e2e8f0]">
                  <Image src={p.src} alt={p.alt} fill sizes="(min-width: 640px) 300px, 100vw" loading="lazy" className="object-cover" />
                </div>
                <figcaption className="p-4">
                  <span className="block font-semibold text-[#1e3a5f]">{p.label}</span>
                  <span className="block text-sm text-[#64748b]">{p.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">What Does Another Finished Garage Look Like?</h2></ScrollReveal>
          <p className="text-[#64748b] text-lg mb-8 leading-relaxed">
            An earlier garage, from bare taped drywall to smooth, painted walls and ceiling. Read the whole job in <Link href="/blog/garage-drywall-finishing-south-jersey" className="text-[#2563eb] hover:underline">our garage drywall post</Link>.
          </p>
          <div className="space-y-5">
            <figure className="rounded-2xl overflow-hidden shadow-lg">
              <Image src="/projects/garage-finishing-1.webp" alt="Garage drywall finishing before and after: bare taped drywall turned into a smooth painted wall in South Jersey" width={1600} height={599} loading="lazy" className="w-full h-auto" />
            </figure>
            <figure className="rounded-2xl overflow-hidden shadow-lg">
              <Image src="/projects/garage-finishing-2.webp" alt="Garage with taped drywall and a scaffold mid-project, then the finished painted walls and ceiling in South Jersey" width={1600} height={599} loading="lazy" className="w-full h-auto" />
            </figure>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">What Can Your Garage Become?</h2></ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {ideas.map((idea) => (
              <div key={idea.title} className="bg-white rounded-xl p-6 shadow-sm border border-[#e2e8f0]">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">{idea.title}</h3>
                <p className="text-[#64748b]">{idea.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">How Does a Garage Makeover Work?</h2></ScrollReveal>
          <ol className="space-y-6">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#2563eb] text-white font-bold flex items-center justify-center" aria-hidden="true">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">{step.title}</h3>
                  <p className="text-[#64748b] leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">Where Do We Do Garage Makeovers?</h2></ScrollReveal>
          <p className="text-[#64748b] text-lg leading-relaxed">
            Across Atlantic County, including <Link href="/painters-mays-landing-nj" className="text-[#2563eb] hover:underline">Mays Landing</Link>, <Link href="/painters-egg-harbor-township-nj" className="text-[#2563eb] hover:underline">Egg Harbor Township</Link>, <Link href="/painters-galloway-nj" className="text-[#2563eb] hover:underline">Galloway</Link>, <Link href="/painters-hammonton-nj" className="text-[#2563eb] hover:underline">Hammonton</Link>, <Link href="/painters-somers-point-nj" className="text-[#2563eb] hover:underline">Somers Point</Link>, <Link href="/painters-northfield-nj" className="text-[#2563eb] hover:underline">Northfield</Link>, <Link href="/painters-linwood-nj" className="text-[#2563eb] hover:underline">Linwood</Link>, and <Link href="/painters-absecon-nj" className="text-[#2563eb] hover:underline">Absecon</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1e3a5f]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Reimagine Your Garage?</h2>
          <p className="text-white/70 text-lg mb-8">Free on-site estimate. Licensed and insured, NJ HIC 13VH14120900.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quiz" className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 shadow-lg">
              Start 60-Second Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
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
