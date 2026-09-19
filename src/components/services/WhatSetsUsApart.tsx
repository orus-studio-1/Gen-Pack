"use client";

import React from "react";
import { motion } from "framer-motion";

interface DifferentiatorItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const itemsData: DifferentiatorItem[] = [
  {
    id: "diff-1",
    title: "Certified & Traceable",
    description: "ISO 9001 and ISO 14001 processes, FSC-certified fibre, batch-tested board.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ff5500"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="shrink-0"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: "diff-2",
    title: "Manufacturer, Not a Reseller",
    description: "Corrugating, printing, die-cutting and gluing all happen in our own plant.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ff5500"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="shrink-0"
      >
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    id: "diff-3",
    title: "Two Plants, One Specification",
    description:
      "Bengaluru and Pune units run the same board grades, so supply never depends on one site.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ff5500"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="shrink-0"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    id: "diff-4",
    title: "Plastic-Free by Default",
    description: "Paper cushioning, paper tape and water-based inks come as standard, not as an upsell.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ff5500"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="shrink-0"
      >
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
      </svg>
    ),
  },
  {
    id: "diff-5",
    title: "Scales From 100 to 100,000",
    description: "Short digital runs for launches, full flexo runs when the volume arrives.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ff5500"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="shrink-0"
      >
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
        <rect x="3" y="3" width="18" height="18" rx="4" />
      </svg>
    ),
  },
];

export const WhatSetsUsApart: React.FC = () => {
  return (
    <section className="relative w-full bg-[#e8e8ea] text-[#1c1817] py-24 md:py-36 font-urbanist select-none">
      {/* Background Subtle Freight Truck Watermark */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-5 mix-blend-multiply"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1783700697522-fb6c760dae82?auto=format&fit=crop&q=80&w=1800')",
        }}
      />

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">
          
          {/* Left Column: Sticky Title & Subtitle (Pinned on left while scrolling) */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 self-start flex flex-col justify-start">
            <p className="text-xs sm:text-sm font-bold tracking-widest text-[#666666] uppercase mb-4 font-mono">
              BEHIND EVERY CARTON
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-urbanist text-[#1c1817] tracking-tight leading-[1.06]">
              What Sets Us Apart:
            </h2>
          </div>

          {/* Right Column: Scrollable Items entering smoothly from bottom */}
          <div className="lg:col-span-7 flex flex-col space-y-12 sm:space-y-16 py-4 lg:pt-8">
            {itemsData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-center border-b border-black/10 pb-8 sm:pb-10 last:border-b-0"
              >
                {/* Icon + Title */}
                <div className="sm:col-span-6 flex items-center gap-4">
                  {item.icon}
                  <span className="text-xl sm:text-2xl font-bold font-urbanist text-[#1c1817] leading-snug">
                    {item.title}
                  </span>
                </div>

                {/* Description */}
                <div className="sm:col-span-6">
                  <p className="text-base sm:text-lg text-[#333333] font-normal leading-relaxed font-urbanist">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;


