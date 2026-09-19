"use client";

import React from "react";
import { motion } from "framer-motion";

export const FleetHero: React.FC = () => {
  return (
    <section className="w-full pt-28 md:pt-36 pb-12 bg-white text-[#1c1817]">
      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24">
        {/* Fleet Media Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-slate-900 aspect-[16/9] md:aspect-[21/9] max-h-[580px] mb-12 md:mb-16"
        >
          <video
            src="/hero_section_bg.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Subtle dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none" />
        </motion.div>

        {/* Introductory Header Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto space-y-4"
        >
          {/* Target Icon + INTRODUCING Badge */}
          <div className="inline-flex items-center justify-center gap-2 mb-1">
            <svg className="w-3.5 h-3.5 text-orange-500 shrink-0" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6" stroke="#f97316" strokeWidth="2.5" />
              <circle cx="8" cy="8" r="2" fill="#f97316" />
            </svg>
            <span className="font-bold text-xs md:text-sm tracking-[0.25em] uppercase text-[#1c1817]">
              INTRODUCING
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight font-urbanist text-[#1c1817] leading-none">
            From our plant to
            <br />
            your packing line.
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-700 font-normal font-urbanist leading-relaxed max-w-3xl mx-auto pt-2">
            Flat-packed cartons are easy to crush and easy to lose. We run our own delivery fleet so the pack you approved is the pack that reaches your line — square, dry and on schedule.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FleetHero;
