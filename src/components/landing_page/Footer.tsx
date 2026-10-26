"use client";

import React, { useState } from "react";
import Link from "next/link";
import TopPattern from "./TopPattern";
import CTAButton from "./CTAButton";
import Logo from "@/components/brand/Logo";
import { SITE } from "@/data/site";

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail("");
    }
  };

  return (
    <footer className={`w-full bg-[#1c1817] text-white font-urbanist select-none relative ${className}`}>
      {/* Top Animated Pattern Strip */}
      <div className="w-full pt-4">
        <TopPattern
          animated={true}
          duration={35}
          strokeColor="#524643"
          strokeWidth={8}
          opacity={0.35}
        />
      </div>

      {/* Main Footer Content */}
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-20 lg:py-24">
        {/* Left block narrowed from col-span-7 to col-span-6, right block widened
            from col-span-5 to col-span-6, so Contacts has more absolute room
            to work with before it even hits its own internal column split. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left Block (Logo, Newsletter, Connect) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-10">
            <div>
              {/* Logo */}
              <Logo height={44} className="sm:hidden" />
              <Logo height={54} className="hidden sm:inline-flex" />

              <p className="mt-5 max-w-md text-sm sm:text-base text-gray-400 leading-relaxed">
                Corrugated rolls, boxes, inserts and retail displays manufactured
                from 100% recyclable kraft — plastic-free packaging built around
                your product, your line and your carbon targets.
              </p>

              {/* Newsletter Block */}
              <div className="mt-8 sm:mt-10">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-4">
                  Packaging insights, new board grades and sustainability updates.
                </h3>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-md"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@email.com"
                    required
                    className="w-full bg-transparent border border-gray-700/80 rounded-full px-5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-600 transition-colors"
                  />
                  <CTAButton
                    type="submit"
                    label="Subscribe"
                    variant="outline"
                    size="sm"
                    className="shrink-0"
                  />
                </form>
              </div>
            </div>

            {/* Social Connect Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Connect
              </h4>
              <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-300">
                <a
                  href={SITE.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-800 bg-[#25201f] text-gray-300 hover:text-white hover:border-orange-600/60 hover:bg-orange-600/10 transition-all duration-300 shadow-sm"
                >
                  <span>LinkedIn</span>
                  <span className="text-orange-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-800 bg-[#25201f] text-gray-300 hover:text-white hover:border-orange-600/60 hover:bg-orange-600/10 transition-all duration-300 shadow-sm"
                >
                  <span>Instagram</span>
                  <span className="text-orange-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-800 bg-[#25201f] text-gray-300 hover:text-white hover:border-orange-600/60 hover:bg-orange-600/10 transition-all duration-300 shadow-sm"
                >
                  <span>Facebook</span>
                  <span className="text-orange-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Block (Contacts, Services, Company Navigation Links) */}
          {/* Custom fr-based columns instead of equal thirds: Contacts gets
              ~40% more width than Packaging/Company, since it holds two
              emails, two phone numbers and two full addresses versus short
              link lists. Falls back to a single stacked column below sm. */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-[1.4fr_1fr_1fr] gap-8 sm:gap-8 pt-2">
            {/* Contacts Column */}
            <div className="sm:pr-4">
              <h4 className="text-lg font-semibold text-white mb-4 sm:mb-5">
                Contacts
              </h4>
              <ul className="space-y-3.5 text-sm text-gray-300">
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="hover:text-orange-600 transition-colors font-mono break-all"
                  >
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${SITE.salesEmail}`}
                    className="hover:text-orange-600 transition-colors font-mono break-all"
                  >
                    {SITE.salesEmail}
                  </a>
                </li>
                <li className="pt-1">
                  <a href={SITE.phoneHref} className="hover:text-orange-600 transition-colors font-mono">
                    {SITE.phone}
                  </a>
                </li>
                <li>
                  <a href={SITE.altPhoneHref} className="hover:text-orange-600 transition-colors font-mono">
                    {SITE.altPhone}
                  </a>
                </li>
                <li className="pt-3 text-gray-400 leading-relaxed not-italic">
                  <p className="font-bold text-gray-200 mb-0.5">Manufacturing Unit I</p>
                  {SITE.address1.line},<br />
                  {SITE.address1.city}, {SITE.address1.region}
                </li>
                <li className="pt-3 text-gray-400 leading-relaxed not-italic">
                  <p className="font-bold text-gray-200 mb-0.5">Manufacturing Unit II</p>
                  {SITE.address2.line},<br />
                  {SITE.address2.city}, {SITE.address2.region}
                </li>
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 sm:mb-5">
                Packaging
              </h4>
              <ul className="space-y-3 text-sm text-gray-300">
                {[
                  { label: "Corrugated Rolls", href: "/product?category=corrugated-rolls" },
                  { label: "Corrugated Boxes", href: "/product?category=corrugated-boxes" },
                  { label: "Eco-Friendly Range", href: "/product?category=eco-innovations" },
                  { label: "Retail & Displays", href: "/product?category=retail-packaging" },
                  { label: "Inserts & Protection", href: "/product?category=inserts-protection" },
                  { label: "All Products", href: "/product" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:text-orange-600 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 sm:mb-5">
                Company
              </h4>
              <ul className="space-y-3 text-sm text-gray-300">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about-us" },
                  { label: "Services", href: "/services" },
                  { label: "Industries", href: "/industries" },
                  // { label: "Our Fleet", href: "/our-fleet" },
                  { label: "Contact Us", href: "/contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:text-orange-600 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          {/*<p className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>FSC-certified fibre</span>
            <span className="text-gray-700">•</span>
            <span>ISO 9001 &amp; ISO 14001 processes</span>
            <span className="text-gray-700">•</span>
            <span>100% recyclable board</span>
          </p>*/}
        </div>
      </div>
    </footer>
  );
};

export default Footer;