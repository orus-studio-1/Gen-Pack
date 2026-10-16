"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface VehicleCategory {
  id: string;
  number: string;
  title: string;
  imageSrc: string;
  description: string;
  bullets: string[];
}

export const FleetCategoriesAccordion: React.FC = () => {
  const categories: VehicleCategory[] = [
    {
      id: "cat-1",
      number: "01",
      title: "Full-Load Plant Dispatch",
      imageSrc: "/Logistic1.png",
      description:
        "Bulk runs straight from the corrugator to your warehouse. Flat-packed bundles are strapped, corner-protected and loaded so nothing arrives creased or crushed.",
      bullets: [
        "Up to 25 tonnes of flat-packed board per load",
        "Closed bodies — no rain, no road spray on kraft",
        "Bundles banded and edge-protected before loading",
      ],
    },
    {
      id: "cat-2",
      number: "02",
      title: "Scheduled Call-Off Deliveries",
      imageSrc: "/Logistic2.png",
      description:
        "Annual pricing, monthly releases. We hold your buffer stock at the plant and deliver against your production schedule so cartons never occupy your floor space.",
      bullets: [
        "Buffer stock held at our warehouse, not yours",
        "Fixed weekly or fortnightly delivery slots",
        "Pallet labels matched to your goods-in system",
      ],
    },
    {
      id: "cat-3",
      number: "03",
      title: "City Vans for Urgent Top-Ups",
      imageSrc: "/Logistic3.png",
      description:
        "For the day a promotion lands early or a line runs hot. Same-city vans cover short-notice top-ups and sample deliveries without waiting for the next full load.",
      bullets: [
        "Same-day dispatch within the metro area",
        "Ideal for samples, first articles and shortfalls",
        "Tail-lift equipped for kerbside unloading",
      ],
    },
    {
      id: "cat-4",
      number: "04",
      title: "Export & Forwarder Handover",
      imageSrc: "/Logistic4.png",
      description:
        "For customers shipping overseas, we deliver direct to your freight forwarder or container yard with the paperwork and stack pattern already sorted.",
      bullets: [
        "Delivery to port, ICD or forwarder warehouse",
        "Container-optimised stacking patterns",
        "ISPM-15 exempt — no fumigation certificates needed",
      ],
    },
  ];

  // Only one card open initially (index 0)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-[#320d01] text-white py-20 sm:py-28 lg:py-36 font-urbanist select-none">
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Sticky Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start pt-4 pb-8 space-y-8">
            <div className="space-y-6">
              {/* Badge */}
              <div className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-orange-600 shrink-0" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6" stroke="#ea580c" strokeWidth="2.5" />
                  <circle cx="8" cy="8" r="2" fill="#ea580c" />
                </svg>
                <span className="font-bold text-xs md:text-sm tracking-[0.2em] uppercase text-slate-300">
                  HOW YOUR ORDER ARRIVES
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Four ways we get packaging to you
              </h2>

              {/* Description Paragraphs */}
              <div className="space-y-5 text-slate-300 font-urbanist text-base sm:text-lg leading-relaxed max-w-lg">
                <p>
                  Corrugated is bulky, light and easy to damage — which makes the last leg surprisingly easy to get wrong. Running our own vehicles means we control how bundles are stacked, strapped and unloaded.
                </p>
                <p>
                  Whether you need a full trailer once a month or a van of samples this afternoon, the delivery method is part of the quote, not an afterthought.
                </p>
              </div>
            </div>

            {/* CTA Button Group */}
            <div className="pt-4 flex items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-orange-600/60 bg-transparent text-white font-semibold text-sm sm:text-base hover:bg-orange-600 transition-all duration-300"
              >
                <span>Talk to Our Fleet Team</span>
                <span className="w-8 h-8 rounded-full border border-orange-600/80 flex items-center justify-center group-hover:border-white transition-colors">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Accordion Cards */}
          <div className="lg:col-span-7 space-y-5 pt-2">
            {categories.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.id}
                  className="bg-white text-[#1c1817] rounded-3xl p-6 sm:p-8 shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Card Header (Clickable) */}
                  <div
                    onClick={() => toggleAccordion(index)}
                    className="flex items-center justify-between cursor-pointer group select-none"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* Target Icon + Number */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        <svg className="w-3.5 h-3.5 text-orange-600 shrink-0" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="6" stroke="#ea580c" strokeWidth="2.5" />
                          <circle cx="8" cy="8" r="2" fill="#ea580c" />
                        </svg>
                        <span className="text-xs sm:text-sm font-bold text-slate-500 tracking-wider">
                          {item.number}
                        </span>
                      </div>

                      {/* Category Title */}
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-urbanist text-[#1c1817] tracking-tight group-hover:text-orange-600 transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    {/* Circle Toggle Button (+ or X) */}
                    <button
                      type="button"
                      aria-label="Toggle category details"
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center transition-all shrink-0 ${
                        isOpen
                          ? "border-orange-600/50 text-orange-600"
                          : "border-slate-300 text-slate-700 group-hover:border-orange-600 group-hover:text-orange-600"
                      }`}
                    >
                      {isOpen ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      )}
                    </button>
                  </div>

                  {/* Accordion Expandable Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 space-y-6">
                          {/* Image */}
                          <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] rounded-2xl overflow-hidden shadow-md bg-slate-900">
                            <Image
                              src={item.imageSrc}
                              alt={item.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                          </div>

                          {/* Description */}
                          <p className="text-slate-700 text-base sm:text-lg font-urbanist leading-relaxed">
                            {item.description}
                          </p>

                          {/* Bullet Points */}
                          <ul className="space-y-2.5 pt-1">
                            {item.bullets.map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-3 text-slate-800 font-urbanist text-sm sm:text-base">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-800 mt-2 shrink-0" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetCategoriesAccordion;
