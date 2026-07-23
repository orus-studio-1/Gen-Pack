"use client";

import React, { useState, useMemo } from "react";
import ProductCard, { ProductItem } from "./ProductCard";

const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "prod-1",
    slug: "one-piece-lid",
    name: "One Piece Lid",
    category: "Lids & Covers",
    tagline: "Flat telescoping cover lid for shallow boxes",
    description:
      "Precision-die-cut one-piece corrugated lid designed to fit securely over matching shallow trays. Ideal for apparel, pizza, document storage, and flat industrial components.",
    fluteTypes: ["E-Flute", "B-Flute"],
    materialGrade: "200# Kraft / 32 ECT",
    ectRating: "32 ECT",
    minOrderQty: "250 units",
    commonUses: ["Apparel Shipping", "Shallow Component Trays", "Flat Packaging"],
    features: [
      "Quick folded corner assembly",
      "Stackable load distribution",
      "100% Recyclable Kraft paper",
      "Smooth flexo printing surface",
    ],
  },
  {
    id: "prod-2",
    slug: "4cnr-box-lid",
    name: "4CNR Box & Lid",
    category: "Lids & Covers",
    tagline: "4-Corner glued box with separate fitted cover lid",
    description:
      "Heavy-duty 4-corner tray and lid set engineered for rapid pop-up assembly and superior corner stacking strength. Features glued fold-up sides.",
    fluteTypes: ["B-Flute", "C-Flute"],
    materialGrade: "275# Kraft / 44 ECT",
    ectRating: "44 ECT",
    minOrderQty: "500 units",
    commonUses: ["Bakery & Confectionery", "Footwear Packaging", "Heavy Goods"],
    features: [
      "Pre-glued 4-corner pop-up design",
      "Double sidewall strength",
      "Moisture resistant options",
      "Custom brand color printing",
    ],
  },
  {
    id: "prod-3",
    slug: "archive-boxes",
    name: "Archive Boxes",
    category: "Storage & Office",
    tagline: "Heavy-duty document storage box with handholes & hinged lid",
    description:
      "Ultra-durable double-bottom corrugated archive box with ergonomic die-cut handholes and lift-off lid. Engineered for long-term document retention and warehouse shelving.",
    fluteTypes: ["C-Flute", "BC-Flute Double Wall"],
    materialGrade: "275# Kraft / 48 ECT",
    ectRating: "48 ECT",
    minOrderQty: "100 units",
    commonUses: ["Legal & Financial Records", "Office Archiving", "Medical Records"],
    features: [
      "Reinforced double-walled base",
      "Comfort-grip handhole handles",
      "Printed indexing panel",
      "High stacking load rating up to 350kg",
    ],
  },
  {
    id: "prod-4",
    slug: "bulk-bins",
    name: "Bulk Bins",
    category: "Heavy-Duty Bins",
    tagline: "Octagonal heavy-duty bulk shipping container (Octabin)",
    description:
      "Heavy-duty multi-wall octagonal corrugated bulk bin designed to replace wood crates for granulates, plastics, agricultural produce, and heavy industrial products.",
    fluteTypes: ["BC Double Wall", "AAC Triple Wall"],
    materialGrade: "Heavy Duty Triple Wall / 90 ECT",
    ectRating: "90 ECT",
    minOrderQty: "50 units",
    commonUses: ["Resin & Chemical Powders", "Bulk Produce Exports", "Heavy Machinery Parts"],
    features: [
      "8-sided octagonal compression design",
      "Pallet-sized foot print",
      "Puncture-resistant triple wall",
      "Reusable & flat-ship efficiency",
    ],
  },
  {
    id: "prod-5",
    slug: "clamshell-punnet",
    name: "Clamshell Punnet",
    category: "Trays & Punnets",
    tagline: "Vent-perforated food & produce clamshell box with locking tab",
    description:
      "Eco-friendly sustainable kraft clamshell punnet with integrated top ventilation slots and secure front locking flap. Keeps fresh berries and produce cool.",
    fluteTypes: ["F-Flute", "E-Flute Micro"],
    materialGrade: "Food-Safe Virgin Kraft",
    ectRating: "26 ECT",
    minOrderQty: "1,000 units",
    commonUses: ["Fresh Berries & Grapes", "Organic Produce", "Gourmet Food To-Go"],
    features: [
      "Breathable air vent cutouts",
      "Plastic-free 100% biodegradable",
      "Front latching tab lock",
      "Grease-resistant barrier option",
    ],
  },
  {
    id: "prod-6",
    slug: "me-trays",
    name: "ME Trays",
    category: "Trays & Punnets",
    tagline: "Open-top stackable corrugated produce & part display tray",
    description:
      "Stackable open-top corrugated tray featuring corner post tabs to interlock securely during transit on standard pallets without crushing contents.",
    fluteTypes: ["B-Flute", "C-Flute"],
    materialGrade: "200# Kraft / 32 ECT",
    ectRating: "32 ECT",
    minOrderQty: "500 units",
    commonUses: ["Fruit & Vegetable Logistics", "Parts Tray Assembly", "Retail Display"],
    features: [
      "Interlocking stacking corners",
      "Self-locking fold tabs",
      "High airflow ventilation",
      "Automated tray former compatible",
    ],
  },
  {
    id: "prod-7",
    slug: "regular-slotted-carton",
    name: "Regular Slotted Carton (RSC)",
    category: "Shipping Cartons",
    tagline: "Standard universal shipping box with meeting flaps",
    description:
      "The world's most popular shipping carton. All flaps have equal length from crease to edge for minimal waste manufacturing and maximum shipping value.",
    fluteTypes: ["B-Flute", "C-Flute", "BC Double Wall"],
    materialGrade: "200# / 32 ECT to 44 ECT",
    ectRating: "32-44 ECT",
    minOrderQty: "100 units",
    commonUses: ["General Freight", "E-Commerce Fulfillment", "Master Storage"],
    features: [
      "Cost-efficient high-volume production",
      "Full overlap strength",
      "Available in hundreds of stock sizes",
      "Custom size flexo printing",
    ],
  },
  {
    id: "prod-8",
    slug: "die-cut-mailer",
    name: "Die-Cut Mailer Box",
    category: "Custom Packaging",
    tagline: "Self-locking premium e-commerce presentation box",
    description:
      "Sleek roll-end tuck-top mailer with dust flaps and front double-lock tabs. Provides an unforgettable unboxing experience for premium retail brands.",
    fluteTypes: ["E-Flute Micro", "B-Flute"],
    materialGrade: "Premium White & Kraft / 32 ECT",
    ectRating: "32 ECT",
    minOrderQty: "250 units",
    commonUses: ["Direct-to-Consumer Goods", "Subscription Boxes", "Electronics & Cosmetics"],
    features: [
      "No tape required assembly",
      "Full inside & outside printing",
      "Reinforced side dust walls",
      "Custom insert foam cutout support",
    ],
  },
  {
    id: "prod-9",
    slug: "heavy-duty-double-wall",
    name: "Heavy-Duty Double Wall Box",
    category: "Heavy-Duty Bins",
    tagline: "Extra strength twin-cushion export shipping crate",
    description:
      "Dual-flute corrugated construction combining B and C flutes to deliver exceptional burst strength, puncture resistance, and heavy stacking capacity for ocean freight.",
    fluteTypes: ["BC Flute Double Wall"],
    materialGrade: "350# Heavy Kraft / 51 ECT",
    ectRating: "51 ECT",
    minOrderQty: "100 units",
    commonUses: ["Heavy Auto Parts", "Export Shipping", "Industrial Machinery"],
    features: [
      "Twin-layer shock absorption",
      "Resists side wall bulging",
      "Ideal for fragile or heavy items",
      "Stapled or glued manufacturer seam",
    ],
  },
];

