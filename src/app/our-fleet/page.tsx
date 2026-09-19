import React from "react";
import type { Metadata } from "next";
import FleetHero from "@/components/fleet/FleetHero";
import FleetByTheNumbers from "@/components/fleet/FleetByTheNumbers";
import FleetCategoriesAccordion from "@/components/fleet/FleetCategoriesAccordion";
import ConnectedFleetSection from "@/components/fleet/ConnectedFleetSection";
import FleetCTA from "@/components/fleet/FleetCTA";


export const metadata: Metadata = {
    title: "Our Delivery Fleet",
    description:
        "Own fleet, scheduled routes and full-load dispatch — how Genpack gets packaging from the plant to your line without the flat-pack arriving crushed.",
};

export default function OurFleetPage() {
    return (
        <main className="w-full min-h-screen relative bg-white selection:bg-orange-500 selection:text-white">
            <FleetHero />
            <FleetByTheNumbers />
            <FleetCategoriesAccordion />
            <ConnectedFleetSection />
            <FleetCTA />

        </main>
    );
}