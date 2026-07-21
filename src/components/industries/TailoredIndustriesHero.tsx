"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export interface IndustryCardData {
  id: string;
  imageSrc: string;
  fallbackSrc: string;
  alt: string;
}

const industriesList: IndustryCardData[] = [
  {
    id: "perishable-foods",
    imageSrc: "/Industry1.png",
    fallbackSrc:
      "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80&w=800",
    alt: "Raw steak on ice with chili peppers representing cold-chain perishable foods logistics",
  },
  {
    id: "pharmaceuticals",
    imageSrc: "/industry2.png",
    fallbackSrc:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    alt: "Medical pills and pharmaceutical tablets in clean organized rows",
  },
  {
    id: "manufacturing",
    imageSrc: "/industry3.png",
    fallbackSrc:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    alt: "Industrial manufacturing plant with blue metal piping and machinery",
  },
  {
    id: "electronics",
    imageSrc: "/industry4.png",
    fallbackSrc:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    alt: "Microchip printed circuit board and high tech electronics assembly",
  },
  {
    id: "retail-ecommerce",
    imageSrc: "/industry5.png",
    fallbackSrc:
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800",
    alt: "SumUp card reader POS terminal and contactless credit card payment",
  },
];

export const TailoredIndustriesHero: React.FC = () => {
  return (
    <section className="w-full pt-28 md:pt-36 pb-20 md:pb-28 bg-white text-[#1c1817] font-urbanist select-none overflow-hidden">
      <div className="w-full max-w-[1500px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        
        {/* Header Section matching screenshot */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-14">
          
          {/* Top Target Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-3.5 h-3.5 rounded-full border-[2.5px] border-orange-600 flex items-center justify-center shrink-0">
              <span className="w-1 h-1 rounded-full bg-orange-600" />
            </span>
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#1c1817] uppercase">
              INDUSTRIES
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-[#1c1817] leading-[1.08] max-w-4xl"
          >
            Tailored to your Industry.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl text-slate-600 font-normal mt-4 md:mt-5 max-w-2xl leading-relaxed"
          >
            From perishable foods to high-value electronics. Loginord crafts specialized supply-chain solutions that fit your requirements and regulations.
          </motion.p>
        </div>

        {/* 5 Column Pure Image Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-4.5"
        >
          {industriesList.map((item, index) => (
            <IndustryCard key={item.id} item={item} index={index} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

const IndustryCard: React.FC<{ item: IndustryCardData; index: number }> = ({ item, index }) => {
  const [imgSrc, setImgSrc] = useState(item.imageSrc);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.35 + index * 0.08 }}
      className="group relative w-full h-[360px] sm:h-[420px] md:h-[460px] lg:h-[500px] xl:h-[540px] rounded-2xl md:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-slate-900 cursor-pointer"
    >
      <Image
        src={imgSrc}
        alt={item.alt}
        fill
        priority={index < 3}
        unoptimized
        onError={() => setImgSrc(item.fallbackSrc)}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
      />
    </motion.div>
  );
};

export default TailoredIndustriesHero;
