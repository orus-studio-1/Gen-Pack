"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import ProductCard from "./ProductCard";
import {
  CATEGORIES,
  PRODUCTS,
  type CategoryId,
  type Product,
} from "@/data/products";

type Filter = CategoryId | "all";

export const ProductsCatalogSection: React.FC = () => {
  const searchParams = useSearchParams();
  const requested = searchParams.get("category") as CategoryId | null;
  const initial: Filter =
    requested && CATEGORIES.some((c) => c.id === requested) ? requested : "all";

  const [selected, setSelected] = useState<Filter>(initial);
  const [lastRequested, setLastRequested] = useState<Filter>(initial);
  const [query, setQuery] = useState("");

  // Keep the active filter in step with ?category= links arriving from the
  // hero, the footer or a shared URL, without an extra render pass.
  if (initial !== lastRequested) {
    setLastRequested(initial);
    setSelected(initial);
  }

  const activeCategory = CATEGORIES.find((c) => c.id === selected);

  const filtered: Product[] = useMemo(() => {
    const term = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const inCategory = selected === "all" || p.categories.includes(selected);
      if (!inCategory) return false;
      if (!term) return true;
      return (
        p.name.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term) ||
        p.spec.toLowerCase().includes(term) ||
        p.useCase.toLowerCase().includes(term) ||
        p.idealFor.some((t) => t.toLowerCase().includes(term))
      );
    });
  }, [selected, query]);

  /** Short label shown on each card — the first category the product belongs to. */
  const labelFor = (product: Product) =>
    CATEGORIES.find((c) => c.id === product.categories[0])?.shortName;

  return (
    <section
      id="catalog"
      className="w-full bg-[#fcfcfc] text-[#1c1817] py-16 sm:py-24 md:py-28 font-urbanist border-t border-slate-100 scroll-mt-24"
    >
      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24">
        {/* Section Heading */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-3.5 h-3.5 rounded-full border-[2.5px] border-orange-600 flex items-center justify-center shrink-0">
              <div className="w-1 h-1 rounded-full bg-orange-600" />
            </div>
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-slate-500">
              PRODUCT CATALOGUE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            {PRODUCTS.length}+ corrugated packaging solutions,
            <br className="hidden sm:block" /> all 100% recyclable.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Rolls, boxes, inserts, displays and print finishes — filter by what
            you need, or tell us what you are shipping and we will engineer the
            pack around it.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-4 mb-10 sm:mb-12">
          <div className="flex items-center gap-2.5 flex-wrap">
            <button
              onClick={() => setSelected("all")}
              className={`text-xs sm:text-sm px-5 py-2.5 rounded-full font-semibold transition-all ${
                selected === "all"
                  ? "bg-[#1c1817] text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              All ({PRODUCTS.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelected(cat.id)}
                className={`text-xs sm:text-sm px-5 py-2.5 rounded-full font-semibold transition-all ${
                  selected === cat.id
                    ? "bg-[#1c1817] text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {cat.shortName}
              </button>
            ))}
          </div>

          <div className="relative max-w-md">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by product, flute, use case or industry"
              aria-label="Search products"
              className="w-full bg-white border border-slate-200 rounded-full pl-11 pr-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-600 transition-colors"
            />
          </div>
        </div>

        {/* Category banner */}
        {activeCategory && (
          <div className="relative mb-10 sm:mb-12 rounded-2xl md:rounded-3xl overflow-hidden border border-slate-200/80">
            <div className="relative h-40 sm:h-52 md:h-60 w-full">
              <Image
                src={`${activeCategory.image}?auto=format&fit=crop&w=1600&q=70`}
                alt={activeCategory.name}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1c1817]/92 via-[#1c1817]/60 to-[#1c1817]/10" />
              <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 md:px-12 max-w-3xl">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
                  {activeCategory.name}
                </h3>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  {activeCategory.blurb}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Result count */}
        <p className="text-sm text-slate-500 mb-6">
          Showing <span className="font-semibold text-slate-800">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "product" : "products"}
          {query && (
            <>
              {" "}
              for <span className="font-semibold text-slate-800">“{query}”</span>
            </>
          )}
        </p>

        {/* Product Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filtered.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
                categoryLabel={labelFor(product)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 border border-dashed border-slate-300 rounded-2xl">
            <p className="text-slate-600 mb-2 font-semibold">
              Nothing matches that search yet.
            </p>
            <p className="text-slate-500 text-sm">
              We manufacture to specification — tell us the product, weight and
              transit route and we will build the pack for it.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsCatalogSection;
