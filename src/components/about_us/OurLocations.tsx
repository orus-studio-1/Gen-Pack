"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// International export destination nodes radiating from Kolkata, India
const destinationPoints = [
  { label: "Middle East / UAE", top: "40.0%", left: "62.0%", svgX: 620, svgY: 200 },
  { label: "Saudi Arabia", top: "43.0%", left: "57.5%", svgX: 575, svgY: 215 },
  { label: "Europe", top: "26.0%", left: "52.0%", svgX: 520, svgY: 130 },
  { label: "Africa", top: "60.0%", left: "56.0%", svgX: 560, svgY: 300 },
  { label: "North America", top: "32.0%", left: "23.0%", svgX: 230, svgY: 160 },
  { label: "Asia-Pacific", top: "56.0%", left: "78.0%", svgX: 780, svgY: 280 },
];

// Kolkata, West Bengal origin coordinates on the 1000x500 map canvas
const kolkataOrigin = {
  svgX: 715,
  svgY: 242,
  top: "48.4%",
  left: "71.5%",
};

// 3 Key Global Statistics matching reference layout
const globalStats = [
  {
    value: "15+",
    label: "Countries Served",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a15 15 0 0 0 0 18" />
        <path d="M3 12h18" />
      </svg>
    ),
  },
  {
    value: "250+",
    label: "Global Customers",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 12v10" />
      </svg>
    ),
  },
  {
    value: "1,000+",
    label: "Successful Shipments",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 17h20l-2 4H4l-2-4z" />
        <path d="M5 17V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v9" />
        <path d="M9 6V3h6v3" />
        <path d="M9 11h6" />
      </svg>
    ),
  },
];

// Key Export Markets list with custom minimalist architectural landmark icons
const keyMarkets = [
  {
    name: "UAE",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20" />
        <path d="M10 22V6l2-4 2 4v16" />
        <path d="M7 22v-9l3-2" />
        <path d="M17 22v-9l-3-2" />
        <path d="M4 22h16" />
      </svg>
    ),
  },
  {
    name: "Saudi Arabia",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 22l3-18h4l3 18" />
        <path d="M10 4c0 3 4 3 4 0" />
        <path d="M12 4v4" />
        <path d="M4 22h16" />
      </svg>
    ),
  },
  {
    name: "Oman",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 22V8l3-3v17" />
        <path d="M8 9h8" />
        <path d="M16 22V5l3 3v14" />
        <path d="M10 22v-5a2 2 0 0 1 4 0v5" />
        <path d="M3 22h18" />
      </svg>
    ),
  },
  {
    name: "Qatar",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 22c2-6 1-12-1-18h10c-2 6-1 12 1 18" />
        <path d="M9 10l6 4" />
        <path d="M15 10l-6 4" />
        <path d="M5 22h14" />
      </svg>
    ),
  },
  {
    name: "Kuwait",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 22V3" />
        <circle cx="9" cy="10" r="3" />
        <circle cx="9" cy="16" r="2" />
        <path d="M16 22v-11" />
        <circle cx="16" cy="14" r="2" />
        <path d="M5 22h14" />
      </svg>
    ),
  },
  {
    name: "Bahrain",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 22l3-18c1 6 1 12 0 18" />
        <path d="M18 22l-3-18c-1 6-1 12 0 18" />
        <path d="M9 10h6" />
        <path d="M9 15h6" />
        <path d="M4 22h16" />
      </svg>
    ),
  },
  {
    name: "& Many More",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M3.6 9h16.8" />
        <path d="M3.6 15h16.8" />
        <path d="M11.5 3a17 17 0 0 0 0 18" />
        <path d="M12.5 3a17 17 0 0 1 0 18" />
      </svg>
    ),
  },
];

// Global Standards certifications data
const globalCertifications = [
  {
    title: "ISO",
    subtitle: "9001:2015",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "FSC",
    subtitle: "Certified",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 7 10h3l-4 7h5v4h2v-4h5l-4-7h3z" />
      </svg>
    ),
  },
  {
    title: "RECYCLABLE",
    subtitle: "Packaging",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
        <path d="M11 19h8.2a1.8 1.8 0 0 0 1.56-2.66l-3.92-6.84" />
        <path d="M16 5h-4.8a1.8 1.8 0 0 0-1.56.9l-3.9 6.8" />
        <path d="m14 16 3 3 3-3" />
        <path d="m9 8 3-3-3-3" />
        <path d="m3 14 1 3-3 1" />
      </svg>
    ),
  },
  {
    title: "GLOBAL QUALITY",
    subtitle: "Standards",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
];

