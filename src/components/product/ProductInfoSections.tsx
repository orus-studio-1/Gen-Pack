"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import CTAButton from "@/components/landing_page/CTAButton";

export const ProductInfoSections: React.FC = () => {
  return (
    <div className="w-full bg-white font-urbanist select-none">
      {/* ── Section 1: What We Make ─────────────────────────────── */}
      <section className="w-full py-16 sm:py-24 md:py-32 border-t border-slate-100">
        <div className="w-full max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Text */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-6"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-3.5 h-3.5 rounded-full border-[2.5px] border-orange-500 flex items-center justify-center shrink-0">
                  <div className="w-1 h-1 rounded-full bg-orange-500" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  MANUFACTURING EXCELLENCE
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1c1817] mb-6 font-urbanist leading-tight">
                What We Make
              </h2>

              <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-urbanist font-normal mb-8">
                <p>
                  We are one of the UK&apos;s leading corrugated cardboard product packaging manufacturers, producing high-quality packaging for global brands and local businesses alike.
                </p>
                <p>
                  Utilizing state-of-the-art Flexo and Litho printing techniques, we transform raw corrugated board into vibrant, eye-catching packaging that enhances shelf presence and protects goods in transit.
                </p>
                <p>
                  Our in-house structural designers craft custom-fitted boxes, internal inserts, and display units engineered for optimal strength and unboxing appeal.
                </p>
              </div>

              <CTAButton label="Get a Custom Quote" href="/contact" variant="solid" size="md" />
            </motion.div>

            {/* Right Image Container */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-6"
            >
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-gray-200/80 p-3 bg-slate-50">
                <img
                  src="https://www.atlaspackaging.co.uk/-/m/images/atlas/content-images-680x450px/what-we-make-680x450px.png"
                  alt="What We Make - Packaging Solutions"
                  className="w-full h-auto rounded-xl md:rounded-2xl object-cover"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Standard vs Bespoke (Light Neutral BG) ──── */}
      <section className="w-full bg-[#f8f8f8] py-16 sm:py-24 md:py-32 border-t border-b border-slate-200/60">
        <div className="w-full max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-6 order-2 lg:order-1"
            >
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-gray-200/80 p-3 bg-white">
                <img
                  src="https://www.atlaspackaging.co.uk/-/m/images/atlas/content-images-680x450px/standard-bespoke-or-inner-packaging-680x450px.png"
                  alt="Standard vs Bespoke Box Options"
                  className="w-full h-auto rounded-xl md:rounded-2xl object-cover"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            </motion.div>

            {/* Right Text */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-6 order-1 lg:order-2"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-3.5 h-3.5 rounded-full border-[2.5px] border-orange-500 flex items-center justify-center shrink-0">
                  <div className="w-1 h-1 rounded-full bg-orange-500" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  DESIGN & CUSTOMIZATION
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1c1817] mb-6 font-urbanist leading-tight">
                Standard, Bespoke or Inner Product Packaging
              </h2>

              <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-urbanist font-normal mb-8">
                <p>
                  Choosing between a standard box size and a fully custom die-cut container depends on your budget, transit security, and customer experience goals.
                </p>
                <p>
                  Standard sizes save tooling costs and accelerate fulfillment turnaround. Bespoke boxes, however, are precision-engineered to eliminate excess void fill and create unforgettable brand unboxing experiences.
                </p>
              </div>

              <CTAButton label="Request CAD Sample" href="/contact" variant="outline" size="md" textColor="text-[#1c1817]" iconColor="text-[#1c1817]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Product Packaging Capabilities ─────────── */}
      <section className="w-full py-16 sm:py-24 md:py-32">
        <div className="w-full max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Text */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-6"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-3.5 h-3.5 rounded-full border-[2.5px] border-orange-500 flex items-center justify-center shrink-0">
                  <div className="w-1 h-1 rounded-full bg-orange-500" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  ADVANCED SHEET PLANT MACHINERY
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1c1817] mb-6 font-urbanist leading-tight">
                Manufacturing Capabilities
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-urbanist mb-8">
                Our state-of-the-art sheet plant facility is equipped with automated die-cutters, multi-color rotary flexo printers, and high-speed gluer-folders to ensure strict quality standards, structural durability, and reliable on-time delivery.
              </p>

              <CTAButton label="Explore Print Options" href="/services" variant="solid" size="md" />
            </motion.div>

            {/* Right Image Container */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-6"
            >
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-gray-200/80 p-3 bg-slate-50">
                <img
                  src="https://www.atlaspackaging.co.uk/-/m/images/atlas/content-images-680x450px/capabilities-680x450px.jpg"
                  alt="Packaging Capabilities & Machinery"
                  className="w-full h-auto rounded-xl md:rounded-2xl object-cover"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductInfoSections;
