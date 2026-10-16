"use client";

import React from "react";
import { motion } from "framer-motion";

export const BuiltOnTrust: React.FC = () => {
  return (
    <section className="w-full py-14 md:py-20 bg-white text-[#1c1817]">
      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >

          <div>
            <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">
              Our Legacy
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-urbanist text-[#1c1817] tracking-tight">
              Built on Trust.
            </h2>
          </div>

          <div className="max-w-5xl space-y-6 md:space-y-7">
            <p className="text-lg sm:text-xl md:text-2xl text-slate-800 font-normal leading-relaxed tracking-tight">
              Established in 1968, Carapace by Sri Vishnu Industries has been a trusted leader in corrugated packaging, delivering more than 50 million boxes annually to clients across 12+ industries — from manufacturing and e-commerce to FMCG and logistics.
            </p>

            <p className="text-lg sm:text-xl md:text-2xl text-slate-800 font-normal leading-relaxed tracking-tight">
              From heavy-duty industrial cartons to custom retail-ready
              solutions, we design packaging that meets the most demanding
              supply chain requirements — with uncompromising strength,
              precision, and speed.
            </p>

            <p className="text-lg sm:text-xl md:text-2xl text-slate-800 font-normal leading-relaxed tracking-tight">
              Our high-capacity operations, powered by advanced converting
              lines and an integrated production infrastructure, ensure fast,
              consistent output at scale.
            </p>
          </div>

          <div className="pt-3 border-t border-slate-200">
            <p className="text-sm md:text-base font-normal text-slate-500">
              Carapace{" "}
              <span className="mx-2 text-slate-300">—</span>
              A Brand by Sri Vishnu Industries
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BuiltOnTrust;