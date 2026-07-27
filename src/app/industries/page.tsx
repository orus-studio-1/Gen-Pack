import React from "react";
import type { Metadata } from "next";
import TailoredIndustriesHero from "@/components/industries/TailoredIndustriesHero";
import IndustriesWeServeSection from "@/components/industries/IndustriesWeServeSection";
import WhyExpertiseMattersSection from "@/components/industries/WhyExpertiseMattersSection";

import TestimonialsSection from "@/components/landing_page/TestimonialsSection";

export const metadata: Metadata = {
    title: "Industries | Genpact - Tailored Logistics Solutions",
    description:
        "From perishable foods to high-value electronics, Loginord crafts specialized supply-chain solutions that fit your requirements and regulations.",
};

export default function IndustriesPage() {
    return (
        <main className="w-full max-w-full min-h-screen relative bg-white selection:bg-orange-500 selection:text-white overflow-x-clip">
            <TailoredIndustriesHero />
            <WhyExpertiseMattersSection />
            <IndustriesWeServeSection />
            <TestimonialsSection />

        </main>
    );
}