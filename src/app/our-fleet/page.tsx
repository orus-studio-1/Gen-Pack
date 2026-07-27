import React from "react";
import type { Metadata } from "next";
import FleetHero from "@/components/fleet/FleetHero";
import FleetByTheNumbers from "@/components/fleet/FleetByTheNumbers";
import FleetCategoriesAccordion from "@/components/fleet/FleetCategoriesAccordion";
import ConnectedFleetSection from "@/components/fleet/ConnectedFleetSection";


export const metadata: Metadata = {
    title: "Our Fleet | Genpact - Transport & Logistics",
    description:
        "Modern vehicles, advanced technology, total reliability — engineered to move your cargo safely and on time across Europe and North America.",
};

export default function OurFleetPage() {
    return (
        <main className="w-full min-h-screen relative bg-white selection:bg-orange-500 selection:text-white">
            <FleetHero />
            <FleetByTheNumbers />
            <FleetCategoriesAccordion />
            <ConnectedFleetSection />

        </main>
    );
}