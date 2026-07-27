import React from "react";
import type { Metadata } from "next";
import ProductsHero from "@/components/product/ProductsHero";
import ProductsCatalogSection from "@/components/product/ProductsCatalogSection";
import ProductInfoSections from "@/components/product/ProductInfoSections";
import ProductSpecsCTA from "@/components/product/ProductSpecsCTA";

export const metadata: Metadata = {
  title: "Our Products | Genpact - Precision Packaging & Corrugated Solutions",
  description:
    "From corrugated boxes and shipping cartons to custom-printed packaging. Discover precision-crafted products built for strength, reliability, and performance.",
};

export default function ProductsPage() {
  return (
    <main className="w-full min-h-screen relative bg-white selection:bg-orange-500 selection:text-white font-urbanist">
      <ProductsHero />
      <ProductsCatalogSection />
      <ProductInfoSections />
      <ProductSpecsCTA />
    </main>
  );
}