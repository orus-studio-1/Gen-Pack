"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/landing_page/Footer";
import ProductBoxVisual from "@/components/product/ProductBoxVisual";
import CTAButton from "@/components/landing_page/CTAButton";

// ── Product Data ──────────────────────────────────────────────────
interface ProductDetail {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  longDescription: string;
  fluteTypes: string[];
  materialGrade: string;
  ectRating: string;
  mullenBurst: string;
  maxStackingLoad: string;
  boardThickness: string;
  minOrderQty: number;
  commonUses: string[];
  features: { title: string; desc: string }[];
  assemblySteps: { step: number; title: string; desc: string }[];
  industries: string[];
}

const DB: Record<string, ProductDetail> = {
  "one-piece-lid": {
    slug: "one-piece-lid", name: "One Piece Lid", category: "Lids & Covers",
    tagline: "Precision-creased telescoping cover lid for shallow boxes & trays",
    description: "Precision-die-cut one-piece corrugated lid designed to fit securely over matching shallow trays.",
    longDescription: "The One-Piece Lid is engineered for high-speed automated or manual folding assembly. Manufactured from high-tensile virgin Kraft paperboard, it provides exceptional top-load crush resistance while protecting shallow boxed goods from moisture, dust, and handling damage. Features pre-scored fold lines and self-locking corner tabs for rapid packing.",
    fluteTypes: ["E-Flute (1.5mm)", "B-Flute (3.0mm)", "F-Flute Micro (0.8mm)"],
    materialGrade: "200# Kraft / 32 ECT", ectRating: "32 ECT", mullenBurst: "200 lbs/in²",
    maxStackingLoad: "180 kg", boardThickness: "1.8 – 3.2 mm", minOrderQty: 250,
    commonUses: ["Apparel & Footwear Shipping", "Shallow Industrial Trays", "Architectural Prints", "Flat Goods"],
    features: [
      { title: "Rapid Tool-Free Assembly", desc: "Folds together in under 5 seconds with zero tape required." },
      { title: "100% Recyclable Kraft", desc: "Made from FSC-certified sustainable forest wood pulp." },
      { title: "High Stacking Load", desc: "Engineered corner fold walls distribute vertical weight evenly." },
      { title: "Flexo Print Surface", desc: "Smooth outer liner ideal for high-definition custom branding." },
    ],
    assemblySteps: [
      { step: 1, title: "Unfold Flat Blank", desc: "Place flat die-cut blank printed-side down on a clean surface." },
      { step: 2, title: "Fold Side Flaps Up", desc: "Crease both long side panels upwards at 90° along scored lines." },
      { step: 3, title: "Lock Corner Tabs", desc: "Tuck corner locking flaps inward into end slots." },
      { step: 4, title: "Place Over Tray Base", desc: "Slide finished lid down onto tray base for a snug fit." },
    ],
    industries: ["E-Commerce & Retail", "Textiles & Garments", "Automotive Parts", "Electronics"],
  },
  "4cnr-box-lid": {
    slug: "4cnr-box-lid", name: "4CNR Box & Lid", category: "Lids & Covers",
    tagline: "4-Corner glued pop-up tray with separate fitted lid",
    description: "Heavy-duty 4-corner tray and lid set engineered for rapid pop-up assembly and superior corner stacking strength.",
    longDescription: "Designed for demanding supply chains, the 4CNR Box & Lid offers double-wall side strength via pre-glued corner joints that collapse flat for transit and pop open instantaneously at packing stations. Protects fragile or high-value items with twin-ply corner posts.",
    fluteTypes: ["B-Flute (3.0mm)", "C-Flute (4.0mm)", "BC Double Wall"],
    materialGrade: "275# Kraft / 44 ECT", ectRating: "44 ECT", mullenBurst: "275 lbs/in²",
    maxStackingLoad: "320 kg", boardThickness: "3.2 – 6.5 mm", minOrderQty: 500,
    commonUses: ["Footwear Boxes", "Bakery Bulk Freight", "Heavy Automotive Components", "Gift Sets"],
    features: [
      { title: "Pre-Glued Pop-Up Corners", desc: "Factory glued tabs allow instant setup without manual taping." },
      { title: "Double Sidewall Protection", desc: "Double layer perimeter walls resist lateral compression." },
      { title: "Moisture Barrier Coating", desc: "Optional water-resistant wax or aqueous inner lining." },
      { title: "Full Color Flexo Printing", desc: "Vibrant custom branding on exterior sidewalls and lid face." },
    ],
    assemblySteps: [
      { step: 1, title: "Pop Open Tray", desc: "Pull opposite corners outward to erect pre-glued sides." },
      { step: 2, title: "Fold End Panels", desc: "Push top flaps over inner tabs to lock bottom structure." },
      { step: 3, title: "Load Products", desc: "Pack merchandise neatly into erect bottom tray." },
      { step: 4, title: "Apply Top Lid", desc: "Press 4CNR top lid over bottom tray base." },
    ],
    industries: ["Food & Agriculture", "Footwear", "Heavy Goods", "Pharma & Cosmetics"],
  },
  "archive-boxes": {
    slug: "archive-boxes", name: "Archive Boxes", category: "Storage & Office",
    tagline: "Heavy-duty document storage box with handholes & hinged lid",
    description: "Ultra-durable double-bottom corrugated archive box with ergonomic die-cut handholes and lift-off lid.",
    longDescription: "Built for records management and long-term file retention, Genpact Archive Boxes feature reinforced triple-end walls, double-layered bottoms, and comfortable handhole cutouts. Fits standard A4, Foolscap, and ring-binder box files effortlessly.",
    fluteTypes: ["C-Flute (4.0mm)", "BC Double Wall (6.5mm)"],
    materialGrade: "275# Kraft / 48 ECT", ectRating: "48 ECT", mullenBurst: "275 lbs/in²",
    maxStackingLoad: "450 kg", boardThickness: "4.0 – 7.0 mm", minOrderQty: 100,
    commonUses: ["Legal & Accounting Files", "Medical Patient Records", "Warehouse Inventory"],
    features: [
      { title: "Reinforced Triple End Walls", desc: "Maximum stacking stability up to 6 boxes high." },
      { title: "Ergonomic Handholes", desc: "Smooth die-cut handles with rolled edges for comfortable carrying." },
      { title: "Printed Content Index", desc: "Pre-printed side indexing panels for dates, contents, and box numbers." },
      { title: "Heavy Bottom Rating", desc: "Double floor prevents sagging when fully loaded." },
    ],
    assemblySteps: [
      { step: 1, title: "Fold Base Flaps", desc: "Interlock bottom flaps to create double-thick floor base." },
      { step: 2, title: "Fold Handhole Tabs", desc: "Fold side handhole cutouts inward to lock sidewalls." },
      { step: 3, title: "Fill Records", desc: "Insert ring binders or file folders vertically." },
      { step: 4, title: "Cap Lid", desc: "Place deep-rim lid over top rim to seal." },
    ],
    industries: ["Legal & Banking", "Healthcare", "Government", "Corporate Offices"],
  },
  "bulk-bins": {
    slug: "bulk-bins", name: "Bulk Bins (Octabin)", category: "Heavy-Duty Bins",
    tagline: "Octagonal heavy-duty bulk shipping container for up to 1,000 kg load",
    description: "Heavy-duty multi-wall octagonal corrugated bulk bin to replace wood crates for granulates, plastics, and heavy industrial products.",
    longDescription: "Genpact Heavy-Duty Octabins provide the ultimate strength-to-weight ratio for bulk material handling. Designed to fit standard Euro and ISO pallets, the 8-sided geometry eliminates side bulging and allows stacking of up to 3 tons in transit.",
    fluteTypes: ["BC Double Wall", "AAC Triple Wall (15mm)"],
    materialGrade: "Heavy Duty Triple Wall / 90 ECT", ectRating: "90 ECT", mullenBurst: "700 lbs/in²",
    maxStackingLoad: "1200 kg", boardThickness: "12 – 15 mm", minOrderQty: 50,
    commonUses: ["Plastic Resins & Polymers", "Bulk Frozen Produce", "Chemical Powders", "Metal Components"],
    features: [
      { title: "8-Sided Octagonal Design", desc: "Distributes radial forces to eliminate sidewall bulging." },
      { title: "Standard Pallet Fit", desc: "Optimized sizing maximizes container shipping space." },
      { title: "Flat-Ship Transit", desc: "Ships flat to cut freight & storage footprint by 80%." },
      { title: "Moisture Barrier Liner", desc: "Optional inner polyethylene bag liner attachment." },
    ],
    assemblySteps: [
      { step: 1, title: "Set Bottom Cap", desc: "Place octagonal bottom tray onto pallet." },
      { step: 2, title: "Expand Sleeve", desc: "Unfold 8-sided corrugated sleeve vertically." },
      { step: 3, title: "Fill Bulk Material", desc: "Fill sleeve via overhead hopper or funnel." },
      { step: 4, title: "Seal Top Cap", desc: "Place top lid cap over rim and band securely." },
    ],
    industries: ["Chemical & Plastics", "Agricultural Bulk", "Automotive Machinery", "Export Shipping"],
  },
  "clamshell-punnet": {
    slug: "clamshell-punnet", name: "Clamshell Punnet", category: "Trays & Punnets",
    tagline: "Vent-perforated food & produce clamshell box with locking tab",
    description: "Eco-friendly kraft clamshell punnet with ventilation slots and secure front locking flap.",
    longDescription: "Replace single-use plastic punnets with 100% biodegradable corrugated Kraft clamshells. Engineered for automated farm packing lines with high airflow ventilation slots, anti-crush corner posts, and grease-resistant food-contact coatings.",
    fluteTypes: ["F-Flute (0.9mm)", "E-Flute Micro (1.5mm)"],
    materialGrade: "Food-Grade Virgin Kraft / 26 ECT", ectRating: "26 ECT", mullenBurst: "150 lbs/in²",
    maxStackingLoad: "80 kg", boardThickness: "0.9 – 1.5 mm", minOrderQty: 1000,
    commonUses: ["Fresh Strawberries & Berries", "Organic Tomatoes", "Gourmet Bakery", "Takeout Food"],
    features: [
      { title: "100% Plastic-Free", desc: "Fully home-compostable and recyclable in standard paper streams." },
      { title: "Airflow Vent Cutouts", desc: "Prevents condensation and extends produce shelf-life." },
      { title: "Front Latching Tab", desc: "Secure press-lock tab stays shut during grocery transit." },
      { title: "Direct Food Contact Safe", desc: "Complies with FDA & EU food packaging standards." },
    ],
    assemblySteps: [
      { step: 1, title: "Fold Side Walls", desc: "Fold punnet sides up along pre-scored lines." },
      { step: 2, title: "Fill Produce", desc: "Pack fresh items into open base." },
      { step: 3, title: "Close Hinged Lid", desc: "Fold top cover over base." },
      { step: 4, title: "Lock Front Latch", desc: "Press front tab into slot." },
    ],
    industries: ["Fresh Produce & Agriculture", "Food Service & Catering", "Organic Groceries"],
  },
  "me-trays": {
    slug: "me-trays", name: "ME Trays", category: "Trays & Punnets",
    tagline: "Open-top stackable corrugated produce & part display tray",
    description: "Stackable open-top corrugated tray with corner post tabs to interlock during transit on pallets.",
    longDescription: "ME Trays are the gold standard for agricultural supply chains. Featuring raised corner post lugs, they interlock vertically when stacked on pallets, creating a rigid column that protects delicate fruit or parts from crushing.",
    fluteTypes: ["B-Flute (3.0mm)", "C-Flute (4.0mm)"],
    materialGrade: "200# Kraft / 32 ECT", ectRating: "32 ECT", mullenBurst: "200 lbs/in²",
    maxStackingLoad: "220 kg", boardThickness: "3.0 – 4.0 mm", minOrderQty: 500,
    commonUses: ["Fruit & Vegetable Logistics", "Automotive Assemblies", "Point-of-Sale Displays"],
    features: [
      { title: "Interlocking Stacking Lugs", desc: "Prevents pallet shift during truck braking." },
      { title: "Ventilation Cutouts", desc: "Maximizes cold air circulation in refrigerated transport." },
      { title: "Fast Machine Setup", desc: "Compatible with automated mechanical tray formers." },
      { title: "High Moisture Resistance", desc: "Water-resistant adhesive glue lines." },
    ],
    assemblySteps: [
      { step: 1, title: "Fold Side Walls", desc: "Fold side walls upward to 90 degrees." },
      { step: 2, title: "Lock Corner Posts", desc: "Tuck corner flaps into end slots." },
      { step: 3, title: "Load Products", desc: "Place items into open tray." },
      { step: 4, title: "Interlock Stack", desc: "Align bottom lugs with tray underneath." },
    ],
    industries: ["Agriculture & Produce", "Automotive Parts", "Retail Display"],
  },
  "regular-slotted-carton": {
    slug: "regular-slotted-carton", name: "Regular Slotted Carton (RSC)", category: "Shipping Cartons",
    tagline: "Standard universal shipping box with meeting top & bottom flaps",
    description: "The world's most popular shipping carton with equal-length flaps for minimal waste and maximum value.",
    longDescription: "The Regular Slotted Carton is the undisputed workhorse of global logistics. Manufactured with minimal scrap waste, the outer flaps meet at the center on both top and bottom for easy taping and structural rigidity. Available in hundreds of stock sizes.",
    fluteTypes: ["B-Flute (3.0mm)", "C-Flute (4.0mm)", "BC Double Wall"],
    materialGrade: "200# / 32 ECT to 44 ECT", ectRating: "32–44 ECT", mullenBurst: "200–275 lbs/in²",
    maxStackingLoad: "250 kg", boardThickness: "3.0 – 6.5 mm", minOrderQty: 100,
    commonUses: ["General Freight", "E-Commerce Shipping", "Warehouse Master Cartons"],
    features: [
      { title: "Maximum Cost Efficiency", desc: "Efficient die-cutting with near zero material scrap." },
      { title: "Universal Taping Seam", desc: "Flaps meet at center for fast tape sealing." },
      { title: "100+ Stock Sizes", desc: "Huge inventory ready for immediate dispatch." },
      { title: "Custom Flexo Printing", desc: "Print shipping symbols, barcodes, and branding." },
    ],
    assemblySteps: [
      { step: 1, title: "Open Flat Carton", desc: "Expand folded box into rectangular tube." },
      { step: 2, title: "Fold Bottom Flaps", desc: "Fold small inner flaps first, then large outer flaps." },
      { step: 3, title: "Apply Sealing Tape", desc: "Apply heavy duty packing tape along seam." },
      { step: 4, title: "Fill & Seal Top", desc: "Pack contents and tape top flaps securely." },
    ],
    industries: ["Logistics & Freight", "E-Commerce", "Consumer Packaged Goods"],
  },
  "die-cut-mailer": {
    slug: "die-cut-mailer", name: "Die-Cut Mailer Box", category: "Custom Packaging",
    tagline: "Self-locking premium e-commerce presentation box",
    description: "Sleek roll-end tuck-top mailer with dust flaps and front double-lock tabs for an unforgettable unboxing.",
    longDescription: "Elevate your brand's unboxing experience. Engineered with double side walls, dust flaps, and front locking tabs, these mailers require no tape to close and resist crushing during courier delivery. Full inside & outside printing available.",
    fluteTypes: ["E-Flute Micro (1.5mm)", "B-Flute (3.0mm)"],
    materialGrade: "White Kraft / 32 ECT", ectRating: "32 ECT", mullenBurst: "200 lbs/in²",
    maxStackingLoad: "150 kg", boardThickness: "1.5 – 3.0 mm", minOrderQty: 250,
    commonUses: ["Direct-to-Consumer Goods", "Subscription Gift Boxes", "Cosmetics & Electronics"],
    features: [
      { title: "No Tape Required", desc: "Self-locking front tabs keep lid shut without tape." },
      { title: "Inside & Outside Printing", desc: "Full color flexo or digital printing on both surfaces." },
      { title: "Double Sidewall Strength", desc: "Folded side wings double crush resistance." },
      { title: "Custom Foam Cutout Ready", desc: "Designed to hold custom foam or paper inserts." },
    ],
    assemblySteps: [
      { step: 1, title: "Fold Side Flaps", desc: "Fold side wings inward." },
      { step: 2, title: "Erect Front & Back", desc: "Roll panels over side tabs." },
      { step: 3, title: "Place Merchandise", desc: "Insert products and tissue wrap." },
      { step: 4, title: "Tuck Top Lid", desc: "Tuck top lid into front slot." },
    ],
    industries: ["D2C E-Commerce", "Cosmetics & Luxury", "Electronics", "Subscription Boxes"],
  },
  "heavy-duty-double-wall": {
    slug: "heavy-duty-double-wall", name: "Heavy-Duty Double Wall Box", category: "Heavy-Duty Bins",
    tagline: "Extra strength twin-cushion export shipping crate",
    description: "Dual-flute corrugated construction combining B and C flutes for exceptional burst strength and heavy stacking capacity.",
    longDescription: "When standard single-wall boxes aren't strong enough, Heavy-Duty Double Wall Cartons provide twin layers of corrugated fluting to absorb shock, resist side bulging, and withstand heavy pallet loads in overseas container transit.",
    fluteTypes: ["BC Double Wall (6.5mm)", "AAC Triple Wall (15mm)"],
    materialGrade: "350# Heavy Kraft / 51 ECT", ectRating: "51 ECT", mullenBurst: "350 lbs/in²",
    maxStackingLoad: "600 kg", boardThickness: "6.5 – 15 mm", minOrderQty: 100,
    commonUses: ["Heavy Auto Parts", "Export Ocean Freight", "Industrial Pumps & Motors"],
    features: [
      { title: "Twin-Layer Shock Absorption", desc: "Dual fluting buffers heavy internal impacts." },
      { title: "Bulge Resistant Walls", desc: "Stiff board prevents side bulging under load." },
      { title: "Export Certified", desc: "Exceeds international sea freight specifications." },
      { title: "Stapled Seam Construction", desc: "Heavy steel wire stapled manufacturer joint." },
    ],
    assemblySteps: [
      { step: 1, title: "Unfold Box", desc: "Expand heavy double-wall sleeve into shape." },
      { step: 2, title: "Tape Heavy Base", desc: "Apply reinforced filament tape along base." },
      { step: 3, title: "Load Heavy Cargo", desc: "Place machinery parts or dense goods inside." },
      { step: 4, title: "Seal Top Flaps", desc: "Seal with heavy tape or strapping." },
    ],
    industries: ["Industrial Equipment", "Automotive Exports", "Aerospace Parts"],
  },
};

