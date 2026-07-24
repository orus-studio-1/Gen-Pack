"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaFedex,
  FaDhl,
  FaAmazon,
  FaUber,
  FaGoogle,
  FaShopify,
  FaStripe,
  FaMicrosoft,
  FaSlack,
  FaAirbnb,
  FaSpotify,
  FaApple,
} from "react-icons/fa6";

interface ClientsPartnersProps {
  badgeText?: string;
  className?: string;
}

export const ClientsPartnersSection: React.FC<ClientsPartnersProps> = ({
  badgeText = "CLIENTS & PARTNERS",
  className = "",
}) => {
  // Brand partners list with custom colors
  const partners = [
    { name: "FedEx", icon: FaFedex, color: "text-[#4D148C]" },
    { name: "DHL", icon: FaDhl, color: "text-[#FFCC00]" },
    { name: "Amazon", icon: FaAmazon, color: "text-[#FF9900]" },
    { name: "Uber", icon: FaUber, color: "text-[#000000]" },
    { name: "Apple", icon: FaApple, color: "text-[#555555]" },
    { name: "Shopify", icon: FaShopify, color: "text-[#95BF47]" },
    { name: "Google", icon: FaGoogle, color: "text-[#4285F4]" },
    { name: "Stripe", icon: FaStripe, color: "text-[#635BFF]" },
    { name: "Microsoft", icon: FaMicrosoft, color: "text-[#F25022]" },
    { name: "Slack", icon: FaSlack, color: "text-[#4A154B]" },
    { name: "Airbnb", icon: FaAirbnb, color: "text-[#FF5A5F]" },
    { name: "Spotify", icon: FaSpotify, color: "text-[#1DB954]" },
  ];

  // Duplicate for seamless 100% infinite marquee scroll
  const marqueeItems = [...partners, ...partners];

  return (
    <section
      className={`w-full bg-[#f4f4f4] py-10 sm:py-14 border-t border-b border-gray-200/60 overflow-hidden font-urbanist select-none ${className}`}
    >
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 mb-6 sm:mb-8 flex justify-start">
        {/* Top-left Badge Indicator */}
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 rounded-full border-[2.5px] border-orange-500 flex items-center justify-center shrink-0">
            <div className="w-1 h-1 rounded-full bg-orange-500" />
          </div>
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-gray-700">
            {badgeText}
          </span>
        </div>
      </div>

      {/* Moving Marquee Container */}
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden flex pointer-events-none">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 25,
          }}
          className="flex items-center gap-12 sm:gap-16 md:gap-24 w-max shrink-0 pr-12 sm:pr-16 md:pr-24"
        >
          {marqueeItems.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={`${partner.name}-${index}`}
                className="flex items-center gap-3 shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-200"
              >
                <Icon className={`w-8 h-8 sm:w-10 sm:h-10 ${partner.color}`} />
                <span className="text-base sm:text-lg font-semibold tracking-tight text-gray-800">
                  {partner.name}
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
