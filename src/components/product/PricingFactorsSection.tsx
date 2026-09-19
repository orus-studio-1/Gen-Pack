"use client";

import React from "react";
import { motion } from "framer-motion";
import { PRICING_FACTORS } from "@/data/products";
import CTAButton from "@/components/landing_page/CTAButton";

export const PricingFactorsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#f8f8f8] py-16 sm:py-24 md:py-28 border-t border-slate-200/60 font-urbanist">
      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Intro */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-3.5 h-3.5 rounded-full border-[2.5px] border-orange-500 flex items-center justify-center shrink-0">
                <div className="w-1 h-1 rounded-full bg-orange-500" />
              </div>
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-slate-500">
                TRANSPARENT PRICING
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1c1817] mb-5 leading-tight">
              What actually moves the price of a box
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              Corrugated pricing is not a mystery — it comes down to how much
              fibre goes into the pack, how many times it passes through a
              machine, and how far it travels. Here is what we look at when we
              quote.
            </p>
            <CTAButton
              label="Get a Costed Quote"
              href="/contact"
              variant="solid"
              size="md"
            />
          </div>

          {/* Factor grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-200 rounded-2xl overflow-hidden border border-slate-200">
              {PRICING_FACTORS.map((item, index) => (
                <motion.div
                  key={item.factor}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white p-6 sm:p-7"
                >
                  <span className="block text-xs font-bold text-orange-600 font-mono mb-3">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-bold text-[#1c1817] mb-2 tracking-tight">
                    {item.factor}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.impact}
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-slate-500 mt-5 leading-relaxed">
              Every quote includes the board grade, GSM, ply, print
              specification and delivered price — no hidden tooling or freight
              surprises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingFactorsSection;
