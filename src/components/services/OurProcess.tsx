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
    <section className="w-full bg-white text-[#1c1817] py-20 sm:py-24 md:py-36 font-urbanist select-none relative">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
        
        {/* Centered Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-28 max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-[#666666] uppercase mb-3 font-mono">
            HOW IT WORKS
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-urbanist text-[#1c1817] tracking-tight">
            The Process
          </h2>
        </div>

        {/* ── Phones: timeline nodes (numbered circles on the centre line,
               text beside each circle, alternating sides) ── */}
        <ol className="sm:hidden relative mx-auto max-w-md">
          {/* Centre line, running from the first circle's centre to the last */}
          <span
            aria-hidden
            className="absolute left-1/2 top-[15px] bottom-[15px] w-px -translate-x-1/2 bg-slate-200"
          />
          {processSteps.map((step, index) => {
            const isRight = index % 2 === 0;
            const isFirst = index === 0;
            return (
              <motion.li
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className="relative grid grid-cols-[1fr_44px_1fr] items-start [&:not(:last-child)]:mb-7"
              >
                <span
                  className={`col-start-2 row-start-1 justify-self-center z-10 w-[30px] h-[30px] rounded-full border-2 border-orange-600 flex items-center justify-center font-mono text-[11px] font-bold ${
                    isFirst ? "bg-orange-600 text-white" : "bg-white text-orange-600"
                  }`}
                >
                  {step.number}
                </span>
                <div
                  className={`row-start-1 min-w-0 pt-1 ${
                    isRight ? "col-start-3 text-left" : "col-start-1 text-right"
                  }`}
                >
                  <h3 className="text-[19px] font-bold font-urbanist text-[#1c1817] leading-tight tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] text-[#555555] leading-relaxed font-urbanist text-pretty">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ol>

        {/* ── Tablet & desktop: zigzag timeline ── */}
        <div className="hidden sm:block relative w-full max-w-5xl mx-auto">
          {/* Center 3-Track Vertical Line (Solid | Animated Dashed | Solid), all screen sizes */}
          <svg
            className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 h-full pointer-events-none z-0 overflow-visible"
            width="24"
            height="100%"
            preserveAspectRatio="none"
            aria-hidden
          >
            <line x1="4" y1="0" x2="4" y2="100%" stroke="#e2e8f0" strokeWidth="1" />
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
            <line x1="20" y1="0" x2="20" y2="100%" stroke="#e2e8f0" strokeWidth="1" />
          </svg>

          <div className="sm:space-y-16 md:space-y-28 relative z-10">
            {processSteps.map((step, index) => {
              const isRight = step.side === "right";

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  className="grid grid-cols-2 gap-12 md:gap-16 items-start"
                >
                  {/* Left column: filled when the step sits on the left */}
                  <div
                    className={`flex flex-col min-w-0 ${
                      !isRight ? "items-end text-right" : "invisible"
                    }`}
                    aria-hidden={isRight}
                  >
                    {!isRight && (
                      <>
                        <div className="flex items-center gap-2 mb-2 justify-end">
                          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#555555] font-mono">
                            {step.number}
                          </span>
                          <span className="w-2.5 h-2.5 rounded-full border-2 border-orange-600 bg-transparent shrink-0" />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold font-urbanist text-[#1c1817] mb-2 leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-lg text-[#555555] font-normal leading-relaxed font-urbanist max-w-sm text-pretty">
                          {step.description}
                        </p>
                      </>
                    )}
                  </div>

                  {/* Right column: filled when the step sits on the right */}
                  <div
                    className={`flex flex-col min-w-0 ${
                      isRight ? "items-start text-left" : "invisible"
                    }`}
                    aria-hidden={!isRight}
                  >
                    {isRight && (
                      <>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-2.5 h-2.5 rounded-full border-2 border-orange-600 bg-transparent shrink-0" />
                          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#555555] font-mono">
                            {step.number}
                          </span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold font-urbanist text-[#1c1817] mb-2 leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-lg text-[#555555] font-normal leading-relaxed font-urbanist max-w-sm text-pretty">
                          {step.description}
                        </p>
                      </>
                    )}
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
