import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact Perfect Finish Painters | Mays Landing NJ",
  description:
    "Contact Perfect Finish Painters in Mays Landing, NJ for a free estimate on interior or exterior painting, drywall, or flooring. Call 609-377-4226 today.",
  openGraph: {
    title: "Contact Perfect Finish Painters | Mays Landing NJ",
    description:
      "Get in touch for a free painting estimate in Atlantic County NJ. Phone, WhatsApp, email, or online form — Perfect Finish Painters replies within one business day.",
    type: "website",
    locale: "en_US",
    url: "https://perfectfinishpainter.com/contact",
    images: [{ url: "/og-card.jpg", width: 1200, height: 630, alt: "Perfect Finish Painters — interior, exterior & drywall in Mays Landing, NJ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Perfect Finish Painters | Mays Landing NJ",
    description:
      "Free estimates for painting in South Jersey. Call, text, or message Perfect Finish Painters — we reply within one business day.",
    images: ["/og-card.jpg"],
  },
  alternates: { canonical: "https://perfectfinishpainter.com/contact" },
};

export default function ContactPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://perfectfinishpainter.com" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://perfectfinishpainter.com/contact" },
    ],
  };

  // ContactPage references the HousePainter entity in layout.tsx by @id so rich results
  // resolve phone/areaServed/hours from the single business entity rather than duplicating.
  const contactPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Perfect Finish Painters",
    url: "https://perfectfinishpainter.com/contact",
    description:
      "Phone, email, WhatsApp, and online form for Perfect Finish Painters serving Mays Landing and Atlantic County, New Jersey.",
    mainEntity: { "@id": "https://perfectfinishpainter.com/#business" },
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }} />

      {/* Breadcrumb */}
      <div className="pt-28 sm:pt-36 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-[#64748b]">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-[#2563eb] transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-[#1e3a5f] font-medium">Contact</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-8 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a5f] mb-4">
              Contact Perfect Finish Painters
            </h1>
            <p className="text-[#64748b] text-lg max-w-2xl leading-relaxed">
              Questions about a project, scheduling, or pricing? We reply within one business day.
              Call or text <a href="tel:+16093774226" className="text-[#2563eb] font-semibold hover:underline">(609) 377-4226</a>,
              send a message below, or use WhatsApp if you prefer Spanish — Brandon answers personally.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact methods grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal delay={0}>
              <a
                href="tel:+16093774226"
                className="block bg-white rounded-2xl p-6 shadow-lg border border-[#e2e8f0] hover:border-[#2563eb] hover:shadow-xl transition-all h-full"
              >
                <div className="w-12 h-12 bg-[#2563eb]/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-[#1e3a5f] mb-2">Call or Text</h2>
                <p className="text-[#2563eb] font-semibold text-lg mb-1">(609) 377-4226</p>
                <p className="text-[#64748b] text-sm">Fastest way to get an answer. We pick up or call back same day.</p>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <a
                href="https://wa.me/16093774226?text=Hola%2C%20me%20interesa%20un%20estimado%20de%20pintura"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-2xl p-6 shadow-lg border border-[#e2e8f0] hover:border-[#25D366] hover:shadow-xl transition-all h-full"
              >
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-[#1e3a5f] mb-2">WhatsApp</h2>
                <p className="text-[#2563eb] font-semibold text-lg mb-1">Message us</p>
                <p className="text-[#64748b] text-sm">Easiest for photos of the space and Spanish-language messages.</p>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <a
                href="mailto:info@perfectfinishpainter.com"
                className="block bg-white rounded-2xl p-6 shadow-lg border border-[#e2e8f0] hover:border-[#2563eb] hover:shadow-xl transition-all h-full"
              >
                <div className="w-12 h-12 bg-[#2563eb]/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-[#1e3a5f] mb-2">Email</h2>
                <p className="text-[#2563eb] font-semibold break-all text-sm mb-1">info@perfectfinishpainter.com</p>
                <p className="text-[#64748b] text-sm">Best for estimates with multiple photos or detailed questions.</p>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Business info */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal>
            <div className="bg-[#f1f5f9] rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">Service Area</h2>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Perfect Finish Painters is a service-area business based in Mays Landing, New Jersey. We
                travel to the customer — there&apos;s no walk-in storefront. We serve all of Atlantic
                County and most of South Jersey, including Egg Harbor Township, Galloway, Hammonton,
                Northfield, Linwood, Somers Point, Pleasantville, Atlantic City, Margate, Ventnor,
                Brigantine, Absecon, and Vineland.
              </p>
              <p className="text-[#64748b] leading-relaxed">
                Not sure if we cover your town?{" "}
                <a href="tel:+16093774226" className="text-[#2563eb] font-semibold hover:underline">
                  Call (609) 377-4226
                </a>{" "}
                and we&apos;ll let you know. We occasionally take projects outside our usual area for
                the right scope.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="bg-[#f1f5f9] rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">Hours &amp; Response Time</h2>
              <dl className="space-y-2 mb-4">
                <div className="flex justify-between text-[#64748b]">
                  <dt className="font-semibold text-[#1e3a5f]">Mon – Fri</dt>
                  <dd>9:00 AM – 6:00 PM</dd>
                </div>
                <div className="flex justify-between text-[#64748b]">
                  <dt className="font-semibold text-[#1e3a5f]">Saturday</dt>
                  <dd>9:00 AM – 5:00 PM</dd>
                </div>
                <div className="flex justify-between text-[#64748b]">
                  <dt className="font-semibold text-[#1e3a5f]">Sunday</dt>
                  <dd>Closed (emergency text OK)</dd>
                </div>
              </dl>
              <p className="text-[#64748b] leading-relaxed">
                Messages sent during business hours usually get a reply within an hour. After-hours
                messages are answered the next morning. Estimates for most residential projects come
                back within 24 hours of the site visit.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="bg-white rounded-2xl p-8 border border-[#e2e8f0]">
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">Licensed &amp; Insured</h2>
              <p className="text-[#64748b] leading-relaxed mb-4">
                Perfect Finish Painters LLC is registered in the State of New Jersey and carries
                general liability and workers&apos; compensation insurance. A certificate of insurance
                naming your project or HOA as additional insured is available on request — just ask
                when you schedule.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="bg-[#f1f5f9] rounded-xl p-4">
                  <div className="text-xs text-[#64748b] uppercase tracking-wide">NJ HIC</div>
                  <div className="font-bold text-[#1e3a5f] mt-1">#13VH14120900</div>
                </div>
                <div className="bg-[#f1f5f9] rounded-xl p-4">
                  <div className="text-xs text-[#64748b] uppercase tracking-wide">Entity</div>
                  <div className="font-bold text-[#1e3a5f] mt-1">LLC</div>
                </div>
                <div className="bg-[#f1f5f9] rounded-xl p-4">
                  <div className="text-xs text-[#64748b] uppercase tracking-wide">Liability</div>
                  <div className="font-bold text-[#1e3a5f] mt-1">Insured</div>
                </div>
                <div className="bg-[#f1f5f9] rounded-xl p-4">
                  <div className="text-xs text-[#64748b] uppercase tracking-wide">Workers Comp</div>
                  <div className="font-bold text-[#1e3a5f] mt-1">Covered</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form (reuses existing ContactForm component with proper labels) */}
      <ContactForm />

      {/* Map */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">Based in Mays Landing, NJ</h2>
            <p className="text-[#64748b] mb-6">
              We travel out from Mays Landing to job sites across Atlantic County and South Jersey.
            </p>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49068.94837150971!2d-74.73!3d39.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c0ea2080cc9d87%3A0x5765dcbe46cacb!2sMays%20Landing%2C%20Hamilton%20Township%2C%20NJ!5e0!3m2!1sen!2sus!4v1707000000000"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Perfect Finish Painters service area map — Mays Landing NJ"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
