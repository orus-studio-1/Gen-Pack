import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Navbar from "@/components/landing_page/Navbar";
import Footer from "@/components/landing_page/Footer";
import { SITE } from "@/data/site";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Carapace — Sustainable Corrugated Packaging Manufacturer",
    template: "%s | Carapace",
  },
  description: SITE.description,
  keywords: [
    "sustainable packaging",
    "corrugated boxes",
    "corrugated rolls",
    "eco-friendly packaging",
    "custom printed boxes",
    "plastic-free packaging",
    "shelf ready packaging",
    "export packaging",
  ],
  openGraph: {
    title: "Carapace — Sustainable Corrugated Packaging Manufacturer",
    description: SITE.description,
    siteName: "Carapace",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={urbanist.variable}>
      <body className="font-urbanist antialiased bg-slate-950 text-slate-100 overflow-x-clip selection:bg-orange-600 selection:text-white">
        <SmoothScroll>
          <Navbar />

          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

