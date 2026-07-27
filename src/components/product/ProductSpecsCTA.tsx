"use client";

import React from "react";
import { motion } from "framer-motion";
import CTAButton from "@/components/landing_page/CTAButton";

export const ProductSpecsCTA: React.FC = () => {
  return (
    <section className="w-full py-20 sm:py-28 md:py-36 bg-[#1c1817] text-white relative overflow-hidden select-none font-urbanist border-t border-slate-800">
      {/* Soft warm ambient lighting glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[350px] bg-orange-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-14 lg:px-20 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          {/* Animated Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-widest mb-6 backdrop-blur-md">
            <div className="w-3.5 h-3.5 rounded-full border-[2.5px] border-orange-500 flex items-center justify-center shrink-0">
              <div className="w-1 h-1 rounded-full bg-orange-500 animate-pulse" />
            </div>
            <span>GET IN TOUCH WITH PACKAGING EXPERTS</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-urbanist text-white tracking-tight mb-5 leading-tight">
            Need custom sizes or high-volume pricing?
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-300 font-urbanist mb-10 max-w-2xl leading-relaxed font-light">
            Speak directly with our structural packaging specialists for free CAD samples, custom flexo print designs, and instant quotes.
          </p>

          {/* Action CTA Button */}
          <CTAButton
            label="Request Custom Quote"
            href="/contact"
            variant="solid"
            size="lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSpecsCTA;
