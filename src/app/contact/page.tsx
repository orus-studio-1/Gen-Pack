import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/landing_page/Navbar";

import ContactHero from "@/components/contact/ContactHero";
import ContactFormSection from "@/components/contact/ContactFormSection";
import KeyContacts from "@/components/contact/KeyContacts";
import OurLocations from "@/components/about_us/OurLocations";
import ContactFAQSection from "@/components/contact/ContactFAQSection";

export const metadata: Metadata = {
  title: "Contact Us | Genpact - Transport & Logistics",
  description:
    "Get in touch with Genpact (Loginord). Whether you're looking for a quote, have questions, or want to explore our logistics solutions.",
};

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen relative bg-[#f4f4f6] selection:bg-orange-500 selection:text-white">

      {/* Contact Hero */}
      <ContactHero />

      {/* Contact Form Section ("Start the Conversation") */}
      <ContactFormSection />

      {/* Key Contacts */}
      <KeyContacts />

      {/* Our Locations */}
      <OurLocations />

      {/* Frequently Asked Questions */}
      <ContactFAQSection />

      {/* Shared Footer */}

    </main>
  );
}

