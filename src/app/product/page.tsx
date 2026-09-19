import { Suspense } from "react";
import type { Metadata } from "next";
import ProductsHero from "@/components/product/ProductsHero";
import ProductsCatalogSection from "@/components/product/ProductsCatalogSection";
import ProductInfoSections from "@/components/product/ProductInfoSections";
import PricingFactorsSection from "@/components/product/PricingFactorsSection";
import ProductSpecsCTA from "@/components/product/ProductSpecsCTA";

export const metadata: Metadata = {
  title: "Sustainable Packaging Products",
  description:
    "Corrugated rolls, FEFCO boxes, eco-friendly void fill, retail displays, industrial bulk packaging and custom print — 70+ recyclable packaging solutions manufactured by Genpack.",
};

export default function ProductsPage() {
  return (
    <main className="w-full min-h-screen relative bg-white selection:bg-orange-500 selection:text-white font-urbanist">
      <ProductsHero />
      <Suspense fallback={<div className="min-h-[60vh]" />}>
        <ProductsCatalogSection />
      </Suspense>
      <ProductInfoSections />
      <PricingFactorsSection />
      <ProductSpecsCTA />
    </main>
  );
}
