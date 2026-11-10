"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceCard {
  title: string;
  href: string;
  // Omitted while a service has no real job photo yet — the card renders a
  // branded placeholder instead of borrowing an unrelated or stock image.
  image?: string;
  alt?: string;
  shortDesc: string;
  details: string[];
  icon: React.ReactNode;
}

const services: ServiceCard[] = [
  {
    title: "Interior Painting",
    href: "/interior-painting",
    image: "/bedroom-repaint-blue-to-white-before-after-pleasantville-nj.webp",
    alt: "Before and after of a Pleasantville bedroom: blue walls with spackle patches and covered furniture, then white walls, a gray bed, and wood-look flooring",
    shortDesc: "Transform any room with fresh, vibrant colors. Walls, ceilings, trim, and more.",
    details: [
      "Living rooms, bedrooms, kitchens, bathrooms & hallways",
      "Accent walls & custom color matching",
      "Ceiling and crown molding painting",
      "Trim, baseboards, doors & window frames",
      "Proper prep: sanding, patching, priming & taping",
      "Most rooms completed in 1 day — starting at $500",
    ],
    icon: (
      <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Exterior Painting",
    href: "/exterior-painting",
    image: "/exterior-siding-staining-before-after-egg-harbor-township-nj.webp",
    alt: "Before and after of weathered horizontal wood siding and a dark sliding door on a deck in Egg Harbor Township, refreshed to orange-brown siding with a white slider frame",
    shortDesc: "Boost curb appeal and protect your home from the elements with quality exterior paint.",
    details: [
      "Siding, stucco, brick & vinyl surfaces",
      "Shutters, doors, trim & fascia boards",
      "Power washing & surface preparation included",
      "Weather-resistant acrylic latex paints",
      "UV & mildew protection for South Jersey climate",
      "Full exterior projects quoted after free assessment",
    ],
    icon: (
      <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Drywall Repairs",
    href: "/drywall-repair",
    image: "/living-room-ceiling-drywall-repair-before-after-absecon-nj.webp",
    alt: "Before and after of an Absecon living room ceiling: a large peeled patch above the doorway repaired to a smooth white ceiling with crown molding",
    shortDesc: "Fix holes, cracks, and damage. We restore your walls to a smooth, paint-ready finish.",
    details: [
      "Small nail holes to large patch repairs",
      "Crack repair & joint compound finishing",
      "Water damage restoration & texture matching",
      "Smooth, seamless finish ready for paint",
      "Often combined with interior painting for best results",
      "Same-day repairs available for small jobs",
    ],
    icon: (
      <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: "Flooring",
    href: "/flooring",
    image: "/bedroom-flooring-installation-painting-before-after-egg-harbor-township-nj.webp",
    alt: "Before and after of a bedroom in Egg Harbor Township: bare OSB subfloor replaced with light wood-look vinyl plank, light gray walls, and white trim",
    shortDesc: "Complete your renovation with professional flooring installation and refinishing.",
    details: [
      "Hardwood, laminate & vinyl plank installation",
      "Tile flooring for kitchens & bathrooms",
      "Subfloor preparation & leveling",
      "Baseboard & transition strip installation",
      "Pairs perfectly with a fresh paint job",
      "Free estimates — take our 60-second quiz",
    ],
    icon: (
      <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: "Deck Staining",
    href: "/deck-staining",
    image: "/deck-exterior-painting-before-after-south-jersey-nj.webp",
    alt: "Before and after of weathered horizontal wood siding and a dark sliding door beside an unstained gray deck, refreshed to orange-brown siding with a white slider frame",
    shortDesc: "Protect your deck from South Jersey weather with professional staining, sealing, and wood repair.",
    details: [
      "Pressure washing & stripping old finish",
      "Sanding rough grain & splinter repair",
      "Premium penetrating stain in 1–2 coats",
      "UV & water-resistant sealer on walking boards",
      "Railings, risers & trim included",
      "Most decks done in 2–3 days — starting at $400",
    ],
    icon: (
      <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
  },
  {
    title: "Shed Restoration",
    href: "/shed-restoration",
    image: "/shed-exterior-painting-before-after-mays-landing-nj.webp",
    alt: "Before and after of a weathered tan wood shed in Mays Landing repainted white, with black double doors, black shutters, and black corner trim",
    shortDesc: "Bring your shed back to life with professional restoration, repair, and weather-resistant painting.",
    details: [
      "Full shed inspection & assessment",
      "Wood rot repair & board replacement",
      "Scraping, sanding & priming",
      "Weather-resistant exterior painting",
      "Trim, door & window frame painting",
      "Caulking & joint sealing",
    ],
    icon: (
      <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
  },
  {
    title: "Ceiling Painting",
    href: "/ceiling-painting",
    image: "/kitchen-ceiling-water-damage-drywall-repair-before-after-galloway-nj.webp",
    alt: "Before and after of a Galloway kitchen ceiling: open holes with exposed insulation and plastic sheeting, then a smooth white ceiling with a vent",
    shortDesc: "Brighten any room with a freshly painted ceiling — flat, vaulted, or textured.",
    details: [
      "Flat & smooth ceiling painting",
      "Vaulted & cathedral ceilings",
      "Ceiling trim & crown molding",
      "Ceiling repair & painting combined",
      "Stain-blocking primers for water marks",
      "Most ceilings done in 1 day",
    ],
    icon: (
      <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Cabinet Painting",
    href: "/cabinet-painting",
    image: "/kitchen-drywall-repair-painting-before-after-northfield-nj.webp",
    alt: "Before and after of a kitchen corner: open drywall cutouts along a gray wall, then a finished wall with white shaker cabinets, a built-in microwave, and a gray veined counter",
    shortDesc: "Transform your kitchen for a fraction of replacement cost with professional cabinet painting.",
    details: [
      "Full kitchen cabinet painting",
      "Cleaning, sanding & deglossing",
      "Alkyd enamel for a factory-smooth finish",
      "Doors, drawers, frames & hardware",
      "Saves 60-70% vs full replacement",
      "Most kitchens done in 3-5 days",
    ],
    icon: (
      <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
      </svg>
    ),
  },
  {
    title: "Fence Staining",
    href: "/fence-staining",
    image: "/fence-gate-painting-black-northfield-nj.webp",
    alt: "Black pointed-picket wooden fence with a lattice skirt, painted beside a house with purple siding and a brick chimney",
    shortDesc: "Protect and restore wood fences with premium penetrating stain built for South Jersey weather.",
    details: [
      "Pressure washing & mildew treatment",
      "Stripping failing finish when needed",
      "Semi-transparent, semi-solid, or solid stain",
      "Replace popped nails & loose pickets",
      "Privacy, picket, split-rail & gates",
      "Starting at $3–$8 per linear foot",
    ],
    icon: (
      <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 4v16M10 4v16M15 4v16M20 4v16M3 9h18M3 15h18" />
      </svg>
    ),
  },
  {
    title: "Epoxy Floor Coating",
    href: "/epoxy-floor-coating",
    image: "/basement-floor-epoxy-coating-before-after-galloway-nj.webp",
    alt: "Before and after of a Galloway basement: stained bare concrete around a furnace and workbench, then a smooth light-gray coated floor",
    shortDesc: "Transform garage, basement, and workshop floors with diamond-ground, 100%-solids epoxy systems.",
    details: [
      "Diamond grinding for proper adhesion",
      "Crack & spall repair included",
      "100%-solids epoxy or polyaspartic",
      "Flake, metallic, or solid color",
      "UV-resistant topcoat",
      "Most 2-car garages: $2,000–$4,500",
    ],
    icon: (
      <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18" />
      </svg>
    ),
  },
  {
    title: "Govee Permanent Lighting",
    href: "/govee-permanent-lighting",
    image: "/govee-permanent-lighting-warm-white-stone-ranch-linwood-nj.webp",
    alt: "Night view of a stone-front ranch in Linwood with warm white permanent lights tracing the dormers, eaves, and garage roofline",
    shortDesc: "Permanent roofline lighting installed by the crew that already works your fascia and trim.",
    details: [
      "Govee Permanent Outdoor Lights Pro",
      "Aluminum channel mounted straight to the fascia",
      "White-head stainless screws matched to white trim",
      "Every fastener penetration sealed",
      "Low-voltage cable routed & concealed",
      "Govee Home app setup, scenes & schedules",
    ],
    icon: (
      <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9h18M6 9v3m4-3v3m4-3v3m4-3v3M4 5h16a1 1 0 011 1v3H3V6a1 1 0 011-1z" />
      </svg>
    ),
  },
  {
    title: "Garage Door Painting",
    href: "/garage-door-painting",
    image: "/garage-door-painting-wood-stain-before-after-brigantine-nj.webp",
    alt: "Before and after of a carriage-style garage door in Brigantine: white panels refinished to a brown wood-grain look, with gray shingle siding and a white frame",
    shortDesc: "Upgrade your curb appeal with a custom painted or stained garage door finish.",
    details: [
      "Wood-grain stain finishes",
      "Solid color exterior painting",
      "Surface prep & priming",
      "Weather-resistant coatings",
      "Matching trim & frame painting",
      "Free on-site estimate",
    ],
    icon: (
      <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] text-center mb-4">
          Interior &amp; Exterior Painting Services in South Jersey
        </h2>
        <p className="text-[#64748b] text-center mb-12 max-w-2xl mx-auto">
          From interior walls to exterior siding, Perfect Finish Painters handles all your painting and home improvement needs in Mays Landing and throughout Atlantic County.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const isExpanded = expandedIndex === i;
            return (
              <div
                key={service.title}
                className="bg-white rounded-xl shadow-md border border-[#e2e8f0] overflow-hidden group hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative h-36 overflow-hidden">
                  {service.image ? (
                    <>
                      <Image
                        src={service.image}
                        alt={service.alt ?? service.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/70 to-transparent" />
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] via-[#2563eb] to-[#0f2438]" />
                  )}
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/90 backdrop-blur rounded-md flex items-center justify-center">
                      {service.icon}
                    </div>
                    <h3 className="text-white font-bold text-base drop-shadow-lg">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <p className="text-[#64748b] text-sm mb-3">
                    {service.shortDesc}
                  </p>

                  {/* Expand button */}
                  <button
                    onClick={() => toggle(i)}
                    className="inline-flex items-center gap-1.5 text-[#2563eb] font-semibold text-xs hover:text-[#1d4ed8] transition-colors cursor-pointer"
                    aria-expanded={isExpanded}
                    aria-controls={`service-details-${i}`}
                  >
                    {isExpanded ? "Show less" : "What\u2019s included"}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown details — inert keeps the collapsed panel's links
                      out of the tab order and away from screen readers (the
                      0fr grid collapse alone leaves them focusable) */}
                  <div
                    id={`service-details-${i}`}
                    inert={!isExpanded}
                    className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                    style={{ gridTemplateRows: isExpanded ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <ul className="mt-3 space-y-1.5 border-t border-[#e2e8f0] pt-3">
                        {service.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-1.5 text-[#64748b] text-xs">
                            <svg className="w-3.5 h-3.5 text-[#2563eb] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {detail}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3 flex flex-col gap-2">
                        <Link
                          href="/quiz"
                          className="inline-flex items-center gap-1.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-4 py-2 rounded-full text-xs font-semibold transition-colors"
                        >
                          Get Free Estimate
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </Link>
                        <Link
                          href={service.href}
                          className="text-[#2563eb] underline text-sm inline-block"
                        >
                          Learn More &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
