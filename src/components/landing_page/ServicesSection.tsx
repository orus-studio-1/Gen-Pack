"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  imageSrc: string;
  alt: string;
}

interface ServicesSectionProps {
  titleLine1?: string;
  titleLine2?: string;
  subtitle?: string;
  className?: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  titleLine1 = "Logistics that",
  titleLine2 = "fit your needs.",
  subtitle = "From temperature-controlled transport to regional distribution — we’ve got it covered.",
  className = "",
}) => {
  const services: ServiceItem[] = [
    {
      id: "service-1",
      number: "01",
      title: "Full & Partial Truckloads",
      imageSrc: "/Logistic1.png",
      alt: "Full and Partial Truckloads Transport",
    },
    {
      id: "service-2",
      number: "02",
      title: "Regional Distribution",
      imageSrc: "/Logistic2.png",
      alt: "Regional Distribution Containers",
    },
    {
      id: "service-3",
      number: "03",
      title: "Warehousing & Fulfillment",
      imageSrc: "/Logistic3.png",
      alt: "Warehousing and Fulfillment Racks",
    },
    {
      id: "service-4",
      number: "04",
      title: "Refrigerated Transport",
      imageSrc: "/Logistic4.png",
      alt: "Refrigerated Transport Trucks",
    },
    {
      id: "service-5",
      number: "05",
      title: "3PL Subcontracting",
      imageSrc: "/Logistic6.png",
      alt: "3PL Subcontracting Logistics Fleet",
    },
  ];

  return (
    <section className={`relative w-full bg-white text-gray-900 py-20 sm:py-28 lg:py-36 font-urbanist select-none ${className}`}>
      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Sticky Title & Subtitle */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start pt-6 sm:pt-10 pb-8">
            <h2 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-semibold tracking-tight text-gray-900 leading-[1]">
              <span className="block">{titleLine1}</span>
              <span className="block">{titleLine2}</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-800 font-normal mt-5 leading-relaxed max-w-md">
              {subtitle}
            </p>
          </div>

          {/* Right Column: Scrollable Services Stack (Starting at Bottom Offset) */}
          <div className="lg:col-span-7 pt-12 lg:pt-[35vh] space-y-16 sm:space-y-24 pb-20">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col"
              >
                {/* Number Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3.5 h-3.5 rounded-full border-[2.5px] border-orange-500 flex items-center justify-center shrink-0">
                    <div className="w-1 h-1 rounded-full bg-orange-500" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-gray-700 uppercase">
                    {service.number}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">
                  {service.title}
                </h3>

                {/* Service Card Image */}
                <div className="relative w-full h-[300px] sm:h-[380px] md:h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-gray-100/80 group">
                  <Image
                    src={service.imageSrc}
                    alt={service.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={service.number === "01"}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
