"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FleetVehicle {
  id: string;
  name: string;
  category: string;
  capacity: string;
  volume: string;
  temperature?: string;
  image: string;
  description: string;
  features: string[];
}

export const FleetVehiclesSection: React.FC = () => {
  const vehicles: FleetVehicle[] = [
    {
      id: "semi-trailer",
      name: "Mega & Standard Semi-Trailers",
      category: "Heavy Long-Haul",
      capacity: "Up to 24,000 kg",
      volume: "100 - 120 m³",
      image: "/Logistic1.png",
      description:
        "High-capacity curtainside trailers designed for efficient long-distance cross-border freight transportation across Europe and North America.",
      features: [
        "Code XL Certified for maximum load securing",
        "Lifting roof for fast top & side loading",
        "Real-time GPS tracking & door security sensors",
        "Available in standard and mega 3m internal height",
      ],
    },
    {
      id: "reefer",
      name: "Temperature-Controlled Reefers",
      category: "Cold Chain Logistics",
      capacity: "Up to 22,000 kg",
      volume: "86 - 90 m³",
      temperature: "-30°C to +30°C",
      image: "/Logistic2.png",
      description:
        "Dual-temperature zone refrigerated trailers engineered for pharma, perishable foods, and temperature-sensitive high-value goods.",
      features: [
        "Multi-temperature dual evaporator units",
        "HACCP and Pharma GDP certified",
        "Continuous 24/7 telemetry temperature logging",
        "Remote set-point control & instant alarm alerts",
      ],
    },
    {
      id: "urban-delivery",
      name: "Urban Delivery & Last-Mile Vans",
      category: "Express Distribution",
      capacity: "Up to 3,500 kg",
      volume: "15 - 22 m³",
      image: "/Logistic3.png",
      description:
        "Agile, eco-friendly delivery vehicles built for fast city distribution, retail replenishment, and express last-mile operations.",
      features: [
        "Euro 6d low-emission engines & EV options",
        "Hydraulic tail-lift for quick street unloading",
        "Flexible route optimization integration",
        "ADR-compliant options for small hazardous packages",
      ],
    },
    {
      id: "specialized-adr",
      name: "Specialized & ADR Hazardous Units",
      category: "Dangerous Goods",
      capacity: "Up to 25,000 kg",
      volume: "Custom Configurations",
      image: "/Logistic4.png",
      description:
        "Specially equipped transport units certified for hazardous chemical, industrial, and specialized cargo safety compliance.",
      features: [
        "Full ADR Classes 2 - 9 safety equipment onboard",
        "Specially certified safety-trained drivers",
        "Anti-static spill response gear & containment",
        "Direct emergency command dispatch monitoring",
      ],
    },
  ];

  const [activeId, setActiveId] = useState<string>(vehicles[0].id);
  const activeVehicle = vehicles.find((v) => v.id === activeId) || vehicles[0];

  return (
    <section className="w-full py-20 md:py-32 bg-[#1c1817] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-2xl"
          >
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-orange-600 shrink-0" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="#ea580c" strokeWidth="2.5" />
                <circle cx="8" cy="8" r="2" fill="#ea580c" />
              </svg>
              <span className="font-bold text-xs md:text-sm tracking-[0.25em] uppercase text-orange-600">
                OUR VEHICLE SPECS
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-urbanist tracking-tight">
              Engineered for Every Cargo.
            </h2>
          </motion.div>

          {/* Subtitle / Note */}
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-base md:text-lg max-w-md font-urbanist"
          >
            Explore our state-of-the-art vehicle categories customized to meet demanding European and North American road transport standards.
          </motion.p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar border-b border-white/10">
          {vehicles.map((v) => {
            const isActive = v.id === activeId;
            return (
              <button
                key={v.id}
                onClick={() => setActiveId(v.id)}
                className={`px-5 py-3 rounded-xl font-urbanist font-semibold text-sm sm:text-base whitespace-nowrap transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-orange-600 text-white shadow-lg shadow-orange-600/25"
                    : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span>{v.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Vehicle Card Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeVehicle.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 md:p-12 backdrop-blur-md"
          >
            {/* Image Box */}
            <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
              <img
                src={activeVehicle.image}
                alt={activeVehicle.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-semibold text-orange-600 uppercase tracking-wider">
                {activeVehicle.category}
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold font-urbanist tracking-tight mb-3">
                  {activeVehicle.name}
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed font-urbanist">
                  {activeVehicle.description}
                </p>
              </div>

              {/* Specs Pills */}
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="bg-white/10 border border-white/10 px-4 py-2.5 rounded-xl">
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Max Payload</div>
                  <div className="text-lg font-bold font-urbanist text-orange-600">{activeVehicle.capacity}</div>
                </div>
                <div className="bg-white/10 border border-white/10 px-4 py-2.5 rounded-xl">
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Cargo Volume</div>
                  <div className="text-lg font-bold font-urbanist text-white">{activeVehicle.volume}</div>
                </div>
                {activeVehicle.temperature && (
                  <div className="bg-white/10 border border-white/10 px-4 py-2.5 rounded-xl">
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Temp Control</div>
                    <div className="text-lg font-bold font-urbanist text-cyan-400">{activeVehicle.temperature}</div>
                  </div>
                )}
              </div>

              {/* Features List */}
              <div className="space-y-3 pt-2">
                <div className="text-sm uppercase tracking-wider font-semibold text-slate-400">Key Equipment & Features</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeVehicle.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-slate-200 font-urbanist">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FleetVehiclesSection;
