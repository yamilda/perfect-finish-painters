import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { areaServedCities } from "@/data/service-areas";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollReveal from "@/components/ScrollReveal";
import GoveeLightShowcase from "@/components/GoveeLightShowcase";

export const metadata: Metadata = {
  title: "Govee Permanent Lights Atlantic County NJ | Perfect Finish",
  description:
    "Install Govee permanent outdoor lighting in Atlantic County NJ with painters who work your roofline daily. Clean, color-matched track — call 609-377-4226.",
  openGraph: {
    title: "Govee Permanent Lights Atlantic County NJ | Perfect Finish",
    description:
      "Install Govee permanent outdoor lighting in Atlantic County NJ with painters who work your roofline daily. Clean, color-matched track — call 609-377-4226.",
    type: "website",
    locale: "en_US",
    url: "https://perfectfinishpainter.com/govee-permanent-lighting",
    images: [{ url: "/og-card.jpg", width: 1200, height: 630, alt: "Perfect Finish Painters — Mays Landing, NJ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Govee Permanent Lights Atlantic County NJ | Perfect Finish",
    description:
      "Install Govee permanent outdoor lighting in Atlantic County NJ with painters who work your roofline daily. Clean, color-matched track — call 609-377-4226.",
    images: ["/og-card.jpg"],
  },
  alternates: { canonical: "https://perfectfinishpainter.com/govee-permanent-lighting" },
};

// Install photos get dropped in here as they come off real jobs — add `src`/`alt`
// to an entry and the tile swaps from placeholder to a real image, no markup change.
const installPhotos: { label: string; caption: string; src?: string; alt?: string }[] = [
  {
    label: "Warm white, every night",
    caption: "Classic warm-white scene tracing the rooflines and dormers — subtle by day, architectural by night.",
    src: "/govee-permanent-lighting-warm-white-stone-ranch-linwood-nj.webp",
    alt: "Warm white Govee permanent lighting outlining the rooflines of a stone-front ranch home at night",
  },
  {
    label: "Holiday red, one tap",
    caption: "The same channel run switched to a full red holiday scene from the Govee Home app — no ladders in December.",
    src: "/govee-permanent-lighting-red-estate-porch-mays-landing-nj.webp",
    alt: "Two-story home glowing red from Govee permanent eave lighting for the holidays",
  },
  {
    label: "Team colors",
    caption: "Cool blue game-night scene — the fixtures disappear against the trim until you turn them on.",
    src: "/govee-permanent-lighting-blue-roofline-brigantine-nj.webp",
    alt: "Blue Govee permanent lighting across the gables and garage line of a two-story home",
  },
  {
    label: "Full color zones",
    caption: "Per-zone color control lets one house run multiple colors at once — gables, eaves, and porch each their own.",
    src: "/govee-permanent-lighting-multicolor-ranch-galloway-nj.webp",
    alt: "Ranch home with multicolor Govee permanent lighting zones in red, green, and purple",
  },
];

// Close-up hardware shots — the proof-of-craft tier. Same drop-in contract as
// installPhotos: add `src`/`alt` when the crew shoots them and the tile swaps
// from placeholder to photo, no markup change.
const hardwarePhotos: { label: string; caption: string; src?: string; alt?: string }[] = [
  {
    label: "Mounting bracket & channel clip",
    caption: "The bracket that locks each module at a set angle in the channel — it's why every light aims the same way down the whole run instead of scattering.",
  },
  {
    label: "Flush screw detail",
    caption: "A white-head stainless screw set flush in white fascia — close enough to see there's no torn paint and no proud head to catch water.",
  },
  {
    label: "Cable routing detail",
    caption: "Low-voltage cable run tight along the trim line with UV-rated clips — nothing droops, nothing shows.",
  },
  {
    label: "Controller in its enclosure",
    caption: "The weatherproof enclosure mounted beside the exterior GFCI — dry, tucked out of the sightline, serviceable without a ladder.",
  },
];

export default function GoveePermanentLightingPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://perfectfinishpainter.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://perfectfinishpainter.com/services" },
      { "@type": "ListItem", position: 3, name: "Govee Permanent Outdoor Lighting", item: "https://perfectfinishpainter.com/govee-permanent-lighting" },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Govee Permanent Outdoor Lighting Installation",
    description:
      "Professional Govee permanent outdoor lighting installation in Atlantic County NJ. Roofline measurement and run planning, aluminum mounting channel fastened to the fascia with white-head stainless exterior screws, concealed low-voltage cable routing, weatherproof controller mounting, and Govee Home app setup with scenes and schedules.",
    provider: { "@id": "https://perfectfinishpainter.com/#business" },
    areaServed: areaServedCities,
    url: "https://perfectfinishpainter.com/govee-permanent-lighting",
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
        name: "Will installing permanent lights damage my fascia or paint?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The channel is fastened into the fascia, so yes, there are screw penetrations — that is true of any permanent roofline lighting. What matters is how they're made. We pre-plan the screw spacing so fasteners land in solid material and drive them flush without crushing the paint film. Painting is our day job; we're not going to leave torn paint in wood we may be repainting for you later.",
        },
      },
      {
        "@type": "Question",
        name: "Are the lights visible during the day?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The track is a slim aluminum channel tucked under the roofline edge, not a visible string of bulbs. From the curb it reads as a trim line. We use white channel and white-head stainless screws against white fascia so the hardware disappears into the trim instead of dotting it — the same eye we use to cut a clean paint line at a trim edge is what keeps the run straight and unnoticeable in daylight.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a Govee permanent lighting install take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A typical single-story roofline in Atlantic County is a one-day install, walkthrough and app setup included. Two-story homes, long or broken-up rooflines, steep pitches, and homes needing an extra low-voltage run to reach the controller can push it into a second day. We tell you which one you are at the estimate, not after the ladders are up.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need Wi-Fi for Govee permanent outdoor lights?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not strictly — the controller pairs over Bluetooth for local control from your phone. But you'll want it on your 2.4 GHz Wi-Fi network to get the useful parts: schedules that run themselves, control while you're away from the house, and voice assistant support. We connect the controller during setup and confirm the far end of the run responds before we pack up.",
        },
      },
      {
        "@type": "Question",
        name: "How much does Govee permanent lighting cost to install?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on roofline length, home height, how many separate runs the layout needs, and how far the controller sits from an exterior GFCI outlet — so we quote it on site instead of guessing from a photo. The estimate is free and itemized: materials, the run plan, and labor. Call 609-377-4226 or start the 60-second quote form and we'll come measure the roofline.",
        },
      },
    ],
  };

  const steps = [
    {
      title: "On-site walkthrough and roofline measurement",
      body: "We walk the exterior with you, measure the full roofline, and note fascia condition, gutter position, and any spots where wood needs attention before hardware goes on it. If a section of fascia is soft or the paint is failing, you hear it now — that's a repair, not a place to sink screws.",
    },
    {
      title: "Run planning and controller placement",
      body: "We map where each run starts and stops, where corners and returns fall, and where the controller lives — near an existing exterior GFCI outlet, out of the sightline from the street. Planning the runs first is what keeps the channel from ending mid-fascia in an awkward spot.",
    },
    {
      title: "Aluminum channel mounted along the fascia",
      body: "The mounting channel goes up in straight, level sections, fastened with white-head stainless exterior screws that sit flush against white trim. Corners are cut and fitted rather than bent. This is the step where a painter's eye earns its keep — a channel that wanders even slightly reads as a crooked line across the whole front of the house.",
    },
    {
      title: "Modules snapped in and cable routed",
      body: "Light modules snap into the channel and the low-voltage cable gets routed behind downspouts, along trim lines, and under the roof edge with UV-rated clips so nothing droops or swings in a nor'easter. Cable that has to cross open fascia gets run tight to a trim edge where it disappears.",
    },
    {
      title: "Controller mounted and wired",
      body: "The controller goes into a weatherproof enclosure mounted at the exterior outlet, with the low-voltage feed connected and dressed so nothing shows. Same discipline we bring to the finishing details on a repaint — done clean, done once.",
    },
    {
      title: "Govee Home app setup and homeowner walkthrough",
      body: "We connect the controller, run the full length to confirm every module responds, then set up the Govee Home app with you: scenes for holidays and game days, warm white for everyday evenings, and schedules so it runs itself. You leave knowing how to change a color without calling us.",
    },
  ];

  const materials = [
    { name: "Govee Permanent Outdoor Lights Pro", note: "The light modules themselves — individually addressable, dimmable, warm white through full color." },
    { name: "Aluminum mounting channel", note: "Carries and protects the modules, and gives the run its straight line along the fascia." },
    { name: "White-head stainless exterior screws", note: "Corrosion-resistant for shore air, with heads that vanish against white fascia instead of speckling it." },
    { name: "UV-rated clips and cable ties", note: "Hold cable tight to trim lines and downspouts without going brittle after a season of sun." },
    { name: "Low-voltage extension cabling", note: "Bridges runs and reaches the controller when the outlet isn't where the roofline starts." },
    { name: "Weatherproof controller enclosure", note: "Keeps the controller and its plug dry at the exterior GFCI, year-round." },
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
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/services" className="hover:text-[#2563eb] transition-colors">Services</Link></li>
              <li>/</li>
              <li className="text-[#1e3a5f] font-medium">Govee Permanent Lighting</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-6">
            Govee Permanent Outdoor Lighting Installation in Atlantic County, NJ
          </h1>
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-xl mb-8 bg-[#0f2438]">
            <Image
              src="/govee-permanent-lighting-tricolor-white-red-green-atlantic-city-nj.webp"
              alt="Two-story home lit with red, white, and green Govee permanent lights along the roofline and porch"
              fill
              priority
              sizes="(min-width: 896px) 896px, 100vw"
              className="object-cover object-center"
            />
          </div>
          <p className="text-[#64748b] text-lg mb-6 leading-relaxed">
            Every December it&apos;s the same routine: the ladder comes out in the cold, half the string lights don&apos;t work, the clips that survived last year have gone brittle, and by mid-January the whole thing has to come down again — usually in worse weather than it went up in. Meanwhile the sagging line of lights that looked fine on day one is drooping between gutter hangers by New Year&apos;s.
          </p>
          <p className="text-[#64748b] text-lg mb-6 leading-relaxed">
            Govee permanent outdoor lights go up once. The track lives under your roofline year-round, and the colors change from your phone — warm white for ordinary evenings, orange in October, red and green in December, team colors on a Sunday. No ladder, no storage bin, no untangling.
          </p>
          <p className="text-[#64748b] text-lg mb-8 leading-relaxed">
            Here&apos;s why a <strong className="text-[#1e3a5f]">painting contractor</strong> is the right crew for it: we are already on ladders at your fascia, trim, and roofline all season. The same crew that cuts a clean line where trim meets siding is the crew that keeps a light channel dead straight across the front of your house, sets screws flush without tearing paint.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/quiz?service=govee-lighting" className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 shadow-lg">
              BOOK NOW
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
            <a href="tel:+16093774226" className="border-2 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2">
              Call (609) 377-4226
            </a>
          </div>
        </div>
      </section>

      <GoveeLightShowcase />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">What&apos;s Included in a Govee Permanent Lighting Install?</h2></ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "On-site roofline measurement & run plan",
              "Fascia condition check before any hardware goes up",
              "Aluminum channel mounted straight along the fascia",
              "White-head stainless screws color-matched to trim",
              "Low-voltage cable routed & concealed on trim lines",
              "Screws driven flush into solid fascia — no torn paint",
              "Weatherproof controller mounted at an exterior GFCI",
              "Govee Home app setup, scenes, schedules & walkthrough",
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

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-8">How Do We Install Govee Permanent Lights?</h2></ScrollReveal>
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
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">What Materials Do We Use?</h2></ScrollReveal>
          <p className="text-[#64748b] mb-8 leading-relaxed">
            This is what goes on a typical install. Exact quantities and cable lengths depend on your roofline, so the itemized list comes with your estimate — we don&apos;t quote a materials package before we&apos;ve measured the house.
          </p>
          <ul className="space-y-3">
            {materials.map((m) => (
              <li key={m.name} className="bg-white rounded-xl p-5 shadow-sm border border-[#e2e8f0]">
                <span className="block font-semibold text-[#1e3a5f] mb-1">{m.name}</span>
                <span className="block text-[#64748b] text-sm leading-relaxed">{m.note}</span>
              </li>
            ))}
          </ul>

          <ScrollReveal><h3 className="text-2xl font-bold text-[#1e3a5f] mt-12 mb-4">The Hardware, Up Close</h3></ScrollReveal>
          <p className="text-[#64748b] mb-6 leading-relaxed">
            The difference between a clean install and a callback lives in the details you can only see from a ladder. Close-up shots from our next installs land here — each tile explains what the part is for.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {hardwarePhotos.map((photo) => (
              <figure key={photo.label} className="rounded-2xl overflow-hidden border border-[#e2e8f0] bg-white shadow-sm">
                {photo.src ? (
                  <Image src={photo.src} alt={photo.alt ?? photo.caption} width={600} height={400} loading="lazy" className="w-full h-auto" />
                ) : (
                  <div
                    className="relative h-40 flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-[#0f2438] via-[#1e3a5f] to-[#2563eb]"
                    role="img"
                    aria-label={`Placeholder — close-up photo coming soon: ${photo.label}`}
                  >
                    <svg className="w-7 h-7 text-white/70 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    <span className="text-white font-semibold text-sm">{photo.label}</span>
                    <span className="text-white/70 text-xs mt-1">Close-up coming soon</span>
                  </div>
                )}
                <figcaption className="p-4 text-sm text-[#64748b]">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">What Does a Finished Install Look Like?</h2></ScrollReveal>
          <p className="text-[#64748b] mb-8 leading-relaxed">
            We photograph our own jobs rather than posting stock images, so these tiles fill in as we complete Govee installs around Atlantic County. Everything you see on this site is work our crew actually did — browse <Link href="/our-work" className="text-[#2563eb] hover:underline">our project gallery</Link> in the meantime.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {installPhotos.map((photo) => (
              <figure key={photo.label} className="rounded-2xl overflow-hidden border border-[#e2e8f0] bg-white shadow-sm">
                {photo.src ? (
                  <Image src={photo.src} alt={photo.alt ?? photo.caption} width={600} height={400} loading="lazy" className="w-full h-auto" />
                ) : (
                  <div
                    className="relative h-48 flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-[#1e3a5f] via-[#2563eb] to-[#0f2438]"
                    role="img"
                    aria-label={`Placeholder — install photo coming soon: ${photo.label}`}
                  >
                    <svg className="w-8 h-8 text-white/70 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9h18M6 9v3m4-3v3m4-3v3m4-3v3M4 5h16a1 1 0 011 1v3H3V6a1 1 0 011-1z" />
                    </svg>
                    <span className="text-white font-semibold">{photo.label}</span>
                    <span className="text-white/70 text-sm mt-1">Install photo coming soon</span>
                  </div>
                )}
                <figcaption className="p-4 text-sm text-[#64748b]">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal><h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">Where Do We Install Govee Permanent Lighting in Atlantic County?</h2></ScrollReveal>
          <p className="text-[#64748b] text-lg leading-relaxed mb-6">
            We install permanent roofline lighting in <Link href="/painters-mays-landing-nj" className="text-[#2563eb] hover:underline">Mays Landing</Link>, <Link href="/painters-egg-harbor-township-nj" className="text-[#2563eb] hover:underline">Egg Harbor Township</Link>, <Link href="/painters-galloway-nj" className="text-[#2563eb] hover:underline">Galloway</Link>, <Link href="/painters-somers-point-nj" className="text-[#2563eb] hover:underline">Somers Point</Link>, <Link href="/painters-brigantine-nj" className="text-[#2563eb] hover:underline">Brigantine</Link>, <Link href="/painters-northfield-nj" className="text-[#2563eb] hover:underline">Northfield</Link>, and across Atlantic County. Shore-area homes get extra attention at the fasteners — salt air chews through plated hardware, which is why the screws that go into your fascia are stainless.
          </p>
          <p className="text-[#64748b] text-lg leading-relaxed">
            Planning an <Link href="/exterior-painting" className="text-[#2563eb] hover:underline">exterior repaint</Link>? Do it before the lighting goes up. Fresh fascia and trim means the channel mounts to sound, freshly painted wood, and the screw heads match brand-new paint instead of a color that&apos;s eight years faded. The same visit pairs naturally with <Link href="/garage-door-painting" className="text-[#2563eb] hover:underline">garage door painting</Link>, <Link href="/deck-staining" className="text-[#2563eb] hover:underline">deck staining</Link>, or <Link href="/shed-restoration" className="text-[#2563eb] hover:underline">shed restoration</Link> while our ladders are already at your house.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1e3a5f]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Done Hanging Lights Every December?</h2>
          <p className="text-white/70 text-lg mb-8">Free on-site roofline measurement and an itemized quote. Licensed and insured, NJ HIC 13VH14120900.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quiz?service=govee-lighting" className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 shadow-lg">
              BOOK NOW &mdash; 60-Second Quote
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
