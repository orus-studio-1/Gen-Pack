"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface LocationInfo {
  id: "bengaluru" | "pune";
  city: string;
  subtitle: string;
  description: string;
  image: string;
  pinTop: string;
  pinLeft: string;
  svgX: number;
  svgY: number;
}

const locationsData: Record<"bengaluru" | "pune", LocationInfo> = {
  pune: {
    id: "pune",
    city: "Pune, Maharashtra",
    subtitle: "Western Region Converting & Warehouse",
    description:
      "Our western converting unit serves automotive, engineering and export customers, holding stock lines for just-in-time supply into manufacturing and packing halls.",
    image:
      "https://images.unsplash.com/photo-1709804945989-c8be542e04db?auto=format&fit=crop&w=500&q=75",
    pinTop: "50.4%",
    pinLeft: "68.8%",
    svgX: 688,
    svgY: 252,
  },
  bengaluru: {
    id: "bengaluru",
    city: "Bengaluru, Karnataka",
    subtitle: "Head Office & Corrugation Plant",
    description:
      "Our main plant houses the corrugator, flexo and offset presses, die-cutting and the structural design studio — where every CAD sample and first article is produced.",
    image:
      "https://images.unsplash.com/photo-1734357310900-4b513a3a5ae0?auto=format&fit=crop&w=500&q=75",
    pinTop: "55.0%",
    pinLeft: "69.5%",
    svgX: 695,
    svgY: 275,
  },
};

const globalMarkets = [
  "South Asia",
  "Middle East",
  "Africa",
  "Europe",
  "North America",
  "Asia-Pacific",
];

// Defined 6 Destination Points matching globalMarkets
const destinationPoints = [
  { label: "South Asia", top: "52.0%", left: "74.0%", svgX: 740, svgY: 260 },
  { label: "Middle East", top: "36.0%", left: "62.5%", svgX: 625, svgY: 180 },
  { label: "Africa", top: "55.6%", left: "55.6%", svgX: 556, svgY: 278 },
  { label: "Europe", top: "22.2%", left: "52.8%", svgX: 528, svgY: 111 },
  { label: "North America", top: "27.8%", left: "22.2%", svgX: 222, svgY: 139 },
  // Repositioned to landmass (SE Asia / East Asia region)
  { label: "Asia-Pacific", top: "38.0%", left: "80.0%", svgX: 800, svgY: 190 },
];

