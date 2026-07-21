"use client";

import React from "react";
import { motion } from "framer-motion";

export const BuiltOnTrust: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white text-[#1c1817]">
      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-urbanist text-[#1c1817] tracking-tight">
            Built on Trust.
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-slate-800 font-normal leading-relaxed max-w-4xl tracking-tight">
            From last-mile delivery to international freight, Loginord offers flexible and scalable logistics solutions designed for your operational success.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BuiltOnTrust;
