"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const ContactHero: React.FC = () => {
  return (
    <section className="w-full pt-32 md:pt-40 pb-16 bg-white text-[#1c1817] font-urbanist select-none">
      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24">

        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight font-urbanist text-[#1c1817]"
          >
            Let’s talk packaging.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex items-center gap-2 font-semibold text-xs md:text-sm tracking-wider uppercase text-slate-800 border border-slate-200 rounded-full px-4 py-2 self-start md:self-auto shadow-sm"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
            <span>CONTACT US</span>
          </motion.div>
        </div>

        {/* Two Side-by-Side Images */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 md:my-14"
        >
          {/* Image 1: Plant floor */}
          <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl bg-slate-900">
            <Image
              src="https://images.unsplash.com/photo-1734357310900-4b513a3a5ae0?auto=format&fit=crop&q=80&w=1200"
              alt="Corrugated board being converted at the Genpack plant"
              fill
              priority
              unoptimized
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Image 2: Design studio */}
          <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl bg-slate-900">
            <Image
              src="https://images.unsplash.com/photo-1638560926839-cb90ababd947?auto=format&fit=crop&q=80&w=1200"
              alt="Kraft packaging samples laid out in the design studio"
              fill
              priority
              unoptimized
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        {/* Sub-Heading & Paragraph */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight font-urbanist text-[#1c1817] mb-6"
          >
            Samples are free.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl text-slate-600 font-urbanist leading-relaxed max-w-2xl"
          >
            Send us the product dimensions, the weight and where it is travelling. You will get a board specification, a structural CAD sample and a delivered price — usually inside one working day.
          </motion.p>
        </div>

      </div>
    </section>
  );
};

export default ContactHero;
