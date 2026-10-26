"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "faq-1",
    number: "01",
    question: "What types of packaging do you manufacture?",
    answer:
      "We manufacture 3-ply, 5-ply, and 7-ply corrugated boxes, custom cartons, printed packaging, die-cut boxes, sheets, rolls, and protective packaging. From everyday shipping cartons to specialized industrial applications, our packaging is designed around the product and its requirements.",
  },
  {
    id: "faq-2",
    number: "02",
    question: "Can you manufacture boxes to our exact specifications?",
    answer:
      "Absolutely. We manufacture boxes to specified dimensions, material grades, structural designs, and printing requirements. Existing samples or technical drawings can also be used as references to ensure the packaging meets your specifications.",
  },
  {
    id: "faq-3",
    number: "03",
    question: "How do I know which packaging is right for my product?",
    answer:
      "It depends on what you're packing and how it's handled. Product weight, fragility, stacking, storage, and transportation all influence the right choice of materials, board strength, and box construction.",
  },
  {
    id: "faq-4",
    number: "04",
    question: "What's the difference between 3-ply, 5-ply, and 7-ply boxes?",
    answer:
      "The difference lies in the number of paper layers and corrugated mediums. Three-ply generally suits lighter applications, while five-ply and seven-ply are commonly used for more demanding requirements. Actual strength also depends on paper grade, flute configuration, and box design.",
  },
  {
    id: "faq-5",
    number: "05",
    question: "Can you replicate our existing packaging?",
    answer:
      "Yes. We can reproduce existing packaging using physical samples, design schematics, or approved specifications. Where appropriate, we can also recommend adjustments to improve structural performance, material efficiency, or overall functionality.",
  },
  {
    id: "faq-6",
    number: "06",
    question: "Can you print our branding on the boxes?",
    answer:
      "Of course. We manufacture printed and unprinted boxes featuring logos, product information, QR codes, handling instructions, and other branding elements. Printing options depend on the artwork, colour requirements, packaging material, and order volume.",
  },
  {
    id: "faq-7",
    number: "07",
    question: "What is your minimum order quantity?",
    answer:
      "Minimum order quantities depend on box dimensions, material specifications, printing, and design complexity. Custom orders may require higher volumes to account for production setup costs and manufacturing efficiency.",
  },
  {
    id: "faq-8",
    number: "08",
    question: "How is the price of corrugated packaging determined?",
    answer:
      "Pricing depends on box dimensions, paper grade, construction, printing requirements, and order volume. Larger quantities can often lower the cost per unit by spreading production setup costs across more quantities.",
  },
  {
    id: "faq-9",
    number: "09",
    question: "What information do you need for a quotation?",
    answer:
      "Product dimensions, estimated quantity, weight, printing requirements, and delivery location are a good starting point. Design schematics, reference images, or existing samples can help establish a more accurate specification and quotation.",
  },
  {
    id: "faq-10",
    number: "10",
    question: "Can you handle bulk and recurring orders?",
    answer:
      "Yes. We support bulk and recurring packaging requirements across industries. Production planning considers order volumes, approved specifications, and delivery schedules to support consistent supply and operational continuity",
  },
  {
    id: "faq-11",
    number: "11",
    question: "Do you deliver across India and internationally?",
    answer:
      "Yes. With manufacturing operations based in Kolkata, we supply businesses across India and support international packaging enquiries. Delivery arrangements depend on order volumes, destination, and logistics requirements.",
  },
  {
    id: "faq-12",
    number: "12",
    question: "How can I get started with Carapace?",
    answer:
      "Getting started is simple. Submit your packaging requirements, estimated quantity, and delivery location through our enquiry form. Existing samples or design specifications can also be included to help streamline the quotation process.",
  }
  
];

export const ContactFAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-[#f4f4f6] text-[#1c1817] py-20 sm:py-28 md:py-36 font-urbanist select-none">
      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-[#666666] uppercase mb-3 font-mono">
            WE&apos;RE HERE TO HELP YOU
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-urbanist text-[#1c1817] tracking-tight mb-5 leading-tight">
            Frequently <br />
            Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Still unsure? Share your requirements, we will help you with the needful.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-5">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onClick={() => toggleFAQ(faq.id)}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 cursor-pointer transition-shadow hover:shadow-md"
              >
                {/* Top Row: Number Badge & Open/Close Toggle Button */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full border-2 border-orange-600 bg-transparent shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#555555] font-mono">
                      {faq.number}
                    </span>
                  </div>

                  {/* Circular Plus/Cross Toggle */}
                  <div
                    className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-300 ${isOpen
                        ? "border-orange-600 text-orange-600 bg-orange-50/50"
                        : "border-slate-300 text-slate-600 bg-white"
                      }`}
                  >
                    {isOpen ? (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M1 1l12 12M13 1L1 13" />
                      </svg>
                    ) : (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 1v12M1 7h12" />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Question Title */}
                <h3 className="text-xl sm:text-2xl font-semibold font-urbanist text-[#1c1817] tracking-tight mt-3">
                  {faq.question}
                </h3>

                {/* Animated Expandable Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed pt-2 border-t border-slate-100">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ContactFAQSection;
