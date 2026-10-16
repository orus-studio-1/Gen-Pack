"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CTAButton from "@/components/landing_page/CTAButton";
import { IMAGES } from "@/data/products";

interface InfoBlock {
  badge: string;
  title: string;
  paragraphs: string[];
  image: string;
  alt: string;
  cta: { label: string; href: string; variant: "solid" | "outline" };
  /** Flip the image to the left on large screens. */
  reversed?: boolean;
  dark?: boolean;
}

const BLOCKS: InfoBlock[] = [
  {
    badge: "MANUFACTURING",
    title: "What we make",
    paragraphs: [
      "Carapace is a corrugated packaging manufacturer, not a reseller. Board is converted, printed, die-cut and glued under one roof, which is why we can hold a specification consistent across a hundred thousand units.",
      "Every grade we run starts as FSC-certified or post-consumer recycled kraft. Nothing leaves the plant with plastic tape, plastic windows or plastic laminate unless a customer specifically asks for it — and we will usually talk you out of it.",
      "In-house structural designers build custom-fitted boxes, internal inserts and display units engineered for strength first and shelf appeal second.",
    ],
    image: IMAGES.factory,
    alt: "Corrugated board being converted on the plant floor",
    cta: { label: "Get a Custom Quote", href: "/contact", variant: "solid" },
  },
  {
    badge: "DESIGN & CUSTOMISATION",
    title: "Standard, bespoke, or inner packaging",
    paragraphs: [
      "A stock RSC carton is the cheapest box you can buy — until you add void fill, pay to ship air, and absorb the damage claims that come with a loose fit.",
      "Standard sizes save tooling cost and ship the same week. Bespoke die-cut boxes are engineered to the millimetre around your product, which removes filler, cuts dimensional freight weight and turns the opening into something a customer photographs.",
      "We quote both, side by side, with the break-even volume marked — so the decision is a number, not a sales pitch.",
    ],
    image: IMAGES.boxBlank,
    alt: "Printed die-cut corrugated blank before folding",
    cta: { label: "Request a Free CAD Sample", href: "/contact", variant: "outline" },
    reversed: true,
  },
  {
    badge: "PRINT & FINISHING",
    title: "Branding that survives the supply chain",
    paragraphs: [
      "Up to six-colour flexo for shipping cartons and four-colour offset litho lamination for retail-facing packs, finished with matt or gloss lamination, spot UV, embossing, debossing and foil.",
      "All standard print runs use water-based and soy-based inks, so the finished pack still goes into the same kerbside recycling stream as a plain brown box.",
      "Barcodes, batch codes, sequential numbering and QR codes can be printed variably, giving you traceability from the line to the customer's doorstep.",
    ],
    image: IMAGES.pressInk,
    alt: "Industrial printing press running packaging artwork",
    cta: { label: "Explore Print Options", href: "/services", variant: "solid" },
  },
  {
    badge: "SUSTAINABILITY",
    title: "Recyclable by default, not by upgrade",
    paragraphs: [
      "Corrugated board is one of the most recovered packaging materials in the world — but only when it stays free of plastic film, foam and mixed-material laminates.",
      "That is the constraint we design inside. Paper void fill instead of air pillows, honeycomb and moulded pulp instead of EPS, paper tape instead of PVC, and inserts cut from the same board as the carton so the whole pack goes into one bin.",
      "If a brief genuinely needs a barrier coating or a cold-chain liner, we will say so and specify the most recoverable option available.",
    ],
    image: IMAGES.boxRecycle,
    alt: "Corrugated box carrying a recycling mark",
    cta: { label: "See Our Eco Range", href: "/product?category=eco-innovations", variant: "outline" },
    reversed: true,
    dark: true,
  },
];

export const ProductInfoSections: React.FC = () => {
  return (
    <div className="w-full bg-white font-urbanist select-none">
      {BLOCKS.map((block, index) => (
        <section
          key={block.title}
          className={`w-full py-16 sm:py-24 md:py-28 ${
            block.dark
              ? "bg-[#f8f8f8] border-t border-b border-slate-200/60"
              : "border-t border-slate-100"
          }`}
        >
          <div className="w-full max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Copy */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`lg:col-span-6 ${
                  block.reversed ? "order-1 lg:order-2" : ""
                }`}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-3.5 h-3.5 rounded-full border-[2.5px] border-orange-600 flex items-center justify-center shrink-0">
                    <div className="w-1 h-1 rounded-full bg-orange-600" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {block.badge}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1c1817] mb-6 leading-tight">
                  {block.title}
                </h2>

                <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal mb-8">
                  {block.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>

                <CTAButton
                  label={block.cta.label}
                  href={block.cta.href}
                  variant={block.cta.variant}
                  size="md"
                  {...(block.cta.variant === "outline"
                    ? { textColor: "text-[#1c1817]", iconColor: "text-[#1c1817]" }
                    : {})}
                />
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className={`lg:col-span-6 ${
                  block.reversed ? "order-2 lg:order-1" : ""
                }`}
              >
                <div className="relative w-full aspect-[3/2] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-gray-200/80 bg-slate-100">
                  <Image
                    src={`${block.image}?auto=format&fit=crop&w=1200&q=72`}
                    alt={block.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductInfoSections;
