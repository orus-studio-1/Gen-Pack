import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  /** Rendered height in pixels; width follows the artwork's aspect ratio. */
  height?: number;
  className?: string;
  /** Wrap the mark in a link back to the home page. */
  href?: string | null;
  priority?: boolean;
}

const ASPECT = 729 / 182; // intrinsic size of /genpack-logo.png

export const Logo: React.FC<LogoProps> = ({
  height = 34,
  className = "",
  href = "/",
  priority = false,
}) => {
  const mark = (
    <Image
      src="/genpack-logo.png"
      alt="Genpack"
      width={Math.round(height * ASPECT)}
      height={height}
      priority={priority}
      className="w-auto select-none"
      style={{ height }}
      draggable={false}
    />
  );

  if (!href) {
    return <span className={`inline-flex items-center ${className}`}>{mark}</span>;
  }

  return (
    <Link
      href={href}
      aria-label="Genpack home"
      className={`inline-flex items-center transition-opacity duration-200 hover:opacity-80 ${className}`}
    >
      {mark}
    </Link>
  );
};

export default Logo;
