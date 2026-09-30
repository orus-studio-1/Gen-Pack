"use client";

import React from "react";
import { motion } from "framer-motion";
import CTAButton from "./CTAButton";

interface WhyChooseUsProps {
  badgeText?: string;
  titleLine1?: string;
  titleLine2?: string;
  subtitle?: string;
  className?: string;
}

// Card 1 Illustration: Multilingual Support Headset & Orbiting Flags (Continuous Rotation)
const MultilingualIllustration: React.FC = () => (
  <div className="relative w-40 h-40 flex items-center justify-center">
    {/* Center Orange Headset Icon */}
    <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center z-10 shadow-sm">
      <svg
        className="w-6 h-6 text-orange-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 14v-3a9 9 0 0 1 18 0v3" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
        <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        <path d="M18 11a6 6 0 0 0-6-6" />
      </svg>
    </div>

    {/* Orbit Ring Container Revolving 360 Degrees */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      className="absolute inset-0 w-full h-full"
    >
      {/* Germany (Top) */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute top-1 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full overflow-hidden border-2 border-white shadow-md"
      >
        <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
          <rect width="640" height="160" fill="#000" />
          <rect y="160" width="640" height="160" fill="#DD0000" />
          <rect y="320" width="640" height="160" fill="#FFCE00" />
        </svg>
      </motion.div>

      {/* Spain (Top-Right) */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute top-5 right-2 w-7 h-7 rounded-full overflow-hidden border-2 border-white shadow-md"
      >
        <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
          <rect width="640" height="120" fill="#AA151B" />
          <rect y="120" width="640" height="240" fill="#F1BF00" />
          <rect y="360" width="640" height="120" fill="#AA151B" />
        </svg>
      </motion.div>

      {/* France (Right/Bottom-Right) */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute bottom-6 right-1 w-7 h-7 rounded-full overflow-hidden border-2 border-white shadow-md"
      >
        <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
          <rect width="213.3" height="480" fill="#002395" />
          <rect x="213.3" width="213.3" height="480" fill="#FFFFFF" />
          <rect x="426.6" width="213.3" height="480" fill="#ED2939" />
        </svg>
      </motion.div>

      {/* UK (Bottom) */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full overflow-hidden border-2 border-white shadow-md"
      >
        <svg viewBox="0 0 600 400" className="w-full h-full object-cover">
          <rect width="600" height="400" fill="#00247D" />
          <path d="M0,0 L600,400 M600,0 L0,400" stroke="#FFF" strokeWidth="60" />
          <path d="M0,0 L600,400 M600,0 L0,400" stroke="#CF142B" strokeWidth="40" />
          <path d="M300,0 V400 M0,200 H600" stroke="#FFF" strokeWidth="100" />
          <path d="M300,0 V400 M0,200 H600" stroke="#CF142B" strokeWidth="60" />
        </svg>
      </motion.div>

      {/* Italy (Bottom-Left) */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute bottom-6 left-1 w-7 h-7 rounded-full overflow-hidden border-2 border-white shadow-md"
      >
        <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
          <rect width="213.3" height="480" fill="#009246" />
          <rect x="213.3" width="213.3" height="480" fill="#FFFFFF" />
          <rect x="426.6" width="213.3" height="480" fill="#CE2B37" />
        </svg>
      </motion.div>

      {/* Netherlands (Top-Left) */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute top-5 left-2 w-7 h-7 rounded-full overflow-hidden border-2 border-white shadow-md"
      >
        <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
          <rect width="640" height="160" fill="#AE1C28" />
          <rect y="160" width="640" height="160" fill="#FFFFFF" />
          <rect y="320" width="640" height="160" fill="#21468B" />
        </svg>
      </motion.div>
    </motion.div>
  </div>
);

// Card 2 Illustration: Real-Time Shipment Visibility
const ShipmentVisibilityIllustration: React.FC = () => (
  <div className="relative w-56 h-36 flex flex-col items-center justify-end">
    {/* Overhead Location Pin with Bouncing Animation */}
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      className="absolute top-0 flex flex-col items-center"
    >
      <div className="w-8 h-8 rounded-full bg-orange-500 border-2 border-white shadow-md flex items-center justify-center text-white font-bold">
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <div className="w-0.5 h-2 bg-orange-500" />
    </motion.div>

    {/* Scene: Truck + Storefront */}
    <div className="flex items-end gap-3 mt-6">
      {/* Delivery Truck */}
      <motion.div
        animate={{ x: [0, 4, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="flex items-end"
      >
        {/* Cab */}
        <div className="w-7 h-10 bg-orange-600 rounded-l-md flex flex-col justify-between p-1">
          <div className="w-4 h-3 bg-cyan-300 rounded-sm" />
          <div className="w-2 h-1 bg-yellow-400 rounded-xs" />
        </div>
        {/* Cargo Box */}
        <div className="w-14 h-12 bg-slate-200 border-l border-slate-300 rounded-r-md flex flex-col justify-around p-1 shadow-inner">
          <div className="w-full h-0.5 bg-slate-300" />
          <div className="w-full h-0.5 bg-slate-300" />
          <div className="w-full h-0.5 bg-slate-300" />
        </div>
      </motion.div>

      {/* Storefront Building */}
      <div className="w-14 h-14 bg-amber-100 border border-amber-200 rounded-t-sm flex flex-col items-center relative overflow-hidden">
        {/* Striped Awning */}
        <div className="w-full h-4 bg-gradient-to-r from-orange-500 via-white to-orange-500 bg-[length:12px_100%] rounded-t-sm border-b border-orange-600" />
        {/* Window / Door */}
        <div className="w-6 h-8 bg-cyan-500/80 mt-1 rounded-t-sm border border-cyan-600 flex items-center justify-center">
          <div className="w-2 h-4 bg-slate-700 rounded-t-full" />
        </div>
      </div>
    </div>

    {/* Dashed Road Line */}
    <div className="w-full border-b-2 border-dashed border-slate-400 mt-1" />
  </div>
);

// Card 3 Illustration: Fast Delivery across 20+ Countries
const FastDeliveryIllustration: React.FC = () => (
  <div className="relative w-40 h-40 flex items-center justify-center">
    {/* Dashed Circular Orbit */}
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r="42"
        fill="none"
        stroke="#f97316"
        strokeWidth="2"
        strokeDasharray="6 6"
      />
    </svg>

    {/* Center Isometric Cardboard Box */}
    <motion.div
      animate={{ y: [0, -4, 0] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      className="relative z-10 w-14 h-14 bg-amber-600 rounded-md shadow-lg transform rotate-45 flex items-center justify-center border border-amber-700"
    >
      {/* Box Tape */}
      <div className="w-full h-3 bg-amber-800/60 transform -rotate-45" />
    </motion.div>

    {/* Revolving Orbit Container */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      className="absolute inset-0 w-full h-full"
    >
      {/* US Flag Circle */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute top-2 right-2 w-7 h-7 rounded-full overflow-hidden border-2 border-white shadow-md z-20"
      >
        <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
          <rect width="640" height="480" fill="#BB133E" />
          <path d="M0,37H640M0,111H640M0,185H640M0,258H640M0,332H640M0,406H640" stroke="#FFF" strokeWidth="37" />
          <rect width="256" height="258" fill="#002147" />
        </svg>
      </motion.div>

      {/* EU Flag Circle */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute bottom-2 left-2 w-7 h-7 rounded-full overflow-hidden border-2 border-white shadow-md z-20"
      >
        <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
          <rect width="640" height="480" fill="#003399" />
          <circle cx="320" cy="240" r="120" fill="none" stroke="#FFCC00" strokeWidth="8" strokeDasharray="1 20" />
        </svg>
      </motion.div>
    </motion.div>
  </div>
);

// Card 4 Illustration: Certified & Compliant Fleet
const PackagingPerformanceIllustration: React.FC = () => (
  <div className="relative w-44 h-40 flex flex-col items-center justify-end">

    <motion.div
      animate={{ scale: [0.6, 1.3, 0.6], opacity: [0.6, 0, 0.6] }}
      transition={{ repeat: Infinity, duration: 2.2, ease: "easeOut" }}
      className="absolute bottom-3 w-24 h-4 rounded-full border-2 border-orange-400/70"
    />
    <motion.div
      animate={{ scale: [0.4, 1, 0.4], opacity: [0.5, 0, 0.5] }}
      transition={{ repeat: Infinity, duration: 2.2, ease: "easeOut", delay: 0.15 }}
      className="absolute bottom-3 w-16 h-3 rounded-full border-2 border-orange-500/60"
    />

    <motion.div
      animate={{ y: [-8, 30], opacity: [0, 1, 0] }}
      transition={{ repeat: Infinity, duration: 1.6, ease: "easeIn" }}
      className="absolute top-2 left-6 w-1 h-3 rounded-full bg-cyan-400/70"
    />
    <motion.div
      animate={{ y: [-8, 30], opacity: [0, 1, 0] }}
      transition={{ repeat: Infinity, duration: 1.6, ease: "easeIn", delay: 0.5 }}
      className="absolute top-2 right-7 w-1 h-3 rounded-full bg-cyan-400/70"
    />
    <motion.div
      animate={{ y: [-8, 30], opacity: [0, 1, 0] }}
      transition={{ repeat: Infinity, duration: 1.6, ease: "easeIn", delay: 0.9 }}
      className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-3 rounded-full bg-cyan-400/70"
    />

    <motion.div
      animate={{ y: [-18, 0, -18] }}
      transition={{ repeat: Infinity, duration: 2.2, ease: "easeOut" }}
      className="relative z-10 w-16 h-16 bg-amber-600 rounded-md shadow-lg border border-amber-700 flex items-center justify-center"
    >
      <div className="absolute inset-x-0 top-0 h-full w-3 bg-amber-800/50 left-1/2 -translate-x-1/2" />
      <div className="absolute inset-y-0 left-0 w-full h-3 bg-amber-800/50 top-1/2 -translate-y-1/2" />

      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center border border-orange-200 z-20">
        <svg
          className="w-3.5 h-3.5 text-orange-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2l7 3v6c0 5-3 9-7 11-4-2-7-6-7-11V5l7-3z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      </div>
    </motion.div>

    <div className="w-28 border-b-2 border-slate-300 mt-1" />
  </div>
);

export const WhyChooseUsSection: React.FC<WhyChooseUsProps> = ({
  badgeText = "WHY CARAPACE",
  titleLine1 = "Why brands switch",
  titleLine2 = "their packaging to us.",
  subtitle = "Six decades of manufacturing experience, backed by the capacity and technical know-how to deliver at scale. From specification to production, every detail is considered around your product, performance and supply-chain requirements.",
  className = "",
}) => {
  const cards = [
    {
      id: "card-1",
      title: "A dedicated packaging specialist on every account",
      illustration: <MultilingualIllustration />,
    },
    {
      id: "card-2",
      title: "Nationwide delivery with 7–12 day lead times",
      illustration: <ShipmentVisibilityIllustration />,
    },
    {
      id: "card-3",
      title: "Export-ready packaging supplied to 12+ countries",
      illustration: <FastDeliveryIllustration />,
    },
    {
      id: "card-4",
      //title: "FSC fibre, ISO-audited, 100% recyclable",
      title : "Packaging designed to perform beyond the factory floor", 
      illustration: <PackagingPerformanceIllustration />,
    },
  ];

  return (
    <section className={`relative w-full bg-white text-gray-900 py-14 sm:py-28 lg:py-36 font-urbanist select-none ${className}`}>
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Badge, Title, Subtitle, & CTA Button */}
          <div className="lg:col-span-5 max-w-xl">
            {/* Upper Badge */}
            <div className="flex items-center gap-2 mb-3 sm:mb-5">
              <div className="w-3.5 h-3.5 rounded-full border-[2.5px] border-orange-500 flex items-center justify-center shrink-0">
                <div className="w-1 h-1 rounded-full bg-orange-500" />
              </div>
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-gray-700">
                {badgeText}
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[3.75rem] font-semibold tracking-tight text-gray-900 leading-[1.08]">
              <span className="block">{titleLine1}</span>
              <span className="block">{titleLine2}</span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-lg text-gray-600 font-normal mt-3 sm:mt-5 leading-relaxed max-w-md">
              {subtitle}
            </p>

            {/* CTA Button */}
            <div className="pt-6 sm:pt-10">
              <CTAButton
                label="Know More About Us"
                href="/about-us"
                variant="outline"
                size="sm"
                textColor="text-gray-900"
                iconColor="text-gray-900"
              />
            </div>
          </div>

          {/* Right Column: 2x2 Feature Cards Grid */}
          <div className="lg:col-span-7 pt-2 sm:pt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="bg-[#f5f5f5] rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-between text-center min-h-[280px] sm:min-h-[300px] border border-gray-200/60 shadow-none hover:shadow-md transition-all duration-300 group"
                >
                  {/* Illustration Area */}
                  <div className="w-full flex-1 flex items-center justify-center py-4">
                    {card.illustration}
                  </div>

                  {/* Card Title using font-semibold */}
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 tracking-tight leading-snug font-urbanist mt-4">
                    {card.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
