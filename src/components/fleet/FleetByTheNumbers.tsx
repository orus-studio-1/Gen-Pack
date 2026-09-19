"use client";

import React from "react";
import { motion } from "framer-motion";
import TopPattern from "@/components/landing_page/TopPattern";

export const FleetByTheNumbers: React.FC = () => {
  const stats = [
    {
      number: "30+",
      label: "Delivery vehicles in the fleet.",
    },
    {
      number: "20+",
      label: "Closed-body trucks for flat-packed loads.",
    },
    {
      number: "10+",
      label: "City vans for urgent top-ups.",
    },
    {
      number: "98%",
      label: "Deliveries arriving on the promised day.",
    },
  ];

  return (
    <section className="w-full py-20 md:py-32 bg-white text-[#1c1817] relative overflow-hidden select-none">
      {/* Background Reusable SVG Arrow Pattern from Landing Page */}
      <div className="absolute top-[50%] -translate-y-1/2 inset-x-0 w-full z-0 pointer-events-none opacity-80">
        <TopPattern
          strokeColor="#e5e7eb"
          opacity={0.8}
          strokeWidth={6}
          tileSize="h-28 sm:h-32 md:h-36 lg:h-44 w-28 sm:w-32 md:w-36 lg:w-44"
          animated={false}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Title & Badge (Top Aligned) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 space-y-4 items-start"
          >
            {/* Target Icon + BY THE NUMBERS Badge */}
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-3.5 h-3.5 text-orange-500 shrink-0" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="#f97316" strokeWidth="2.5" />
                <circle cx="8" cy="8" r="2" fill="#f97316" />
              </svg>
              <span className="font-bold text-xs md:text-sm tracking-[0.25em] uppercase text-[#1c1817]">
                BY THE NUMBERS
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-[44px] font-bold font-urbanist text-[#1c1817] tracking-tight leading-[1.12] max-w-[380px]">
              A fleet that exists so your cartons arrive square.
            </h2>
          </motion.div>

          {/* Right Column: 2x2 Stats Grid (Top Aligned) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-14 lg:gap-y-20 items-start pl-0 lg:pl-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-1.5"
              >
                <div className="text-6xl sm:text-7xl lg:text-[76px] font-extrabold font-urbanist text-[#1c1817] tracking-tight leading-none mb-1">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base font-normal font-urbanist text-[#1c1817] leading-snug max-w-[200px]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FleetByTheNumbers;
