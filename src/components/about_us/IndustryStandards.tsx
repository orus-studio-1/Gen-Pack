"use client";

import React from "react";
import { motion } from "framer-motion";

interface StandardItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const standardsData: StandardItem[] = [
  {
    title: "ISO 9001:2015",
    description:
      "Board grade, GSM, bursting strength and ECT are tested batch by batch, so the carton you approve is the carton you keep receiving.",
    icon: (
      <svg
        width="38"
        height="38"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#a82d49"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z" />
        <path d="M12 6a6 6 0 1 1-6 6 6 6 0 0 1 6-6z" />
        <path d="M12 10a2 2 0 1 0 2 2 2 2 0 0 0-2-2z" />
      </svg>
    ),
  },
  {
    title: "FSC® Certified Fibre",
    description:
      "Virgin kraft comes from certified, responsibly managed forests, and recycled content is traceable back to the mill that supplied it.",
    icon: (
      <svg
        width="38"
        height="38"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2e856e"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" />
      </svg>
    ),
  },
  {
    title: "ISO 14001 & EPR Ready",
    description:
      "Environmental management across the plant, with the documentation your team needs for extended producer responsibility reporting.",
    icon: (
      <svg
        width="38"
        height="38"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2563eb"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
  },
];

export const IndustryStandards: React.FC = () => {
  return (
    <section className="w-full bg-[#e6e6e6] text-[#1c1817] py-24 md:py-36 relative">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">
          
          {/* Left Column: Sticky Title & Description (Stays pinned while scrolling) */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 self-start flex flex-col justify-start">
            <p className="text-xs sm:text-sm font-bold tracking-widest text-[#666666] uppercase mb-4 font-mono">
              INDUSTRY STANDARDS
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-urbanist text-[#1c1817] tracking-tight mb-6 leading-[1.06]">
              Certified. Verified. Compliant.
            </h2>
            <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed max-w-md font-urbanist">
              Carapace runs to ISO 9001 quality management and ISO 14001 environmental management, with FSC-certified fibre and food-grade compliant liners available across the range. Board is tested batch by batch and the documentation ships with the order.
            </p>
          </div>

          {/* Right Column: Scrolling Items (ISO, GDP, Environmental) */}
          <div className="lg:col-span-7 flex flex-col space-y-16 md:space-y-20 py-4">
            {standardsData.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-start"
              >
                {/* Custom SVG Icon */}
                <div className="mb-4">{item.icon}</div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold font-urbanist text-[#1c1817] mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-base sm:text-lg text-[#333333] font-normal leading-relaxed max-w-xl">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndustryStandards;

