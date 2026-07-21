"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { VerticalPatternTile } from "@/components/landing_page/TopPattern";

interface IndustryServeCardData {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  fallbackSrc: string;
  alt: string;
  points: string[];
}

const serveCards: IndustryServeCardData[] = [
  {
    id: "food-beverage",
    title: "Food & Beverage",
    subtitle: "Temperature-controlled transport from farm to market.",
    imageSrc: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000",
    fallbackSrc: "/Industry1.png",
    alt: "Food plates with sandwiches, croissants and coffee top down view",
    points: [
      "HACCP-certified cold chain",
      "Cross-docking & warehousing",
      "Last-mile refrigerated delivery",
    ],
  },
  {
    id: "pharma-medical",
    title: "Pharmaceutical & Medical",
    subtitle: "Safe, traceable logistics for healthcare essentials.",
    imageSrc: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=1000",
    fallbackSrc: "/industry2.png",
    alt: "Medicine bottles and pharmaceutical jars on shelves",
    points: [
      "GDP/GMP-compliant transport",
      "Tamper-evident packaging",
      "Real-time tracking",
    ],
  },
  {
    id: "industrial-manufacturing",
    title: "Industrial & Manufacturing",
    subtitle: "Just-in-time heavy transport for manufacturing logistics.",
    imageSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
    fallbackSrc: "/industry3.png",
    alt: "Abstract 3D geometric teal and cream industrial shapes",
    points: [
      "Full & breakbulk FTL services",
      "Real-time route optimization",
      "Customs-cleared cross-border",
    ],
  },
  {
    id: "electronics-tech",
    title: "Electronics & Technology",
    subtitle: "Secure logistics for high-value tech components.",
    imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
    fallbackSrc: "/industry4.png",
    alt: "Close up of dark blue and gold printed circuit board",
    points: [
      "ESD-safe handling & packaging",
      "Express air & ground transport",
      "Customs-ready documentation support",
    ],
  },
  {
    id: "retail-ecommerce",
    title: "Retail & E-Commerce",
    subtitle: "Fast, scalable delivery for retail and online sales.",
    imageSrc: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=1000",
    fallbackSrc: "/industry5.png",
    alt: "Clothing garments hanging on racks with brick wall background",
    points: [
      "Nationwide fulfillment & distribution",
      "Integrated returns management",
      "Last-mile delivery optimization",
    ],
  },
];

export const IndustriesWeServeSection: React.FC = () => {
  const foodCard = serveCards[0];
  const remainingCards = serveCards.slice(1);

  return (
    <section className="relative w-full bg-[#fdeee9] text-[#1c1817] py-20 sm:py-28 lg:py-32 font-urbanist select-none overflow-hidden">

      {/* Container */}
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">

        {/* Top 2-Column Grid: Header on Left, Card 1 (Food & Beverage) on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start mb-6 sm:mb-8 lg:mb-10">

          {/* Header Block (Top Left) */}
          <div className="relative pt-4 sm:pt-6 pr-0 lg:pr-6 pb-6">

            {/* Soft Background Vertical Pattern Tile Watermark behind text */}
            <div className="absolute top-0 -left-6 w-48 sm:w-60 h-60 pointer-events-none z-0 opacity-20 overflow-hidden">
              <VerticalPatternTile
                strokeColor="#ea580c"
                strokeWidth={5}
                opacity={0.5}
                tileSize="w-48 h-48 sm:w-60 sm:h-60"
              />
            </div>

            <div className="relative z-10">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex items-center gap-2 mb-4"
              >
                <span className="w-3.5 h-3.5 rounded-full border-[2.5px] border-orange-600 flex items-center justify-center shrink-0">
                  <span className="w-1 h-1 rounded-full bg-orange-600" />
                </span>
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#1c1817] uppercase">
                  SPECIALIZED BY SECTOR
                </span>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="text-4xl sm:text-5xl lg:text-[4rem] font-bold tracking-tight text-[#1c1817] leading-[1.08] mb-5"
              >
                <span className="block">Industries</span>
                <span className="block">We Serve</span>
              </motion.h2>

              {/* Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed max-w-md"
              >
                Each industry has its own logistics DNA — we tailor our services to meet yours with precision, reliability, and care.
              </motion.p>
            </div>
          </div>

          {/* Card 1: Food & Beverage (Top Right) */}
          <ServeCard card={foodCard} index={0} />

        </div>

        {/* 2-Column Grid for Remaining 4 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start">
          {remainingCards.map((card, idx) => (
            <ServeCard key={card.id} card={card} index={idx + 1} />
          ))}
        </div>

      </div>
    </section>
  );
};

const ServeCard: React.FC<{ card: IndustryServeCardData; index: number }> = ({ card, index }) => {
  const [imgSrc, setImgSrc] = useState(card.imageSrc);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.15, ease: "easeOut" }}
      className="bg-white rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 flex flex-col justify-between"
    >
      <div>
        {/* Title Row with Orange Target Icon */}
        <div className="flex items-center gap-2.5 mb-2">
          <span className="w-3.5 h-3.5 rounded-full border-[2.5px] border-orange-600 flex items-center justify-center shrink-0 mt-0.5">
            <span className="w-1 h-1 rounded-full bg-orange-600" />
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#1c1817] tracking-tight">
            {card.title}
          </h3>
        </div>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-600 font-normal mb-5 leading-snug pl-6">
          {card.subtitle}
        </p>

        {/* Card Image */}
        <div className="relative w-full h-[190px] sm:h-[230px] rounded-2xl overflow-hidden mb-6 bg-slate-100">
          <Image
            src={imgSrc}
            alt={card.alt}
            fill
            unoptimized
            onError={() => setImgSrc(card.fallbackSrc)}
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Bullet Points List */}
        <ul className="space-y-2.5 pt-1">
          {card.points.map((point, pIdx) => (
            <li key={pIdx} className="flex items-center gap-2.5 text-sm sm:text-base text-[#1c1817] font-medium">
              <span className="text-slate-400 font-bold text-lg leading-none select-none">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default IndustriesWeServeSection;
