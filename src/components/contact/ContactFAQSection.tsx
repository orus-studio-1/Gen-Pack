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
    question: "What is your minimum order quantity?",
    answer:
      "Stock sizes start from 100 units. Custom die-cut structures usually start from 250 to 500 units, because a cutting forme has to be made first. Digital print lets us go lower for launches and sampling — tell us the volume and we will tell you honestly whether tooling is worth it yet.",
  },
  {
    id: "faq-2",
    number: "02",
    question: "How quickly will I get a quote and a sample?",
    answer:
      "Most quotes go out within one working day of receiving product dimensions, weight and the transit route. A physical structural sample follows in three to five working days, and it is free — we would rather you break it in testing than break a customer's order.",
  },
  {
    id: "faq-3",
    number: "03",
    question: "Is your packaging genuinely recyclable?",
    answer:
      "Yes, and that is a design constraint rather than a claim. Standard packs use kraft board, water-based inks, paper tape and paper-based inserts, so the whole pack goes into one recycling stream. Where a brief needs a barrier coating or a cold-chain liner, we say so up front and specify the most recoverable option available.",
  },
  {
    id: "faq-4",
    number: "04",
    question: "Can you replace the plastic in our current packaging?",
    answer:
      "That is most of what we do. Bubble wrap becomes paper bubble wrap or kraft cushioning, air pillows become paper void fill, EPS becomes honeycomb or moulded pulp, and plastic partitions become die-cut corrugated dividers. Send us your current pack and we will quote a like-for-like paper equivalent with test results.",
  },
  {
    id: "faq-5",
    number: "05",
    question: "What are your lead times and how do you deliver?",
    answer:
      "Standard lead time is seven to twelve working days from artwork sign-off, with repeat orders faster. We deliver flat-packed on our own fleet across the region and by contracted carrier elsewhere, and we can hold buffer stock at the plant against a scheduled call-off so your line never waits on cartons.",
  },
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
