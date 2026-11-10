"use client";

// Interactive Govee showcase (BP 2026-09-08: "make it more interactive with
// pics… surprise me"). Two moments:
//   1. Scene switcher — tap a color chip, the house photo swaps. Sells the
//      whole product in one interaction: same roofline, any color.
//   2. Day ↔ Night reveal — drag the handle across the SAME Egg Harbor
//      Township stucco house: invisible hardware by day, full scene at night.
// All photos are real installs. No fabricated imagery.
import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

const scenes = [
  {
    key: "warm",
    label: "Warm White",
    chip: "#f5deb3",
    src: "/govee-permanent-lighting-warm-white-stone-ranch-linwood-nj.webp",
    alt: "Warm white Govee permanent lighting tracing the rooflines of a stone-front ranch in Linwood NJ",
    caption: "The everyday setting — architectural warm white, on a schedule.",
  },
  {
    key: "red",
    label: "Holiday Red",
    chip: "#dc2626",
    src: "/govee-permanent-lighting-red-estate-margate-nj.webp",
    alt: "Estate home fully outlined in red Govee permanent lighting in Margate NJ",
    caption: "December without ladders — full red from the app.",
  },
  {
    key: "blue",
    label: "Game Night",
    chip: "#2563eb",
    src: "/govee-permanent-lighting-blue-roofline-brigantine-nj.webp",
    alt: "Two-story Brigantine NJ home glowing blue from permanent roofline lighting",
    caption: "Team colors on a Sunday. Any team, any color.",
  },
  {
    key: "multi",
    label: "Multicolor",
    chip: "linear-gradient(90deg,#dc2626,#16a34a,#7c3aed)",
    src: "/govee-permanent-lighting-multicolor-ranch-galloway-nj.webp",
    alt: "Galloway NJ ranch with red, green, and purple permanent lighting zones",
    caption: "Per-zone control — one house, three colors at once.",
  },
  {
    key: "patriotic",
    label: "Fourth of July",
    chip: "linear-gradient(90deg,#dc2626,#f8fafc,#2563eb)",
    src: "/govee-permanent-lighting-patriotic-red-white-blue-egg-harbor-city-nj.webp",
    alt: "Egg Harbor City NJ home in red, white, and blue permanent lighting for the Fourth of July",
    caption: "Same lights in July — red, white, and blue on demand.",
  },
  {
    key: "pink",
    label: "Pink",
    chip: "#ec4899",
    src: "/govee-permanent-lighting-pink-splitlevel-reindeer-pleasantville-nj.webp",
    alt: "Split-level home washed in pink permanent lighting",
    caption: "Breast Cancer Awareness month, birthdays, or just because.",
  },
];

export default function GoveeLightShowcase() {
  const [active, setActive] = useState(0);
  const [split, setSplit] = useState(50);
  const [auto, setAuto] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);

  // scenes rotate on their own every 4.5s until the visitor takes over
  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setActive((a) => (a + 1) % scenes.length), 4500);
    return () => clearInterval(t);
  }, [auto]);
  const pick = (i: number) => { setAuto(false); setActive(i); };

  const onMove = useCallback((clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setSplit(Math.min(96, Math.max(4, ((clientX - rect.left) / rect.width) * 100)));
  }, []);

  const scene = scenes[active];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" aria-label="Govee permanent lighting color scenes">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1e3a5f] mb-2">One Roofline. Every Color.</h2>
        <p className="text-[#64748b] mb-6">Tap a scene — every photo below is a real install by our crew in Atlantic County.</p>

        {/* scene switcher */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-[#e2e8f0] bg-[#0b1220]">
          <div className="relative aspect-[4/3] sm:aspect-[16/10]">
            {/* stacked crossfade — opacity swap instead of a hard image switch */}
            {scenes.map((s, i) => (
              <Image key={s.key} src={s.src} alt={i === active ? s.alt : ""} aria-hidden={i !== active} fill priority={false} sizes="(max-width: 896px) 100vw, 896px" className={`object-cover transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"}`} />
            ))}
          </div>
          <div className="p-4 flex flex-col sm:flex-row sm:items-center gap-4 bg-white">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Lighting scenes">
              {scenes.map((s, i) => (
                <button
                  key={s.key}
                  role="tab"
                  aria-selected={i === active}
                  onClick={() => pick(i)}
                  className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium transition-all ${i === active ? "border-[#2563eb] text-[#1e3a5f] shadow-sm scale-105" : "border-[#e2e8f0] text-[#64748b] hover:border-[#94a3b8]"}`}
                >
                  <span aria-hidden className="inline-block w-3.5 h-3.5 rounded-full border border-black/10" style={{ background: s.chip }} />
                  {s.label}
                </button>
              ))}
            </div>
            <p className="text-sm text-[#64748b] sm:ml-auto sm:text-right">{scene.caption}</p>
          </div>
        </div>

        {/* day / night reveal — same EHT house, drag the handle */}
        <div className="mt-10">
          <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">Invisible by Day. Yours by Night.</h3>
          <p className="text-[#64748b] mb-4 text-sm">The same Egg Harbor Township install — drag the handle. By day the track reads as a trim line; by night it&apos;s whatever you set.</p>
          <div
            ref={trackRef}
            className="relative aspect-[4/3] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-[#e2e8f0] select-none touch-none cursor-ew-resize"
            onMouseMove={(e) => e.buttons === 1 && onMove(e.clientX)}
            onMouseDown={(e) => onMove(e.clientX)}
            onTouchMove={(e) => onMove(e.touches[0].clientX)}
            onTouchStart={(e) => onMove(e.touches[0].clientX)}
          >
            <Image src="/govee-permanent-lighting-red-white-holiday-stucco-egg-harbor-township-nj.webp" alt="Egg Harbor Township NJ home at night with red and warm white Govee permanent lighting" fill sizes="(max-width: 896px) 100vw, 896px" className="object-cover" />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${split}%` }}>
              <Image src="/govee-permanent-lighting-red-eaves-daylight-egg-harbor-township-nj.webp" alt="Daylight view of the same Egg Harbor Township home — the permanent lighting track is barely visible along the eaves" fill sizes="(max-width: 896px) 100vw, 896px" className="object-cover" />
            </div>
            <div aria-hidden className="absolute top-0 bottom-0" style={{ left: `${split}%` }}>
              <div className="absolute top-0 bottom-0 -translate-x-1/2 w-0.5 bg-white shadow" />
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center text-[#1e3a5f] text-xs font-bold">⇔</div>
            </div>
            <span className="absolute top-3 left-3 bg-white/85 text-[#1e3a5f] text-xs font-semibold px-2.5 py-1 rounded-full">DAY</span>
            <span className="absolute top-3 right-3 bg-black/60 text-white text-xs font-semibold px-2.5 py-1 rounded-full">NIGHT</span>
          </div>
          {/* keyboard access for the reveal */}
          <label className="mt-3 flex items-center gap-3 text-xs text-[#64748b]">
            <span className="sr-only sm:not-sr-only">Day / night slider</span>
            <input type="range" min={4} max={96} value={Math.round(split)} onChange={(e) => setSplit(Number(e.target.value))} className="w-full accent-[#2563eb]" aria-label="Reveal day or night view" />
          </label>
        </div>
      </div>
    </section>
  );
}
