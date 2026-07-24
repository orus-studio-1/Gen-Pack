"use client";

import React from "react";
import Navbar from "./Navbar";
import TopPattern from "./TopPattern";
import BackgroundVideo from "./BackgroundVideo";
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
  titleLine1 = "Your Freight, delivered",
  titleLine2 = "with Precision.",
  locationText = "Across Europe and the US.",
  subtextLine1 = "Reliable transport. Real-time tracking.",
  subtextLine2 = "Tailored logistics for your business.",
  ctaText = "Know Our Services",
}) => {
  return (
    <section className="relative w-full max-w-full min-h-screen sm:min-h-[720px] flex flex-col justify-between overflow-hidden font-urbanist text-white select-none">
      {/* Background Video with token color overlays */}
      <BackgroundVideo videoSrc="/hero_section_bg.mp4" />

      {/* Top Edge-to-Edge Moving SVG Arrow Banner (Behind Navbar) */}
      <div className="absolute top-0 inset-x-0 w-full max-w-full z-10 pt-2 sm:pt-3 opacity-60 pointer-events-none overflow-hidden">
        <TopPattern />
      </div>

      {/* Main Content Area */}
      <div className="w-full max-w-[1500px] h-full flex flex-col justify-between px-4 sm:px-8 md:px-16 lg:px-24 pt-24 sm:pt-32 md:pt-36 pb-8 sm:pb-12 relative z-20 mx-auto">
        {/* Center Section: Main Headline & Subtitle */}
        <div className="mt-4 sm:mt-8 md:mt-12 mb-auto max-w-6xl">
          {/* Main Big Headline */}
          <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-[5.8rem] xl:text-[5.5rem] font-semibold tracking-tight leading-[1.1] sm:leading-[1.05] text-white drop-shadow-sm break-words">
            <span className="block">{titleLine1}</span>
            <span className="block">{titleLine2}</span>
          </h1>

          {/* Location Indicator with Orange Circle Ring */}
          <div className="flex items-center gap-2.5 sm:gap-3 mt-3 sm:mt-5">
            <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-[2px] sm:border-[2.5px] border-orange-500 flex items-center justify-center shrink-0">
              <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-orange-500" />
            </div>
            <p className="text-sm sm:text-lg md:text-xl text-slate-100 font-normal tracking-wide">
              {locationText}
            </p>
          </div>
        </div>

        {/* Bottom Section: Subtext & CTA Button */}
        <div className="w-full flex pt-8 sm:pt-12 flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 pb-2">
          {/* Bottom Left Logistics Description */}
          <div className="max-w-md space-y-1">
            <p className="text-slate-200 text-xs sm:text-base md:text-lg leading-snug font-normal">
              {subtextLine1}
            </p>
            <p className="text-slate-200 text-xs sm:text-base md:text-lg leading-snug font-normal">
              {subtextLine2}
            </p>
          </div>

          {/* Bottom Right CTA Action */}
          <div className="self-start sm:self-end">
            <CTAButton label={ctaText} href="#services" variant="outline" size="sm" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

