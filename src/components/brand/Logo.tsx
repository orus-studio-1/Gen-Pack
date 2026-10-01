"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  href?: string | null;
  priority?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  href = "/",
  priority = false,
}) => {
  const mark = (
    <Image
      src="/carapace-logo.png"
      alt="Carapace — Engineered Packaging Solutions"
      width={645}
      height={245}
      priority={priority}
      draggable={false}
      className={`
        w-[125px]
        sm:w-[140px]
        md:w-[155px]
        lg:w-[165px]
        xl:w-[175px]
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