const HubPin = ({
  active,
  onClick,
  top,
  left,
  label,
}: {
  active: boolean;
  onClick: () => void;
  top: string;
  left: string;
  label: string;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Select ${label}`}
      style={{ top, left }}
      className="absolute z-[80] -translate-x-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
    >
      {active && (
        <motion.span
          className="absolute w-7 h-7 rounded-full border border-orange-500/60"
          animate={{ scale: [1, 1.8], opacity: [0.75, 0] }}
          transition={{ duration: 1.7, repeat: Infinity, ease: "easeOut" }}
        />
      )}
      <span
        className={`relative flex items-center justify-center w-4 h-4 rounded-full bg-orange-500 border-[2.5px] border-white shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-transform duration-200 ${
          active ? "scale-125" : "scale-100 hover:scale-125"
        }`}
      >
        <span className="w-1 h-1 rounded-full bg-white" />
      </span>
    </button>
  );
};

export const OurLocations: React.FC = () => {
  const [activeLocation, setActiveLocation] =
    useState<"bengaluru" | "pune">("bengaluru");

  const current = locationsData[activeLocation];
  const routeOrigin = { x: current.svgX, y: current.svgY };

  const selectLocation = (location: "bengaluru" | "pune") => {
    setActiveLocation(location);
  };

  return (
    <section className="relative w-full bg-[#e6e6e6] text-[#1c1817] overflow-hidden">
      {/* HEADER */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 pt-20 md:pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3.5 h-3.5 rounded-full border-[2.5px] border-orange-500 flex items-center justify-center">
                <span className="w-1 h-1 rounded-full bg-orange-500" />
              </span>
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#666666] font-mono">
                GLOBAL REACH
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-bold font-urbanist tracking-[-0.04em] leading-[0.95]">
              Expanding
              <br />
              <span className="text-orange-500">Globally.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pb-1">
            <p className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-lg">
              From our strategic hubs in India, we support businesses across
              international markets with packaging designed for global movement.
            </p>
          </div>
        </div>
      </div>

      {/* MAP CONTAINER */}
      <div className="relative w-full max-w-[1350px] mx-auto px-6 md:px-16 lg:px-24 mt-8 md:mt-12">
        <div className="relative w-full aspect-[2/1] min-h-[300px] sm:min-h-[390px] md:min-h-[470px]">
          
          {/* MAP IMAGE */}
          <Image
            src="/world_map.svg"
            alt="Global reach map"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1350px"
            className="object-fill opacity-[0.42] pointer-events-none select-none"
          />

          {/* SVG ROUTES FOR ALL 6 DESTINATIONS */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 1000 500"
            preserveAspectRatio="none"
          >
            {/* 1. SOUTH ASIA */}
            <motion.path
              d={`M ${routeOrigin.x} ${routeOrigin.y} C 710 265, 725 262, ${destinationPoints[0].svgX} ${destinationPoints[0].svgY}`}
              fill="none"
              stroke="#f97316"
              strokeWidth="1.8"
              strokeDasharray="5 9"
              opacity="0.5"
              animate={{ strokeDashoffset: [0, -28] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
            />

            {/* 2. MIDDLE EAST */}
            <motion.path
              d={`M ${routeOrigin.x} ${routeOrigin.y} C 650 230, 630 200, ${destinationPoints[1].svgX} ${destinationPoints[1].svgY}`}
              fill="none"
              stroke="#f97316"
              strokeWidth="1.8"
              strokeDasharray="5 9"
              opacity="0.55"
              animate={{ strokeDashoffset: [0, -28] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            />

            {/* 3. AFRICA */}
            <motion.path
              d={`M ${routeOrigin.x} ${routeOrigin.y} C 640 300, 590 330, ${destinationPoints[2].svgX} ${destinationPoints[2].svgY}`}
              fill="none"
              stroke="#f97316"
              strokeWidth="1.8"
              strokeDasharray="5 9"
              opacity="0.45"
              animate={{ strokeDashoffset: [0, -28] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
            />

            {/* 4. EUROPE */}
            <motion.path
              d={`M ${routeOrigin.x} ${routeOrigin.y} C 620 180, 560 140, ${destinationPoints[3].svgX} ${destinationPoints[3].svgY}`}
              fill="none"
              stroke="#f97316"
              strokeWidth="1.8"
              strokeDasharray="5 9"
              opacity="0.55"
              animate={{ strokeDashoffset: [0, -28] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
            />

            {/* 5. NORTH AMERICA */}
            <motion.path
              d={`M ${routeOrigin.x} ${routeOrigin.y} C 540 160, 380 130, ${destinationPoints[4].svgX} ${destinationPoints[4].svgY}`}
              fill="none"
              stroke="#f97316"
              strokeWidth="1.4"
              strokeDasharray="5 10"
              opacity="0.35"
              animate={{ strokeDashoffset: [0, -30] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
            />

            {/* 6. ASIA PACIFIC (Adjusted Curve to Landmass) */}
            <motion.path
              d={`M ${routeOrigin.x} ${routeOrigin.y} C 730 220, 770 200, ${destinationPoints[5].svgX} ${destinationPoints[5].svgY}`}
              fill="none"
              stroke="#f97316"
              strokeWidth="1.8"
              strokeDasharray="5 9"
              opacity="0.5"
              animate={{ strokeDashoffset: [0, -28] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
            />
          </svg>

          {/* ALL 6 DESTINATION DOTS */}
          {destinationPoints.map((point, index) => (
            <motion.span
              key={point.label}
              style={{ top: point.top, left: point.left }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2.2 + index * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute z-20 w-2.5 h-2.5 rounded-full bg-[#5d7f6b] -translate-x-1/2 -translate-y-1/2"
            />
          ))}

          {/* PUNE PIN & LABEL */}
          <HubPin
            active={activeLocation === "pune"}
            onClick={() => selectLocation("pune")}
            top={locationsData.pune.pinTop}
            left={locationsData.pune.pinLeft}
            label="Pune"
          />
          <div
            className="absolute z-40 pointer-events-none hidden sm:block -translate-y-1/2"
            style={{
              top: locationsData.pune.pinTop,
              left: "calc(68.8% - 55px)",
            }}
          >
            <div className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm border border-black/5 shadow-sm">
              <span className="text-[9px] font-bold font-mono tracking-[0.12em] uppercase">
                Pune
              </span>
            </div>
          </div>

          {/* BENGALURU PIN & LABEL */}
          <HubPin
            active={activeLocation === "bengaluru"}
            onClick={() => selectLocation("bengaluru")}
            top={locationsData.bengaluru.pinTop}
            left={locationsData.bengaluru.pinLeft}
            label="Bengaluru"
          />
          <div
            className="absolute z-40 pointer-events-none hidden sm:block -translate-y-1/2"
            style={{
              top: locationsData.bengaluru.pinTop,
              left: "calc(69.5% + 18px)",
            }}
          >
            <div className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm border border-black/5 shadow-sm">
              <span className="text-[9px] font-bold font-mono tracking-[0.12em] uppercase">
                Bengaluru
              </span>
            </div>
          </div>
        </div>

        {/* HUB SELECTOR SWITCH */}
        <div className="relative z-[80] flex justify-center -mt-2 sm:-mt-4 mb-8">
          <div className="inline-flex items-center gap-1 p-1 rounded-full bg-white border border-black/5 shadow-sm">
            <button
              type="button"
              onClick={() => selectLocation("pune")}
              className={`px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-semibold font-urbanist transition-all duration-200 ${
                activeLocation === "pune"
                  ? "bg-[#1c1817] text-white shadow-sm"
                  : "text-[#666666] hover:text-[#1c1817]"
              }`}
            >
              Pune
            </button>
            <button
              type="button"
              onClick={() => selectLocation("bengaluru")}
              className={`px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-semibold font-urbanist transition-all duration-200 ${
                activeLocation === "bengaluru"
                  ? "bg-[#1c1817] text-white shadow-sm"
                  : "text-[#666666] hover:text-[#1c1817]"
              }`}
            >
              Bengaluru
            </button>
          </div>
        </div>

        {/* ACTIVE LOCATION CARD */}
        <div className="relative z-[50] w-full max-w-[680px] mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-[#1c1817] text-white rounded-[26px] p-5 sm:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.16)]"
            >
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="relative w-full sm:w-36 h-36 sm:h-28 rounded-2xl overflow-hidden shrink-0">
                  <Image
                    src={current.image}
                    alt={current.city}
                    fill
                    sizes="150px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500" />
                    <span className="text-[9px] font-mono font-bold tracking-[0.18em] uppercase text-orange-400">
                      STRATEGIC HUB
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-urbanist">
                    {current.city}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/55 mt-1">
                    {current.subtitle}
                  </p>
                </div>
              </div>

              <p className="mt-5 pt-5 border-t border-white/10 text-sm sm:text-base text-white/65 leading-relaxed">
                {current.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* FOOTER MARKETS LIST */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 mt-16 md:mt-20 pb-20 md:pb-28">
        <div className="border-t border-black/15 pt-7">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <span className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1c1817] text-[10px] sm:text-xs font-bold font-mono tracking-[0.18em] uppercase text-white w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              Global Markets
            </span>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5">
              {globalMarkets.map((market, index) => (
                <React.Fragment key={market}>
                  <span className="text-sm sm:text-base font-semibold text-[#1c1817]">
                    {market}
                  </span>
                  {index !== globalMarkets.length - 1 && (
                    <span className="hidden sm:inline text-orange-500 font-bold">
                      /
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurLocations;