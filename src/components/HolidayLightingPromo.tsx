import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { GOVEE_PAGE_HREF, GOVEE_QUOTE_HREF } from "@/data/promo";

const BULBS = ["#ff5252", "#ffd54f", "#69f0ae", "#40c4ff", "#e040fb"];

// Seasonal homepage promo for Govee permanent holiday lighting (gated by HOLIDAY_LIGHTING_PROMO).
export default function HolidayLightingPromo() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="holiday-lighting-heading">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f2438] via-[#1e3a5f] to-[#0f2438] shadow-2xl grid lg:grid-cols-2">
            {/* Govee-style bulb string along the top edge */}
            <div className="pointer-events-none absolute top-3 left-6 right-6 z-10 flex justify-between" aria-hidden="true">
              {Array.from({ length: 18 }).map((_, i) => {
                const c = BULBS[i % BULBS.length];
                return (
                  <span
                    key={i}
                    className={`addon-bulb ${i % 2 ? "hidden sm:block" : ""}`}
                    style={{ background: c, boxShadow: `0 0 8px 1.5px ${c}`, animationDelay: `-${(i * 0.33).toFixed(2)}s` }}
                  />
                );
              })}
            </div>

            <div className="relative px-6 pt-8 pb-10 sm:px-10 sm:pt-14 sm:pb-12 lg:pt-16 lg:pb-14 flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 self-start bg-white/10 border border-white/20 text-[#93c5fd] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
                <span className="w-2 h-2 rounded-full bg-[#ff5252] shadow-[0_0_8px_#ff5252]" aria-hidden="true" />
                Now booking for the holidays
              </span>
              <h2 id="holiday-lighting-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Holiday lights without the ladder.
              </h2>
              <p className="text-white/85 text-lg mt-4 max-w-xl">
                Govee&reg; permanent lighting goes up once, tucked under your roofline. Warm white
                every night, red and green for Christmas, any color you want from your phone. No
                more hanging strings in the cold or taking them down in January.
              </p>
              <ul className="mt-5 space-y-2 text-white/85">
                {[
                  "Installed by our painting crew, straight and clean along your trim",
                  "Controlled from the Govee app, on a schedule or a tap",
                  "Free quotes across Atlantic County",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <svg className="w-5 h-5 mt-0.5 text-[#69f0ae] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Link
                  href={GOVEE_QUOTE_HREF}
                  className="inline-flex items-center justify-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-7 py-4 rounded-full shadow-lg shadow-blue-500/30 transition-colors"
                >
                  Get a Free Lighting Quote
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href={GOVEE_PAGE_HREF}
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-7 py-4 rounded-full transition-colors"
                >
                  See Our Installs
                </Link>
              </div>
            </div>

            <div className="relative order-first lg:order-last min-h-[240px] sm:min-h-[340px] lg:min-h-full">
              <Image
                src="/govee-permanent-lighting-tricolor-white-red-green-atlantic-city-nj.webp"
                alt="Two-story home lit with red, white, and green Govee permanent lights along the roofline"
                fill
                sizes="(min-width: 1024px) 640px, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#0f2438]/40 via-transparent to-transparent" aria-hidden="true" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
