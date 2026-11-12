"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { serviceAreas } from "@/data/service-areas";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer className="bg-[#1e3a5f] border-t border-[#2d4a6f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="mb-4">
                <Image
                  src="/logo.webp"
                  alt="Perfect Finish Painters"
                  width={320}
                  height={80}
                  className="h-24 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-[#94a3b8] text-sm max-w-md mb-4">
                Professional painting services in Mays Landing and South Jersey.
                We believe everyone deserves a space meant solely for them, at an
                affordable price.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/PerfectFinishPainters"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-[#94a3b8] hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/perfectfinishpainter/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-[#94a3b8] hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://www.yelp.com/biz/perfect-finish-painters-mays-landing"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Yelp"
                  className="text-[#94a3b8] hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 011.596-.206 9.194 9.194 0 012.364 3.252 1.073 1.073 0 01-.694 1.459zm-3.455 5.153a1.073 1.073 0 01-.865 1.312 9.19 9.19 0 01-3.935.027 1.073 1.073 0 01-.6-1.727l3.166-4.032c.62-.79 1.855-.387 1.867.61l.367 3.81zm-9.326 2.283c-.09.57-.573.98-1.148.975a9.188 9.188 0 01-3.456-1.47 1.073 1.073 0 01-.03-1.728l4.153-3.156c.81-.616 1.872.144 1.607 1.15l-1.126 4.229zM3.24 9.473a1.072 1.072 0 01-.748-1.315 9.194 9.194 0 012.078-3.426 1.073 1.073 0 011.615.07l3.063 4.097c.6.8-.098 1.907-1.055 1.674l-4.953-1.1zm8.653-6.478a9.194 9.194 0 013.98.494 1.073 1.073 0 01.677 1.3l-1.47 5.087c-.287.996-1.651 1.052-2.064.085L11.3 5.233c-.168-.394-.1-.846.195-1.16a1.072 1.072 0 01.398-.278z" />
                  </svg>
                </a>
                <a
                  href="https://g.page/r/CYlKM00sLEMiEAI/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Reviews"
                  className="text-[#94a3b8] hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <nav className="flex flex-col gap-2">
                <Link href="/services" className="text-[#94a3b8] hover:text-white transition-colors text-sm">
                  Services
                </Link>
                <Link href="/about" className="text-[#94a3b8] hover:text-white transition-colors text-sm">
                  About
                </Link>
                <Link href="/our-work" className="text-[#94a3b8] hover:text-white transition-colors text-sm">
                  Our Work
                </Link>
                <Link href="/reviews" className="text-[#94a3b8] hover:text-white transition-colors text-sm">
                  Reviews
                </Link>
                <Link href="/blog" className="text-[#94a3b8] hover:text-white transition-colors text-sm">
                  Blog
                </Link>
                <Link href="/faq" className="text-[#94a3b8] hover:text-white transition-colors text-sm">
                  FAQ
                </Link>
                <Link href="/contact" className="text-[#94a3b8] hover:text-white transition-colors text-sm">
                  Contact
                </Link>
                <Link href="/quiz" className="text-[#94a3b8] hover:text-white transition-colors text-sm">
                  Get Estimate
                </Link>
              </nav>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <nav className="flex flex-col gap-2">
                <Link href="/privacy" className="text-[#94a3b8] hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-[#94a3b8] hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
                <Link href="/accessibility" className="text-[#94a3b8] hover:text-white transition-colors text-sm">
                  Accessibility
                </Link>
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <div className="flex flex-col gap-2 text-sm text-[#94a3b8]">
                <p>Mays Landing, NJ</p>
                <a
                  href="tel:+16093774226"
                  className="hover:text-white transition-colors"
                >
                  (609) 377-4226
                </a>
                <a
                  href="https://wa.me/16093774226?text=Hola%2C%20me%20interesa%20un%20estimado%20de%20pintura"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="mailto:info@perfectfinishpainter.com"
                  className="hover:text-white transition-colors"
                >
                  info@perfectfinishpainter.com
                </a>
                <div className="mt-2">
                  <p className="text-white font-medium">Hours</p>
                  <p>Mon - Fri: 9am - 6pm</p>
                  <p>Saturday: 9am - 5pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="mt-8 pt-8 border-t border-[#2d4a6f]">
            <h3 className="text-white font-semibold mb-4">
              Service Areas
            </h3>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {serviceAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/${area.slug}`}
                  className="text-[#94a3b8] hover:text-white transition-colors text-sm"
                >
                  {area.name}, NJ
                </Link>
              ))}
            </div>
          </div>

          {/* Google Maps */}
          <div className="mt-8 pt-8 border-t border-[#2d4a6f]">
            <h3 className="text-white font-semibold mb-4">
              Serving Mays Landing &amp; South Jersey
            </h3>
            <div className="rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49068.94837150971!2d-74.73!3d39.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c0ea2080cc9d87%3A0x5765dcbe46cacb!2sMays%20Landing%2C%20Hamilton%20Township%2C%20NJ!5e0!3m2!1sen!2sus!4v1707000000000"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Perfect Finish Painters - Mays Landing NJ"
              />
            </div>
          </div>

          <div className="border-t border-[#2d4a6f] mt-8 pt-8 text-center">
            {/* suppressHydrationWarning: pages are statically prerendered, so
                the build-time year can lag the client's after Jan 1 */}
            <p className="text-[#94a3b8] text-sm" suppressHydrationWarning>
              &copy; {new Date().getFullYear()} Perfect Finish Painters. All
              rights reserved. | NJ HIC #13VH14120900 | Licensed &amp; Insured LLC
            </p>
            <p className="text-[#94a3b8] text-xs mt-3">
              Website &amp; SEO managed by{" "}
              <a
                href="https://sjtechllc.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                SJ Tech Solution LLC
              </a>
              . We are not accepting SEO, marketing or website offers. Please
              don&apos;t call or email us about them.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-20 md:bottom-8 right-6 z-40 bg-[#2563eb] hover:bg-[#1d4ed8] text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 cursor-pointer ${
          showBackToTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Back to top"
        aria-hidden={!showBackToTop}
        tabIndex={showBackToTop ? 0 : -1}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </>
  );
}
