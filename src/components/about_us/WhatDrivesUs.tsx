"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PillarItem {
  number: string;
  label: string;
  title: string;
  description: string;
}

interface ValueItem {
  label: string;
  description: string;
}

const values: ValueItem[] = [
  {
    label: "Precision",
    description: "We get the details right, because consistency begins long before production does.",
  },
  {
    label: "Accountability",
    description: "We take ownership of what we make, the commitments we give and the outcomes that follow.",
  },
  {
    label: "Partnership",
    description: "We build lasting relationships by understanding the businesses behind the products we pack.",
  },
  {
    label: "Ingenuity",
    description: "We question the obvious answer and look for better ways to solve practical problems.",
  },
  {
    label: "Progress",
    description: "We continuously strengthen our knowledge, processes and capabilities to stay ready for what industry demands next.",
  },
];

const accordionItems: PillarItem[] = [
  {
    number: "01",
    label: "OUR MISSION",
    title: "Protect What Businesses Make.",
    description:
      "To protect what businesses make and help it move with confidence across complex global supply chains.",
  },
  {
    number: "02",
    label: "OUR VISION",
    title: "Shape What Comes Next.",
    description:
      "To shape the future of how industry packs, protects and moves with zero-plastic, circular corrugated solutions.",
  },
  {
    number: "03",
    label: "OUR VALUES",
    title: "The principles behind our work.",
    description:
      "The way we work is grounded in precision, accountability, partnership, ingenuity and continual industrial progress.",
  },
];

const SectionBadge: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center gap-2 mb-4">
    <div className="w-3.5 h-3.5 rounded-full border-[2.5px] border-orange-600 flex items-center justify-center shrink-0">
      <div className="w-1 h-1 rounded-full bg-orange-600" />
    </div>
    <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#666666] font-mono">
      {text}
    </span>
  </div>
);