export const ProductsCatalogSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Lids & Covers", "Heavy-Duty Bins", "Trays & Punnets", "Storage & Office", "Shipping Cartons", "Custom Packaging"];

  // Filtered products list based on category and search
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="w-full bg-[#fafafa] text-slate-900 py-16 sm:py-20 md:py-24 font-urbanist">
      <div className="w-full max-w-[1450px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        
        {/* Layout Grid: Left Sidebar Filter + Right Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Sidebar Filter Section (Matching mockups image 1, 2, 3) */}
          <div className="lg:col-span-3 bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-sm sticky top-28 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-urbanist">
                All Products
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                Discover precision-crafted products built for strength, reliability, and performance.
              </p>
            </div>

            {/* Search Input Filter */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Search Products
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g. Lid, Tray, Archive..."
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-slate-50 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 text-xs"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Dropdown Filter */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Filter
              </label>
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-slate-100/80 border border-gray-200 rounded-xl font-medium text-slate-800 appearance-none focus:outline-none focus:border-orange-500 cursor-pointer pr-8"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat === "All" ? "All Categories" : cat}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Interactive Category Pills */}
            <div className="pt-2">
              <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                Categories
              </span>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all ${
                      selectedCategory === cat
                        ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                        : "bg-slate-50 text-slate-600 border-gray-200 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Results count & Clear filters button */}
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-slate-500">
              <span>Showing {filteredProducts.length} items</span>
              {(selectedCategory !== "All" || searchQuery !== "") && (
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                  className="text-orange-600 hover:underline font-semibold"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Right Product Cards Grid Section */}
          <div className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="w-full bg-white rounded-2xl border border-gray-200 p-12 text-center">
                <p className="text-slate-500 text-base font-medium">
                  No products matched your search filter query &ldquo;{searchQuery}&rdquo;.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                  className="mt-4 px-4 py-2 bg-orange-500 text-white text-xs font-bold rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-7">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsCatalogSection;
