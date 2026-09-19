"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaTree,
  FaRecycle,
  FaCertificate,
  FaShieldHalved,
  FaLeaf,
  FaSeedling,
  FaFlask,
  FaClipboardCheck,
  FaGlobe,
  FaBoxOpen,
} from "react-icons/fa6";

interface ClientsPartnersProps {
  badgeText?: string;
  className?: string;
}

export const ClientsPartnersSection: React.FC<ClientsPartnersProps> = ({
  badgeText = "CERTIFICATIONS & STANDARDS",
  className = "",
}) => {
  /* The credentials that actually matter when a buyer audits a packaging
     supplier — swap these for your own certificate numbers once issued. */
  const standards = [
    { name: "FSC® Certified Fibre", icon: FaTree, color: "text-emerald-600" },
    { name: "100% Recyclable", icon: FaRecycle, color: "text-emerald-600" },
    { name: "ISO 9001:2015", icon: FaCertificate, color: "text-orange-600" },
    { name: "ISO 14001", icon: FaLeaf, color: "text-emerald-600" },
    { name: "BRCGS Packaging", icon: FaShieldHalved, color: "text-slate-700" },
    { name: "Food-Grade Compliant", icon: FaFlask, color: "text-orange-600" },
    { name: "Home Compostable", icon: FaSeedling, color: "text-emerald-600" },
    { name: "EPR Ready", icon: FaClipboardCheck, color: "text-slate-700" },
    { name: "ISPM-15 Exempt", icon: FaGlobe, color: "text-orange-600" },
    { name: "Plastic-Free Packs", icon: FaBoxOpen, color: "text-slate-700" },
  ];

  // Duplicated for a seamless 50% infinite marquee loop.
  const marqueeItems = [...standards, ...standards];

  return (
    <section
      className={`w-full bg-[#f4f4f4] py-10 sm:py-14 border-t border-b border-gray-200/60 overflow-hidden font-urbanist select-none ${className}`}
    >
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
        {/* Top-left Badge Indicator */}
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 rounded-full border-[2.5px] border-orange-500 flex items-center justify-center shrink-0">
            <div className="w-1 h-1 rounded-full bg-orange-500" />
          </div>
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-gray-700">
            {badgeText}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-gray-600 max-w-md sm:text-right">
          Audited processes, traceable fibre and documentation supplied with
          every consignment.
        </p>
      </div>

      {/* Moving Marquee Container */}
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden flex pointer-events-none">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 30,
          }}
          className="flex items-center gap-10 sm:gap-14 md:gap-20 w-max shrink-0 pr-10 sm:pr-14 md:pr-20"
        >
          {marqueeItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.name}-${index}`}
                className="flex items-center gap-3 shrink-0 opacity-80"
              >
                <Icon className={`w-7 h-7 sm:w-9 sm:h-9 ${item.color}`} />
                <span className="text-base sm:text-lg font-semibold tracking-tight text-gray-800 whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsPartnersSection;
