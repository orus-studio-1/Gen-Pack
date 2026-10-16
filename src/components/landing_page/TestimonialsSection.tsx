"use client";

import React from "react";
import Image from "next/image";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  company: string;
  avatar: string;
}

interface TestimonialsSectionProps {
  titleLine1?: string;
  titleLine2?: string;
  subtitle?: string;
  className?: string;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  titleLine1 = "What Our",
  titleLine2 = "Clients Say",
  subtitle = "Packaging is judged on arrival, not on the quote. Here is what customers say after the first few thousand units have shipped.",
  className = "",
}) => {
  const testimonials: Testimonial[] = [
    {
      id: "test-1",
      quote:
        "Carapace redesigned our mailer so the product fits without void fill. Damage claims dropped by two thirds and our dimensional freight bill came down with them.”",
      name: "Ananya Rao",
      company: "Head of Operations, D2C skincare brand",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    },
    {
      id: "test-2",
      quote:
        "“We moved our entire export line off plastic wrap onto their honeycomb and paper cushioning. Same protection, and our EPR reporting got a lot simpler.”",
      name: "Rahul Menon",
      company: "Plant Manager, appliance manufacturer",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    },
    {
      id: "test-3",
      quote:
        "“Their shelf-ready cartons cut our store replenishment time noticeably. The buyer noticed the shelf presence before we even mentioned it.”",
      name: "Priya Sharma",
      company: "Category Lead, national FMCG",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    },
    {
      id: "test-4",
      quote:
        "“Ventilated cartons that actually hold up through pre-cooling and a four-day transit. Our fruit arrives in the condition it left in.”",
      name: "Vikram Patel",
      company: "Export Head, fresh produce exporter",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section className={`w-full bg-[#f4f4f4] py-14 sm:py-24 lg:py-32 font-urbanist select-none ${className}`}>
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-10 lg:gap-16 mb-8 sm:mb-16">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[3.75rem] font-semibold tracking-tight text-gray-900 leading-[1.08] shrink-0">
            <span className="block">{titleLine1}</span>
            <span className="block">{titleLine2}</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl xl:text-[1.3rem] text-gray-600 font-normal max-w-xl lg:max-w-2xl xl:max-w-3xl leading-relaxed md:text-left">
            {subtitle}
          </p>
        </div>

        {/* Main Grid Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: Responsive Video Container */}
          <div className="lg:col-span-4 w-full aspect-video lg:aspect-auto h-auto min-h-[200px] sm:min-h-[260px] lg:h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm relative group">
            <video
              src="/hero_section_bg.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-2xl sm:rounded-3xl transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Right Column: 2x2 Testimonials Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-200/60 flex flex-col justify-between space-y-4 sm:space-y-6 hover:shadow-[0_8px_35px_rgba(0,0,0,0.07)] transition-all duration-300"
              >
                {/* Quote Text */}
                <p className="text-sm sm:text-base lg:text-[1.15rem] text-gray-800 font-medium leading-relaxed sm:leading-[1.35]">
                  {test.quote}
                </p>

                {/* Author Information */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden shrink-0 shadow-inner bg-gray-100">
                    <Image
                      src={test.avatar}
                      alt={test.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 leading-snug truncate">
                      {test.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 font-normal truncate">
                      {test.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

