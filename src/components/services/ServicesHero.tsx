"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const ServicesHero: React.FC = () => {
  return (
    <section className="w-full pt-32 md:pt-40 pb-16 bg-white text-[#1c1817] font-urbanist select-none">
      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight font-urbanist text-[#1c1817]"
          >
            Packaging Expertise
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex items-center gap-2 font-semibold text-xs md:text-sm tracking-wider uppercase text-slate-800 border border-slate-200 rounded-full px-4 py-2 self-start md:self-auto shadow-sm"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-orange-600 animate-pulse" />
            <span>OUR SERVICES</span>
          </motion.div>
        </div>

        {/* Center Banner Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-slate-900 aspect-[16/9] max-h-[650px] my-10 md:my-14"
        >
          <Image
            src="https://img.magnific.com/free-photo/factory-worker-packaging-boxes_23-2151994449.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Engineered packaging production and automated converting line"
            fill
            priority
            unoptimized
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="100vw"
          />
        </motion.div>

        {/* Bottom Sub-Heading & Paragraph */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight font-urbanist text-[#1c1817] mb-6"
          >
            From brief to pallet.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl text-slate-600 font-urbanist leading-relaxed max-w-3xl"
          >
            Structural design, CAD prototyping, transit testing, printing and just-in-time supply all considered around how your packaging needs to perform from production through delivery.
          </motion.p>
        </div>

      </div>
    </section>
  );
};

export default ServicesHero;

