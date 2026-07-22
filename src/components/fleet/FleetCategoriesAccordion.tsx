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
      title: "Heavy-duty Semi-Trailers",
      imageSrc: "/Logistic1.png",
      description:
        "Our backbone for long-haul and full-truckload (FTL) shipments. Robust chassis and high-capacity trailers keep your freight secure across borders.",
      bullets: [
        "Payload up to 25 tons",
        "Available as dry van, curtain side, refrigerated",
        "ADR-compliant options for hazardous goods",
      ],
    },
    {
      id: "cat-2",
      number: "02",
      title: "Refrigerated Trailers",
      imageSrc: "/Logistic2.png",
      description:
        "Precision temperature control for perishables and pharmaceuticals. Our refrigerated units maintain exact setpoints from door to door.",
      bullets: [
        "Temperature range -25 °C to +25 °C",
        "Real-time temperature & humidity monitoring",
        "HACCP-certified and GMP-aligned",
      ],
    },
    {
      id: "cat-3",
      number: "03",
      title: "Urban Express Delivery Vans",
      imageSrc: "/Logistic3.png",
      description:
        "Agile, high-efficiency transport tailored for quick city replenishment, retail store delivery, and express last-mile logistics.",
      bullets: [
        "Payload up to 3.5 tons",
        "Euro 6 & electric eco-friendly power units",
        "Hydraulic tail-lift for effortless street unloading",
      ],
    },
    {
      id: "cat-4",
      number: "04",
      title: "Specialized & ADR Units",
      imageSrc: "/Logistic4.png",
      description:
        "Certified transport solutions engineered for hazardous chemicals, high-value electronics, and oversized heavy cargo.",
      bullets: [
        "Certified ADR driver & safety equipment",
        "Real-time spill & telemetry hazard monitoring",
        "Custom securing & heavy-load chassis options",
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
                <svg className="w-3.5 h-3.5 text-orange-500 shrink-0" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6" stroke="#f97316" strokeWidth="2.5" />
                  <circle cx="8" cy="8" r="2" fill="#f97316" />
                </svg>
                <span className="font-bold text-xs md:text-sm tracking-[0.2em] uppercase text-slate-300">
                  VEHICLE CATEGORIES
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Built for Every Route and Requirement
              </h2>

              {/* Description Paragraphs */}
              <div className="space-y-5 text-slate-300 font-urbanist text-base sm:text-lg leading-relaxed max-w-lg">
                <p>
                  At Loginord, versatility is key. Our fleet is strategically diversified to meet the full spectrum of transportation demands — from heavy industrial freight to time-sensitive cold chain deliveries and agile urban distribution.
                </p>
                <p>
                  Whether you're moving raw materials, consumer goods, or specialized cargo, we have the right vehicle to ensure safety, compliance, and on-time performance.
                </p>
              </div>
            </div>

            {/* CTA Button Group */}
            <div className="pt-4 flex items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-orange-500/60 bg-transparent text-white font-semibold text-sm sm:text-base hover:bg-orange-500 transition-all duration-300"
              >
                <span>Talk to Our Fleet Team</span>
                <span className="w-8 h-8 rounded-full border border-orange-500/80 flex items-center justify-center group-hover:border-white transition-colors">
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
                        <svg className="w-3.5 h-3.5 text-orange-500 shrink-0" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="6" stroke="#f97316" strokeWidth="2.5" />
                          <circle cx="8" cy="8" r="2" fill="#f97316" />
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
                          ? "border-orange-500/50 text-orange-500"
                          : "border-slate-300 text-slate-700 group-hover:border-orange-500 group-hover:text-orange-600"
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
