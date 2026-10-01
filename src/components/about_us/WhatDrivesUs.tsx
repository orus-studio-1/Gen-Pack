"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence} from "framer-motion";

interface Pillar {
  number: string;
  label: string;
  title: string;
  description: string;
}

const pillars: Pillar[] = [
  {
    number: "01",
    label: "OUR MISSION",
    title: "Protect What Businesses Make.",
    description: "To protect what businesses make and help it move with confidence.",
  },
  {
    number: "02",
    label: "OUR VISION",
    title: "Shape What Comes Next.",
    description: "To shape the future of how industry packs, protects and moves.",
  },
];

interface Value {
  label: string;
  description: string;
}

const values: Value[] = [
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

const SectionBadge: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center gap-2 mb-4">
    <div className="w-3.5 h-3.5 rounded-full border-[2.5px] border-orange-500 flex items-center justify-center shrink-0">
      <div className="w-1 h-1 rounded-full bg-orange-500" />
    </div>
    <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#555555] font-mono">
      {text}
    </span>
  </div>
);


const IntroBlock: React.FC = () => (
  <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 py-20 sm:py-28 lg:py-36">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
      <div className="lg:col-span-7">
        <SectionBadge text="WHAT DRIVES US" />
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold font-urbanist tracking-tight leading-[1.05] text-[#1c1817]">
          Purpose that goes
          <br />
          beyond packaging.
        </h2>
      </div>
      <div className="lg:col-span-5">
        <p className="text-base sm:text-lg text-[#4a4a4a] leading-relaxed max-w-md lg:ml-auto">
          Everything we make begins with a responsibility to the product, the
          businesses behind it and the people who depend on it.
        </p>
      </div>
    </div>
  </div>
);

const MissionVisionScroll: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    {
      number: "01",
      label: "OUR MISSION",
      title: "Protect What Businesses Make.",
      description:
        "To protect what businesses make and help it move with confidence.",
    },
    {
      number: "02",
      label: "OUR VISION",
      title: "Shape What Comes Next.",
      description:
        "To shape the future of how industry packs, protects and moves.",
    },
    {
      number: "03",
      label: "OUR VALUES",
      title: "The principles behind our work.",
      description:
        "The way we work is grounded in precision, accountability, partnership, ingenuity and progress.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="w-full px-6 md:px-16 lg:px-24 pb-24 sm:pb-32 lg:pb-40">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">

          {/* LEFT */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionBadge text="OUR PURPOSE" />

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-urbanist tracking-tight leading-[1.05] text-[#1c1817]">
                What drives
                <br />
                everything we do.
              </h2>

              <p className="mt-6 text-base sm:text-lg text-[#555555] leading-relaxed max-w-sm">
                Our mission, vision and values shape how we design,
                manufacture and support every packaging solution we deliver.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-8 border-t border-black/10">

            {items.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.label}
                  className="border-b border-black/10"
                >
                  {/* HEADER */}
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    className="w-full text-left py-7 sm:py-9 flex items-start justify-between gap-6 group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-5 sm:gap-8">

                      {/* NUMBER */}
                      <span
                        className={`text-sm sm:text-base font-mono font-bold tracking-widest pt-1 transition-colors duration-300 ${
                          isOpen
                            ? "text-orange-500"
                            : "text-[#999999]"
                        }`}
                      >
                        {item.number}
                      </span>

                      {/* TEXT */}
                      <div>
                        <span className="block text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#777777] mb-2">
                          {item.label}
                        </span>

                        <h3
                          className={`font-bold font-urbanist tracking-tight leading-tight transition-all duration-300 ${
                            isOpen
                              ? "text-3xl sm:text-4xl lg:text-5xl text-[#1c1817]"
                              : "text-2xl sm:text-3xl lg:text-4xl text-[#555555] group-hover:text-[#1c1817]"
                          }`}
                        >
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* PLUS / MINUS */}
                    <div
                      className={`shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-orange-500 border-orange-500 text-white"
                          : "border-black/15 text-[#1c1817] group-hover:border-orange-500 group-hover:text-orange-500"
                      }`}
                    >
                      <span className="relative w-4 h-4">

                        {/* Horizontal */}
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-[1.5px] bg-current" />

                        {/* Vertical */}
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

                  {/* CONTENT */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          height: {
                            duration: 0.35,
                            ease: "easeInOut",
                          },
                          opacity: {
                            duration: 0.25,
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pl-[3.25rem] sm:pl-[4.5rem] pr-12 pb-8 sm:pb-10">

                          {/* Description */}
                          <p className="max-w-2xl text-base sm:text-lg text-[#555555] leading-relaxed">
                            {item.description}
                          </p>

                          {/* VALUES */}
                          {index === 2 && (
                            <div className="mt-8 border-t border-black/10">

                              {values.map((value, valueIndex) => (
                                <div
                                  key={value.label}
                                  className="py-5 border-b border-black/10"
                                >
                                  <div className="flex items-start gap-4">

                                    <span className="text-xs font-mono font-bold tracking-widest text-orange-500 pt-1">
                                      {String(valueIndex + 1).padStart(2, "0")}
                                    </span>

                                    <div>
                                      <h4 className="text-xl sm:text-2xl font-bold font-urbanist tracking-tight text-[#1c1817]">
                                        {value.label}
                                      </h4>

                                      <p className="mt-2 text-sm sm:text-base text-[#555555] leading-relaxed max-w-xl">
                                        {value.description}
                                      </p>
                                    </div>

                                  </div>
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

export const WhatDrivesUs: React.FC = () => {
  return (
    <section className="relative w-full bg-[#e6e6e6] text-[#1c1817] font-urbanist select-none overflow-hidden">
      <IntroBlock />
      <MissionVisionScroll />
    </section>
  );
};

export default WhatDrivesUs;