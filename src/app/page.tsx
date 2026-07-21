import HeroSection from "@/components/landing_page/HeroSection";
import QuickFactsSection from "@/components/landing_page/QuickFactsSection";
import ClientsPartnersSection from "@/components/landing_page/ClientsPartnersSection";
import WhyChooseUsSection from "@/components/landing_page/WhyChooseUsSection";
import ServicesSection from "@/components/landing_page/ServicesSection";
import IndustriesSection from "@/components/landing_page/IndustriesSection";
import TestimonialsSection from "@/components/landing_page/TestimonialsSection";
import Footer from "@/components/landing_page/Footer";
import Navbar from "@/components/landing_page/Navbar";

export default function Home() {
  return (
    <main className="w-full min-h-screen relative bg-[#1c1817]">
      <HeroSection />
      <QuickFactsSection />
      <ClientsPartnersSection />
      <ServicesSection />
      <IndustriesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}






