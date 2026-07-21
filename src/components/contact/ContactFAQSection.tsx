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
    question: "Do you handle temperature-controlled shipments internationally?",
    answer:
      "Yes. We operate a modern fleet of refrigerated trailers certified for international transport, with real-time temperature monitoring and full HACCP compliance. Whether you're shipping perishable food, pharmaceuticals, or temperature-sensitive components, we ensure consistent cold-chain integrity across borders.",
  },
  {
    id: "faq-2",
    number: "02",
    question: "What's the average quote response time?",
    answer:
      "Our dedicated commercial team typically responds to standard freight and logistics quote requests within 2 to 4 business hours. For complex 3PL or custom multi-modal proposals, we provide a detailed proposal within 24 hours.",
  },
  {
    id: "faq-3",
    number: "03",
    question: "Can I request dedicated capacity for seasonal peaks?",
    answer:
      "Yes, we offer seasonal volume planning and dedicated asset allocation for high-demand periods. By locking in capacity ahead of peak seasons, you ensure reliable throughput and guaranteed SLAs without unexpected spot-rate spikes.",
  },
  {
    id: "faq-4",
    number: "04",
    question: "How do you handle customs clearance for cross-border freight?",
    answer:
      "Our in-house customs specialists manage all export/import documentation, tariff classifications, and regulatory compliance. We handle clearance directly at major European ports and US hubs to prevent transit delays.",
  },
  {
    id: "faq-5",
    number: "05",
    question: "What digital tracking and integration options are available?",
    answer:
      "We provide full API and EDI integration for automated order processing, live GPS asset tracking, automated status milestones, and real-time electronic Proof of Delivery (ePOD) directly to your ERP or TMS dashboard.",
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
            WE'RE HERE TO HELP YOU
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-urbanist text-[#1c1817] tracking-tight mb-5 leading-tight">
            Frequently <br />
            Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            We've answered some of the most common questions below. Still unsure? Reach out — our team is here to help.
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
                    <span className="w-2.5 h-2.5 rounded-full border-2 border-orange-500 bg-transparent shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#555555] font-mono">
                      {faq.number}
                    </span>
                  </div>

                  {/* Circular Plus/Cross Toggle */}
                  <div
                    className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-300 ${isOpen
                        ? "border-orange-500 text-orange-600 bg-orange-50/50"
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