// ── Component ─────────────────────────────────────────────────────
export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params);
  const slugId = resolvedParams?.id || "one-piece-lid";
  const product: ProductDetail = useMemo(() => DB[slugId] || DB["one-piece-lid"], [slugId]);

  const [selectedFlute, setSelectedFlute] = useState(0);

  return (
    <main className="w-full min-h-screen bg-white text-[#1c1817] selection:bg-orange-500 selection:text-white">

      {/* ─── Breadcrumb Strip ─── */}
      <section className="w-full pt-28 md:pt-36 pb-4 bg-white">
        <div className="w-full max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#999999] font-urbanist">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/product" className="hover:text-orange-500 transition-colors">Products</Link>
            <span>/</span>
            <span className="text-[#1c1817] font-semibold">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* ─── Hero: Product Title + Visual ─── */}
      <section className="w-full pb-16 md:pb-24 bg-white">
        <div className="w-full max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left: Title Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-5 pt-4"
            >
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-3.5 h-3.5 text-orange-500 shrink-0" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6" stroke="#f97316" strokeWidth="2.5" />
                  <circle cx="8" cy="8" r="2" fill="#f97316" />
                </svg>
                <span className="font-bold text-xs md:text-sm tracking-[0.25em] uppercase text-[#1c1817]">
                  {product.category}
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight font-urbanist text-[#1c1817] leading-none mb-6">
                {product.name}
              </h1>

              <p className="text-lg sm:text-xl text-[#555555] font-normal font-urbanist leading-relaxed max-w-md mb-8">
                {product.tagline}
              </p>

              {/* Quick Stats Row */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-5 text-[#1c1817] font-urbanist mb-10">
                <div>
                  <p className="text-xs font-bold tracking-widest text-[#999999] uppercase font-mono mb-1">ECT Rating</p>
                  <p className="text-2xl font-bold">{product.ectRating}</p>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest text-[#999999] uppercase font-mono mb-1">Stack Load</p>
                  <p className="text-2xl font-bold">{product.maxStackingLoad}</p>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest text-[#999999] uppercase font-mono mb-1">Burst Strength</p>
                  <p className="text-2xl font-bold">{product.mullenBurst}</p>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest text-[#999999] uppercase font-mono mb-1">Board Thickness</p>
                  <p className="text-2xl font-bold">{product.boardThickness}</p>
                </div>
              </div>

              <CTAButton
                label="Get a Quote"
                href="/contact"
                variant="solid"
                size="md"
              />
            </motion.div>

            {/* Right: Product Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-7 relative"
            >
              <div className="w-full rounded-2xl md:rounded-3xl overflow-hidden bg-[#f4f4f6] border border-[#e5e5e5] p-8 md:p-12 flex items-center justify-center aspect-[4/3] max-h-[560px]">
                <ProductBoxVisual slug={product.slug} isHovered={true} viewMode="3d" className="bg-transparent border-0" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── Description Section ─── bg-[#e8e8ea] matching WhatSetsUsApart */}
      <section className="w-full py-20 md:py-32 bg-[#e8e8ea] text-[#1c1817] font-urbanist select-none">
        <div className="w-full max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            {/* Left: Sticky Title */}
            <div className="lg:col-span-5 lg:sticky lg:top-36 self-start">
              <p className="text-xs sm:text-sm font-bold tracking-widest text-[#666666] uppercase mb-4 font-mono">
                PRODUCT OVERVIEW
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-urbanist text-[#1c1817] tracking-tight leading-[1.06]">
                About This Product.
              </h2>
            </div>

            {/* Right: Scrollable Content */}
            <div className="lg:col-span-7 space-y-10">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-lg sm:text-xl text-[#333333] font-normal leading-relaxed font-urbanist"
              >
                {product.longDescription}
              </motion.p>

              {/* Material Grade & Flute Selector */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="border-t border-black/10 pt-8"
              >
                <p className="text-xs sm:text-sm font-bold tracking-widest text-[#666666] uppercase mb-4 font-mono">
                  MATERIAL GRADE: {product.materialGrade}
                </p>
                <p className="text-xs sm:text-sm font-bold tracking-widest text-[#666666] uppercase mb-4 font-mono">
                  AVAILABLE FLUTE PROFILES
                </p>
                <div className="flex flex-wrap gap-3">
                  {product.fluteTypes.map((flute, idx) => (
                    <button
                      key={flute}
                      onClick={() => setSelectedFlute(idx)}
                      className={`px-4 py-2 rounded-full text-sm font-semibold font-urbanist transition-all border ${
                        selectedFlute === idx
                          ? "bg-[#1c1817] text-white border-[#1c1817]"
                          : "bg-transparent text-[#1c1817] border-[#999999] hover:border-[#1c1817]"
                      }`}
                    >
                      {flute}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Common Applications */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="border-t border-black/10 pt-8"
              >
                <p className="text-xs sm:text-sm font-bold tracking-widest text-[#666666] uppercase mb-4 font-mono">
                  COMMON APPLICATIONS
                </p>
                <div className="flex flex-wrap gap-3">
                  {product.commonUses.map((use) => (
                    <span key={use} className="px-4 py-2 rounded-full text-sm font-medium font-urbanist text-[#1c1817] border border-[#cccccc] bg-white">
                      {use}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Industries */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="border-t border-black/10 pt-8"
              >
                <p className="text-xs sm:text-sm font-bold tracking-widest text-[#666666] uppercase mb-4 font-mono">
                  INDUSTRIES SERVED
                </p>
                <div className="flex flex-wrap gap-3">
                  {product.industries.map((ind) => (
                    <span key={ind} className="px-4 py-2 rounded-full text-sm font-medium font-urbanist text-[#1c1817] border border-[#cccccc] bg-white">
                      {ind}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Key Features – matches WhatSetsUsApart layout ─── */}
      <section className="w-full py-20 md:py-32 bg-white text-[#1c1817] font-urbanist select-none">
        <div className="w-full max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            <div className="lg:col-span-5 lg:sticky lg:top-36 self-start">
              <p className="text-xs sm:text-sm font-bold tracking-widest text-[#666666] uppercase mb-4 font-mono">
                WHY CHOOSE THIS PRODUCT
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-urbanist text-[#1c1817] tracking-tight leading-[1.06]">
                Key Features.
              </h2>
            </div>

            <div className="lg:col-span-7 flex flex-col space-y-10 sm:space-y-14">
              {product.features.map((feat, index) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-center border-b border-black/10 pb-8 sm:pb-10 last:border-b-0"
                >
                  <div className="sm:col-span-5 flex items-center gap-4">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ff5500" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                      <path d="M5 4v16" /><path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
                    </svg>
                    <span className="text-xl sm:text-2xl font-bold font-urbanist text-[#1c1817] leading-snug">
                      {feat.title}
                    </span>
                  </div>
                  <div className="sm:col-span-7">
                    <p className="text-base sm:text-lg text-[#333333] font-normal leading-relaxed font-urbanist">
                      {feat.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ─── Assembly Guide – matches OurProcess timeline style ─── */}
      <section className="w-full py-20 md:py-32 bg-white text-[#1c1817] font-urbanist select-none">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">

          <div className="text-center mb-16 md:mb-24 max-w-2xl mx-auto">
            <p className="text-xs sm:text-sm font-bold tracking-widest text-[#666666] uppercase mb-3 font-mono">
              HOW TO ASSEMBLE
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-urbanist text-[#1c1817] tracking-tight">
              Assembly Guide
            </h2>
          </div>

          {/* Timeline Steps */}
          <div className="relative w-full max-w-5xl mx-auto">
            {/* Center vertical line */}
            <svg className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 h-full pointer-events-none z-0" width="24" height="100%" preserveAspectRatio="none">
              <line x1="4" y1="0" x2="4" y2="100%" stroke="#e2e8f0" strokeWidth="1" />
              <motion.line x1="12" y1="0" x2="12" y2="100%" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="8 6" animate={{ strokeDashoffset: [0, -14] }} transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }} />
              <line x1="20" y1="0" x2="20" y2="100%" stroke="#e2e8f0" strokeWidth="1" />
            </svg>

            <div className="space-y-16 md:space-y-28 relative z-10">
              {product.assemblySteps.map((step, index) => {
                const isRight = index % 2 === 0;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                    className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-16 items-start"
                  >
                    <div className={`flex flex-col ${isRight ? "md:opacity-0 md:pointer-events-none hidden md:flex" : "md:items-end md:text-right"}`}>
                      {!isRight && (
                        <>
                          <div className="flex items-center gap-2 mb-2 justify-end">
                            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#555555] font-mono">0{step.step}</span>
                            <span className="w-2.5 h-2.5 rounded-full border-2 border-orange-500 bg-transparent shrink-0" />
                          </div>
                          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-urbanist text-[#1c1817] mb-2 leading-tight">{step.title}</h3>
                          <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed font-urbanist max-w-sm">{step.desc}</p>
                        </>
                      )}
                    </div>
                    <div className={`flex flex-col ${!isRight ? "md:opacity-0 md:pointer-events-none hidden md:flex" : "md:items-start md:text-left"}`}>
                      {isRight && (
                        <>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="w-2.5 h-2.5 rounded-full border-2 border-orange-500 bg-transparent shrink-0" />
                            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#555555] font-mono">0{step.step}</span>
                          </div>
                          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-urbanist text-[#1c1817] mb-2 leading-tight">{step.title}</h3>
                          <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed font-urbanist max-w-sm">{step.desc}</p>
                        </>
                      )}
                    </div>
                    {/* Mobile fallback */}
                    <div className="md:hidden flex flex-col -mt-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2.5 h-2.5 rounded-full border-2 border-orange-500 bg-transparent shrink-0" />
                        <span className="text-xs sm:text-sm font-bold tracking-widest text-[#555555] font-mono">0{step.step}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold font-urbanist text-[#1c1817] mb-2 leading-tight">{step.title}</h3>
                      <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed font-urbanist">{step.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ─── CTA Section – same as FleetCTA / AboutCTA ─── */}
      <section className="w-full py-24 md:py-36 bg-[#1c1817] text-white relative overflow-hidden border-t border-white/10 select-none font-urbanist">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="w-full max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 font-semibold text-xs md:text-sm tracking-wider uppercase text-orange-400 border border-orange-500/30 rounded-full px-4 py-1.5 mb-8 bg-orange-500/10">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span>CUSTOM PACKAGING</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold font-urbanist text-white tracking-tight mb-6 leading-tight">
              Ready to order {product.name}?
            </h2>
            <p className="text-lg sm:text-2xl text-slate-300 font-urbanist mb-10 max-w-2xl leading-relaxed">
              Get a tailored quote with custom sizing, printing, and volume pricing. Our specialists respond within 4 hours.
            </p>
            <CTAButton label="Get a Custom Quote" href="/contact" variant="solid" size="lg" />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}