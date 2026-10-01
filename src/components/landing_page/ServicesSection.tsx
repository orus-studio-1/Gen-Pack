"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import { IMAGES } from "@/data/products";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  blurb: string;
  imageSrc: string;
  alt: string;
  href: string;
}

interface ServicesSectionProps {
  titleLine1?: string;
  titleLine2?: string;
  subtitle?: string;
  className?: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  titleLine1 = "Packaging built",
  titleLine2 = "around your product.",
  subtitle = "From a plain kraft roll to a printed, die-cut retail pack — everything converted, printed and tested under one roof.",
  className = "",
}) => {
  const services: ServiceItem[] = [
    {
      id: "service-1",
      number: "01",
      title: "Corrugated Rolls & Sheets",
      blurb:
        "Single face, 2-ply, 3-ply and double-wall kraft rolls slit to your width — the plastic-free way to wrap, cushion and separate.",
      imageSrc: IMAGES.paperRolls,
      alt: "Kraft paper rolls stacked on a rack",
      href: "/product?category=corrugated-rolls",
    },
    {
      id: "service-2",
      number: "02",
      title: "Custom Boxes & Die-Cutting",
      blurb:
        "Bespoke structure cut to the millimetre around your product, so you stop paying to ship air.",
      imageSrc: IMAGES.boxBlank,
      alt: "Printed die-cut corrugated blank",
      href: "/product?category=corrugated-boxes",
    },
    {
      id: "service-3",
      number: "03",
      title: "Plastic-Free Protection",
      blurb:
        "Paper void fill, honeycomb, moulded pulp and kraft cushioning that replace bubble wrap, air pillows and EPS foam entirely.",
      imageSrc: IMAGES.paperSack,
      alt: "Crumpled kraft paper used as protective void fill",
      href: "/product?category=eco-innovations",
    },
    {
      id: "service-4",
      number: "04",
      title: "Retail & Shelf-Ready Displays",
      blurb:
        "Shelf-ready cartons, counter units and POS displays that go from the pallet to the shelf without a second touch.",
      imageSrc: IMAGES.shelfBox,
      alt: "Shelf-ready packaging on a retail aisle",
      href: "/product?category=retail-packaging",
    },
    {
      id: "service-5",
      number: "05",
      title: "Print, Finishing & Branding",
      blurb:
        "From multi-colour flexographic printing to litho lamination, embossing, foil and specialty finishes.",
      imageSrc: IMAGES.press,
      alt: "Printing press running packaging artwork",
      href: "/product?category=customization-print",
    },
    {
      id: "service-6",
      number: "06",
      title: "Structural Design & Testing",
      blurb:
        "CAD-led structural design, prototyping and performance testing — with board grades tailored to your product, load and transit requirements.",
      imageSrc: IMAGES.craftDesk,
      alt: "Packaging design desk with kraft samples",
      href: "/services",
    },
  ];

  return (
    <section
      id="services"
      className={`relative w-full bg-white text-gray-900 py-14 sm:py-28 lg:py-36 font-urbanist select-none scroll-mt-24 ${className}`}
    >
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-start">
          {/* Left Column: Sticky Title & Subtitle */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start pt-2 sm:pt-10 pb-4 sm:pb-8">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[3.75rem] font-semibold tracking-tight text-gray-900 leading-[1.08]">
              <span className="block">{titleLine1}</span>
              <span className="block">{titleLine2}</span>
            </h2>
            <p className="text-sm sm:text-lg text-gray-800 font-normal mt-3 sm:mt-5 leading-relaxed max-w-md">
              {subtitle}
            </p>
            <div className="mt-6 sm:mt-8">
              <CTAButton
                label="Browse the Catalogue"
                href="/product"
                variant="outline"
                size="sm"
                textColor="text-[#1c1817]"
                iconColor="text-[#1c1817]"
              />
            </div>
          </div>

          {/* Right Column: Scrollable Services Stack */}
          <div className="lg:col-span-7 pt-4 lg:pt-[35vh] space-y-12 sm:space-y-24 pb-12 sm:pb-20">
            {services.map((service) => (
              <motion.a
                key={service.id}
                href={service.href}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col group"
              >
                {/* Number Badge */}
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <div className="w-3.5 h-3.5 rounded-full border-[2.5px] border-orange-500 flex items-center justify-center shrink-0">
                    <div className="w-1 h-1 rounded-full bg-orange-500" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-gray-700 uppercase">
                    {service.number}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-2 sm:mb-3 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl mb-4 sm:mb-6">
                  {service.blurb}
                </p>

                {/* Service Card Image */}
                <div className="relative w-full h-[220px] sm:h-[340px] md:h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-gray-100/80">
                  <Image
                    src={`${service.imageSrc}?auto=format&fit=crop&w=1200&q=72`}
                    alt={service.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={service.number === "01"}
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
