"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import CTAButton from "./CTAButton";
import Logo from "@/components/brand/Logo";
import { NAV_LINKS } from "@/data/site";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isDarkText = scrolled || !isHomePage;

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    // Do not hide navbar if mobile menu drawer is open
    if (mobileMenuOpen) return;

    if (latest > previous && latest > 120) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    // Remain transparent throughout the entire Hero section height
    const heroSectionHeight = typeof window !== "undefined" ? window.innerHeight - 80 : 600;
    setScrolled(latest > heroSectionHeight);
  });

  // Handle Escape key & body overflow lock when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };

    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = NAV_LINKS;

  return (
    <>
      {/* Mobile Drawer Backdrop Overlay (collapses menu when clicked outside) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs lg:hidden cursor-pointer"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed inset-x-0 z-50 pt-6 pb-6 select-none transition-all duration-300 ${isDarkText
          ? "bg-white backdrop-blur-md border-b border-gray-200/80 shadow-md text-gray-900 py-1"
          : "bg-transparent text-white py-2"
          } ${className}`}
      >
        {/* Navbar Container */}
        <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 md:px-10 lg:px-16 xl:px-24 py-3 md:py-4 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="shrink-0 flex items-center">
            <Logo height={30} priority className="md:hidden" />
            <Logo height={36} priority className="hidden md:inline-flex" />
          </div>

          {/* Desktop Navigation Links (Visible on Large Screens >= 1024px) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-medium text-sm xl:text-base tracking-wide transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 hover:after:w-full after:transition-all after:duration-300 ${isDarkText
                  ? "text-gray-800 hover:text-orange-600"
                  : "text-slate-100 hover:text-white"
                  }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Controls Group */}
          <div className="flex items-center gap-3">
            {/* CTA Action Button */}
            <div className="hidden sm:block">
              <CTAButton
                label="Get a Quote"
                href="/contact"
                variant="solid"
                size="sm"
              />
            </div>

            {/* Hamburger Menu Toggle for Mobile & Tablet (< 1024px) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden focus:outline-none p-2 rounded-lg backdrop-blur-md border transition-colors duration-300 ${isDarkText
                ? "text-gray-900 bg-white border-gray-300"
                : "text-white bg-black/20 border-white/20"
                }`}
              aria-label="Toggle menu"
            >
              <motion.div
                key={mobileMenuOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {mobileMenuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Drawer Menu for Mobile & Tablet with AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={`lg:hidden w-full backdrop-blur-xl border-b px-6 py-6 overflow-hidden shadow-2xl ${isDarkText
                ? "bg-white border-gray-200 text-gray-900"
                : "bg-[#1c1817]/95 border-white/10 text-white"
                }`}
            >
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: index * 0.05 }}
                    className={`font-medium text-base tracking-wide transition-colors py-1 ${isDarkText
                      ? "text-gray-800 hover:text-orange-600"
                      : "text-white hover:text-orange-400"
                      }`}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: navLinks.length * 0.05 }}
                className="pt-4 sm:hidden"
              >
                <CTAButton
                  label="Get a Quote"
                  href="/contact"
                  variant="solid"
                  size="sm"
                  onClick={() => setMobileMenuOpen(false)}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Navbar;



