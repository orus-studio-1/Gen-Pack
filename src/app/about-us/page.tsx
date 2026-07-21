import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/landing_page/Navbar";
import Footer from "@/components/landing_page/Footer";
import AboutHero from "@/components/about_us/AboutHero";
import BuiltOnTrust from "@/components/about_us/BuiltOnTrust";
import OurHistoryTimeline from "@/components/about_us/OurHistoryTimeline";
import WhatDrivesUs from "@/components/about_us/WhatDrivesUs";
import OurLocations from "@/components/about_us/OurLocations";
import TheTeam from "@/components/about_us/TheTeam";
import IndustryStandards from "@/components/about_us/IndustryStandards";
import AboutCTA from "@/components/about_us/AboutCTA";

export const metadata: Metadata = {
  title: "About Us | Genpact - Transport & Logistics",
  description:
    "Discover Genpact (Loginord) history, mission, leadership team, and global operations connecting Europe and North America.",
};

export default function AboutUsPage() {
  return (
    <main className="w-full min-h-screen relative bg-white selection:bg-orange-500 selection:text-white">
      {/* Existing Navbar component */}
      <Navbar />

      {/* Main About Us Page Sections */}
      <AboutHero />
      <BuiltOnTrust />
      <OurHistoryTimeline />
      <WhatDrivesUs />
      <OurLocations />
      <TheTeam />
      <IndustryStandards />
      <AboutCTA />

      {/* Existing Footer component */}
      <Footer />
    </main>
  );
}