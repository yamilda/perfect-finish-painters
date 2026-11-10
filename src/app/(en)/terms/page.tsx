import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "Terms of Service | Perfect Finish Painters",
  description:
    "Terms of service for the Perfect Finish Painters website and online estimate requests. Project contracts are signed separately before any work begins.",
  alternates: { canonical: "https://perfectfinishpainter.com/terms" },
  robots: { index: true, follow: true },
};

const lastUpdated = "April 22, 2026";

export default function TermsPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://perfectfinishpainter.com" },
      { "@type": "ListItem", position: 2, name: "Terms of Service", item: "https://perfectfinishpainter.com/terms" },
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
              <li className="text-[#1e3a5f] font-medium">Terms of Service</li>
            </ol>
          </nav>
        </div>
      </div>

      <article className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto prose prose-lg text-[#374151]">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-3">Terms of Service</h1>
          <p className="text-[#64748b] text-sm mb-8">Last updated: {lastUpdated}</p>

          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the website at{" "}
            <Link href="/" className="text-[#2563eb] hover:underline">perfectfinishpainter.com</Link>{" "}
            (the &ldquo;Site&rdquo;), operated by Perfect Finish Painters LLC (&ldquo;Perfect
            Finish Painters,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;). By
            visiting the Site, using the estimate quiz, or contacting us, you agree to these
            Terms. If you do not agree, please do not use the Site.
          </p>

          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">Project Contracts Are Separate</h2>
          <p>
            These Terms cover the <em>Site and its tools</em> — the content, the estimate quiz,
            contact forms, and communications you send through them. Actual painting work is
            governed by a separate written proposal, estimate, or contract signed before the
            project starts. If any provision in a signed project contract conflicts with these
            Site Terms, the signed project contract controls for that project.
          </p>

          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">Estimates Are Not Binding Until Signed</h2>
          <p>
            Prices displayed anywhere on the Site (including blog posts, service pages, and quiz
            results) are general ranges meant to help you budget. They are not fixed quotes.
            Binding pricing for your project is provided in a written estimate after we see the
            site or receive detailed photos. A project is only scheduled once you sign the
            estimate and we confirm a start date in writing.
          </p>

          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">Scheduling, Weather, and Delays</h2>
          <p>
            Exterior painting schedules depend on weather. We may reschedule exterior work on
            short notice when rain, humidity, or temperature would affect paint performance.
            We&apos;ll always give you the earliest realistic reschedule. Interior work continues
            on schedule unless the homeowner requests otherwise.
          </p>

          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">Payment</h2>
          <p>
            Unless the signed estimate says otherwise, residential projects use one of these
            terms:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Small projects</strong> (one-day work): paid in full on completion.</li>
            <li><strong>Standard projects</strong>: a deposit at scheduling and the balance on completion.</li>
            <li><strong>Larger projects</strong>: a deposit, a progress payment partway through, and a final payment on completion.</li>
          </ul>
          <p>
            We accept check, cash, and electronic payment. Invoices not paid within 10 days of
            completion may incur a 1.5% monthly service charge, the maximum allowed under NJ
            law or as specified in your project contract.
          </p>

          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">Warranty</h2>
          <p>
            Perfect Finish Painters offers a labor warranty against peeling, flaking, and
            blistering caused by our workmanship. The specific term (typically one to three
            years depending on the project type) is listed on your project contract. Paint
            product warranties are provided by the manufacturer (Benjamin Moore,
            Sherwin-Williams, etc.) and vary by product line. The warranty does not cover
            damage from moisture intrusion, structural movement, wear and tear, hail, or work
            performed by others.
          </p>

          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">Use of the Site</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the Site in any way that violates law, or any contract or right you have with someone else.</li>
            <li>Scrape, data-mine, or use automated tools to access the Site except for legitimate search indexing.</li>
            <li>Copy, republish, or redistribute our photos, project descriptions, blog content, or pricing guides without written permission.</li>
            <li>Submit false information or impersonate another person through our forms.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">Intellectual Property</h2>
          <p>
            All content on the Site — including text, photos, project galleries, blog articles,
            and the Perfect Finish Painters name and logo — is owned by Perfect Finish Painters
            LLC or licensed to us, and is protected by copyright and trademark law. You may
            view the Site and share links to it. Any other use requires written permission.
          </p>

          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">Third-Party Links</h2>
          <p>
            The Site links to third-party tools and platforms (Google Maps, Sherwin-Williams,
            Google Reviews, Facebook, Yelp). We don&apos;t control those sites and aren&apos;t
            responsible for their content or practices.
          </p>

          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">Disclaimer</h2>
          <p>
            The Site and its content are provided &ldquo;as is.&rdquo; To the extent allowed by
            law, Perfect Finish Painters disclaims all warranties on the Site itself, including
            warranties of merchantability, fitness for a particular purpose, and non-infringement.
            Information on the Site, including paint recommendations and pricing ranges, is for
            general guidance only and should not be relied on in place of a written estimate for
            your specific project.
          </p>

          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">Limitation of Liability</h2>
          <p>
            To the maximum extent allowed by law, Perfect Finish Painters is not liable for any
            indirect, incidental, consequential, special, or punitive damages arising from your
            use of the Site. Our total liability for any claim arising out of Site use, not
            related to a signed project contract, is limited to $100. Claims tied to a painting
            project are governed by that project&apos;s contract, not these Site Terms.
          </p>

          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of New Jersey, without regard to
            conflict of law rules. Any claim arising from these Terms must be filed in the
            state or federal courts located in Atlantic County, New Jersey.
          </p>

          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">Changes</h2>
          <p>
            We may update these Terms as the business, law, or Site changes. The &ldquo;Last
            updated&rdquo; date at the top will reflect the latest version. Continued use of
            the Site after a change means you accept the updated Terms.
          </p>

          <h2 className="text-2xl font-bold text-[#1e3a5f] mt-10 mb-4">Contact</h2>
          <p>
            Questions about these Terms:<br />
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
