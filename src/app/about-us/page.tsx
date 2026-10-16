import React from "react";
import type { Metadata } from "next";
import AboutHero from "@/components/about_us/AboutHero";
import BuiltOnTrust from "@/components/about_us/BuiltOnTrust";
import OurHistoryTimeline from "@/components/about_us/OurHistoryTimeline";
import WhatDrivesUs from "@/components/about_us/WhatDrivesUs";
import OurLocations from "@/components/about_us/OurLocations";
import TheTeam from "@/components/about_us/TheTeam";
import IndustryStandards from "@/components/about_us/IndustryStandards";
import AboutCTA from "@/components/about_us/AboutCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Carapace is a corrugated packaging manufacturer built around one idea: protective packaging should be fully recyclable by default. Our story, our plant and the people behind it.",
};

export default function AboutUsPage() {
  return (
    <main className="w-full min-h-screen relative bg-white selection:bg-orange-600 selection:text-white">
      {/* Main About Us Page Sections */}
      <AboutHero />
      <BuiltOnTrust />
      <OurHistoryTimeline />
      <WhatDrivesUs />
      <OurLocations />
      {/*<TheTeam />*/}
      {/*<IndustryStandards />*/}
      <AboutCTA />


    </main>
  );
}