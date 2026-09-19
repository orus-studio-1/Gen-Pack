"use client";

import React from "react";
import { motion } from "framer-motion";
import { VerticalPatternTile } from "@/components/landing_page/TopPattern";

export const WhyExpertiseMattersSection: React.FC = () => {
  return (
    <section className="relative w-full bg-white text-[#1c1817] py-14 sm:py-24 lg:py-40 font-urbanist select-none overflow-hidden">
      
      {/* Background Vertical Chevron Pattern Column on Left (matching screenshot watermark) */}
      <div className="absolute top-0 left-0 sm:left-4 md:left-8 w-32 sm:w-48 md:w-64 h-full pointer-events-none z-0 opacity-40 overflow-hidden flex flex-col items-center pt-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <VerticalPatternTile
            key={`vert-pattern-${i}`}
            strokeColor="#cbd5e1"
            strokeWidth={6}
            opacity={0.7}
            tileSize="w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60"
          />
        ))}
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col items-center text-center">
        
        {/* Top Target Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-2 mb-3 sm:mb-5"
        >
          <span className="w-3.5 h-3.5 rounded-full border-[2.5px] border-orange-600 flex items-center justify-center shrink-0">
            <span className="w-1 h-1 rounded-full bg-orange-600" />
          </span>
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#1c1817] uppercase">
            WHY SECTOR EXPERIENCE MATTERS
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] font-bold tracking-tight text-[#1c1817] leading-[1.12] max-w-4xl mb-4 sm:mb-6 font-urbanist"
        >
          <span className="block">Every sector breaks</span>
          <span className="block">packaging differently.</span>
        </motion.h2>

        {/* Paragraph Description matching screenshot text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-sm sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl sm:max-w-3xl mx-auto"
        >
          A carton that is perfect for a warehouse pallet will fail in a monsoon yard, and a pack engineered for a courier belt is over-specified for a shop floor. We look at compression loads, humidity, handling and shelf life for your sector first — then choose the flute, the GSM, the coating and the closure. That is how you cut damage and material cost at the same time.
        </motion.p>

      </div>
    </section>
  );
};

export default WhyExpertiseMattersSection;
