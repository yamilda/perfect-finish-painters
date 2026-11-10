"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { HOLIDAY_LIGHTING_PROMO, GOVEE_PAGE_HREF } from "@/data/promo";

const enToEs: Record<string, string> = {
  "/painters-pleasantville-nj": "/pintores-pleasantville-nj",
  "/painters-atlantic-city-nj": "/pintores-atlantic-city-nj-es",
  "/painters-vineland-nj": "/pintores-vineland-nj",
};

const esToEn: Record<string, string> = {
  "/pintores-pleasantville-nj": "/painters-pleasantville-nj",
  "/pintores-atlantic-city-nj-es": "/painters-atlantic-city-nj",
  "/pintores-vineland-nj": "/painters-vineland-nj",
  "/pintores-cerca-de-mi": "/",
};

const SPANISH_LANDING = "/pintores-cerca-de-mi";

function getLanguageToggle(pathname: string) {
  if (pathname.startsWith("/pintores-")) {
    return { href: esToEn[pathname] ?? "/", label: "EN", title: "View in English", mobileLabel: "View in English" };
  }
  return { href: enToEs[pathname] ?? SPANISH_LANDING, label: "ES", title: "Ver en español", mobileLabel: "Traducir al Español" };
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const langToggle = getLanguageToggle(pathname);

  // On inner pages (not home), always use the solid white header
  const useSolidHeader = !isHome || scrolled;

  const headerBg = useSolidHeader
    ? "bg-white/95 backdrop-blur-sm border-b border-[#e2e8f0] shadow-sm"
    : "bg-transparent border-b border-transparent";

  const textColor = useSolidHeader ? "text-[#64748b]" : "text-white/90";
  const textHover = useSolidHeader ? "hover:text-[#1e3a5f]" : "hover:text-white";
  const brandColor = useSolidHeader ? "text-[#1e3a5f]" : "text-white";
  const phoneColor = useSolidHeader ? "text-[#64748b]" : "text-white/80";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      {/* Trust strip — Licensed & Insured + NJ HIC license. Visible site-wide,
          always slate so it contrasts on both transparent and white header. */}
      <div className="bg-[#1e3a5f] text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-center sm:justify-between gap-2 sm:gap-4">
          <span className="flex items-center gap-1.5 font-medium">
            <svg className="w-3.5 h-3.5 text-[#60a5fa] shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="hidden sm:inline">Licensed &amp; Insured</span>
            <span className="sm:hidden">Licensed</span>
          </span>
          <span className="hidden sm:inline text-white/40">|</span>
          <span className="font-mono tracking-wider text-white/90">
            <span className="text-white/60 mr-1">NJ HIC</span>
            <strong className="text-white">#13VH14120900</strong>
          </span>
          <span className="hidden md:inline text-white/40">|</span>
          <span className="hidden md:inline text-white/80">Full liability &amp; workers comp insurance</span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.webp"
              alt="Perfect Finish Painters"
              width={320}
              height={80}
              className={`h-12 sm:h-16 w-auto transition-all duration-300 ${
                useSolidHeader ? "" : "brightness-0 invert"
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 lg:ml-8">
            <Link
              href="/"
              className={`${textColor} ${textHover} transition-colors whitespace-nowrap`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${textColor} ${textHover} transition-colors whitespace-nowrap`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`${textColor} ${textHover} transition-colors whitespace-nowrap`}
            >
              Services
            </Link>
            <Link
              href="/our-work"
              className={`${textColor} ${textHover} transition-colors whitespace-nowrap`}
            >
              Our Work
            </Link>
            <Link
              href="/reviews"
              className={`${textColor} ${textHover} transition-colors whitespace-nowrap`}
            >
              Reviews
            </Link>
            <Link
              href="/blog"
              className={`${textColor} ${textHover} transition-colors whitespace-nowrap`}
            >
              Blog
            </Link>
            <Link
              href="/faq"
              className={`${textColor} ${textHover} transition-colors whitespace-nowrap`}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className={`${textColor} ${textHover} transition-colors whitespace-nowrap`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Link
              href={langToggle.href}
              className={`flex items-center gap-1.5 ${phoneColor} ${textHover} transition-colors text-sm font-medium`}
              aria-label={langToggle.title}
              title={langToggle.title}
              hrefLang={langToggle.label === "ES" ? "es" : "en"}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              {langToggle.label}
            </Link>
            <a
              href="tel:+16093774226"
              className={`hidden xl:flex items-center gap-2 whitespace-nowrap ${phoneColor} ${textHover} transition-colors`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-sm">(609) 377-4226</span>
            </a>
            <Link
              href="/quiz"
              className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap"
            >
              Get Free Estimate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 ${brandColor} transition-colors`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#e2e8f0] bg-white rounded-b-xl">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-[#64748b] hover:text-[#1e3a5f] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-[#64748b] hover:text-[#1e3a5f] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-[#64748b] hover:text-[#1e3a5f] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              {HOLIDAY_LIGHTING_PROMO && (
                <Link
                  href={GOVEE_PAGE_HREF}
                  className="text-[#64748b] hover:text-[#1e3a5f] transition-colors inline-flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff5252]" aria-hidden="true" />
                  Holiday Lights (Govee)
                </Link>
              )}
              <Link
                href="/our-work"
                className="text-[#64748b] hover:text-[#1e3a5f] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Work
              </Link>
              <Link
                href="/reviews"
                className="text-[#64748b] hover:text-[#1e3a5f] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link
                href="/blog"
                className="text-[#64748b] hover:text-[#1e3a5f] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/faq"
                className="text-[#64748b] hover:text-[#1e3a5f] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="text-[#64748b] hover:text-[#1e3a5f] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="tel:+16093774226"
                className="text-[#64748b] hover:text-[#1e3a5f] transition-colors"
              >
                (609) 377-4226
              </a>
              <a
                href="https://wa.me/16093774226?text=Hola%2C%20me%20interesa%20un%20estimado%20de%20pintura"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#25D366] hover:text-[#1da851] transition-colors font-medium"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <Link
                href={langToggle.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 text-[#64748b] hover:text-[#1e3a5f] transition-colors"
                hrefLang={langToggle.label === "ES" ? "es" : "en"}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                {langToggle.mobileLabel}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
