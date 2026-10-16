"use client";

import React from "react";
import { motion } from "framer-motion";

export const FleetTechSafety: React.FC = () => {
  const pillars = [
    {
      title: "Real-Time Telematics & GPS",
      description:
        "Every truck in our fleet is integrated with advanced IoT tracking, reporting real-time locations, ETA predictions, route speeds, and cargo door security status.",
      icon: (
        <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-8-6.8-8-12a8 8 0 1116 0c0 5.2-8 12-8 12z" />
          <circle cx="12" cy="9" r="3" />
        </svg>
      ),
    },
    {
      title: "Euro 6 Low Emissions",
      description:
        "We maintain a clean modern fleet complying with strict Euro 6d environmental standards, continuously reducing carbon footprint across long-haul corridors.",
      icon: (
        <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.05 11a9 9 0 1117.9 0M12 3v9l4 4" />
        </svg>
      ),
    },
    {
      title: "Predictive Maintenance",
      description:
        "Our in-house technicians conduct scheduled diagnostic audits and sensor-driven predictive servicing to achieve zero unexpected breakdown delays.",
      icon: (
        <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      title: "Certified Safety Drivers",
      description:
        "Our professional drivers undergo rigorous ADR hazardous material safety training, eco-driving certification, and continuous defensive driver evaluation.",
      icon: (
        <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full py-20 md:py-32 bg-white text-[#1c1817]">
      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-20"
        >
          <div className="inline-flex items-center justify-center gap-2 mb-1">
            <svg className="w-3.5 h-3.5 text-orange-600 shrink-0" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6" stroke="#ea580c" strokeWidth="2.5" />
              <circle cx="8" cy="8" r="2" fill="#ea580c" />
            </svg>
            <span className="font-bold text-xs md:text-sm tracking-[0.25em] uppercase text-[#1c1817]">
              RELIABILITY & SAFETY
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-urbanist text-[#1c1817] tracking-tight">
            Built on Standards That Excel.
          </h2>

          <p className="text-lg sm:text-xl text-slate-700 font-urbanist leading-relaxed">
            Combining smart fleet telemetry, eco-friendly engines, and rigorous maintenance to guarantee cargo security from origin to destination.
          </p>
        </motion.div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 space-y-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-orange-600/10 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold font-urbanist text-[#1c1817] tracking-tight">
                {item.title}
              </h3>

              <p className="text-slate-600 font-urbanist text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetTechSafety;
