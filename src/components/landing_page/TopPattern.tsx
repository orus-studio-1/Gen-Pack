"use client";

import React from "react";
import { motion } from "framer-motion";

interface PatternTileProps {
  strokeColor?: string;
  strokeWidth?: number;
  opacity?: number;
  tileSize?: string;
}

export const PatternTile: React.FC<PatternTileProps> = ({
  strokeColor = "white",
  strokeWidth = 10,
  opacity = 0.4,
  tileSize = "h-20 sm:h-24 md:h-28 lg:h-24 w-20 sm:w-24 md:w-28 lg:w-24",
}) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${tileSize} shrink-0`}
    preserveAspectRatio="none"
  >
    {/* Group with opacity composites geometry cleanly without bright double-blended intersection spots */}
    <g opacity={opacity}>
      {/* Continuous Horizontal Baseline */}
      <line
        x1="0"
        y1="50"
        x2="100"
        y2="50"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="butt"
      />

      {/* Vertical Stem Line */}
      <line
        x1="50"
        y1="6"
        x2="50"
        y2="94"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />

      {/* Right-Pointing Chevron Arrow */}
      <path
        d="M 12 12 L 50 50 L 12 88"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export const VerticalPatternTile: React.FC<PatternTileProps> = ({
  strokeColor = "white",
  strokeWidth = 10,
  opacity = 0.4,
  tileSize = "h-20 sm:h-24 md:h-28 lg:h-24 w-20 sm:w-24 md:w-28 lg:w-24",
}) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${tileSize} shrink-0`}
    preserveAspectRatio="none"
  >
    {/* Group with opacity composites geometry cleanly without bright double-blended intersection spots */}
    <g opacity={opacity}>
      {/* Continuous Vertical Baseline */}
      <line
        x1="50"
        y1="0"
        x2="50"
        y2="100"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="butt"
      />

      {/* Horizontal Crossbar */}
      <line
        x1="6"
        y1="50"
        x2="94"
        y2="50"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />

      {/* Down-Pointing Chevron Arrow */}
      <path
        d="M 12 12 L 50 50 L 88 12"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

interface TopPatternProps {
  className?: string;
  strokeColor?: string;
  opacity?: number;
  duration?: number;
  tileSize?: string;
  strokeWidth?: number;
  animated?: boolean;
}

export const TopPattern: React.FC<TopPatternProps> = ({
  className = "",
  strokeColor = "white",
  opacity = 0.4,
  duration = 35,
  tileSize = "h-20 sm:h-24 md:h-28 lg:h-24 w-20 sm:w-24 md:w-28 lg:w-24",
  strokeWidth = 10,
  animated = true,
}) => {
  const items = Array.from({ length: 24 });

  if (!animated) {
    return (
      <div className={`w-full overflow-hidden pointer-events-none select-none ${className}`}>
        <div className="flex flex-nowrap w-max">
          {items.map((_, idx) => (
            <PatternTile
              key={`static-${idx}`}
              strokeColor={strokeColor}
              opacity={opacity}
              tileSize={tileSize}
              strokeWidth={strokeWidth}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full overflow-hidden pointer-events-none select-none ${className}`}>
      <motion.div
        animate={{ x: ["-50%", "0%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration,
        }}
        className="flex flex-nowrap w-max"
      >
        {/* Strip 1 */}
        <div className="flex flex-nowrap shrink-0">
          {items.map((_, idx) => (
            <PatternTile
              key={`strip1-${idx}`}
              strokeColor={strokeColor}
              opacity={opacity}
              tileSize={tileSize}
              strokeWidth={strokeWidth}
            />
          ))}
        </div>

        {/* Strip 2 (Identical for seamless infinite scroll) */}
        <div className="flex flex-nowrap shrink-0">
          {items.map((_, idx) => (
            <PatternTile
              key={`strip2-${idx}`}
              strokeColor={strokeColor}
              opacity={opacity}
              tileSize={tileSize}
              strokeWidth={strokeWidth}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TopPattern;

