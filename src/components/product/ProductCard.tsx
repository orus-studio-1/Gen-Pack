"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ProductBoxVisual from "./ProductBoxVisual";

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  fluteTypes: string[];
  materialGrade: string;
  ectRating: string;
  minOrderQty: string;
  commonUses: string[];
  features: string[];
}

interface ProductCardProps {
  product: ProductItem;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [viewMode, setViewMode] = useState<"3d" | "cad">("3d");

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden p-4 sm:p-5 md:p-6 select-none"
    >
      {/* Top Controls & Category Badge */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
          {product.category}
        </span>

        {/* Interactive CAD / 3D Toggle */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setViewMode(viewMode === "3d" ? "cad" : "3d");
          }}
          className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded border transition-colors ${
            viewMode === "cad"
              ? "bg-orange-500 text-white border-orange-500"
              : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
          }`}
          title="Toggle Technical CAD view"
        >
          {viewMode === "3d" ? "3D VIEW" : "CAD SPEC"}
        </button>
      </div>

      {/* Product Image / 3D CAD Visual Box Container - Links to /product/[id] */}
      <Link
        href={`/product/${product.slug}`}
        className="w-full cursor-pointer my-2 flex items-center justify-center relative rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
      >
        <ProductBoxVisual
          slug={product.slug}
          isHovered={isHovered}
          viewMode={viewMode}
        />

        {/* Hover Overlay Badge */}
        <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
          <span className="px-4 py-2 bg-slate-900/90 text-white text-xs font-semibold rounded-full backdrop-blur-md shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            View Details & Specs ↗
          </span>
        </div>
      </Link>

      {/* Product Information Section - Links to /product/[id] */}
      <div className="mt-3 pt-3 border-t border-gray-100">
        <div className="flex items-start justify-between gap-2">
          <div>
            <Link
              href={`/product/${product.slug}`}
              className="text-base sm:text-lg font-bold text-slate-900 font-urbanist group-hover:text-orange-600 transition-colors block"
            >
              {product.name}
            </Link>
            <p className="text-xs text-slate-500 mt-1 line-clamp-1">
              {product.tagline}
            </p>
          </div>

          <Link
            href={`/product/${product.slug}`}
            className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-orange-500 text-slate-700 group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-300"
            aria-label={`View ${product.name} details`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Quick Flute Specs Pill Tag Row */}
        <div className="mt-3 flex items-center gap-1.5 flex-wrap">
          {product.fluteTypes.slice(0, 3).map((flute) => (
            <span
              key={flute}
              className="text-[10px] font-mono text-slate-600 bg-slate-50 px-2 py-0.5 rounded border border-slate-200"
            >
              {flute}
            </span>
          ))}
          <span className="text-[10px] text-slate-400 font-medium ml-auto">
            {product.ectRating}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
