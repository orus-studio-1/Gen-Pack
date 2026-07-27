import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Navbar from "@/components/landing_page/Navbar";
import Footer from "@/components/landing_page/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Genpact - Freight & Logistics",
  description: "Your Freight, delivered with Precision. Across Europe and the US.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={urbanist.variable}>
      <body className="font-urbanist antialiased bg-slate-950 text-slate-100 overflow-x-clip selection:bg-orange-500 selection:text-white">
        <SmoothScroll>
          <Navbar />

          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

