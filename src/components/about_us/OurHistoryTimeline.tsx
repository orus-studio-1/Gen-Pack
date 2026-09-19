"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

interface HistoryItem {
  year: string;
  title: string;
  text: string;
  image: string;
}

const historyData: HistoryItem[] = [
  {
    year: "2010",
    title: "One Corrugator. One Idea.",
    text: "Genpack started in a single shed with one corrugating line, supplying plain kraft cartons to local manufacturers who were tired of boxes that collapsed two pallets high.",
    image: "https://images.unsplash.com/photo-1727517786578-ff2bb896b852?auto=format&fit=crop&w=1200&q=72",
  },
  {
    year: "2013",
    title: "From Boxes to Structures.",
    text: "We added die-cutting and brought structural design in-house. Instead of selling customers the nearest stock size, we began engineering the pack around the product — and damage rates fell.",
    image: "https://images.unsplash.com/photo-1638560926839-cb90ababd947?auto=format&fit=crop&w=1200&q=72",
  },
  {
    year: "2017",
    title: "Print, and a Plastic Problem.",
    text: "Flexo and offset printing brought retail brands through the door. It also made something obvious: beautiful boxes were still being filled with bubble wrap, foam and plastic tape.",
    image: "https://images.unsplash.com/photo-1758183961426-88d64eb5f787?auto=format&fit=crop&w=1200&q=72",
  },
  {
    year: "2021",
    title: "Going Plastic-Free by Default.",
    text: "We rebuilt the protective range around paper: honeycomb, moulded pulp, kraft cushioning and paper void fill. Water-based inks and paper tape became the standard, not the premium option.",
    image: "https://images.unsplash.com/photo-1654078054613-a56cfcabdb84?auto=format&fit=crop&w=1200&q=72",
  },
  {
    year: "2025",
    title: "Packaging You Can Recycle.",
    text: "Today we supply e-commerce, FMCG, pharma, electronics and export manufacturers across the country — every product in the catalogue recyclable in a standard paper stream. Next: closing the loop on our own offcuts.",
    image: "https://images.unsplash.com/photo-1734357310900-4b513a3a5ae0?auto=format&fit=crop&w=1200&q=72",
  },
];

const ITEM_HEIGHT = 56; // height in px for each year item in the timeline stack

export const OurHistoryTimeline: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll driven animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map scroll progress 0..1 to 0..historyData.length - 1
    const step = 1 / historyData.length;
    const index = Math.min(
      historyData.length - 1,
      Math.max(0, Math.floor(latest / step))
    );
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  });

  const handleYearClick = (index: number) => {
    setActiveIndex(index);
    if (containerRef.current) {
      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight - window.innerHeight;
      const targetScroll = containerTop + (index / (historyData.length - 1)) * containerHeight;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  const activeItem = historyData[activeIndex];

  return (
    <div ref={containerRef} className="relative w-full bg-[#f4f4f6] text-[#1c1817] min-h-[250vh]">
      {/* Sticky view wrapper */}
      <section className="sticky top-0 w-full h-screen flex flex-col justify-center overflow-hidden px-6 md:px-16 lg:px-24">
        <div className="w-full max-w-[1400px] mx-auto py-8">
          {/* Main Section Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-urbanist text-[#1c1817] tracking-tight mb-10 md:mb-16">
            Our History
          </h2>

          {/* Timeline Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* Left Side: Timeline Indicator & Stack of Years */}
            <div className="lg:col-span-5 relative flex items-center min-h-[280px]">
              
              {/* Moving Orange Indicator Line */}
              <motion.div
                className="absolute left-0 right-[120px] sm:right-[140px] h-[56px] flex items-center gap-2 sm:gap-3 pointer-events-none z-10"
                initial={false}
                animate={{ y: activeIndex * ITEM_HEIGHT }}
                transition={{ type: "spring", stiffness: 350, damping: 32 }}
                style={{ top: "0px" }}
              >
                {/* Orange Ring Dot */}
                <div className="w-4 h-4 rounded-full border-[2.5px] border-orange-500 flex items-center justify-center flex-shrink-0 bg-[#f4f4f6]">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                </div>

                {/* "YEAR" label */}
                <span className="text-[11px] sm:text-xs font-bold font-sans tracking-widest text-[#1c1817] uppercase flex-shrink-0">
                  YEAR
                </span>

                {/* Horizontal Connecting Line */}
                <div className="h-[1.5px] bg-[#1c1817]/40 flex-1 min-w-[50px]" />
              </motion.div>

              {/* Vertical List of Years */}
              <div className="ml-auto w-[120px] sm:w-[140px] flex flex-col relative z-20">
                {historyData.map((item, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <button
                      key={item.year}
                      onClick={() => handleYearClick(index)}
                      style={{ height: `${ITEM_HEIGHT}px` }}
                      className="flex items-center justify-start text-left focus:outline-none transition-all duration-300 group cursor-pointer"
                    >
                      <span
                        className={`font-urbanist tracking-tight transition-all duration-300 ${
                          isActive
                            ? "text-3xl sm:text-4xl font-extrabold text-[#1c1817] scale-105"
                            : "text-2xl sm:text-3xl font-medium text-[#bcbcc2] hover:text-[#707075]"
                        }`}
                      >
                        {item.year}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Side: Active Milestone Content & Image */}
            <div className="lg:col-span-7 flex flex-col justify-start min-h-[420px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.year}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="flex flex-col"
                >
                  {/* Active Milestone Title */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-urbanist text-[#1c1817] leading-tight mb-3 tracking-tight">
                    {activeItem.title}
                  </h3>

                  {/* Active Milestone Description */}
                  <p className="text-[#4a4a50] text-sm sm:text-base md:text-lg font-normal leading-relaxed mb-6 max-w-xl">
                    {activeItem.text}
                  </p>

                  {/* Active Milestone Image */}
                  <div className="relative w-full h-[220px] sm:h-[300px] md:h-[360px] rounded-2xl md:rounded-3xl overflow-hidden shadow-md border border-black/5 bg-slate-200">
                    <Image
                      src={activeItem.image}
                      alt={activeItem.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default OurHistoryTimeline;

