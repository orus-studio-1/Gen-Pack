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

import {
  ItcLogo,
  NestleLogo,
  HulLogo,
  PepsiCoLogo,
  TataConsumerLogo,
  BoschLogo,
  LgLogo,
  HavellsLogo,
  BritanniaLogo,
  DaburLogo,
  CromptonLogo,
  ManyavarLogo,
  AdityaBirlaLogo,
  OrientLogo,
  BiskFarmLogo,
  BallentineLogo,
  IspLogo,
  GliderLogo,
} from "./ClientLogos";

interface ClientsPartnersProps {
  badgeText?: string;
  className?: string;
}

// Set this back to true once certificate numbers/badges are issued —
// nothing else in this file needs to change. The certifications marquee
// below is left fully intact so it's ready to go the moment this flips.
const SHOW_CERTIFICATIONS = false;

export const ClientsPartnersSection: React.FC<ClientsPartnersProps> = ({
  badgeText,
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

  /* Client roster with matching high-fidelity brand logos in designated order:
     ITC -> Nestlé -> HUL -> PepsiCo -> Tata Consumer -> Bosch -> LG -> Havells ->
     Britannia -> Dabur -> Crompton -> Manyavar -> Aditya Birla Fashion ->
     Orient Electric -> Bisk Farm -> Ballantine -> ISP -> Glider */
  const clients = [
    { name: "ITC", logo: <ItcLogo /> },
    { name: "Nestlé", logo: <NestleLogo /> },
    { name: "HUL", logo: <HulLogo /> },
    { name: "PepsiCo", logo: <PepsiCoLogo /> },
    { name: "Tata Consumer", logo: <TataConsumerLogo /> },
    { name: "Bosch", logo: <BoschLogo /> },
    { name: "LG", logo: <LgLogo /> },
    { name: "Havells", logo: <HavellsLogo /> },
    { name: "Britannia", logo: <BritanniaLogo /> },
    { name: "Dabur", logo: <DaburLogo /> },
    { name: "Crompton", logo: <CromptonLogo /> },
    { name: "Manyavar", logo: <ManyavarLogo /> },
    { name: "Aditya Birla Fashion", logo: <AdityaBirlaLogo /> },
    { name: "Orient Electric", logo: <OrientLogo /> },
    { name: "Bisk Farm", logo: <BiskFarmLogo /> },
    { name: "Ballantine", logo: <BallentineLogo /> },
    { name: "ISP", logo: <IspLogo /> },
    { name: "Glider", logo: <GliderLogo /> },
  ];

  const resolvedBadgeText =
    badgeText ?? (SHOW_CERTIFICATIONS ? "CERTIFICATIONS & STANDARDS" : "OUR CLIENTS");

  const resolvedSubtext = SHOW_CERTIFICATIONS
    ? "Audited processes, traceable fibre and documentation supplied with every consignment."
    : "";

  // Duplicated for a seamless 50% infinite marquee loop.
  const marqueeItems = SHOW_CERTIFICATIONS
    ? [...standards, ...standards]
    : [...clients, ...clients];

  return (
    <section
      className={`w-full bg-[#f4f4f4] pt-4 sm:pt-6 pb-8 sm:pb-10 border-t border-b border-gray-200/60 overflow-hidden font-urbanist select-none ${className}`}
    >
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 mb-4 sm:mb-5 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2.5">
        {/* Top-left Badge Indicator */}
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 rounded-full border-[2.5px] border-orange-600 flex items-center justify-center shrink-0">
            <div className="w-1 h-1 rounded-full bg-orange-600" />
          </div>
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-gray-700">
            {resolvedBadgeText}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-gray-600 max-w-md sm:text-right">
          {resolvedSubtext}
        </p>
      </div>

      {/* Moving Marquee Container */}
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden flex pointer-events-none">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 45,
          }}
          className="flex items-center gap-12 sm:gap-16 md:gap-20 w-max shrink-0 pr-12 sm:pr-16 md:pr-20"
        >
          {SHOW_CERTIFICATIONS
            ? (marqueeItems as typeof standards).map((item, index) => {
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
              })
            : (marqueeItems as typeof clients).map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="flex items-center justify-center shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-300"
                  title={item.name}
                >
                  {item.logo}
                </div>
              ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsPartnersSection;