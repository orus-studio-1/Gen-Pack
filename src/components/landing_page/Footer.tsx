"use client";

import React, { useState } from "react";
import TopPattern from "./TopPattern";
import CTAButton from "./CTAButton";

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
      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Block (Logo, Newsletter, Connect) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-10">
            <div>
              {/* Logo */}
              <div className="flex items-center gap-1">
                <span className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
                  Genpact
                </span>
                <span className="text-3xl sm:text-4xl font-bold text-orange-500">
                  ↗
                </span>
              </div>

              {/* Newsletter Block */}
              <div className="mt-8 sm:mt-10">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-4">
                  Keep on track by subscribing our Newsletter.
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
                    className="w-full bg-transparent border border-gray-700/80 rounded-full px-5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                  <CTAButton
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
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-800 bg-[#25201f] text-gray-300 hover:text-white hover:border-orange-500/60 hover:bg-orange-500/10 transition-all duration-300 shadow-sm"
                >
                  <span>LinkedIn</span>
                  <span className="text-orange-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-800 bg-[#25201f] text-gray-300 hover:text-white hover:border-orange-500/60 hover:bg-orange-500/10 transition-all duration-300 shadow-sm"
                >
                  <span>Instagram</span>
                  <span className="text-orange-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-800 bg-[#25201f] text-gray-300 hover:text-white hover:border-orange-500/60 hover:bg-orange-500/10 transition-all duration-300 shadow-sm"
                >
                  <span>Facebook</span>
                  <span className="text-orange-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Block (Contacts, Services, Company Navigation Links) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 pt-2">
            {/* Contacts Column */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 sm:mb-5">
                Contacts
              </h4>
              <ul className="space-y-3 text-sm text-gray-300 font-mono">
                <li>
                  <a
                    href="mailto:info@genpact.com"
                    className="hover:text-orange-400 transition-colors"
                  >
                    info@genpact.com
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:houston@genpact.com"
                    className="hover:text-orange-400 transition-colors"
                  >
                    houston@genpact.com
                  </a>
                </li>
                <li className="pt-1">+31 23 732 600</li>
                <li>+1 713 5976172</li>
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 sm:mb-5">
                Services
              </h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#fleet"
                    className="hover:text-white transition-colors"
                  >
                    Our Fleet
                  </a>
                </li>
                <li>
                  <a
                    href="#industries"
                    className="hover:text-white transition-colors"
                  >
                    Industries
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 sm:mb-5">
                Company
              </h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      {/* <div className="w-full bg-[#282322] border-t border-gray-800/80 py-5">
        <div className="w-full max-w-[1500px] mx-auto px-6 md:px-16 lg:px-24 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © Copyright 2025 - Made by{" "}
            <a
              href="#"
              className="underline hover:text-white transition-colors"
            >
              JBStudio
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="underline hover:text-white transition-colors"
            >
              Get Template
            </a>
            <span>-</span>
            <a
              href="#"
              className="underline hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
