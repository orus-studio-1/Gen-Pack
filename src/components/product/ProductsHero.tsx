"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CATEGORIES, PRODUCTS, IMAGES } from "@/data/products";

export const ProductsHero: React.FC = () => {
  return (
    <section className="w-full pt-32 md:pt-40 pb-12 bg-white text-[#1c1817] font-urbanist select-none">
      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#1c1817] font-urbanist"
            >
              Packaging,
              <br />
              engineered for performance.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="mt-4 text-base sm:text-xl md:text-2xl text-slate-600 font-normal max-w-2xl leading-relaxed"
            >
              We manufacture corrugated packaging solutions, from boxes and rolls to protective inserts and displays, integrating structural integrity, functional design and material efficiency to address the distinct requirements of diverse industries.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex items-center gap-2 font-semibold text-xs md:text-sm tracking-wider uppercase text-slate-800 border border-slate-200 rounded-full px-4 py-2 self-start md:self-auto shadow-sm shrink-0"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-orange-600 animate-pulse" />
            <span>
              {PRODUCTS.length} products · {CATEGORIES.length} ranges
            </span>
          </motion.div>
        </div>

        {/* Hero Visual Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-slate-100 aspect-[16/11] sm:aspect-[21/9] max-h-[500px]"
        >
          <Image
            src={`${IMAGES.boxesOpen}?auto=format&fit=crop&w=1920&q=75`}
            alt="Corrugated dividers and cartons stacked at the plant"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />

          {/* Floating Pill Tag inside Banner */}
          {/* Mobile: inset evenly on both sides so it can never overflow the image.
              sm+: anchored bottom-left at its natural width. */}
          <div className="absolute left-4 right-4 bottom-4 sm:right-auto sm:left-6 sm:bottom-6 md:left-10 md:bottom-10 sm:max-w-[calc(100%-3rem)] bg-white/90 backdrop-blur-md px-4 py-3 sm:px-5 rounded-2xl border border-white/40 shadow-lg text-[#1c1817]">
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-orange-600">
              Stock &amp; Bespoke
            </p>
            {/* Each phrase stays on one line; phrases wrap as whole units. */}
            <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] sm:text-sm font-semibold text-slate-900 leading-snug">
              {["Recyclable", "FSC-Certified kraft", "Plastic-Free"].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5 whitespace-nowrap">
                  <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-orange-600 shrink-0" />
                  {item}
                </span>
              ))}
            </p>
          </div>
        </motion.div>

        {/* Range shortcuts
            Mobile: even 2-column grid (equal widths, equal row heights, centred text).
            sm+: wrapping row of pills. */}
        <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/product?category=${cat.id}#catalog`}
              scroll={false}
              className="flex items-center justify-center text-center min-h-[3.25rem] px-3 py-2 rounded-xl leading-snug text-xs sm:text-sm font-semibold sm:inline-flex sm:min-h-0 sm:px-4 sm:rounded-full sm:leading-normal border border-slate-200 text-slate-600 hover:border-orange-600 hover:text-orange-600 transition-colors"
            >
              {/* Non-breaking hyphen keeps words like "Heavy-Duty" on one line */}
              {cat.name.replace(/-/g, "‑")}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;
