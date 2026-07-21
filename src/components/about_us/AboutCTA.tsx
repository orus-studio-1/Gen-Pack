"use client";

import React from "react";
import { motion } from "framer-motion";
import CTAButton from "@/components/landing_page/CTAButton";

export const AboutCTA: React.FC = () => {
  return (
    <section className="w-full py-24 md:py-36 bg-[#1c1817] text-white relative overflow-hidden border-t border-white/10">
      {/* Background ambient glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 font-semibold text-xs md:text-sm tracking-wider uppercase text-orange-400 border border-orange-500/30 rounded-full px-4 py-1.5 mb-8 bg-orange-500/10">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span>START LOGISTICS TODAY</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold font-urbanist text-white tracking-tight mb-6 leading-tight">
            Ready to move smarter?
          </h2>

          <p className="text-lg sm:text-2xl text-slate-300 font-urbanist mb-10 max-w-2xl leading-relaxed">
            Get a tailored logistics strategy for your cargo across Europe and the United States. Fast, transparent, and built for speed.
          </p>

          <CTAButton
            label="Get a Custom Quote"
            href="#quote"
            variant="solid"
            size="lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;
