"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

/** Kept as an alias so older imports of `ProductItem` keep working. */
export type ProductItem = Product;

interface ProductCardProps {
  product: Product;
  /** Label shown above the product name (usually the category it was filtered by). */
  categoryLabel?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  categoryLabel,
}) => {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden flex flex-col select-none font-urbanist transition-all duration-300 hover:border-orange-600/50 hover:shadow-xl hover:shadow-slate-900/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2"
    >
      {/* Product Photography */}
      <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
        <Image
          src={`${product.image}?auto=format&fit=crop&w=720&q=70`}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {categoryLabel && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-[0.14em] text-slate-700 shadow-sm">
            {categoryLabel}
          </span>
        )}
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-[#1c1817] mb-2 tracking-tight leading-snug">
          {product.name}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {product.description}
        </p>

        {/* Specification strip */}
        <div className="mt-auto space-y-3">
          <div className="flex items-start gap-2 text-xs text-slate-500 border-t border-slate-100 pt-3">
            <span className="font-bold uppercase tracking-wider text-slate-400 shrink-0">
              Spec
            </span>
            <span className="leading-relaxed">{product.spec}</span>
          </div>

          {/* Ideal-for chips */}
          <div className="flex flex-wrap gap-1.5">
            {product.idealFor.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>

          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-orange-600 pt-1">
            View details
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
