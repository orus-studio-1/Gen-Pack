"use client";

import React from "react";
import { motion } from "framer-motion";
import CTAButton from "@/components/landing_page/CTAButton";

export const ProductSpecsCTA: React.FC = () => {
  return (
    <section className="w-full py-14 sm:py-20 md:py-28 bg-[#f8f6f3] text-slate-900 relative overflow-hidden border-t border-gray-200/80 select-none font-urbanist">
      {/* Soft warm ambient lighting glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] h-[300px] bg-orange-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-16 lg:px-24 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          {/* Animated Pill Badge */}
          <div className="inline-flex items-center gap-2 font-semibold text-xs md:text-sm tracking-wider uppercase text-orange-600 border border-orange-500/25 rounded-full px-3.5 py-1.5 mb-5 sm:mb-6 bg-orange-500/10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span>CUSTOM PACKAGING SOLUTIONS</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-bold font-urbanist text-slate-900 tracking-tight mb-4 sm:mb-5 leading-tight">
            Need custom sizes or printed packaging?
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg md:text-xl text-slate-600 font-urbanist mb-7 sm:mb-9 max-w-2xl leading-relaxed font-normal">
            Speak directly with our packaging specialists for free CAD structural samples, custom die-cut designs, and instant volume quote pricing.
          </p>

          {/* Action CTA Button */}
          <CTAButton
            label="Request Custom Quote"
            href="/contact"
            variant="solid"
            size="lg"
            textColor="text-white"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSpecsCTA;
