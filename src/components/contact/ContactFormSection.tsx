"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import CTAButton from "@/components/landing_page/CTAButton";

export const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        topic: "",
        message: "",
      });
    }, 4000);
  };

  return (
    <section className="w-full bg-[#f4f4f6] text-[#1c1817] py-20 sm:py-28 md:py-36 font-urbanist select-none">
      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-[#666666] uppercase mb-3 ">
            REACH OUT TO US.
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-urbanist text-[#1c1817] tracking-tight">
            Start the Conversation.
          </h2>
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-3xl p-6 sm:p-10 md:p-14 shadow-xl border border-slate-200/80 max-w-4xl mx-auto"
        >
          {submitted ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1c1817]">
                Thank you for reaching out!
              </h3>
              <p className="text-slate-600 max-w-md mx-auto">
                We have your enquiry. A packaging specialist will come back to you with a specification and a price — usually within one working day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 font-urbanist">
              {/* Row 1: Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#1c1817] mb-2 ">
                    01 Full Name*
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Smith"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-full border border-slate-300 text-[#1c1817] placeholder-slate-400 focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 text-sm sm:text-base transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#1c1817] mb-2 ">
                    02 Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Corp."
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-full border border-slate-300 text-[#1c1817] placeholder-slate-400 focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 text-sm sm:text-base transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#1c1817] mb-2 ">
                    03 Email*
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-full border border-slate-300 text-[#1c1817] placeholder-slate-400 focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 text-sm sm:text-base transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-[#1c1817] mb-2 ">
                    04 Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 555 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-full border border-slate-300 text-[#1c1817] placeholder-slate-400 focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 text-sm sm:text-base transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Contact Reason Dropdown */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-[#1c1817] mb-2 ">
                  05 How can we help you?
                </label>
                <div className="relative">
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-full border border-slate-300 text-[#1c1817] bg-white appearance-none focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 text-sm sm:text-base transition-colors pr-10 cursor-pointer"
                  >
                    <option value="">Select..</option>
                    <option value="boxes">Corrugated Packaging</option>
                    <option value="rolls">Corrugated Board, Rolls &amp; Sheets</option>
                    <option value="eco">Protective Packaging &amp; Inserts</option>
                    <option value="retail">Custom Packaging &amp; Die-Cut Solutions</option>
                    <option value="custom">Printing &amp; Branding</option>
                    <option value="custom">Bulk Order &amp; Quotations</option>
                    <option value="custom">Export &amp; International Enquiries</option>
                    <option value="custom">Partnership &amp; Distributions</option>
                    <option value="other">General Enquiry</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    ▼
                  </div>
                </div>
              </div>

              {/* Row 4: Message */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-[#1c1817] mb-2 ">
                  06 Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your requirements, including product specifications, quantities, delivery location or any other details that may help us assist you."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 rounded-2xl border border-slate-300 text-[#1c1817] placeholder-slate-400 focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 text-sm sm:text-base transition-colors resize-none"
                />
              </div>

              {/* Submit Button & Note */}
              <div className="pt-4 space-y-4">
                <div>
                  <CTAButton
                    type="submit"
                    label="Send Message"
                    variant="solid"
                    size="md"
                  />
                </div>

                <p className="text-xs sm:text-sm text-slate-500 font-normal">
                  Most quotes go out within one working day. Samples are free.
                </p>
              </div>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
};

export default ContactFormSection;
