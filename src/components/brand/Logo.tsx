"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  href?: string | null;
  priority?: boolean;
  height?: number;
  width?: number;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  href = "/",
  priority = false,
  height,
  width,
}) => {
  const mark = (
    <Image
      src="/carapace-logo.png"
      alt="Carapace — Engineered Packaging Solutions"
      width={width || 645}
      height={height || 245}
      priority={priority}
      draggable={false}
      style={
        height || width
          ? {
              height: height ? `${height}px` : undefined,
              width: width ? `${width}px` : "auto",
            }
          : undefined
      }
      className={`
        ${height || width ? "" : "w-[125px] sm:w-[140px] md:w-[155px] lg:w-[165px] xl:w-[175px]"}
        h-auto
        object-contain
        select-none
        ${className}
      `}
    />
  );

  if (!href) {
    return (
      <span className="inline-flex items-center">
        {mark}
      </span>
    );
  }

  return (
    <Link
      href={href}
      aria-label="Carapace home"
      className="inline-flex items-center transition-opacity duration-200 hover:opacity-90"
    >
      {mark}
    </Link>
  );
};

export default Logo;