"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Item {
  label: string;
  description: string;
}

const itemsData: Item[] = [
  {
    label: "Mission",
    description:
      "To make protective packaging that is fully recyclable by default — never as a paid upgrade.",
  },
  {
    label: "Vision",
    description:
      "A supply chain where every pack that leaves a plant can go back into one, with nothing left over.",
  },
  {
    label: "Values",
    description: "Engineered protection. Honest specifications. Zero plastic by default. Fibre we can trace.",
  },
];

export const WhatDrivesUs: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll driven animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Right content block moves up smoothly from the bottom (260px -> 0px) as we scroll down
  const rightY = useTransform(scrollYProgress, [0, 0.85], [260, 0]);

  return (
    <div ref={containerRef} className="relative w-full bg-[#e6e6e6] text-[#1c1817] min-h-[250vh]">
      {/* Sticky Fullscreen Container */}
      <section className="sticky top-0 w-full h-screen flex flex-col justify-center overflow-hidden px-6 md:px-16 lg:px-24">
        <div className="w-full max-w-[1400px] mx-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left Column: Stable Pinned Title */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <p className="text-xs sm:text-sm font-bold tracking-widest text-[#555555] uppercase mb-4 font-mono">
                OUR MISSION, VISION & VALUES
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-urbanist text-[#1c1817] tracking-tight">
                What Drives Us.
              </h2>
            </div>

            {/* Right Column: Moves UP from bottom as user scrolls (Solid opacity, no fade) */}
            <motion.div
              style={{ y: rightY }}
              className="lg:col-span-7 flex flex-col space-y-8 md:space-y-12"
            >
              {itemsData.map((item) => (
                <div
                  key={item.label}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-center"
                >
                  {/* Icon + Label */}
                  <div className="sm:col-span-4 flex items-center gap-3 sm:gap-4">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ff5500"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="flex-shrink-0"
                    >
                      <path d="M5 4v16" />
                      <path d="M5 12h14" />
                      <path d="M13 6l6 6-6 6" />
                    </svg>
                    <span className="text-xl sm:text-2xl font-bold font-urbanist text-[#1c1817]">
                      {item.label}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="sm:col-span-8">
                    <p className="text-base sm:text-lg text-[#333333] font-normal leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatDrivesUs;


