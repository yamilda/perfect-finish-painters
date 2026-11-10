import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "Privacy Policy | Perfect Finish Painters",
  description:
    "Privacy policy for Perfect Finish Painters LLC. How we collect, use, and protect the information you share when requesting a painting estimate in South Jersey.",
  openGraph: {
    title: "Privacy Policy | Perfect Finish Painters",
    description:
      "Privacy policy for Perfect Finish Painters LLC. How we collect, use, and protect the information you share when requesting a painting estimate in South Jersey.",
    type: "website",
    locale: "en_US",
    url: "https://perfectfinishpainter.com/privacy",
    images: [{ url: "/og-card.jpg", width: 1200, height: 630, alt: "Perfect Finish Painters — interior, exterior & drywall in Mays Landing, NJ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Perfect Finish Painters",
    description:
      "Privacy policy for Perfect Finish Painters LLC. How we collect, use, and protect the information you share when requesting a painting estimate in South Jersey.",
    images: ["/og-card.jpg"],
  },
  alternates: { canonical: "https://perfectfinishpainter.com/privacy" },
  robots: { index: true, follow: true },
};

const lastUpdated = "November 9, 2026";

export default function PrivacyPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://perfectfinishpainter.com" },
      { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://perfectfinishpainter.com/privacy" },
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
              <li className="text-[#1e3a5f] font-medium">Privacy Policy</li>
            </ol>
          </nav>
        </div>
      </div>

      <article className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto prose prose-lg text-[#374151]">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-3">Privacy Policy</h1>
          <p className="text-[#64748b] text-sm mb-8">Last updated: {lastUpdated}</p>

          <p>
            Perfect Finish Painters LLC (&ldquo;Perfect Finish Painters,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the website{" "}
            <Link href="/" className="text-[#2563eb] hover:underline">perfectfinishpainter.com</Link>{" "}
            and provides residential and commercial painting services throughout Atlantic County
            and South Jersey. This Privacy Policy explains what information we collect, how we use
            it, and the choices you have. By using the site or contacting us, you agree to the
            practices described here.
          </p>

          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">Information We Collect</h2>
          <p>We only collect information you provide directly or information your browser sends automatically:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Contact and project details</strong> — name, phone number, email address,
              project address, and any notes or photos you submit through our estimate quiz,
              contact form, WhatsApp, email, or phone call.
            </li>
            <li>
              <strong>Usage data</strong> — pages visited, referring URL, approximate location
              (city-level), browser type, device type, and time spent on the site. This is
              collected through Google Analytics, the Meta (Facebook) Pixel, Vercel
              Analytics (our hosting provider&apos;s privacy-friendly page-view counter), and
              Semetry, a privacy-friendly analytics service from our website provider that
              measures anonymous page views, clicks, device type, and form submissions. Semetry
              does not collect the values you enter into forms.
            </li>
            <li>
              <strong>Cookies</strong> — small files stored on your device to remember settings
              and measure site traffic. You can disable cookies in your browser; doing so may
              affect some site functions like the estimate quiz.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">How We Use It</h2>
          <p>Information you share is used to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to your estimate request or question.</li>
            <li>Schedule, complete, and follow up on painting projects.</li>
            <li>Send invoices, warranty information, or appointment reminders.</li>
            <li>Measure and improve how the website performs.</li>
            <li>Run targeted advertising on Google and Meta platforms to reach homeowners in our service area.</li>
            <li>Comply with NJ consumer protection law and our HIC license obligations.</li>
          </ul>
          <p>
            We do <strong>not</strong> sell your personal information. We do not share your
            project details with other contractors. We do not use your information for anything
            unrelated to your painting inquiry.
          </p>

          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">Who We Share With</h2>
          <p>We share limited information only with service providers that help us run the business:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Vercel</strong> — website hosting and aggregated page-view analytics.</li>
            <li><strong>SJ Tech Solution LLC</strong> — our website provider; runs Semetry analytics and delivers contact-form messages to us.</li>
            <li><strong>Google</strong> — Analytics, Ads, and Google Business Profile.</li>
            <li><strong>Meta (Facebook)</strong> — Pixel for ad measurement and retargeting.</li>
            <li><strong>Email provider</strong> — to receive and respond to your messages.</li>
            <li><strong>Payment processor</strong> — if you pay an invoice electronically, the processor handles card or bank data directly and we never see your full payment credentials.</li>
          </ul>
          <p>
            We may also disclose information if required by law, court order, or to enforce our
            terms or protect our rights.
          </p>

          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">How Long We Keep It</h2>
          <p>
            Estimate requests and project files are kept for up to seven years after the project
            closes, which matches NJ business record-keeping and warranty requirements. Website
            analytics data follows Google&apos;s default retention (currently 14 months). You can
            ask us to delete your records sooner — see the next section.
          </p>

          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">Your Rights</h2>
          <p>You can contact us any time to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>See what information we have about you.</li>
            <li>Correct information that is wrong.</li>
            <li>Delete your contact record (we may keep records tied to a completed project for tax and warranty purposes).</li>
            <li>Opt out of marketing emails or text messages.</li>
            <li>Withdraw consent for analytics and advertising cookies.</li>
          </ul>
          <p>
            Send requests to{" "}
            <a href="mailto:info@perfectfinishpainter.com" className="text-[#2563eb] hover:underline">
              info@perfectfinishpainter.com
            </a>{" "}
            or call <a href="tel:+16093774226" className="text-[#2563eb] hover:underline">(609) 377-4226</a>.
            We reply to privacy requests within 30 days.
          </p>

          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">Children</h2>
          <p>
            Our services are offered to adults. We do not knowingly collect information from
            children under 13. If you believe a child has sent us information, contact us and we
            will delete it.
          </p>

          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">Security</h2>
          <p>
            We host the site on Vercel, which provides HTTPS and standard application security.
            No website or email system is 100% secure, so please avoid sending sensitive
            information like Social Security numbers or full payment card details through
            contact forms or email.
          </p>

          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">Third-Party Links</h2>
          <p>
            Our site links to third parties like Google Maps, Sherwin-Williams, and our review
            platforms (Google, Facebook, Yelp). Their privacy practices are their own and this
            policy does not cover them.
          </p>

          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">Changes to This Policy</h2>
          <p>
            We update this policy when we change the tools or services we use. When we do, we
            revise the &ldquo;Last updated&rdquo; date at the top. Continued use of the site after
            changes means you accept the revised policy.
          </p>

          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">Contact</h2>
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
