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
    year: "1968",
    title: "One Corrugator. One Idea.",
    text: "It began in a single shed with one corrugating line and a simple belief: packaging should perform as reliably as the product it protects.",
    image: "https://images.unsplash.com/photo-1727517786578-ff2bb896b852?auto=format&fit=crop&w=1200&q=72",
  },
  {
    year: "1985",
    title: "From Boxes to Structures.",
    text: "We added die-cutting and brought structural design in-house, expanding our capabilities beyond conventional cartons to packaging engineered around the product, its protection and its journey through the supply chain.",
    image: "/about-us/history_boxes_to_structures.png",
  },
  {
    year: "2002",
    title: "Print, and a Plastic Problem.",
    text: "Built to Scale: Greater capacity brought greater capability. We strengthened our manufacturing infrastructure to support high-volume requirements with consistent production, specification control and dependable supply.",
    image: "https://images.unsplash.com/photo-1758183961426-88d64eb5f787?auto=format&fit=crop&w=1200&q=72",
  },
  {
    year: "2013",
    title: "Going Plastic-Free by Default.",
    text: " Expanding Our Capabilities: As the industries we served grew more diverse, our portfolio expanded across corrugated and protective formats, adapting to the distinct requirements of products, applications and operating environments.",
    image: "https://images.unsplash.com/photo-1654078054613-a56cfcabdb84?auto=format&fit=crop&w=1200&q=72",
  },
  {
    year: "2026",
    title: "Packaging You Can Recycle.",
    text: "Manufacturing for What’s Next: Today, we manufacture at scale across FMCG, food & beverage, electronics, apparel and automotive. Next: scaling what we make, expanding what we solve and extending where we serve.",
    image: "https://plus.unsplash.com/premium_photo-1726332459518-757a60823213?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
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
    <>
      {/* ── Mobile & tablet: vertical timeline (all milestones visible) ── */}
      <section className="lg:hidden w-full bg-[#f4f4f6] text-[#1c1817] px-6 sm:px-10 py-16 sm:py-20">
        <div className="w-full max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold font-urbanist text-[#1c1817] tracking-tight mb-10 sm:mb-12">
            Our History
          </h2>

          <ol className="relative">
            {historyData.map((item, index) => {
              const isLast = index === historyData.length - 1;
              return (
                <motion.li
                  key={item.year}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={`relative pl-9 sm:pl-11 ${isLast ? "" : "pb-12 sm:pb-14"}`}
                >
                  {/* Rail segment linking this milestone to the next */}
                  {!isLast && (
                    <span
                      aria-hidden
                      className="absolute left-[7px] top-[22px] bottom-0 w-[1.5px] bg-[#1c1817]/15"
                    />
                  )}

                  {/* Orange ring dot, centred on the year */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-[7px] w-4 h-4 rounded-full border-[2.5px] border-orange-600 flex items-center justify-center bg-[#f4f4f6]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-600" />
                  </span>

                  {/* Year */}
                  <div className="flex items-baseline gap-3">
                    <span className="text-[30px] leading-[30px] font-extrabold font-urbanist tracking-tight text-[#1c1817]">
                      {item.year}
                    </span>
                    <span className="text-[11px] font-bold tracking-widest uppercase text-[#1c1817]/45">
                      Year
                    </span>
                  </div>

                  {/* Title & description */}
                  <h3 className="mt-4 text-xl sm:text-2xl font-bold font-urbanist text-[#1c1817] leading-snug tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] sm:text-base text-[#4a4a50] font-normal leading-relaxed">
                    {item.text.trim()}
                  </p>

                  {/* Image */}
                  <div className="relative mt-5 w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-black/5 bg-slate-200">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ── Desktop: scroll-driven sticky timeline ── */}
    <div ref={containerRef} className="hidden lg:block relative w-full bg-[#f4f4f6] text-[#1c1817] min-h-[250vh]">
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
                <div className="w-4 h-4 rounded-full border-[2.5px] border-orange-600 flex items-center justify-center flex-shrink-0 bg-[#f4f4f6]">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-600" />
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
    </>
  );
};

export default OurHistoryTimeline;

