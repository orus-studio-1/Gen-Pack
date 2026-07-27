"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  href: string;
}

interface ProductCardProps {
  product: ProductItem;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between select-none font-urbanist">
      {/* Product Image Frame - Large & Prominent */}
      <div className="w-full h-56 sm:h-60 md:h-64 mb-6 bg-[#fbfbfb] rounded-xl p-4 flex items-center justify-center border border-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain max-h-full"
          loading="lazy"
          draggable={false}
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-[#1c1817] mb-2.5 font-urbanist tracking-tight">
            {product.name}
          </h3>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed font-urbanist">
            {product.description}
          </p>
        </div>

        {/* Bottom Button - Learn More */}
        <div>
          <a
            href={product.href}
            className="inline-block px-7 py-3 border-2 border-[#1a3c7f] text-[#1a3c7f] text-xs font-bold uppercase tracking-[0.16em] rounded-full hover:bg-[#1a3c7f] hover:text-white transition-all duration-300 font-urbanist"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
