"use client";

import React from "react";
import { motion } from "framer-motion";

export const AboutHero: React.FC = () => {
  return (
    <section className="w-full pt-32 md:pt-40 pb-12 bg-white text-[#1c1817]">
      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight font-urbanist text-[#1c1817]"
          >
            Driven by Purpose.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex items-center gap-2 font-semibold text-xs md:text-sm tracking-wider uppercase text-slate-800 border border-slate-200 rounded-full px-4 py-2 self-start md:self-auto shadow-sm"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
            <span>ABOUT US</span>
          </motion.div>
        </div>

        {/* Video Banner Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-slate-900 aspect-[16/9] max-h-[650px]"
        >
          <video
            src="/about-us/about-us-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Subtle dark overlay gradient at edges for polish */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
