"use client";

import React, { useEffect, useRef, useState } from "react";
import TopPattern from "./TopPattern";

interface QuickFactsSectionProps {
  badgeText?: string;
  titleLine1?: string;
  titleLine2?: string;
  titleLine3?: string;
}

function parseStatValue(raw: string): { prefix: string; number: number; suffix: string; decimals: number } {
  const match = raw.match(/^([^\d]*)([\d.]+)(.*)$/);
  if (!match) {
    return { prefix: "", number: 0, suffix: raw, decimals: 0 };
  }
  const [, prefix, numStr, suffix] = match;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return { prefix, number: parseFloat(numStr), suffix, decimals };
}

function useCountUp(raw: string, start: boolean, duration = 1400) {
  const { prefix, number, suffix, decimals } = parseStatValue(raw);
  const [display, setDisplay] = useState(() => prefix + (0).toFixed(decimals) + suffix);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!start || hasRun.current) return;
    hasRun.current = true;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(prefix + number.toFixed(decimals) + suffix);
      return;
    }

    let rafId: number;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = number * eased;
      setDisplay(prefix + current.toFixed(decimals) + suffix);

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setDisplay(prefix + number.toFixed(decimals) + suffix);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [start]);

  return display;
}

const StatItem: React.FC<{ value: string; label: string; start: boolean; delay: number }> = ({
  value,
  label,
  start,
  delay,
}) => {
  const animatedValue = useCountUp(value, start);

  return (
    <div
      className="flex flex-col transition-all duration-700 ease-out"
      style={{
        transitionDelay: `${delay}ms`,
        opacity: start ? 1 : 0,
        transform: start ? "translateY(0)" : "translateY(16px)",
      }}
    >
      <span className="text-3xl xs:text-4xl sm:text-5xl lg:text-[3.75rem] font-semibold tracking-tight text-gray-900 leading-none tabular-nums">
        {animatedValue}
      </span>
      <span className="text-xs sm:text-sm md:text-base text-gray-500 font-normal mt-2 tracking-normal leading-snug">
        {label}
      </span>
    </div>
  );
};

export const QuickFactsSection: React.FC<QuickFactsSectionProps> = ({
  badgeText = "QUICK FACTS",
  titleLine1 = "Trusted by brands",
  titleLine2 = "that ship millions",
  titleLine3 = "of parcels a year.",
}) => {
  const stats = [
    {
      value: "58+",
      label: "Years of Industry Experience.",
    },
    {
      value: "50+",
      label: "Million Boxes Manufactured Annually.",
    },
    {
      value: "12+",
      label: "Industries Served.",
    },
    {
      value: "100%",
      label: "Custom Packaging Solutions.",
    },
  ];

  const gridRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = gridRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center bg-white text-gray-900 overflow-hidden font-urbanist select-none py-16 sm:py-20 md:py-28">
      {/* Background Reusable SVG Arrow Pattern (Static mode) */}
      <div className="absolute top-[60%] -translate-y-1/2 inset-x-0 w-full z-0 pointer-events-none opacity-60">
        <TopPattern
          strokeColor="#e5e7eb"
          opacity={0.6}
          strokeWidth={6}
          tileSize="h-24 sm:h-28 md:h-32 lg:h-36 w-24 sm:w-28 md:w-32 lg:w-36"
          animated={false}
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-4 sm:px-8 md:px-16 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-y-12 items-start">
          {/* Left Column: Badge & Main Headline (Top Left) */}
          <div className="lg:col-span-4 max-w-sm">
            {/* Quick Facts Badge with Orange Circle Ring */}
            <div className="flex items-center gap-1.5 mb-3 sm:mb-5">
              <div className="w-3.5 h-3.5 rounded-full border-[2.5px] border-orange-600 flex items-center justify-center shrink-0">
                <div className="w-1 h-1 rounded-full bg-orange-600" />
              </div>
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-gray-700">
                {badgeText}
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] font-semibold tracking-tight text-gray-900 leading-[1.08]">
              <span className="block">{titleLine1}</span>
              <span className="block">{titleLine2}</span>
              <span className="block">{titleLine3}</span>
            </h2>
          </div>

          {/* Right Column: 2x2 Metrics Grid (Pushed to Far Right & Lower Row) */}
          <div className="lg:col-span-6 lg:col-start-7 pt-2 sm:pt-12 lg:pt-36">
            <div ref={gridRef} className="grid grid-cols-2 gap-x-6 sm:gap-x-12 gap-y-8 sm:gap-y-16">
              {stats.map((stat, index) => (
                <StatItem
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  start={inView}
                  delay={index * 120}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickFactsSection;