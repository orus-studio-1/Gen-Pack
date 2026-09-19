import React from "react";
import type { Metadata } from "next";
import TailoredIndustriesHero from "@/components/industries/TailoredIndustriesHero";
import IndustriesWeServeSection from "@/components/industries/IndustriesWeServeSection";
import WhyExpertiseMattersSection from "@/components/industries/WhyExpertiseMattersSection";

import TestimonialsSection from "@/components/landing_page/TestimonialsSection";

export const metadata: Metadata = {
    title: "Industries We Package For",
    description:
        "From fresh produce and pharmaceuticals to electronics and heavy engineering, Genpack specifies corrugated packaging against how each sector actually ships.",
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