export const WhatDrivesUs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="relative w-full bg-[#ebecee] text-[#1c1817] font-urbanist select-none py-20 sm:py-28 lg:py-36 overflow-hidden">
      {/* Unified container ensures pixel-perfect left alignment across both blocks */}
      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24">
        
        {/* ========================================================
            PART 1: INTRO MANIFESTO BLOCK
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          {/* Left: Heading */}
          <div className="lg:col-span-7">
            <SectionBadge text="WHAT DRIVES US" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold font-urbanist tracking-tight leading-[1.05] text-[#1c1817]">
              Purpose that goes
              <br />
              beyond packaging.
            </h2>
          </div>

          {/* Right: Editorial Quote / Lead text (Prominent, High-impact) */}
          <div className="lg:col-span-5 flex flex-col justify-end">
            <div className="border-l-2 border-orange-600 pl-6 sm:pl-8 py-1 lg:ml-auto max-w-xl">
              <p className="text-xl sm:text-2xl lg:text-[1.65rem] font-medium text-[#1c1817] leading-relaxed tracking-tight">
                Everything we make begins with a responsibility to the product, the
                businesses behind it and the people who depend on it.
              </p>
            </div>
          </div>
        </div>

        {/* Elegant Divider between Intro and Accordion Pillars */}
        <div className="w-full h-px bg-black/10 my-16 sm:my-20 lg:my-24" />

        {/* ========================================================
            PART 2: OUR PURPOSE & INTERACTIVE PILLARS ACCORDION
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Title, Description & Pillar Selector */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-36 space-y-6">
              <SectionBadge text="OUR PURPOSE" />

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-urbanist tracking-tight leading-[1.08] text-[#1c1817]">
                What drives
                <br />
                everything we do.
              </h3>

              <p className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-md">
                Our mission, vision and values shape how we design,
                manufacture and support every packaging solution we deliver.
              </p>

              {/* Pillar Quick Select Indicators */}
              <div className="pt-2 flex flex-col gap-2 max-w-sm">
                {accordionItems.map((item, index) => {
                  const isActive = openIndex === index;
                  return (
                    <button
                      key={item.number}
                      type="button"
                      onClick={() => toggleItem(index)}
                      className={`group flex items-center justify-between px-4 py-3 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "bg-white border-orange-600/40 shadow-xs"
                          : "border-black/8 hover:border-black/20 bg-white/40 hover:bg-white/70"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-xs font-mono font-bold transition-colors ${
                            isActive
                              ? "text-orange-600"
                              : "text-[#888888] group-hover:text-[#1c1817]"
                          }`}
                        >
                          {item.number}
                        </span>
                        <span
                          className={`text-xs font-bold uppercase tracking-wider font-urbanist transition-colors ${
                            isActive
                              ? "text-[#1c1817]"
                              : "text-[#666666] group-hover:text-[#1c1817]"
                          }`}
                        >
                          {item.label}
                        </span>
                      </div>
                      <span
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-orange-600 scale-100"
                            : "bg-black/15 group-hover:bg-black/30 scale-75"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div className="lg:col-span-7 divide-y divide-black/15 border-y border-black/15">
            {accordionItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.label}
                  className={`transition-colors duration-300 ${
                    isOpen ? "bg-white/60" : "hover:bg-white/30"
                  }`}
                >
                  {/* Accordion Row Header */}
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    className="w-full text-left py-7 sm:py-8 px-5 sm:px-8 flex items-start justify-between gap-6 group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-4 sm:gap-6">
                      {/* Number Badge */}
                      <span
                        className={`text-xs sm:text-sm font-mono font-bold tracking-widest px-2.5 py-1 rounded-md transition-colors duration-300 shrink-0 ${
                          isOpen
                            ? "bg-orange-600 text-white"
                            : "bg-black/5 text-[#777777] group-hover:bg-black/10 group-hover:text-[#1c1817]"
                        }`}
                      >
                        {item.number}
                      </span>

                      {/* Header Titles */}
                      <div>
                        <span className="block text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#777777] mb-2 font-mono">
                          {item.label}
                        </span>

                        <h4
                          className={`font-bold font-urbanist tracking-tight leading-tight transition-colors duration-300 ${
                            isOpen
                              ? "text-2xl sm:text-3xl lg:text-4xl text-[#1c1817]"
                              : "text-xl sm:text-2xl lg:text-3xl text-[#555555] group-hover:text-[#1c1817]"
                          }`}
                        >
                          {item.title}
                        </h4>
                      </div>
                    </div>

                    {/* Plus / Minus Circular Toggle Button */}
                    <div
                      className={`shrink-0 w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-orange-600 border-orange-600 text-white shadow-md shadow-orange-600/25"
                          : "border-black/20 text-[#1c1817] bg-white/60 group-hover:border-orange-600 group-hover:text-orange-600 group-hover:bg-white"
                      }`}
                    >
                      <span className="relative w-4 h-4">
                        {/* Horizontal Line */}
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-[1.5px] bg-current" />

                        {/* Vertical Line (rotates and fades out when open) */}
                        <motion.span
                          animate={{
                            rotate: isOpen ? 90 : 0,
                            opacity: isOpen ? 0 : 1,
                          }}
                          transition={{
                            duration: 0.25,
                            ease: "easeInOut",
                          }}
                          className="absolute left-1/2 top-0 -translate-x-1/2 w-[1.5px] h-4 bg-current"
                        />
                      </span>
                    </div>
                  </button>

                  {/* Accordion Body Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.35, ease: "easeInOut" },
                          opacity: { duration: 0.25 },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pl-5 sm:pl-8 pr-5 sm:pr-8 pb-8 sm:pb-10">
                          {/* Main Description */}
                          <p className="max-w-2xl text-base sm:text-lg text-[#4a4a4a] leading-relaxed">
                            {item.description}
                          </p>

                          {/* 01 OUR MISSION: Supporting Capabilities */}
                          {index === 0 && (
                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                              {[
                                {
                                  title: "Zero Damage",
                                  desc: "Engineered cushioning for high-value & heavy industrial freight.",
                                },
                                {
                                  title: "Precision Testing",
                                  desc: "Rigorous burst, compression and ECT certified quality checks.",
                                },
                                {
                                  title: "Enterprise Scale",
                                  desc: "Over 50 million boxes annually with dependable on-time delivery.",
                                },
                              ].map((pillar) => (
                                <div
                                  key={pillar.title}
                                  className="p-4 rounded-xl bg-white/80 border border-black/8 shadow-2xs"
                                >
                                  <div className="flex items-center gap-2 mb-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-600 shrink-0" />
                                    <span className="text-xs font-bold uppercase tracking-wider text-[#1c1817] font-urbanist">
                                      {pillar.title}
                                    </span>
                                  </div>
                                  <p className="text-xs text-[#666666] leading-relaxed">
                                    {pillar.desc}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* 02 OUR VISION: Future Direction */}
                          {index === 1 && (
                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                              {[
                                {
                                  title: "Plastic-Free Default",
                                  desc: "100% recyclable, biodegradable corrugated structures.",
                                },
                                {
                                  title: "Circular Economy",
                                  desc: "Closed-loop supply designs that minimize raw fiber waste.",
                                },
                                {
                                  title: "Smart Automation",
                                  desc: "Next-gen converting lines with digital structural precision.",
                                },
                              ].map((pillar) => (
                                <div
                                  key={pillar.title}
                                  className="p-4 rounded-xl bg-white/80 border border-black/8 shadow-2xs"
                                >
                                  <div className="flex items-center gap-2 mb-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-600 shrink-0" />
                                    <span className="text-xs font-bold uppercase tracking-wider text-[#1c1817] font-urbanist">
                                      {pillar.title}
                                    </span>
                                  </div>
                                  <p className="text-xs text-[#666666] leading-relaxed">
                                    {pillar.desc}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* 03 OUR VALUES: 5 Principles Grid */}
                          {index === 2 && (
                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                              {values.map((value, valueIndex) => (
                                <div
                                  key={value.label}
                                  className="p-4 sm:p-5 rounded-xl bg-white/80 border border-black/8 hover:border-orange-600/30 transition-all duration-300 shadow-2xs"
                                >
                                  <div className="flex items-center gap-2.5 mb-2">
                                    <span className="text-xs font-mono font-bold tracking-widest text-orange-600 bg-orange-600/10 px-2 py-0.5 rounded">
                                      {String(valueIndex + 1).padStart(2, "0")}
                                    </span>
                                    <h5 className="text-base sm:text-lg font-bold font-urbanist tracking-tight text-[#1c1817]">
                                      {value.label}
                                    </h5>
                                  </div>
                                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                                    {value.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhatDrivesUs;