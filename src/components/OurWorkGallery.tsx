"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const projects = [
  {
    src: "/shed-exterior-painting-before-after-mays-landing-nj.webp",
    alt: "Before and after of a weathered tan wood shed in Mays Landing repainted white, with black double doors, black shutters, and black corner trim",
    category: "Exterior",
    title: "Shed Transformation",
    desc: "Complete exterior repaint with weather-resistant finish.",
  },
  {
    src: "/basement-room-painting-flooring-before-after-egg-harbor-township-nj.webp",
    alt: "Before and after of a basement room in Egg Harbor Township: patched gray walls and a covered floor, then lilac walls and wood-look flooring under a drop ceiling",
    category: "Interior",
    title: "Complete Room Renovation",
    desc: "Fresh interior paint paired with new flooring installation.",
  },
  {
    src: "/basement-ceiling-painting-black-before-after-hammonton-nj.webp",
    alt: "Before and after of an exposed basement ceiling in Hammonton: unfinished joists, ducts, and beams painted black",
    category: "Interior",
    title: "Basement Ceiling Painted Black",
    desc: "Exposed joists, ducts, and beams in a basement painted black.",
  },
  {
    src: "/radiator-painting-before-after-somers-point-nj.webp",
    alt: "Before and after of a worn natural oak floor refinished to a dark stain, with a floor sander standing in the before photo",
    category: "Flooring",
    title: "Dark Hardwood Floor Refinish",
    desc: "Worn natural oak flooring sanded and refinished to a dark stain.",
  },
  {
    src: "/basement-floor-epoxy-coating-before-after-galloway-nj.webp",
    alt: "Before and after of a Galloway basement: stained bare concrete around a furnace and workbench, then a smooth light-gray coated floor",
    category: "Flooring",
    title: "Basement Floor Coating",
    desc: "Durable epoxy-style floor coating for a clean, finished basement.",
  },
  {
    src: "/interior-ceiling-painting-living-room-kitchen-absecon-nj.webp",
    alt: "Collage of a whole-home ceiling repaint: living room, hallway, and kitchen ceilings going from patched and taped to a smooth white finish",
    category: "Interior",
    title: "Whole House Interior",
    desc: "Full home interior — every room painted top to bottom.",
  },
  {
    src: "/drywall-ceiling-repair-before-after-mays-landing-nj.webp",
    alt: "Before and after of a stained, patched drywall ceiling in a Mays Landing living area repaired and painted smooth white, with walls going from beige to light gray",
    category: "Drywall",
    title: "Ceiling Restoration",
    desc: "Damaged ceiling repaired and restored to a smooth, clean finish.",
  },
  {
    src: "/exterior-door-painting-black-linwood-nj.webp",
    alt: "A black six-panel exterior door with white trim set against beige horizontal siding, decorated with string lights above.",
    category: "Exterior",
    title: "Exterior Door Repaint",
    desc: "We refreshed this home's exterior door with a glossy black paint and clean white trim for a modern look.",
  },
  {
    src: "/fence-gate-painting-black-northfield-nj.webp",
    alt: "Black pointed-picket wooden fence with a lattice skirt, painted beside a house with purple siding and a brick chimney",
    category: "Exterior",
    title: "Exterior Fence Painting",
    desc: "We refreshed this outdoor wooden fence with a durable black paint to enhance its appearance and protection against the elements.",
  },
  {
    src: "/vaulted-ceiling-drywall-repair-before-after-pleasantville-nj.webp",
    alt: "Before-and-after view of a vaulted ceiling with visible seams on the left repaired to a smooth finish with recessed lights and a ceiling fan on the right.",
    category: "Drywall",
    title: "Vaulted Ceiling Repair",
    desc: "We repaired the prominent seams in this vaulted ceiling, applied a smooth drywall finish, and painted it white for a seamless appearance.",
  },
  {
    src: "/dining-room-wainscoting-painting-before-after-egg-harbor-township-nj.webp",
    alt: "Before and after of a dining room: an unfinished wainscoting grid under a patched red wall, then burgundy raised-panel wainscoting with the wall above painted white",
    category: "Interior",
    title: "Paneled Wall Transformation",
    desc: "We painted the vertical paneled walls and wainscoting in a deep maroon color, updating the space from raw wood to a polished, elegant finish.",
  },
  {
    src: "/bathroom-painting-blue-before-after-linwood-nj.webp",
    alt: "Before-and-after split image of a small bathroom with walls painted from white to light blue, showing cluttered before and clean after with visible wood flooring.",
    category: "Interior",
    title: "Bathroom Wall Refresh",
    desc: "We painted the bathroom walls in a soft light blue, creating a brighter and more inviting space while protecting the fixtures and floor during the process.",
  },
  {
    src: "/bathroom-wallpaper-removal-painting-before-after-absecon-nj.webp",
    alt: "Before-and-after view of a bathroom showing the change from floral wallpaper and beige ceiling to white walls and black ceiling with black tile accents.",
    category: "Interior",
    title: "Bathroom Paint Transformation",
    desc: "Removed outdated floral wallpaper and painted the walls white and ceiling black for a sleek, modern bathroom update.",
  },
  {
    src: "/bathroom-beadboard-ceiling-painting-before-after-somers-point-nj.webp",
    alt: "Before-and-after image of a bathroom with walls repainted from white to light blue, showing a cluttered state on the left and a clean, updated space on the right with an octagonal window and white vanity.",
    category: "Interior",
    title: "Bathroom Wall Refresh",
    desc: "Transformed the bathroom by painting the walls and ceiling in a soft light blue, enhancing the space around the white vanity, toilet, and octagonal window.",
  },
  {
    src: "/kitchen-drywall-repair-painting-before-after-northfield-nj.webp",
    alt: "Before and after of a kitchen corner: open drywall cutouts along a gray wall, then a finished wall with white shaker cabinets, a built-in microwave, and a gray veined counter",
    category: "Interior",
    title: "Kitchen Cabinet Update",
    desc: "The kitchen features freshly painted white cabinets and soft gray walls, complementing the stone-like countertops and modern fixtures.",
  },
  {
    src: "/ceiling-drywall-patch-repair-before-after-galloway-nj.webp",
    alt: "Before and after images of a room's ceiling with a vent pipe, showing the left side with a hole and plastic sheeting, and the right side with the hole patched, painted white, and light fixture installed.",
    category: "Drywall",
    title: "Ceiling Vent Repair",
    desc: "We patched the hole in the ceiling around the vent pipe, smoothed the drywall, and painted it white for a clean, finished look.",
  },
  {
    src: "/basement-stairway-renovation-before-after-hammonton-nj.webp",
    alt: "Before-and-after image of a basement staircase showing old green walls and worn wooden steps transformed to white walls and refinished steps.",
    category: "Interior",
    title: "Basement Stairwell remodel",
    desc: "Transformed a dingy basement stairwell by painting the walls white and refinishing the wooden steps for a bright, clean appearance.",
  },
  {
    src: "/basement-drywall-painting-before-after-pleasantville-nj.webp",
    alt: "Before-and-after view of a basement room with left side showing unfinished, sanded drywall and tools, and right side displaying smooth, primed white walls with a work light.",
    category: "Drywall",
    title: "Basement Drywall Finishing",
    desc: "We sanded and primed the basement drywall to achieve a smooth, flawless finish ready for final painting.",
  },
  {
    src: "/bathroom-drywall-repair-painting-before-after-mays-landing-nj.webp",
    alt: "Before-and-after photo of a bathroom showing patched and spackled walls with a ladder and tools on the left, and a cleanly painted white room with tiled floor and shower on the right.",
    category: "Drywall",
    title: "Bathroom Drywall Repair",
    desc: "Transformed a bathroom by repairing drywall holes and patches, then painting the walls and ceiling white for a fresh, finished look.",
  },
  {
    src: "/exterior-siding-staining-before-after-egg-harbor-township-nj.webp",
    alt: "Before and after of weathered horizontal wood siding and a dark sliding door on a deck in Egg Harbor Township, refreshed to orange-brown siding with a white slider frame",
    category: "Exterior",
    title: "Exterior Siding Refresh",
    desc: "We repainted the home's exterior siding in a vibrant orange and updated the sliding door frame to crisp white for a revitalized appearance.",
  },
  {
    src: "/sunroom-ceiling-insulation-drywall-before-after-brigantine-nj.webp",
    alt: "Before-and-after view of a room where the left side shows a ceiling covered in brown textured material with protective plastic sheeting on walls and floor, and the right side displays a smooth white painted ceiling in an empty room with green carpet and window blinds.",
    category: "Interior",
    title: "Ceiling Texture Removal",
    desc: "We removed the old popcorn texture from the ceiling, repaired the surface, and applied a fresh coat of white paint for a clean, modern appearance.",
  },
  {
    src: "/kitchen-ceiling-water-damage-drywall-repair-before-after-galloway-nj.webp",
    alt: "Before and after of a Galloway kitchen ceiling: open holes with exposed insulation and plastic sheeting, then a smooth white ceiling with a vent",
    category: "Drywall",
    title: "Kitchen Ceiling Water Damage Repair",
    desc: "Repaired water-damaged kitchen ceiling with exposed insulation — replaced drywall, patched, and painted for a seamless finish.",
  },
  {
    src: "/bedroom-flooring-installation-painting-before-after-egg-harbor-township-nj.webp",
    alt: "Before and after of a bedroom in Egg Harbor Township: bare OSB subfloor replaced with light wood-look vinyl plank, light gray walls, and white trim",
    category: "Flooring",
    title: "Bedroom Flooring & Paint",
    desc: "Replaced subfloor with vinyl plank flooring and painted walls light gray with clean white trim.",
  },
  {
    src: "/hardwood-floor-painting-refinish-before-after-northfield-nj.webp",
    alt: "Hardwood floor painting and refinishing before and after in Northfield NJ",
    category: "Flooring",
    title: "Hardwood Floor Refinish",
    desc: "Refinished worn hardwood floors with a glossy black paint finish for a bold, modern look.",
  },
  {
    src: "/bedroom-interior-painting-flooring-before-after-linwood-nj.webp",
    alt: "Bedroom interior painting and flooring installation before and after in Linwood NJ",
    category: "Interior",
    title: "Full Bedroom Transformation",
    desc: "Removed old carpet, installed vinyl plank flooring, and painted walls a fresh blue-gray with white trim.",
  },
  {
    src: "/front-door-refinishing-before-after-somers-point-nj.webp",
    alt: "Front door refinishing before and after in Somers Point NJ",
    category: "Exterior",
    title: "Front Door Refinish",
    desc: "Restored a faded craftsman entry door and sidelights to a rich warm brown with crisp white trim.",
  },
  {
    src: "/skylight-drywall-repair-painting-before-after-margate-nj.webp",
    alt: "Skylight area drywall repair and painting before and after in Margate NJ",
    category: "Drywall",
    title: "Skylight Drywall Repair",
    desc: "Repaired cracked and peeling drywall around a high skylight area — patched smooth and painted white.",
  },
  {
    src: "/garage-door-painting-wood-stain-before-after-brigantine-nj.webp",
    alt: "Before and after of a carriage-style garage door in Brigantine: white panels refinished to a brown wood-grain look, with gray shingle siding and a white frame",
    category: "Exterior",
    title: "Garage Door Wood Stain",
    desc: "Transformed a plain white garage door with a wood-grain stain finish for a premium look.",
  },
  {
    src: "/living-room-ceiling-drywall-repair-before-after-absecon-nj.webp",
    alt: "Before and after of an Absecon living room ceiling: a large peeled patch above the doorway repaired to a smooth white ceiling with crown molding",
    category: "Drywall",
    title: "Living Room Ceiling Repair",
    desc: "Patched a large water-damaged ceiling area, skim coated smooth, and painted — crown molding preserved.",
  },
  {
    src: "/bedroom-repaint-blue-to-white-before-after-pleasantville-nj.webp",
    alt: "Before and after of a Pleasantville bedroom: blue walls with spackle patches and covered furniture, then white walls, a gray bed, and wood-look flooring",
    category: "Interior",
    title: "Bedroom Color Transformation",
    desc: "Full bedroom repaint from blue to warm white with new flooring — completely transformed the space.",
  },
  {
    src: "/basement-wall-painting-egg-harbor-township-nj.webp",
    alt: "A basement corner with freshly painted white walls, exposed wooden ceiling beams, plastic insulation sheeting on some walls, a small wooden shelf holding household items, hanging coats, and a white staircase railing.",
    category: "Interior",
    title: "Basement Wall Painting",
    desc: "We applied a fresh coat of white paint to the basement walls and staircase, enhancing the space despite the exposed insulation and storage items.",
  },
  {
    src: "/drywall-installation-studs-to-hung-galloway-nj.webp",
    alt: "Drywall installation in Galloway NJ — before and after view from open wall framing to fully hung drywall panels on walls and ceiling.",
    category: "Drywall",
    title: "Drywall Installation — Studs to Hung",
    desc: "Open framing transformed into fully hung drywall on walls and ceiling — ready for taping, finishing, and paint.",
  },
  {
    src: "/drywall-finishing-taping-to-painted-galloway-nj.webp",
    alt: "Drywall taping, finishing, and priming in Galloway NJ — before and after view of taped and mudded seams transformed into smooth, primed paint-ready walls and ceiling.",
    category: "Drywall",
    title: "Drywall Finishing — Taped to Paint-Ready",
    desc: "Taped seams skim-coated smooth, sanded, and primed — paint-ready walls and ceiling delivered in one trip.",
  },
  {
    src: "/studs-to-finish-room-renovation-galloway-nj.webp",
    alt: "Full room renovation in Galloway NJ — before and after view from exposed wall studs and framing to a finished, freshly painted interior room with windows and clean trim.",
    category: "Interior",
    title: "Studs to Finished Room",
    desc: "Full transformation from open framing to a finished, painted interior — drywall, prep, prime, and paint in one job.",
  },
  {
    src: "/framing-to-finished-drywall-paint-galloway-nj.webp",
    alt: "Framing to finished interior in Galloway NJ — before and after view from exposed studs and open framing to fully drywalled, primed, and paint-ready walls.",
    category: "Interior",
    title: "Framing to Paint-Ready",
    desc: "Open studs to fully primed walls — drywall hung, taped, finished, and primed without juggling multiple contractors.",
  },
  // ── Govee permanent lighting installs (photos added 2026-09-08) ──
  {
    src: "/govee-permanent-lighting-warm-white-stone-ranch-linwood-nj.webp",
    alt: "Night view of a stone-front ranch in Linwood with warm white permanent lights tracing the dormers, eaves, and garage roofline",
    category: "Lighting",
    title: "Warm White Roofline",
    desc: "Permanent eave lighting in classic warm white — architectural glow, every night.",
  },
  {
    src: "/govee-permanent-lighting-blue-roofline-brigantine-nj.webp",
    alt: "Two-story home with blue permanent lighting across the gables and garage line",
    category: "Lighting",
    title: "Blue Scene, One Tap",
    desc: "Full-house blue scene set from the app — fixtures invisible by day.",
  },
  {
    src: "/govee-permanent-lighting-red-estate-porch-mays-landing-nj.webp",
    alt: "Large home glowing red from permanent eave lighting for the holidays",
    category: "Lighting",
    title: "Holiday Red Estate",
    desc: "Whole-home red holiday scene with no December ladders.",
  },
  {
    src: "/govee-permanent-lighting-multicolor-ranch-galloway-nj.webp",
    alt: "Ranch home with multicolor permanent lighting zones in red, green, and purple",
    category: "Lighting",
    title: "Multicolor Zones",
    desc: "Per-zone control runs multiple colors on one roofline.",
  },
  {
    src: "/govee-permanent-lighting-red-white-holiday-stucco-egg-harbor-township-nj.webp",
    alt: "Stucco two-story with red permanent eave lighting and white accent lighting at dusk",
    category: "Lighting",
    title: "Candy-Cane Classic",
    desc: "Red eave scene over warm white accents on a stucco two-story.",
  },
  {
    src: "/govee-permanent-lighting-cool-white-wreaths-hammonton-nj.webp",
    alt: "Stone-front home with cool white permanent lighting on every dormer and gable",
    category: "Lighting",
    title: "Cool White Dormers",
    desc: "Crisp cool-white outline across a many-gabled stone front.",
  },
  {
    src: "/govee-permanent-lighting-green-blue-wreath-garage-northfield-nj.webp",
    alt: "Home with green and blue permanent lighting scenes and a lit wreath over the garage",
    category: "Lighting",
    title: "Green & Blue Split",
    desc: "Two-tone scene — green garage wash under a blue gable run.",
  },
  {
    src: "/govee-permanent-lighting-red-estate-margate-nj.webp",
    alt: "Large estate home fully outlined in red permanent lighting at night",
    category: "Lighting",
    title: "Red Estate Outline",
    desc: "Every peak and eave traced in red on a five-gable estate.",
  },
  {
    src: "/govee-permanent-lighting-pink-splitlevel-reindeer-pleasantville-nj.webp",
    alt: "Split-level home washed in pink permanent lighting with holiday yard decorations",
    category: "Lighting",
    title: "Pink Scene",
    desc: "Full-wash pink scene proving the range beyond classic holiday colors.",
  },
  {
    src: "/govee-permanent-lighting-soft-white-gables-somers-point-nj.webp",
    alt: "Multi-gable home outlined in soft white permanent lighting",
    category: "Lighting",
    title: "Soft White Gables",
    desc: "Understated soft-white outline — the everyday setting.",
  },
  {
    src: "/govee-permanent-lighting-pink-blue-red-dormers-absecon-nj.webp",
    alt: "Home with pink, blue, and red permanent lighting zones across dormers at night",
    category: "Lighting",
    title: "Three-Zone Color",
    desc: "Pink, blue, and red running simultaneously on separate zones.",
  },
  {
    src: "/govee-permanent-lighting-red-garage-glow-ventnor-nj.webp",
    alt: "Garage and rooflines washed in deep red permanent lighting",
    category: "Lighting",
    title: "Red Garage Wash",
    desc: "Deep red scene wrapping the garage wing and eaves.",
  },
  {
    src: "/govee-permanent-lighting-tricolor-white-red-green-atlantic-city-nj.webp",
    alt: "Home with white, red, and green permanent lighting sections at night",
    category: "Lighting",
    title: "Tri-Color Sections",
    desc: "White, red, and green blocks across one continuous run.",
  },
  {
    src: "/govee-permanent-lighting-patriotic-red-white-blue-egg-harbor-city-nj.webp",
    alt: "Home in red, white, and blue permanent lighting with patriotic yard decorations",
    category: "Lighting",
    title: "Red, White & Blue",
    desc: "Patriotic scene for the Fourth — same lights, new holiday.",
  },
  {
    src: "/govee-permanent-lighting-red-accent-two-story-estell-manor-nj.webp",
    alt: "Two-story home with red permanent accent lighting over holiday string lights",
    category: "Lighting",
    title: "Red Accent Line",
    desc: "Permanent red accent row layered over traditional holiday décor.",
  },
  {
    src: "/govee-permanent-lighting-red-eaves-daylight-egg-harbor-township-nj.webp",
    alt: "Daylight view of red permanent lighting dots along the eaves of a stucco home",
    category: "Lighting",
    title: "Daylight Look",
    desc: "What the install looks like by day — a clean dotted line, no wires.",
  },
];

