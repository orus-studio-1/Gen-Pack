"use client";

import React from "react";
import { motion } from "framer-motion";

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
              Precision Packaging.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="mt-4 text-base sm:text-xl md:text-2xl text-slate-600 font-normal max-w-2xl leading-relaxed"
            >
              From corrugated boxes and shipping cartons to custom-printed retail displays. Built for strength, performance, and unboxing excellence.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex items-center gap-2 font-semibold text-xs md:text-sm tracking-wider uppercase text-slate-800 border border-slate-200 rounded-full px-4 py-2 self-start md:self-auto shadow-sm shrink-0"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
            <span>PRODUCT CATALOGUE</span>
          </motion.div>
        </div>

        {/* Hero Visual Image Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-slate-100 aspect-[21/9] max-h-[500px]"
        >
          <img
            src="https://www.atlaspackaging.co.uk/-/m/images/atlas/landing-page-banner-1920x794px/atlas-packaging-products-1920x794px.png"
            alt="Product Packaging Solutions"
            className="w-full h-full object-cover object-center"
            draggable={false}
          />
          {/* Subtle gradient overlay for polish */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none" />

          {/* Floating Pill Tag inside Banner */}
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/40 shadow-lg text-[#1c1817]">
            <p className="text-xs font-bold uppercase tracking-wider text-orange-600">Bespoke & Standard</p>
            <p className="text-sm font-semibold text-slate-900">100% Sustainable Corrugated Packaging</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsHero;
