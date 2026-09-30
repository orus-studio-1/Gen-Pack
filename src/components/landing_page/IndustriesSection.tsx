"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import { IMAGES } from "@/data/products";
import { VerticalPatternTile } from "./TopPattern";

interface IndustryItem {
  id: string;
  number: string;
  title: string;
  blurb: string;
  imageSrc: string;
  alt: string;
}

interface IndustriesSectionProps {
  titleLine1?: string;
  titleLine2?: string;
  subtitle?: string;
  className?: string;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  titleLine1 = "Built for the",
  titleLine2 = "way you ship.",
  subtitle = "Every sector approaches packaging differently. We specify board, flute and structure around how your product actually travels.",
  className = "",
}) => {
  const industries: IndustryItem[] = [
    {
      id: "ind-1",
      number: "01",
      title: "E-Commerce & D2C",
      blurb:
        "Right-sized mailers, easy-open tear strips and printed interiors designed for secure transit and a better unboxing experience.",
      imageSrc: IMAGES.boxHandover,
      alt: "Parcel being handed over for e-commerce delivery",
    },
    {
      id: "ind-2",
      number: "02",
      title: "Food, FMCG & Fresh Produce",
      blurb:
        "Food-grade liners, ventilated cartons and cold-chain packaging designed to protect freshness from pack house to shelf.",
      imageSrc: IMAGES.cratesApples,
      alt: "Fresh produce packed in crates for distribution",
    },
    {
      id: "ind-3",
      number: "03",
      title: "Pharma & Healthcare",
      blurb:
        "Thermally insulated shippers, tamper-evident closures and security print for temperature-controlled and regulated goods.",
      imageSrc: IMAGES.blister,
      alt: "Pharmaceutical blister packs ready for secondary packaging",
    },
    {
      id: "ind-4",
      number: "04",
      title: "Electronics & Appliances",
      blurb:
        "Heavy-duty board, honeycomb cushioning and die-cut fitments that hold high-value units still through every drop test.",
      imageSrc: IMAGES.phonePack,
      alt: "Electronics presented in recyclable kraft packaging",
    },
    {
      id: "ind-5",
      number: "05",
      title: "Industrial, Automotive & Export",
      blurb:
        "Triple-wall crates, octabins and pallet boxes — lightweight alternatives to timber for heavy-duty packaging.",
      imageSrc: IMAGES.forklift,
      alt: "Palletised export freight being loaded",
    },
  ];

  return (
    <section className={`relative w-full bg-[#1c1817] text-white py-14 sm:py-28 lg:py-36 font-urbanist select-none ${className}`}>
      {/* Background Vertical Static Chevron SVG Arrow Column on Left */}
      <div className="absolute top-0 left-0 w-48 sm:w-64 md:w-80 h-full pointer-events-none z-0 opacity-40 overflow-hidden flex flex-col items-center pt-8">
        {Array.from({ length: 8 }).map((_, i) => (
          <VerticalPatternTile
            key={`v-pattern-${i}`}
            strokeColor="#7c2410"
            strokeWidth={7}
            opacity={0.6}
            tileSize="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72"
          />
        ))}
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-start">
          {/* Left Column: Sticky Title, Subtitle, & CTA Button */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start pt-2 sm:pt-10 pb-4 sm:pb-8 flex flex-col justify-between min-h-0 lg:min-h-[460px]">
            <div>
              <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[3.75rem] font-semibold tracking-tight text-white leading-[1.08]">
                <span className="block">{titleLine1}</span>
                <span className="block">{titleLine2}</span>
              </h2>
              <p className="text-sm sm:text-lg text-slate-300 font-normal mt-3 sm:mt-5 leading-relaxed max-w-md">
                {subtitle}
              </p>
            </div>

            {/* Bottom Left CTA Button */}
            <div className="pt-6 sm:pt-10">
              <CTAButton
                label="Know Our Industries"
                href="/industries"
                variant="outline"
                size="sm"
              />
            </div>
          </div>

          {/* Right Column: Scrollable Industry Cards */}
          <div className="lg:col-span-7 pt-4 lg:pt-[35vh] space-y-8 sm:space-y-20 pb-12 sm:pb-20">
            {industries.map((ind) => (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#341109] border border-[#541e12]/80 rounded-3xl p-5 sm:p-7 md:p-8 shadow-2xl flex flex-col group transition-shadow duration-300 hover:shadow-orange-900/20"
              >
                {/* Number Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3.5 h-3.5 rounded-full border-[2.5px] border-orange-500 flex items-center justify-center shrink-0">
                    <div className="w-1 h-1 rounded-full bg-orange-500" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-300 uppercase">
                    {ind.number}
                  </span>
                </div>

                {/* Industry Card Image */}
                <div className="relative w-full h-[220px] sm:h-[280px] md:h-[340px] rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={`${ind.imageSrc}?auto=format&fit=crop&w=1200&q=72`}
                    alt={ind.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Industry Title */}
                <h3 className="text-2xl sm:text-3xl md:text-[2rem] font-semibold text-white tracking-tight mt-5 sm:mt-6">
                  {ind.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mt-2.5 max-w-xl">
                  {ind.blurb}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