const categories = ["All", "Interior", "Exterior", "Drywall", "Flooring", "Lighting"];

export default function OurWorkGallery() {
  const [filter, setFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filtered.length : null
    );
  }, [filtered.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filtered.length) % filtered.length : null
    );
  }, [filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  // Move keyboard focus into the dialog on open — aria-modal tells AT the
  // background is inert, so focus must not be left behind on the grid.
  useEffect(() => {
    if (lightboxIndex === null) return;
    document.getElementById("ourwork-lightbox")?.focus();
  }, [lightboxIndex]);

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
              Project Gallery
            </h2>
            <p className="text-[#64748b] max-w-2xl mx-auto text-lg">
              Click any project to see it up close. Filter by category to find what you&apos;re looking for.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat);
                  setLightboxIndex(null);
                }}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  filter === cat
                    ? "bg-[#2563eb] text-white shadow-lg shadow-blue-500/25 scale-105"
                    : "bg-[#f1f5f9] text-[#64748b] hover:bg-[#e2e8f0] hover:text-[#1e3a5f]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <button
                key={project.src + filter}
                onClick={() => setLightboxIndex(i)}
                aria-label={`View ${project.title}`}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg aspect-[4/3] cursor-pointer text-left transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
                style={{
                  animation: `fadeSlideUp 0.5s ease ${i * 0.08}s both`,
                }}
              >
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/90 via-[#1e3a5f]/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#2563eb]/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg mb-1">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.desc}
                  </p>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-[#64748b]">
              <p className="text-lg">No projects in this category yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          id="ourwork-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${filtered[lightboxIndex].title}`}
          tabIndex={-1}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 text-white/60 hover:text-white p-2 cursor-pointer transition-colors"
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={goPrev}
            className="absolute left-2 sm:left-6 z-10 text-white/60 hover:text-white p-3 cursor-pointer transition-colors bg-white/5 hover:bg-white/10 rounded-full"
            aria-label="Previous"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goNext}
            className="absolute right-2 sm:right-6 z-10 text-white/60 hover:text-white p-3 cursor-pointer transition-colors bg-white/5 hover:bg-white/10 rounded-full"
            aria-label="Next"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            <div className="relative w-full aspect-[4/3] max-h-[75vh]">
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
            <div className="text-center mt-6">
              <span className="inline-block bg-[#2563eb]/20 text-[#60a5fa] text-sm font-semibold px-3 py-1 rounded-full mb-2">
                {filtered[lightboxIndex].category}
              </span>
              <h3 className="text-white font-bold text-xl">
                {filtered[lightboxIndex].title}
              </h3>
              <p className="text-white/70 text-sm mt-1">
                {filtered[lightboxIndex].desc}
              </p>
              <p className="text-white/30 text-xs mt-3">
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Animation keyframe */}
      <style jsx global>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
