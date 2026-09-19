"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CTAButton from "@/components/landing_page/CTAButton";
import { VerticalPatternTile } from "@/components/landing_page/TopPattern";

interface Feature {
  label: string;
  detail: string;
}

interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  imageSrc: string;
  description: string;
  features: Feature[];
}

const capabilities: CapabilityItem[] = [
  {
    id: "cap-1",
    number: "01",
    title: "Structural Design & Prototyping",
    imageSrc:
      "https://images.unsplash.com/photo-1638560926839-cb90ababd947?auto=format&fit=crop&q=80&w=1400",
    description:
      "Our design studio models the pack around your product in CAD, cuts a physical sample on a digital table, and iterates until it fits — before any tooling is committed.",
    features: [
      {
        label: "Free CAD samples:",
        detail: "Physical first article before tooling.",
      },
      {
        label: "Customs-ready:",
        detail: "Drop, compression and vibration testing.",
      },
      {
        label: "Board engineering:",
        detail: "Flute, ply and GSM matched to the route.",
      },
    ],
  },
  {
    id: "cap-2",
    number: "02",
    title: "Printing & Finishing",
    imageSrc:
      "https://images.unsplash.com/photo-1758183961426-88d64eb5f787?auto=format&fit=crop&q=80&w=1400",
    description:
      "Up to six-colour flexo for shipping cartons and four-colour offset litho lamination for retail packs, finished in-line with lamination, spot UV, embossing and foil.",
    features: [
      {
        label: "Water-based inks:",
        detail: "The printed pack stays recyclable.",
      },
      {
        label: "Colour-matched proofs:",
        detail: "Signed off before the run starts.",
      },
      {
        label: "Variable data print:",
        detail: "Barcodes, batch codes and QR per unit.",
      },
    ],
  },
  {
    id: "cap-3",
    number: "03",
    title: "Manufacturing & Converting",
    imageSrc:
      "https://images.unsplash.com/photo-1693031630157-7ecc8d06de63?auto=format&fit=crop&q=80&w=1400",
    description:
      "Corrugating, die-cutting, gluing and stitching under one roof, so a specification approved on a sample is the specification that runs at a hundred thousand units.",
    features: [
      {
        label: "Batch testing:",
        detail: "Bursting strength and ECT, every run.",
      },
      {
        label: "Coatings & laminates:",
        detail: "Moisture, wax and food-grade options.",
      },
      {
        label: "Assembly-ready supply:",
        detail: "Flat-packed, banded and pallet-labelled.",
      },
    ],
  },
  {
    id: "cap-4",
    number: "04",
    title: "Scheduled Supply & Stock Holding",
    imageSrc:
      "https://images.unsplash.com/photo-1672552226380-486fe900b322?auto=format&fit=crop&q=80&w=1400",
    description:
      "Scheduled call-offs, buffer stock held at the plant and delivery straight to your packing hall — so your line never stops waiting on cartons.",
    features: [
      {
        label: "Call-off contracts:",
        detail: "Priced annually, released monthly.",
      },
      {
        label: "Buffer stock:",
        detail: "Held at the plant, not your warehouse.",
      },
      {
        label: "Own delivery fleet:",
        detail: "Flat-packed loads that arrive square.",
      },
    ],
  },
];

export const CoreCapabilities: React.FC = () => {
  return (
    <section className="relative w-full bg-[#1c1817] text-white py-20 sm:py-28 lg:py-36 font-urbanist select-none">
      {/* Background Vertical Static Chevron SVG Pattern on Left */}
      <div className="absolute top-0 left-0 w-64 md:w-80 h-full pointer-events-none z-0 opacity-40 overflow-hidden flex flex-col items-center pt-8">
        {Array.from({ length: 8 }).map((_, i) => (
          <VerticalPatternTile
            key={`v-pattern-cap-${i}`}
            strokeColor="#7c2410"
            strokeWidth={7}
            opacity={0.6}
            tileSize="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72"
          />
        ))}
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Sticky Title, Subtitle & CTA Button */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start pt-6 sm:pt-10 pb-8 flex flex-col justify-between min-h-[460px]">
            <div>
              <p className="text-xs sm:text-sm font-bold tracking-widest text-slate-400 uppercase mb-4 font-mono">
                KEY EXPERTISE
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold tracking-tight text-white leading-[1.06] font-urbanist mb-6">
                Core Capabilities
              </h2>
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-md font-urbanist">
                Everything between the brief and the pallet — design, print, conversion and supply, handled by one team.
              </p>
            </div>

            {/* Bottom Left CTA Button */}
            <div className="pt-10">
              <CTAButton
                label="Get in Touch"
                href="/contact"
                variant="outline"
                size="sm"
              />
            </div>
          </div>

          {/* Right Column: Scrollable Core Capability Cards */}
          <div className="lg:col-span-7 pt-6 lg:pt-12 space-y-16 sm:space-y-24 pb-20">
            {capabilities.map((cap) => (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col group"
              >
                {/* Number Badge & Title Row */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3.5 h-3.5 rounded-full border-[2.5px] border-orange-500 flex items-center justify-center shrink-0">
                    <div className="w-1 h-1 rounded-full bg-orange-500" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-300 font-mono uppercase">
                    {cap.number}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-urbanist text-white tracking-tight mb-6">
                  {cap.title}
                </h3>

                {/* Capability Photo */}
                <div className="relative w-full h-[240px] sm:h-[300px] md:h-[360px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl mb-6 bg-slate-900 border border-white/10">
                  <Image
                    src={cap.imageSrc}
                    alt={cap.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Description Paragraph */}
                <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-6 font-urbanist">
                  {cap.description}
                </p>

                {/* Feature Bullet Points */}
                <div className="space-y-3 font-urbanist">
                  {cap.features.map((feat) => (
                    <div key={feat.label} className="text-base text-slate-300 leading-relaxed">
                      <strong className="text-white font-bold mr-1.5">
                        {feat.label}
                      </strong>
                      <span>{feat.detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;
