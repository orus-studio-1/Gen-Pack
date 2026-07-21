"use client";

import React from "react";

interface CTAButtonProps {
  label?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: "outline" | "solid";
  size?: "sm" | "md" | "lg";
  textColor?: string;
  iconColor?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  label = "Know Our Services",
  onClick,
  href = "#services",
  className = "",
  variant = "outline",
  size = "md",
  textColor = "text-white",
  iconColor = "text-white",
}) => {
  const Component = href ? "a" : "button";

  const isSolid = variant === "solid";

  // Size styling maps
  const pillPadding =
    size === "sm"
      ? "px-4 py-1.5 md:px-5 md:py-2 text-xs md:text-sm"
      : size === "lg"
      ? "px-7 py-3 md:px-8 md:py-4 text-base md:text-lg"
      : "px-5 py-2 md:px-6 md:py-2.5 text-sm md:text-base";

  const circleSize =
    size === "sm"
      ? "w-8 h-8 md:w-9 md:h-9"
      : size === "lg"
      ? "w-11 h-11 md:w-13 md:h-13"
      : "w-9.5 h-9.5 md:w-10.5 md:h-10.5";

  const iconSize =
    size === "sm"
      ? "w-3.5 h-3.5 md:w-4 md:h-4"
      : size === "lg"
      ? "w-5 h-5 md:w-6 md:h-6"
      : "w-4 h-4 md:w-4.5 md:h-4.5";

  const bgBorderPill = isSolid
    ? "border border-orange-600 bg-orange-600 group-hover:bg-orange-500 group-hover:border-orange-500"
    : "border border-orange-500 bg-transparent group-hover:bg-orange-500";

  const bgBorderCircle = isSolid
    ? "border border-orange-600 bg-orange-600 group-hover:bg-orange-500 group-hover:border-orange-500"
    : "border border-orange-500 bg-transparent group-hover:bg-orange-500";

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 md:gap-3 group cursor-pointer ${textColor} font-urbanist select-none ${className}`}
    >
      {/* Main Pill Button */}
      <span
        className={`${pillPadding} ${bgBorderPill} rounded-full font-medium tracking-wide transition-all duration-300 shadow-sm`}
      >
        {label}
      </span>

      {/* Circular Arrow Button with Bar + Right Arrow */}
      <span
        className={`${circleSize} ${bgBorderCircle} rounded-full flex items-center justify-center transition-all duration-300 shadow-sm shrink-0`}
      >
        <svg
          className={`${iconSize} ${iconColor} transition-transform duration-300 group-hover:translate-x-0.5`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="6" x2="5" y2="18" />
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="13 6 19 12 13 18" />
        </svg>
      </span>
    </Component>
  );
};

export default CTAButton;


