import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "Permanent Christmas Lights in South Jersey | Perfect Finish",
  description:
    "Permanent Christmas lights go up once and work every December after. How Govee roofline installs work in South Jersey — book yours early at 609-377-4226.",
  openGraph: {
    title: "Permanent Christmas Lights in South Jersey",
    description: "Never hang holiday lights again — how permanent Govee roofline lighting works, and why September installs beat the November rush.",
    type: "article",
    locale: "en_US",
    url: "https://perfectfinishpainter.com/blog/permanent-christmas-lights-south-jersey",
    images: [{ url: "/exterior-door-painting-black-linwood-nj.webp", width: 1440, height: 1920, alt: "Freshly painted black front door and exterior trim in Linwood, NJ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Permanent Christmas Lights in South Jersey",
    description: "Never hang holiday lights again — how permanent Govee roofline lighting works, and why September installs beat the November rush.",
    images: ["/exterior-door-painting-black-linwood-nj.webp"],
  },
  alternates: { canonical: "https://perfectfinishpainter.com/blog/permanent-christmas-lights-south-jersey" },
};

export default function PermanentChristmasLightsPost() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://perfectfinishpainter.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://perfectfinishpainter.com/blog" },
      { "@type": "ListItem", position: 3, name: "Permanent Christmas Lights in South Jersey", item: "https://perfectfinishpainter.com/blog/permanent-christmas-lights-south-jersey" },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Permanent Christmas Lights in South Jersey",
    image: "https://perfectfinishpainter.com/exterior-door-painting-black-linwood-nj.webp",
    author: { "@type": "Person", name: "Brandon Panameno", url: "https://perfectfinishpainter.com/about" },
    publisher: { "@type": "Organization", name: "Perfect Finish Painters", logo: { "@type": "ImageObject", url: "https://perfectfinishpainter.com/logo.webp" } },
    datePublished: "2026-09-01",
    dateModified: "2026-09-01",
    description: "Permanent Christmas lights go up once and work every December after. How Govee roofline installs work in South Jersey and why early fall is the time to book.",
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
              <li className="text-[#1e3a5f] font-medium">Permanent Christmas Lights</li>
            </ol>
          </nav>
        </div>
      </div>

      <article className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#94a3b8] text-sm">Seasonal Guide · September 2026</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mt-2 mb-8">
            What Are Permanent Christmas Lights &mdash; and Why Book in September?
          </h1>

          <figure className="mb-8 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/exterior-door-painting-black-linwood-nj.webp"
              alt="Freshly painted black front door and crisp white exterior trim in Linwood, NJ"
              width={1440}
              height={1920}
              className="w-full h-auto"
              priority
            />
            <figcaption className="text-sm text-[#64748b] px-4 py-2 bg-[#f8fafc]">Crisp trim in Linwood — the kind of roofline where a color-matched Govee track disappears by day.</figcaption>
          </figure>

          <div className="prose prose-lg max-w-none text-[#374151] space-y-6">
            <p className="text-lg leading-relaxed">
              Every year around Thanksgiving, the same scene plays out on driveways across South Jersey: a ladder, a tangle of light strands that worked fine in the bin, and a cold afternoon lost to clips and dead bulbs. Permanent Christmas lights end that ritual for good. One professional install, and every December after that your display turns on from your phone — along with every other night of the year you want the house lit.
            </p>

            <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">How Do Permanent Christmas Lights Work?</h2>
            <p className="text-lg leading-relaxed">
              A slim aluminum track mounts along your roofline with individually controllable LEDs inside it. The track is color-matched to your fascia so it&apos;s effectively invisible in daylight; the lights are addressable, so from the Govee app you can run classic warm white, candy-cane red and white, any team&apos;s colors, or animated effects — per section of the house. The system stays up year-round: holiday scenes in December, subtle architectural lighting the other eleven months. Full details are on our <Link href="/govee-permanent-lighting" className="text-[#2563eb] underline hover:text-[#1d4ed8] transition-colors">Govee permanent lighting page</Link>.
            </p>

            <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">Do They Hold Up at the Shore?</h2>
            <p className="text-lg leading-relaxed">
              Better than anything you hang each year. Traditional strands die at the shore because every connection point is exposed to salt fog for months. A permanent system replaces dozens of exposed junctions with one protected low-voltage run inside the channel, stainless hardware and a weatherproof controller. It&apos;s the same logic we apply to exterior coatings in towns like <Link href="/painters-brigantine-nj" className="text-[#2563eb] underline hover:text-[#1d4ed8] transition-colors">Brigantine</Link> and <Link href="/painters-somers-point-nj" className="text-[#2563eb] underline hover:text-[#1d4ed8] transition-colors">Somers Point</Link>: fewer weak points, better materials, built for wind-driven rain.
            </p>

            <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">Why Book in September Instead of November?</h2>
            <p className="text-lg leading-relaxed">
              Three reasons. First, the calendar: install demand explodes after the first cold weekend, and late bookers get waitlisted past the holidays entirely. Second, the weather: September installs happen in shirt-sleeve conditions with dry fascia, ideal for clean, precise fastening. Third, the trim itself: if your fascia needs repair or repainting — and after a shore summer, plenty do — there&apos;s still time to fix it before the track goes on. Fresh <Link href="/exterior-painting" className="text-[#2563eb] underline hover:text-[#1d4ed8] transition-colors">exterior paint</Link> plus color-matched track is the best-looking version of this upgrade.
            </p>

            <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">What Does the Process Look Like?</h2>
            <p className="text-lg leading-relaxed">
              We measure your roofline and plan the runs, check the fascia is sound, mount the channel with white-head stainless screws, route and conceal the low-voltage cable, mount the weatherproof controller by your exterior outlet, and set up the Govee Home app with you — scenes, schedules, the works. Most single-family installs are done in a day. By the time your neighbors are untangling strands in the cold, you&apos;re picking a scene from the couch.
            </p>
          </div>

          <div className="mt-12 bg-[#f1f5f9] rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-3">Never Hang Holiday Lights Again</h2>
            <p className="text-[#64748b] mb-6">September installs are lit, tested and dialed in months before the rush. Get your free roofline quote today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quiz?service=govee-lighting" className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 shadow-lg">
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
