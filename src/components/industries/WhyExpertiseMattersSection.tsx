"use client";

import React from "react";
import { motion } from "framer-motion";
import { VerticalPatternTile } from "@/components/landing_page/TopPattern";

export const WhyExpertiseMattersSection: React.FC = () => {
  return (
    <section className="relative w-full bg-white text-[#1c1817] py-24 sm:py-32 lg:py-40 font-urbanist select-none overflow-hidden">
      
      {/* Background Vertical Chevron Pattern Column on Left (matching screenshot watermark) */}
      <div className="absolute top-0 left-0 sm:left-4 md:left-8 w-40 sm:w-56 md:w-64 h-full pointer-events-none z-0 opacity-40 overflow-hidden flex flex-col items-center pt-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <VerticalPatternTile
            key={`vert-pattern-${i}`}
            strokeColor="#cbd5e1"
            strokeWidth={6}
            opacity={0.7}
            tileSize="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60"
          />
        ))}
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24 flex flex-col items-center text-center">
        
        {/* Top Target Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-2 mb-5"
        >
          <span className="w-3.5 h-3.5 rounded-full border-[2.5px] border-orange-600 flex items-center justify-center shrink-0">
            <span className="w-1 h-1 rounded-full bg-orange-600" />
          </span>
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#1c1817] uppercase">
            WHY INDUSTRY EXPERTISE MATTERS
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] font-bold tracking-tight text-[#1c1817] leading-[1.12] max-w-4xl mb-6 font-urbanist"
        >
          <span className="block">Deep Sector Knowledge,</span>
          <span className="block">Seamless Execution.</span>
        </motion.h2>

        {/* Paragraph Description matching screenshot text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl sm:max-w-3xl mx-auto"
        >
          In complex logistics, one size never fits all. By focusing on your industry’s unique requirements - regulatory standards, handling protocols, temperature control, packaging norms - we ensure compliance, reduce risk, and optimize costs. Our teams speak your language and anticipate challenges before they arise.
        </motion.p>

      </div>
    </section>
  );
};

export default WhyExpertiseMattersSection;
