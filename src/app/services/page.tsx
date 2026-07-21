import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/landing_page/Navbar";
import Footer from "@/components/landing_page/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import CoreCapabilities from "@/components/services/CoreCapabilities";
import WhatSetsUsApart from "@/components/services/WhatSetsUsApart";
import OurProcess from "@/components/services/OurProcess";

export const metadata: Metadata = {
  title: "Services | Genpact - Transport & Logistics",
  description:
    "Tailored logistics solutions for a global world. From last-mile delivery to international freight, Genpact (Loginord) offers flexible and scalable logistics.",
};

export default function ServicesPage() {
  return (
    <main className="w-full min-h-screen relative bg-[#f4f4f6] selection:bg-orange-500 selection:text-white">
      {/* Shared Navbar */}
      <Navbar />

      {/* Services Hero */}
      <ServicesHero />

      {/* Core Capabilities Section */}
      <CoreCapabilities />

      {/* What Sets Us Apart Section */}
      <WhatSetsUsApart />

      {/* Our Process Section */}
      <OurProcess />

      {/* Shared Footer */}
      <Footer />
    </main>
  );
}