"use client";

import React from "react";
import { motion } from "framer-motion";

interface ContactPerson {
  name: string;
  role: string;
  email: string;
  phone: string;
}

const keyContactsData: ContactPerson[] = [
  {
    name: "Sales & Quotations",
    role: "New enquiries, pricing and samples",
    email: "sales@carapaceinc.com",
    phone: "+91 99 0362 2821",
  },
  {
    name: "Design Studio",
    role: "Structural CAD, artwork and prototypes",
    email: "design@carapace.in",
    phone: "+91 80 4567 8900",
  },
  {
    name: "Customer Support",
    role: "Live orders, dispatch and scheduling",
    email: "support@carapace.in",
    phone: "+91 98 3069 4795",
  },
];

export const KeyContacts: React.FC = () => {
  return (
    <section className="w-full bg-[#f4f4f6] text-[#1c1817] pb-24 sm:pb-36 font-urbanist select-none">
      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24">
        
        {/* Section Heading */}
        <div className="max-w-4xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold font-urbanist text-[#1c1817] tracking-tight">
            Key Contacts
          </h2>
        </div>

        {/* Contacts Card Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-3xl p-8 sm:p-10 md:p-12 shadow-xl border border-slate-200/80 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10"
        >
          {keyContactsData.map((contact) => (
            <div key={contact.name} className="flex flex-col space-y-2 font-urbanist">
              <h3 className="text-lg sm:text-xl font-bold text-[#1c1817]">
                {contact.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-normal mb-2">
                {contact.role}
              </p>
              
              <a
                href={`mailto:${contact.email}`}
                className="text-xs sm:text-sm font-semibold text-orange-600 hover:text-orange-700 underline underline-offset-4 transition-colors"
              >
                {contact.email}
              </a>
              
              <a
                href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
                className="text-xs sm:text-sm font-semibold text-orange-600 hover:text-orange-700 underline underline-offset-4 transition-colors"
              >
                {contact.phone}
              </a>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default KeyContacts;
