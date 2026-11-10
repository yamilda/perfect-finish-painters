import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Painting Tips & Blog | Perfect Finish Painters",
  description:
    "Painting tips, home improvement advice, and project guides from Perfect Finish Painters in Mays Landing, NJ — interior painting, exterior painting, and more.",
  openGraph: {
    title: "Painting Tips & Blog | Perfect Finish Painters",
    description: "Painting tips, home improvement advice, and project guides from Perfect Finish Painters.",
    type: "website",
    locale: "en_US",
    url: "https://perfectfinishpainter.com/blog",
    images: [{ url: "/og-card.jpg", width: 1200, height: 630, alt: "Perfect Finish Painters — interior, exterior & drywall in Mays Landing, NJ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Painting Tips & Blog | Perfect Finish Painters",
    description: "Painting tips, home improvement advice, and project guides from Perfect Finish Painters.",
    images: ["/og-card.jpg"],
  },
  alternates: { canonical: "https://perfectfinishpainter.com/blog" },
};

const posts = [
  {
    slug: "permanent-christmas-lights-south-jersey",
    title: "What Are Permanent Christmas Lights - and Why Book in September?",
    excerpt: "One professional Govee install and every December after turns on from your phone. How permanent roofline lighting works at the shore, why it survives salt air, and why September installs beat the November waitlist.",
    date: "September 2026",
    image: "/exterior-door-painting-black-linwood-nj.webp",
    alt: "Freshly painted black front door and exterior trim in Linwood, NJ",
  },
  {
    slug: "exterior-painting-before-fall-south-jersey",
    title: "Is Fall the Last Good Window to Paint Your Home's Exterior?",
    excerpt: "Late August through October is the friendliest exterior painting weather of the year in South Jersey - and the last chance to seal siding, trim and decks before winter storms do real damage. What fits before the season closes.",
    date: "August 2026",
    image: "/deck-exterior-painting-before-after-south-jersey-nj.webp",
    alt: "Before and after of weathered horizontal wood siding and a dark sliding door beside an unstained gray deck, refreshed to orange-brown siding with a white slider frame",
  },
  {
    slug: "govee-permanent-lighting-painters-south-jersey",
    title: "Why Should a Painter Install Your Govee Permanent Lighting?",
    excerpt: "Govee track mounts to your fascia - the exact surface painting crews work every week. Why sound-wood checks, color-matching and clean flush fastening make a painter the right installer for permanent roofline lighting.",
    date: "August 2026",
    image: "/exterior-siding-staining-before-after-egg-harbor-township-nj.webp",
    alt: "Before and after of weathered horizontal wood siding and a dark sliding door on a deck in Egg Harbor Township, refreshed to orange-brown siding with a white slider frame",
  },
  {
    slug: "wallpaper-removal-repaint-south-jersey",
    title: "What Does Wallpaper Removal & Repaint Really Involve?",
    excerpt: "Wallpaper removal is a wall-restoration job, not a peeling job. Steaming, glue washing, drywall repair and a proper repaint - what it takes to make an older South Jersey room look new again.",
    date: "July 2026",
    image: "/bathroom-wallpaper-removal-painting-before-after-absecon-nj.webp",
    alt: "Bathroom wallpaper removal and repaint before and after in Absecon, NJ",
  },
  {
    slug: "summer-interior-painting-south-jersey",
    title: "Is Summer a Good Time to Repaint Your South Jersey Home's Interior?",
    excerpt: "Summer is one of the best windows to repaint inside — if you account for shore humidity. Here's how coastal moisture and your AC affect paint drying, and the smart way to schedule a summer interior project in Atlantic County.",
    date: "June 2026",
    image: "/bedroom-repaint-blue-to-white-before-after-pleasantville-nj.webp",
    alt: "Before and after of a Pleasantville bedroom: blue walls and covered furniture, then white walls, a gray bed, and wood-look flooring",
  },
  {
    slug: "garage-drywall-finishing-south-jersey",
    title: "Garage Drywall Finishing & Painting in South Jersey",
    excerpt: "We took a big garage from bare, taped drywall to a clean, fully finished and painted room. See the before & after and exactly what goes into finishing a space the right way — finishing seams, priming, and painting walls and ceiling.",
    date: "June 2026",
    image: "/projects/garage-finishing-1.webp",
    alt: "Garage drywall finishing before and after in South Jersey",
  },
  {
    slug: "kitchen-drywall-repair-south-jersey",
    title: "Kitchen Drywall Repair & Repaint in South Jersey",
    excerpt: "A gouged, patched wall behind the counter turned seamless and repainted — so you can't tell where the damage was. Here's exactly what goes into a drywall repair that disappears.",
    date: "June 2026",
    image: "/projects/kitchen-drywall-repair.webp",
    alt: "Kitchen drywall repair and repaint before and after in South Jersey",
  },
  {
    slug: "bathroom-repaint-south-jersey",
    title: "Bathroom Repaint in South Jersey",
    excerpt: "A tired bathroom refreshed top to bottom — walls, trim, and beadboard ceiling — with moisture-resistant paint built to handle South Jersey humidity and daily showers.",
    date: "June 2026",
    image: "/projects/bathroom-repaint.webp",
    alt: "Bathroom repaint before and after in South Jersey",
  },
  {
    slug: "accent-wall-painting-south-jersey",
    title: "Accent Wall Painting in South Jersey",
    excerpt: "One bold navy wall transformed this living room. See why an accent wall is the highest-impact, lowest-cost upgrade — and what it takes to get crisp lines on a dark color.",
    date: "June 2026",
    image: "/projects/living-room-accent-wall.webp",
    alt: "Living room accent wall before and after in South Jersey",
  },
  {
    slug: "open-concept-living-dining-repaint-south-jersey",
    title: "Open-Concept Living & Dining Repaint in South Jersey",
    excerpt: "Drywall repair around the pass-through plus a full, consistent repaint pulled this connected living and dining area together. Why consistency is everything in an open layout.",
    date: "June 2026",
    image: "/projects/open-concept-living-dining.webp",
    alt: "Open-concept living and dining repaint before and after in South Jersey",
  },
  {
    slug: "sherwin-williams-snowbound-paint-south-jersey",
    title: "Discover the Timeless Appeal of Sherwin-Williams Snowbound Paint for South Jersey Homes",
    excerpt: "Sherwin-Williams Snowbound is a versatile, crisp white paint color that's perfect for creating bright, inviting spaces in your South Jersey home. As professional painters in Mays Landing, NJ, we've seen how this neutral shade enhances everything from modern kitchens to cozy living rooms. Learn why Snowbound could be the ideal choice for your next painting project with Perfect Finish Painters.",
    date: "March 2026",
    image: "/images/blog/sherwin-williams-snowbound-paint-south-jersey.webp",
    alt: "Sherwin-Williams Snowbound white paint on interior walls in a South Jersey home",
  },
  {
    slug: "cedar-siding-repair-south-jersey",
    title: "Expert Cedar Siding Repair: Restoring Your South Jersey Home's Charm",
    excerpt: "Cedar siding is a popular choice for homes in South Jersey due to its natural beauty and durability, but it can suffer from wear over time. At Perfect Finish Painters, we specialize in professional cedar siding repair to protect and enhance your property. Learn about common issues, repair techniques, and why our Mays Landing-based team is your go-to for South Jersey painting services.",
    date: "March 2026",
    image: "/exterior-siding-staining-before-after-egg-harbor-township-nj.webp",
    alt: "Before and after of weathered horizontal wood siding and a dark sliding door on a deck in Egg Harbor Township, refreshed to orange-brown siding with a white slider frame",
  },
  {
    slug: "exterior-painting-south-jersey",
    title: "Enhance Your Home's Curb Appeal with Professional Exterior Painting in South Jersey",
    excerpt: "Discover how professional exterior painting can transform your home's appearance and protect it from the elements. At Perfect Finish Painters in Mays Landing, NJ, we specialize in high-quality exterior painting services tailored for South Jersey homes. Learn tips, benefits, and why choosing local experts makes all the difference.",
    date: "March 2026",
    image: "/deck-exterior-painting-before-after-south-jersey-nj.webp",
    alt: "Before and after of weathered horizontal wood siding and a dark sliding door beside an unstained gray deck, refreshed to orange-brown siding with a white slider frame",
  },
  {
    slug: "difference-between-flat-and-satin-paint-finish",
    title: "Understanding the Difference Between Flat and Satin Paint Finishes",
    excerpt: "Choosing the right paint finish can make a big difference in your home's appearance and durability. Flat and satin finishes are popular options, each with unique characteristics suited to different rooms and needs. In this post, we'll break down the key differences to help you decide what's best for your South Jersey home.",
    date: "March 2026",
    image: "/basement-room-painting-flooring-before-after-egg-harbor-township-nj.webp",
    alt: "Before and after of a basement room in Egg Harbor Township: patched gray walls and a covered floor, then lilac walls and wood-look flooring under a drop ceiling",
  },
  {
    slug: "best-exterior-paint-south-jersey",
    title: "Best Exterior Paint for South Jersey Homes",
    excerpt: "Coastal humidity, salt air, and seasonal temperature swings make choosing the right exterior paint critical in South Jersey. Here's what we recommend.",
    date: "February 2025",
    image: "/shed-exterior-painting-before-after-mays-landing-nj.webp",
    alt: "Before and after of a weathered tan wood shed in Mays Landing repainted white, with black double doors, black shutters, and black corner trim",
  },
];

export default function BlogPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://perfectfinishpainter.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://perfectfinishpainter.com/blog" },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="pt-36 pb-16 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-4">Painting Tips & Blog</h1>
            <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
              Helpful guides, tips, and advice from the Perfect Finish Painters team.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro section — adds substance to what was otherwise just a card grid, and
          gives the index page indexable copy beyond the post excerpts. */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-[#64748b] text-lg leading-relaxed mb-5">
              We publish here when we run into something worth sharing with South Jersey homeowners — a paint color we keep getting asked about, a coastal-home prep technique that actually holds, a question a homeowner asked us mid-project that turned out to be more useful as a post than a one-off answer.
            </p>
            <p className="text-[#64748b] text-lg leading-relaxed mb-5">
              Most posts come out of real Perfect Finish projects in Mays Landing, Hammonton, and the shore towns. Expect plain-English explanations of what works (and what doesn&apos;t) for interior repaints, exterior maintenance, drywall and ceiling repair, cabinet refinishing, and the weather-resistant products we lean on for homes near the bay or the ocean.
            </p>
            <p className="text-[#64748b] text-lg leading-relaxed">
              If you have a question we haven&apos;t answered yet, send it our way — chances are someone else is asking the same thing. <Link href="/contact" className="text-[#2563eb] hover:underline">Contact us</Link> or <Link href="/quiz" className="text-[#2563eb] hover:underline">grab a free estimate</Link> if you&apos;re ready to talk about a project.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {posts.map((post) => (
              <ScrollReveal key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="block group">
                  <article className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#e2e8f0] hover:shadow-xl transition-shadow">
                    <Image src={post.image} alt={post.alt} width={1200} height={630} className="w-full h-64 object-cover" />
                    <div className="p-8">
                    <span className="text-[#94a3b8] text-sm">{post.date}</span>
                    <h2 className="text-2xl font-bold text-[#1e3a5f] mt-2 mb-3 group-hover:text-[#2563eb] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-[#64748b] text-lg">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-[#2563eb] font-semibold mt-4">
                      Read more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                    </span>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