// Sustainable Packaging Commitment Pillars
const sustainabilityPillars = [
  {
    title: "Sustainable Materials",
    description: "Responsibly sourced raw materials",
    icon: (
      <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-8 4.5v9L12 21l8-4.5v-9L12 3z" />
        <path d="M12 12v9" />
        <path d="M12 12 4 7.5" />
        <path d="M12 12l8-4.5" />
        <circle cx="12" cy="7.5" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Eco-Friendly Production",
    description: "Energy-efficient manufacturing",
    icon: (
      <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
  {
    title: "Recyclable Solutions",
    description: "100% recyclable and reusable",
    icon: (
      <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
        <path d="M11 19h8.2a1.8 1.8 0 0 0 1.56-2.66l-3.92-6.84" />
        <path d="M16 5h-4.8a1.8 1.8 0 0 0-1.56.9l-3.9 6.8" />
        <path d="m14 16 3 3 3-3" />
        <path d="m9 8 3-3-3-3" />
        <path d="m3 14 1 3-3 1" />
      </svg>
    ),
  },
  {
    title: "Reducing Impact",
    description: "Committed to a greener tomorrow",
    icon: (
      <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
    ),
  },
];

export const OurLocations: React.FC = () => {
  const [activeUnit, setActiveUnit] = React.useState<"unit-1" | "unit-2">("unit-1");

  const manufacturingUnits = [
    {
      id: "unit-1" as const,
      buttonLabel: "Unit 1",
      tag: "HEADQUARTERS & MANUFACTURING UNIT I",
      title: "Manufacturing Unit I",
      location: "Kolkata, West Bengal",
      address: "76/H/1 & 2, Dr. S. C. Banerjee Road, Kolkata – 700010, West Bengal",
      subtitle: "Head Office & Corrugation Plant",
      image: "/carapace-facility.jpg",
      description:
        "Our main plant houses the corrugator, flexo and offset presses, die-cutting and the structural design studio — where every CAD sample and first article is produced.",
    },
    {
      id: "unit-2" as const,
      buttonLabel: "Unit 2",
      tag: "MANUFACTURING UNIT II & LOGISTICS HUB",
      title: "Manufacturing Unit II",
      location: "Howrah, West Bengal",
      address: "6 & 7 P.T.R Siding Shalimar, Howrah – 711102, West Bengal",
      subtitle: "Converting & Logistics Facility",
      image: "https://images.unsplash.com/photo-1709804945989-c8be542e04db?auto=format&fit=crop&w=600&q=75",
      description:
        "Our Shalimar converting and warehouse facility specializes in heavy-duty corrugated cartons, bulk pallet boxes, rapid automated stitching, and just-in-time dispatch for regional and export cargo.",
    },
  ];

  const currentUnit = manufacturingUnits.find((u) => u.id === activeUnit) ?? manufacturingUnits[0];
  return (
    <section className="relative w-full bg-[#f8f8fa] text-[#1c1817] py-20 sm:py-28 md:py-36 overflow-hidden font-urbanist select-none">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-14 lg:px-20">
        
        {/* TOP SECTION: Grid of Content & World Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Subtitle & 3 Global Metrics */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Eyebrow Badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3.5 h-3.5 rounded-full border-[2.5px] border-orange-600 flex items-center justify-center shrink-0">
                  <span className="w-1 h-1 rounded-full bg-orange-600" />
                </span>
                <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-slate-500 font-mono">
                  GLOBAL REACH
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-urbanist tracking-tight leading-[1.04] text-[#1c1817]">
                Expanding
                <br />
                <span className="text-orange-600">Globally.</span>
              </h2>

              {/* Subtitle / Description */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-normal mt-4 sm:mt-5 leading-relaxed max-w-lg">
                We are proud to extend our presence beyond India, serving customers in
                the GCC and other key international markets with reliable packaging
                solutions and world-class service.
              </p>
            </div>

            {/* 3 Global Statistics Counters */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-8 pt-8 border-t border-slate-200/90">
              {globalStats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-orange-600/10 text-orange-600 flex items-center justify-center mb-2.5 shadow-2xs">
                    {stat.icon}
                  </div>
                  <span className="text-2xl sm:text-3xl font-extrabold font-urbanist text-[#1c1817] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[11px] sm:text-xs font-medium text-slate-500 mt-0.5 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: World Map + Floating Kolkata Card */}
          <div className="lg:col-span-7 relative flex flex-col items-center">
            
            {/* World Map Box */}
            <div className="relative w-full aspect-[2/1] min-h-[320px] sm:min-h-[420px] rounded-3xl overflow-hidden bg-white/70 border border-slate-200/80 p-2 sm:p-4 shadow-sm">
              
              {/* Dotted World Map Graphic */}
              <Image
                src="/world_map.svg"
                alt="Global Reach Map"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 850px"
                className="object-fill opacity-[0.38] pointer-events-none select-none"
              />

              {/* Animated Flight / Shipping Routes Radiating from Kolkata */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                viewBox="0 0 1000 500"
                preserveAspectRatio="none"
              >
                {/* 1. Kolkata -> Middle East / UAE */}
                <motion.path
                  d={`M ${kolkataOrigin.svgX} ${kolkataOrigin.svgY} C 670 200, 640 190, ${destinationPoints[0].svgX} ${destinationPoints[0].svgY}`}
                  fill="none"
                  stroke="#ea580c"
                  strokeWidth="1.8"
                  strokeDasharray="5 9"
                  opacity="0.6"
                  animate={{ strokeDashoffset: [0, -28] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
                />

                {/* 2. Kolkata -> Saudi Arabia */}
                <motion.path
                  d={`M ${kolkataOrigin.svgX} ${kolkataOrigin.svgY} C 650 210, 610 205, ${destinationPoints[1].svgX} ${destinationPoints[1].svgY}`}
                  fill="none"
                  stroke="#ea580c"
                  strokeWidth="1.8"
                  strokeDasharray="5 9"
                  opacity="0.55"
                  animate={{ strokeDashoffset: [0, -28] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                />

                {/* 3. Kolkata -> Europe */}
                <motion.path
                  d={`M ${kolkataOrigin.svgX} ${kolkataOrigin.svgY} C 630 160, 560 120, ${destinationPoints[2].svgX} ${destinationPoints[2].svgY}`}
                  fill="none"
                  stroke="#ea580c"
                  strokeWidth="1.8"
                  strokeDasharray="5 9"
                  opacity="0.5"
                  animate={{ strokeDashoffset: [0, -28] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
                />

                {/* 4. Kolkata -> Africa */}
                <motion.path
                  d={`M ${kolkataOrigin.svgX} ${kolkataOrigin.svgY} C 650 270, 590 310, ${destinationPoints[3].svgX} ${destinationPoints[3].svgY}`}
                  fill="none"
                  stroke="#ea580c"
                  strokeWidth="1.8"
                  strokeDasharray="5 9"
                  opacity="0.45"
                  animate={{ strokeDashoffset: [0, -28] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
                />

                {/* 5. Kolkata -> North America */}
                <motion.path
                  d={`M ${kolkataOrigin.svgX} ${kolkataOrigin.svgY} C 500 130, 340 120, ${destinationPoints[4].svgX} ${destinationPoints[4].svgY}`}
                  fill="none"
                  stroke="#ea580c"
                  strokeWidth="1.5"
                  strokeDasharray="5 10"
                  opacity="0.4"
                  animate={{ strokeDashoffset: [0, -30] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
                />

                {/* 6. Kolkata -> Asia-Pacific */}
                <motion.path
                  d={`M ${kolkataOrigin.svgX} ${kolkataOrigin.svgY} C 740 265, 765 275, ${destinationPoints[5].svgX} ${destinationPoints[5].svgY}`}
                  fill="none"
                  stroke="#ea580c"
                  strokeWidth="1.8"
                  strokeDasharray="5 9"
                  opacity="0.55"
                  animate={{ strokeDashoffset: [0, -28] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
                />
              </svg>

              {/* Destination Landing Node Dots */}
              {destinationPoints.map((point, index) => (
                <motion.span
                  key={point.label}
                  style={{ top: point.top, left: point.left }}
                  animate={{
                    scale: [1, 1.35, 1],
                    opacity: [0.5, 0.9, 0.5],
                  }}
                  transition={{
                    duration: 2.2 + index * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute z-20 w-2.5 h-2.5 rounded-full bg-orange-600 shadow-sm ring-2 ring-orange-500/30 -translate-x-1/2 -translate-y-1/2"
                />
              ))}

              {/* Kolkata, India Origin Hub Beacon */}
              <div
                className="absolute z-30 -translate-x-1/2 -translate-y-1/2 cursor-default pointer-events-none"
                style={{ top: kolkataOrigin.top, left: kolkataOrigin.left }}
              >
                {/* Radar Waves Ping */}
                <motion.span
                  className="absolute -inset-3.5 rounded-full border-2 border-orange-600/70"
                  animate={{ scale: [0.9, 2.1], opacity: [0.85, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
                />
                <motion.span
                  className="absolute -inset-2 rounded-full border border-orange-600/50"
                  animate={{ scale: [0.9, 1.6], opacity: [0.7, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
                />
                {/* Primary Hub Center Pin */}
                <span className="relative flex items-center justify-center w-5 h-5 rounded-full bg-orange-600 border-[2.5px] border-white shadow-[0_2px_12px_rgba(234,88,12,0.5)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                </span>
              </div>
            </div>

            {/* Unit Selector Toggle Pills (Unit 1 & Unit 2) + Interactive Location Card */}
            <div className="w-full max-w-[500px] mt-5 lg:-mt-24 lg:self-start lg:ml-6 z-30 flex flex-col items-center sm:items-start">
              {/* Toggle Buttons Pill */}
              <div className="inline-flex items-center p-1 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-200/90 mb-3.5 self-center">
                {manufacturingUnits.map((unit) => {
                  const isActive = activeUnit === unit.id;
                  return (
                    <button
                      key={unit.id}
                      type="button"
                      onClick={() => setActiveUnit(unit.id)}
                      className={`relative px-6 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "bg-[#1c1817] text-white shadow-sm"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {unit.buttonLabel}
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Location Card */}
              <motion.div
                key={currentUnit.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-[0_16px_45px_rgba(0,0,0,0.08)] border border-slate-200/90"
              >
                {/* Header Row: Thumbnail + Title & Subtitle */}
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="relative w-22 sm:w-26 h-20 sm:h-22 rounded-xl sm:rounded-2xl overflow-hidden shrink-0 bg-slate-100 border border-slate-200/60 shadow-inner">
                    <Image
                      src={currentUnit.image}
                      alt={currentUnit.title}
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col justify-center min-w-0">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-orange-600 shrink-0" />
                      <span className="text-[9px] font-mono font-bold tracking-[0.16em] uppercase text-orange-600 truncate">
                        {currentUnit.tag}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-urbanist text-[#1c1817] tracking-tight leading-tight">
                      {currentUnit.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                      {currentUnit.subtitle}
                    </p>
                  </div>
                </div>

                {/* Address Row */}
                <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <svg
                    className="w-4 h-4 text-orange-600 shrink-0 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="font-semibold text-slate-800 leading-snug">
                    {currentUnit.address}
                  </span>
                </div>

                {/* Description Body */}
                <p className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {currentUnit.description}
                </p>
              </motion.div>
            </div>

          </div>
        </div>

        {/* BOTTOM SECTION: "OUR KEY MARKETS" Strip with Minimalist Landmark Icons (Image 1 Reference) */}
        <div className="mt-16 sm:mt-20 pt-10 sm:pt-12 border-t border-slate-200/90">
          
          {/* Eyebrow Label */}
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-2xs text-[10px] sm:text-xs font-bold font-mono tracking-[0.2em] uppercase text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-600" />
              OUR KEY MARKETS
            </span>
          </div>

          {/* 7 Countries Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
            {keyMarkets.map((market, idx) => (
              <motion.div
                key={market.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-orange-600/40 transition-all duration-300 text-center group cursor-default"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-slate-600 group-hover:text-orange-600 transition-colors mb-2.5">
                  {market.icon}
                </div>
                <span className="text-xs sm:text-sm font-bold font-urbanist text-[#1c1817] tracking-tight group-hover:text-orange-600 transition-colors">
                  {market.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 1. GLOBAL STANDARDS SECTION: Charcoal (#1c1817) Card + Facility Exterior Image */}
        <div className="mt-14 sm:mt-20 rounded-3xl overflow-hidden border border-white/10 shadow-xl bg-[#1c1817] grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Eyebrow, Heading, Copy & 4 Certification Badges */}
          <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-between text-white">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-3.5">
                <span className="w-2 h-2 rounded-full bg-orange-600" />
                <span className="text-[10px] sm:text-xs font-bold font-mono tracking-[0.2em] uppercase text-orange-500">
                  BUILT TO MEET
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-bold font-urbanist tracking-tight text-white leading-[1.08] mb-4">
                Global Standards.
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed font-normal max-w-lg mb-8">
                Our advanced manufacturing, stringent quality control and sustainable
                practices ensure that every product we deliver meets international
                standards and exceeds expectations.
              </p>
            </div>

            {/* 4 Certification Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-white/10">
              {globalCertifications.map((cert) => (
                <div key={cert.title} className="flex flex-col">
                  <div className="text-orange-500 mb-2">
                    {cert.icon}
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold font-mono tracking-wider text-white uppercase leading-tight">
                    {cert.title}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium mt-0.5 leading-tight">
                    {cert.subtitle}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: High-Res Genpack Manufacturing & Distribution Facility Photo */}
          <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[400px] lg:min-h-[480px] bg-slate-900">
            <Image
              src="/carapace-facility.jpg"
              alt="Genpack Modern Manufacturing and Corrugation Facility"
              fill
              sizes="(max-width: 1024px) 100vw, 850px"
              className="object-cover"
            />
          </div>
        </div>

        {/* 2. SUSTAINABLE PACKAGING SECTION: White Container with 4 Pillar Columns */}
        <div className="mt-8 rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 lg:p-12 xl:p-14 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-orange-600" />
              <span className="text-[10px] sm:text-xs font-bold font-mono tracking-[0.2em] uppercase text-slate-500">
                OUR COMMITMENT
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-bold font-urbanist tracking-tight text-[#1c1817] leading-[1.08] mb-4">
              Sustainable Packaging.
              <br />
              <span className="text-orange-600">Better Future.</span>
            </h3>

            <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal max-w-md">
              We believe in creating packaging that not only protects your products
              but also protects our planet. Sustainability is at the core of everything
              we do.
            </p>
          </div>

          {/* Right Column: 4 Sustainability Pillars with Clean Dividers */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 sm:divide-x sm:divide-slate-200/70">
            {sustainabilityPillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className={`flex flex-col items-start ${idx > 0 ? "sm:pl-4 lg:pl-6" : ""}`}
              >
                <div className="text-orange-600 mb-3">
                  {pillar.icon}
                </div>
                <h4 className="text-sm sm:text-base font-bold font-urbanist text-[#1c1817] tracking-tight leading-tight mb-1">
                  {pillar.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 font-normal leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. PARTNER WITH US ACROSS BORDERS BANNER */}
        <div className="mt-8 rounded-3xl bg-[#1c1817] text-white p-7 sm:p-9 lg:p-12 shadow-xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute -top-12 -right-12 w-80 h-80 bg-orange-600/10 blur-[90px] rounded-full pointer-events-none" />

          {/* Heading */}
          <div className="text-center md:text-left shrink-0 relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold font-urbanist tracking-tight text-white leading-tight">
              Let&apos;s Grow Together
              <br />
              <span className="text-orange-500">Across Borders.</span>
            </h3>
          </div>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm lg:text-base text-slate-300 font-normal text-center md:text-left max-w-lg leading-relaxed relative z-10">
            Partner with Genpack for reliable packaging solutions and long-term global
            partnerships.
          </p>

          {/* Partner With Us Button */}
          <div className="shrink-0 relative z-10">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold font-urbanist tracking-wide transition-all duration-300 group shadow-md shadow-orange-600/20 text-sm"
            >
              <span>PARTNER WITH US</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurLocations;