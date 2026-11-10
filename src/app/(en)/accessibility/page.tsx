import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "Accessibility Statement | Perfect Finish Painters",
  description:
    "Perfect Finish Painters is committed to a website everyone can use. Learn about the accessibility features of perfectfinishpainter.com and how to report issues.",
  openGraph: {
    title: "Accessibility Statement | Perfect Finish Painters",
    description:
      "Perfect Finish Painters is committed to a website everyone can use. Learn about the accessibility features of perfectfinishpainter.com and how to report issues.",
    type: "website",
    locale: "en_US",
    url: "https://perfectfinishpainter.com/accessibility",
    images: [{ url: "/og-card.jpg", width: 1200, height: 630, alt: "Perfect Finish Painters — interior, exterior & drywall in Mays Landing, NJ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessibility Statement | Perfect Finish Painters",
    description:
      "Perfect Finish Painters is committed to a website everyone can use. Learn about the accessibility features of perfectfinishpainter.com and how to report issues.",
    images: ["/og-card.jpg"],
  },
  alternates: { canonical: "https://perfectfinishpainter.com/accessibility" },
  robots: { index: true, follow: true },
};

const lastUpdated = "April 22, 2026";

export default function AccessibilityPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://perfectfinishpainter.com" },
      { "@type": "ListItem", position: 2, name: "Accessibility", item: "https://perfectfinishpainter.com/accessibility" },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="pt-28 sm:pt-36 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-[#64748b]">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-[#1e3a5f] font-medium">Accessibility</li>
            </ol>
          </nav>
        </div>
      </div>

      <article className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto prose prose-lg text-[#374151]">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-3">Accessibility Statement</h1>
          <p className="text-[#64748b] text-sm mb-8">Last updated: {lastUpdated}</p>

          <p>
            Perfect Finish Painters is committed to making our website, estimate tools, and
            written communications usable by everyone, including people who rely on assistive
            technology. This statement explains what we&apos;re doing, what&apos;s working, and
            how to reach us if something isn&apos;t.
          </p>

          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">Our Standard</h2>
          <p>
            We target{" "}
            <a
              href="https://www.w3.org/TR/WCAG21/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563eb] hover:underline"
            >
              Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
            </a>
            , the standard most referenced by U.S. ADA guidance for public-facing business
            websites. Reaching full conformance is a continuous process — we test pages as we
            build them and fix issues as we find them.
          </p>

          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">What Have We Done?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Semantic HTML</strong> — header, nav, main, article, and footer landmarks on every page so screen reader users can skip to what they need.</li>
            <li><strong>Heading hierarchy</strong> — one H1 per page, H2s and H3s follow in logical order.</li>
            <li><strong>Alt text on images</strong> — descriptive alt text on meaningful images; empty alt on decorative ones so screen readers don&apos;t announce them.</li>
            <li><strong>Keyboard navigation</strong> — every link, button, and form control can be reached and used with Tab, Shift+Tab, and Enter. No keyboard traps.</li>
            <li><strong>Form labels</strong> — every input has a visible label connected via <code>htmlFor</code>, not just placeholder text.</li>
            <li><strong>Color contrast</strong> — body text and interactive elements meet WCAG AA contrast ratios against their backgrounds.</li>
            <li><strong>Zoom and responsive layout</strong> — content reflows at 200% zoom and on narrow screens without horizontal scrolling.</li>
            <li><strong>Language declaration</strong> — <code>lang</code> attribute is set on every page so screen readers use correct pronunciation.</li>
            <li><strong>Skip-to-content link</strong> — keyboard users can skip the navigation and jump directly to the main content.</li>
            <li><strong>Link text</strong> — descriptive text rather than &ldquo;click here,&rdquo; and external links are marked <code>rel=&quot;noopener&quot;</code>.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">Known Limitations</h2>
          <p>
            We&apos;re transparent about what still needs work. As of the last update date
            above, we know about:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Embedded Google Maps</strong> — the map iframe on our home and contact
              pages is provided by Google and its internal interactive controls may not be
              fully WCAG-conformant. The map is supplementary to written address information,
              which is always available in text.
            </li>
            <li>
              <strong>Before/after image sliders</strong> — our project gallery uses a drag
              slider to compare before and after photos. Both images are also accessible
              individually as separate images with alt text for users who can&apos;t use the
              slider.
            </li>
            <li>
              <strong>Third-party social embeds</strong> — review widgets and social profile
              links lead to platforms whose accessibility is outside our control.
            </li>
          </ul>
          <p>These are on our list to improve or replace with fully accessible alternatives.</p>

          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">How Do We Test?</h2>
          <p>
            We test new pages with keyboard-only navigation and with common screen readers
            (VoiceOver on macOS, NVDA on Windows). We also use automated tools including
            Lighthouse and axe DevTools during development. Automated tools catch only a
            portion of accessibility issues, so we combine them with manual testing.
          </p>

          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">Need Another Format?</h2>
          <p>
            If you&apos;d prefer a phone conversation over the website, we&apos;re happy to
            walk you through services, pricing, and scheduling by phone. Call or text{" "}
            <a href="tel:+16093774226" className="text-[#2563eb] hover:underline">
              (609) 377-4226
            </a>
            . We&apos;re also comfortable communicating in Spanish or by WhatsApp if that&apos;s
            easier.
          </p>

          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">Report an Issue</h2>
          <p>
            If any part of this website is hard to use with assistive technology, please let
            us know. Tell us what page you were on, what you were trying to do, and what
            happened. We take these reports seriously and fix issues as quickly as possible.
          </p>
          <p>
            Email{" "}
            <a href="mailto:info@perfectfinishpainter.com" className="text-[#2563eb] hover:underline">
              info@perfectfinishpainter.com
            </a>{" "}
            or call{" "}
            <a href="tel:+16093774226" className="text-[#2563eb] hover:underline">
              (609) 377-4226
            </a>
            . We acknowledge reports within two business days and follow up with a fix or a
            workaround.
          </p>

          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">Business Contact</h2>
          <p>
            Perfect Finish Painters LLC<br />
            Mays Landing, New Jersey<br />
            <a href="tel:+16093774226" className="text-[#2563eb] hover:underline">(609) 377-4226</a><br />
            <a href="mailto:info@perfectfinishpainter.com" className="text-[#2563eb] hover:underline">info@perfectfinishpainter.com</a>
          </p>
        </div>
      </article>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
