"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  side: "left" | "right";
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Brief",
    description: "Product dimensions, weight, transit route and volumes.",
    side: "right",
  },
  {
    number: "02",
    title: "Design",
    description: "Structural CAD, board specification and artwork layout.",
    side: "left",
  },
  {
    number: "03",
    title: "Sample",
    description: "A free physical first article, drop and compression tested.",
    side: "right",
  },
  {
    number: "04",
    title: "Production",
    description: "Tooling cut, board run, printed and converted in our plant.",
    side: "left",
  },
  {
    number: "05",
    title: "Supply",
    description: "Scheduled call-offs, buffer stock and delivery to your line.",
    side: "right",
  },
];

export const OurProcess: React.FC = () => {
  return (
    <section className="w-full bg-white text-[#1c1817] py-24 md:py-36 font-urbanist select-none relative">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
        
        {/* Centered Section Header */}
        <div className="text-center mb-16 md:mb-28 max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-[#666666] uppercase mb-3 font-mono">
            HOW IT WORKS
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-urbanist text-[#1c1817] tracking-tight">
            The Process
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full max-w-5xl mx-auto">
          {/* Desktop Center 3-Track Vertical Line SVG (Solid | Animated Dashed | Solid) */}
          <svg
            className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 h-full pointer-events-none z-0 overflow-visible"
            width="24"
            height="100%"
            preserveAspectRatio="none"
          >
            {/* Left Solid Line (Soft & Refined) */}
            <line x1="4" y1="0" x2="4" y2="100%" stroke="#e2e8f0" strokeWidth="1" />

            {/* Center Animated Dashed Line */}
            <motion.line
              x1="12"
              y1="0"
              x2="12"
              y2="100%"
              stroke="#cbd5e1"
              strokeWidth="1.2"
              strokeDasharray="8 6"
              animate={{ strokeDashoffset: [0, -14] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
            />

            {/* Right Solid Line (Soft & Refined) */}
            <line x1="20" y1="0" x2="20" y2="100%" stroke="#e2e8f0" strokeWidth="1" />
          </svg>

          {/* Mobile Left 3-Track Vertical Line SVG */}
          <svg
            className="md:hidden absolute left-3 top-0 bottom-0 h-full pointer-events-none z-0 overflow-visible"
            width="20"
            height="100%"
            preserveAspectRatio="none"
          >
            <line x1="2" y1="0" x2="2" y2="100%" stroke="#e2e8f0" strokeWidth="1" />
            <motion.line
              x1="9"
              y1="0"
              x2="9"
              y2="100%"
              stroke="#cbd5e1"
              strokeWidth="1.2"
              strokeDasharray="8 6"
              animate={{ strokeDashoffset: [0, -14] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
            />
            <line x1="16" y1="0" x2="16" y2="100%" stroke="#e2e8f0" strokeWidth="1" />
          </svg>

          <div className="space-y-16 md:space-y-28 relative z-10">
            {processSteps.map((step, index) => {
              const isRight = step.side === "right";

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  className={`flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-16 items-start ${
                    isRight ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Left Column Box (Active if step is left-aligned on Desktop) */}
                  <div
                    className={`pl-12 md:pl-0 flex flex-col ${
                      !isRight ? "md:items-end md:text-right" : "md:opacity-0 md:pointer-events-none hidden md:flex"
                    }`}
                  >
                    {!isRight && (
                      <>
                        <div className="flex items-center gap-2 mb-2 justify-end">
                          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#555555] font-mono">
                            {step.number}
                          </span>
                          <span className="w-2.5 h-2.5 rounded-full border-2 border-orange-600 bg-transparent shrink-0" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-urbanist text-[#1c1817] mb-2 leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed font-urbanist max-w-sm">
                          {step.description}
                        </p>
                      </>
                    )}
                  </div>

                  {/* Right Column Box (Active if step is right-aligned on Desktop, or Mobile view) */}
                  <div
                    className={`pl-12 md:pl-0 flex flex-col ${
                      isRight ? "md:items-start md:text-left" : "md:opacity-0 md:pointer-events-none hidden md:flex"
                    }`}
                  >
                    {isRight && (
                      <>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-2.5 h-2.5 rounded-full border-2 border-orange-600 bg-transparent shrink-0" />
                          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#555555] font-mono">
                            {step.number}
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-urbanist text-[#1c1817] mb-2 leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed font-urbanist max-w-sm">
                          {step.description}
                        </p>
                      </>
                    )}
                  </div>

                  {/* Mobile Render Fallback */}
                  <div className="md:hidden flex flex-col -mt-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full border-2 border-orange-600 bg-transparent shrink-0" />
                      <span className="text-xs sm:text-sm font-bold tracking-widest text-[#555555] font-mono">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold font-urbanist text-[#1c1817] mb-2 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed font-urbanist">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurProcess;
