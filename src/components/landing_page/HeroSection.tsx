"use client";

import React from "react";
import TopPattern from "./TopPattern";
import BackgroundVideo from "./BackgroundVideo";
import { IMAGES } from "@/data/products";
import CTAButton from "./CTAButton";

interface HeroSectionProps {
  titleLine1?: string;
  titleLine2?: string;
  locationText?: string;
  subtextLine1?: string;
  subtextLine2?: string;
  ctaText?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  titleLine1 = "Engineering Packaging that Powers",
  titleLine2 = "Modern Supply Chains",
  locationText = "Manufactured in India. Shipped worldwide.",
  subtextLine1 = "Recyclable corrugated rolls, inserts and specialty products.",
  subtextLine2 = "Built around your product, not a catalogue.",
  ctaText = "Explore Our Products",
}) => {
  return (
    <section className="relative w-full max-w-full min-h-screen sm:min-h-[720px] flex flex-col justify-between overflow-hidden font-urbanist text-white select-none">
      {/* Background Video with token color overlays */}
      <BackgroundVideo videoSrc="/homepage_hero.mp4" />

      {/* Top Edge-to-Edge Moving SVG Arrow Banner (Behind Navbar) */}
      <div className="absolute top-0 inset-x-0 w-full max-w-full z-10 pt-2 sm:pt-3 opacity-60 pointer-events-none overflow-hidden">
        <TopPattern />
      </div>

      {/* Main Content Area */}
      <div className="w-full max-w-[1500px] h-full flex flex-col justify-between px-4 sm:px-8 md:px-16 lg:px-24 pt-24 sm:pt-32 md:pt-36 pb-4 sm:pb-6 relative z-20 mx-auto">
        {/* Center Section: Main Headline & Subtitle */}
        <div className="mt-4 sm:mt-8 md:mt-12 mb-auto w-full max-w-none">
          <h1 className="text-xl xs:text-2xl sm:text-[1.9rem] md:text-[2.15rem] lg:text-[2.9rem] xl:text-[3.8rem] 2xl:text-[4.4rem] font-semibold tracking-tight leading-[1.15] sm:leading-[1.1] text-white drop-shadow-sm break-words sm:whitespace-nowrap">
            <span className="block">{titleLine1}</span>
            <span className="block">{titleLine2}</span>
          </h1>

          {/* Location Indicator with Orange Circle Ring */}
          <div className="flex items-center gap-2.5 sm:gap-3 mt-3 sm:mt-5">
            <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-[2px] sm:border-[2.5px] border-orange-600 flex items-center justify-center shrink-0">
              <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-orange-600" />
            </div>
            <p className="text-sm sm:text-base md:text-lg text-slate-100 font-normal tracking-wide">
              {locationText}
            </p>
          </div>
        </div>

        {/* Bottom Section: Subtext & CTA Button */}
        <div className="w-full flex pt-6 sm:pt-10 flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 pb-2 mt-6">
          {/* Bottom Left Logistics Description */}
          <div className="max-w-sm space-y-1">
            <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-snug font-normal">
              {subtextLine1}
            </p>
            <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-snug font-normal">
              {subtextLine2}
            </p>
          </div>

          {/* Bottom Right CTA Action */}
          <div className="self-start sm:self-end">
            <CTAButton label={ctaText} href="/product" variant="outline" size="sm" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;