"use client";

import React from "react";
import { motion } from "framer-motion";

export const ProductsHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[420px] sm:min-h-[500px] md:min-h-[580px] pt-28 sm:pt-36 md:pt-40 pb-14 sm:pb-20 flex items-center justify-center overflow-hidden bg-slate-950 text-white select-none">
      {/* Background Image Overlay with Industrial Warehouse Cardboard Packaging atmosphere */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop')`,
        }}
      />

      {/* Layered Gradient Overlays for optimal readability and depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-slate-950" />
      <div className="absolute inset-0 bg-radial-vignette opacity-50" />

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-8 text-center flex flex-col items-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-4 sm:mb-6 backdrop-blur-md shadow-lg"
        >
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 animate-ping" />
          <span>PRECISION PACKAGING SOLUTIONS</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight font-urbanist text-white drop-shadow-md"
        >
          Our Products
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-4 sm:mt-6 text-base sm:text-xl md:text-2xl text-slate-200 max-w-2xl font-light font-urbanist leading-relaxed drop-shadow"
        >
          From corrugated boxes and shipping cartons to custom-printed packaging.
        </motion.p>
      </div>
    </section>
  );
};

export default ProductsHero;
