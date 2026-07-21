"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface LocationInfo {
  id: "rotterdam" | "houston";
  city: string;
  subtitle: string;
  description: string;
  image: string;
  pinTop: string;
  pinLeft: string;
}

const locationsData: Record<"rotterdam" | "houston", LocationInfo> = {
  rotterdam: {
    id: "rotterdam",
    city: "Rotterdam, Netherlands",
    subtitle: "European Headquarters & Warehouse",
    description:
      "Located in the heart of Europe's logistics corridor, our Rotterdam HQ oversees ground freight, regional distribution, and B2B partnerships across France, Germany, Benelux, and Spain.",
    image: "/about-us/history_1.avif",
    pinTop: "40%",
    pinLeft: "49.5%",
  },
  houston: {
    id: "houston",
    city: "Houston, Texas",
    subtitle: "North American Operations Hub",
    description:
      "Strategically positioned near major Gulf Coast ports, our Houston office manages US domestic freight, cross-border logistics with Mexico and Canada, and partnerships across the Southeastern and Central United States.",
    image: "/about-us/history_3.webp",
    pinTop: "47%",
    pinLeft: "26.8%",
  },
};

export const OurLocations: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<"rotterdam" | "houston">("rotterdam");

  const current = locationsData[activeLocation];

  return (
    <section className="w-full bg-[#e6e6e6] text-[#1c1817] py-20 md:py-28 px-6 md:px-16 lg:px-24 overflow-hidden relative">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center">
        
        {/* Centered Header */}
        <div className="text-center mb-8 md:mb-12 max-w-2xl">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-[#555555] uppercase mb-2 font-mono">
            GLOBAL REACH. LOCAL STRENGTH.
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-urbanist text-[#1c1817] tracking-tight mb-3">
            Our Locations
          </h2>
          <p className="text-base sm:text-lg text-[#555555] font-normal font-urbanist">
            We Operate from two Strategic Hubs:
          </p>
        </div>

        {/* Map Canvas Container */}
        <div className="relative w-full max-w-[1100px] aspect-[2/1] min-h-[340px] sm:min-h-[440px] md:min-h-[500px] flex items-center justify-center select-none">
          {/* Background Vector Map SVG */}
          <Image
            src="/world_map.svg"
            alt="World Map"
            fill
            className="object-contain opacity-85 pointer-events-none"
            priority
          />

          {/* Rotterdam Location Pin */}
          <button
            onClick={() => setActiveLocation("rotterdam")}
            style={{ top: locationsData.rotterdam.pinTop, left: locationsData.rotterdam.pinLeft }}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-30 group focus:outline-none cursor-pointer"
            aria-label="Select Rotterdam HQ"
          >
            <span className="relative flex items-center justify-center">
              {activeLocation === "rotterdam" ? (
                <>
                  <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-orange-500 opacity-60" />
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-orange-500 border-2 border-white shadow-lg scale-110 transition-transform" />
                </>
              ) : (
                <span className="inline-flex rounded-full h-4 w-4 bg-[#777777] border-2 border-white shadow-md group-hover:bg-orange-500 group-hover:scale-110 transition-all" />
              )}
            </span>
          </button>

          {/* Houston Location Pin */}
          <button
            onClick={() => setActiveLocation("houston")}
            style={{ top: locationsData.houston.pinTop, left: locationsData.houston.pinLeft }}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-30 group focus:outline-none cursor-pointer"
            aria-label="Select Houston Hub"
          >
            <span className="relative flex items-center justify-center">
              {activeLocation === "houston" ? (
                <>
                  <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-orange-500 opacity-60" />
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-orange-500 border-2 border-white shadow-lg scale-110 transition-transform" />
                </>
              ) : (
                <span className="inline-flex rounded-full h-4 w-4 bg-[#777777] border-2 border-white shadow-md group-hover:bg-orange-500 group-hover:scale-110 transition-all" />
              )}
            </span>
          </button>
        </div>

        {/* Floating Location Card Overlay (Positioned closer to map pin dots) */}
        <div className="relative z-20 w-full max-w-[560px] mx-auto px-4 -mt-36 sm:-mt-52 md:-mt-64">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-black/5 flex flex-col"
            >
              {/* Top Row: Location Thumbnail Image + Title & Subtitle */}
              <div className="flex flex-row items-center gap-4 sm:gap-6 mb-4">
                {/* Image */}
                <div className="relative w-28 sm:w-36 h-20 sm:h-24 rounded-2xl overflow-hidden flex-shrink-0 shadow-sm border border-black/5 bg-slate-100">
                  <Image
                    src={current.image}
                    alt={current.city}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>

                {/* Title & Subtitle */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-lg sm:text-2xl font-bold font-urbanist text-[#1c1817] leading-tight mb-1">
                    {current.city}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#555555] leading-snug">
                    {current.subtitle}
                  </p>
                </div>
              </div>

              {/* Location Description */}
              <p className="text-xs sm:text-sm md:text-base text-[#666666] font-normal leading-relaxed">
                {current.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default OurLocations;

