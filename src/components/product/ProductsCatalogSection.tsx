"use client";

import React, { useState, useMemo } from "react";
import ProductCard, { ProductItem } from "./ProductCard";

const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "bespoke-packaging",
    name: "Bespoke Packaging",
    category: "Bespoke",
    tagline: "Innovative and cost-effective packaging created by our team of designers.",
    description:
      "Innovative and cost-effective packaging created by our team of designers.",
    image:
      "https://www.atlaspackaging.co.uk/-/m/images/atlas/product-icons-680x450px/bespoke-packaging-680x450px.png",
    href: "/contact",
  },
  {
    id: "crash-lock",
    name: "Crash Lock",
    category: "Boxes",
    tagline: "Convenient and practical solution for businesses.",
    description:
      "Crash Lock corrugated cardboard boxes which are a convenient and practical solution for businesses.",
    image:
      "https://www.atlaspackaging.co.uk/-/m/images/atlas/product-icons-680x450px/crash-lock-box-680x450px.png",
    href: "/contact",
  },
  {
    id: "counter-display-units",
    name: "Counter Display Units",
    category: "Displays",
    tagline: "Brand enhancing retail display units.",
    description:
      "Counter display units that are branded, cost effective and can maximise your products selling potential.",
    image:
      "https://www.atlaspackaging.co.uk/-/m/images/atlas/product-icons-680x450px/cdu-packaging-box-680x450px.png",
    href: "/contact",
  },
  {
    id: "fully-enclosed",
    name: "Fully Enclosed",
    category: "Boxes",
    tagline: "Printed, glued and folded for maximum efficiency.",
    description:
      "Printed, glued and folded to make assembly as efficient as possible.",
    image:
      "https://www.atlaspackaging.co.uk/-/m/images/atlas/product-icons-680x450px/fully-enclosed-680x450px.png",
    href: "/contact",
  },
  {
    id: "gift-pack",
    name: "Gift Pack",
    category: "Gift & Retail",
    tagline: "High quality printed presentation packs.",
    description:
      "High quality printed gift and presentation packs which are self sealing without the need for glue or tape.",
    image:
      "https://www.atlaspackaging.co.uk/-/m/images/atlas/product-icons-680x450px/gift-packaging-box-680x450px.png",
    href: "/contact",
  },
  {
    id: "plastic-free",
    name: "Plastic Free",
    category: "Eco-Friendly",
    tagline: "Zero-plastic cardboard packaging solutions.",
    description:
      "Cardboard packaging solutions which eliminate the need for any plastic within the packaging.",
    image:
      "https://www.atlaspackaging.co.uk/-/m/images/atlas/product-icons-680x450px/plastic-free-packaging-box-680x450px.png",
    href: "/contact",
  },
  {
    id: "point-of-sale",
    name: "Point of Sale",
    category: "Displays",
    tagline: "Branded point of sale retail displays.",
    description:
      "Point of sale display units that are branded, cost-effective and that stand out at the till.",
    image:
      "https://www.atlaspackaging.co.uk/-/m/images/atlas/product-icons-680x450px/point-of-sale-packaging-box-680x450px.png",
    href: "/contact",
  },
  {
    id: "shelf-ready-packaging",
    name: "Shelf Ready Packaging (SRP)",
    category: "Displays",
    tagline: "Supermarket shelf ready packaging.",
    description:
      "High quality printed packaging that looks amazing on the supermarket shelf.",
    image:
      "https://www.atlaspackaging.co.uk/-/m/images/atlas/product-icons-680x450px/srp-packaging-box-680x450px.png",
    href: "/contact",
  },
  {
    id: "subscription-boxes",
    name: "Subscription Boxes",
    category: "E-Commerce",
    tagline: "Easy to assemble e-commerce delivery boxes.",
    description:
      "Easy to assemble boxes that are sealed with double sided tape and inbuilt perforation tear strip.",
    image:
      "https://www.atlaspackaging.co.uk/-/m/images/atlas/product-icons-680x450px/subscription-boxes-680x450px.png",
    href: "/contact",
  },
  {
    id: "postal-packaging",
    name: "Postal Packaging 0427",
    category: "E-Commerce",
    tagline: "PIP letterbox sized postal boxes.",
    description:
      "PIP packaging is the perfect choice for products that fit within a regular letterbox sized box.",
    image:
      "https://www.atlaspackaging.co.uk/-/m/images/atlas/product-icons-680x450px/postal-packaging-box-680x450px.png",
    href: "/contact",
  },
  {
    id: "pallet-boxes",
    name: "Pallet Boxes",
    category: "Heavy Duty",
    tagline: "Heavy duty double walled cardboard pallet boxes.",
    description:
      "Low cost heavy duty double walled cardboard pallet boxes with or without a pallet attached.",
    image:
      "https://www.atlaspackaging.co.uk/-/m/images/atlas/product-icons-680x450px/pallet-box-packaging-680x450px.png",
    href: "/contact",
  },
  {
    id: "ecommerce",
    name: "Ecommerce Packaging",
    category: "E-Commerce",
    tagline: "Unboxing experience for home delivery.",
    description:
      "Create an unboxing experience with a range of innovative products for home delivery.",
    image:
      "https://www.atlaspackaging.co.uk/-/m/images/atlas/product-icons-680x450px/subscription-boxes-680x450px.png",
    href: "/contact",
  },
];

export const ProductsCatalogSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Bespoke", "Boxes", "Displays", "E-Commerce", "Heavy Duty", "Eco-Friendly"];

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") return PRODUCTS_DATA;
    return PRODUCTS_DATA.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="catalog" className="w-full bg-[#fcfcfc] text-[#1c1817] py-16 sm:py-24 md:py-32 font-urbanist select-none border-t border-slate-100">
      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1c1817] font-urbanist mb-4">
            Our product packaging solutions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Explore precision-engineered corrugated cardboard boxes, retail displays, and bespoke packaging solutions.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2.5 flex-wrap mb-12 sm:mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs sm:text-sm px-6 py-2.5 rounded-full font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-[#1c1817] text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid - 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsCatalogSection;
