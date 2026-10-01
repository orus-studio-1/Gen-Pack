import React from "react";
import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import CoreCapabilities from "@/components/services/CoreCapabilities";
import WhatSetsUsApart from "@/components/services/WhatSetsUsApart";
import OurProcess from "@/components/services/OurProcess";

export const metadata: Metadata = {
  title: "Packaging Services",
  description:
    "Structural design, CAD prototyping, transit testing, flexo and offset printing, and just-in-time supply — the full packaging service behind every Carapace carton.",
};

export default function ServicesPage() {
  return (
    <main className="w-full min-h-screen relative bg-[#f4f4f6] selection:bg-orange-500 selection:text-white">
      {/* Services Hero */}
      <ServicesHero />

      {/* Core Capabilities Section */}
      <CoreCapabilities />

      {/* What Sets Us Apart Section */}
      <WhatSetsUsApart />

      {/* Our Process Section */}
      <OurProcess />

      {/* Shared Footer */}

    </main>
  );
}