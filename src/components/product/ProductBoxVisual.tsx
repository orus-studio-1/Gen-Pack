"use client";

import React from "react";

interface ProductBoxVisualProps {
  slug: string;
  className?: string;
  isHovered?: boolean;
  viewMode?: "3d" | "cad" | "kraft";
}

export const ProductBoxVisual: React.FC<ProductBoxVisualProps> = ({
  slug,
  className = "",
  isHovered = false,
  viewMode = "3d",
}) => {
  // Kraft cardboard color palette
  const baseKraft = "#d9b382";
  const lightKraft = "#ebca9b";
  const darkKraft = "#b88e5b";
  const shadowKraft = "#8f6938";
  const innerKraft = "#a67c46";
  const cadStroke = "#e65100";

  // Common SVGs rendered with 3D isometric perspectives
  const renderVisual = () => {
    switch (slug) {
      case "one-piece-lid":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full drop-shadow-lg transition-transform duration-500 ease-out">
            <defs>
              <linearGradient id="lidTop" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={lightKraft} />
                <stop offset="100%" stopColor={baseKraft} />
              </linearGradient>
              <linearGradient id="lidSide" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={darkKraft} />
                <stop offset="100%" stopColor={shadowKraft} />
              </linearGradient>
              <linearGradient id="lidFront" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={baseKraft} />
                <stop offset="100%" stopColor={darkKraft} />
              </linearGradient>
            </defs>
            {/* Ground Shadow */}
            <ellipse cx="200" cy="245" rx="140" ry="25" fill="#000000" opacity="0.12" className="transition-opacity duration-300" />
            
            {/* 3D Box - One Piece Shallow Lid */}
            <g transform={isHovered ? "translate(0, -8)" : "translate(0, 0)"} className="transition-transform duration-300">
              {/* Top Face */}
              <polygon points="60,110 200,40 340,110 200,180" fill="url(#lidTop)" stroke="#9e723e" strokeWidth="1.5" />
              
              {/* Front Left Face */}
              <polygon points="60,110 200,180 200,215 60,145" fill="url(#lidFront)" stroke="#8f6330" strokeWidth="1.5" />
              
              {/* Front Right Face */}
              <polygon points="200,180 340,110 340,145 200,215" fill="url(#lidSide)" stroke="#7a5223" strokeWidth="1.5" />
              
              {/* Crease Fold Lines */}
              <line x1="60" y1="110" x2="200" y2="180" stroke="#7a5223" strokeWidth="1" opacity="0.4" strokeDasharray="3,3" />
              <line x1="200" y1="180" x2="340" y2="110" stroke="#7a5223" strokeWidth="1" opacity="0.4" strokeDasharray="3,3" />
              
              {/* Corner Fold Tabs */}
              <polygon points="60,110 75,117 75,152 60,145" fill="#a87c48" opacity="0.8" />
              <polygon points="340,110 325,117 325,152 340,145" fill="#784f22" opacity="0.8" />
            </g>
          </svg>
        );

      case "4cnr-box-lid":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full drop-shadow-lg transition-transform duration-500 ease-out">
            <defs>
              <linearGradient id="boxInner" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={innerKraft} />
                <stop offset="100%" stopColor="#7a5629" />
              </linearGradient>
            </defs>
            {/* Ground Shadow */}
            <ellipse cx="200" cy="255" rx="145" ry="22" fill="#000000" opacity="0.14" />
            
            {/* Bottom Tray */}
            <g transform="translate(0, 30)">
              {/* Inner Cavity */}
              <polygon points="90,130 200,75 310,130 200,185" fill="url(#boxInner)" stroke="#5e411b" strokeWidth="1.5" />
              
              {/* Outer Front Left */}
              <polygon points="90,130 200,185 200,225 90,170" fill={baseKraft} stroke="#8f6330" strokeWidth="1.5" />
              
              {/* Outer Front Right */}
              <polygon points="200,185 310,130 310,170 200,225" fill={darkKraft} stroke="#7a5223" strokeWidth="1.5" />
            </g>

            {/* Slightly Lifted Hinged/Separate Lid */}
            <g transform={isHovered ? "translate(0, -18) rotate(-3 200 100)" : "translate(0, -10)"} className="transition-transform duration-500">
              <polygon points="80,90 200,30 320,90 200,150" fill={lightKraft} stroke="#a87d46" strokeWidth="1.5" />
              <polygon points="80,90 200,150 200,175 80,115" fill={baseKraft} stroke="#8f6330" strokeWidth="1.5" />
              <polygon points="200,150 320,90 320,115 200,175" fill={darkKraft} stroke="#7a5223" strokeWidth="1.5" />
            </g>
          </svg>
        );

      case "archive-boxes":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full drop-shadow-xl transition-transform duration-500 ease-out">
            <defs>
              <linearGradient id="archiveSide" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={baseKraft} />
                <stop offset="100%" stopColor={darkKraft} />
              </linearGradient>
            </defs>
            <ellipse cx="200" cy="260" rx="130" ry="24" fill="#000000" opacity="0.15" />
            
            {/* Archive Box Base & Open Lid */}
            <g transform={isHovered ? "translate(0, -6)" : "translate(0, 0)"} className="transition-transform duration-300">
              {/* Open Top Back Flap */}
              <polygon points="120,60 200,20 300,70 220,110" fill={innerKraft} stroke="#6b4a21" strokeWidth="1.5" />
              
              {/* Box Body Front Left */}
              <polygon points="100,120 220,180 220,250 100,190" fill="url(#archiveSide)" stroke="#8f6330" strokeWidth="1.5" />
              
              {/* Box Body Front Right */}
              <polygon points="220,180 310,135 310,205 220,250" fill={darkKraft} stroke="#7a5223" strokeWidth="1.5" />
              
              {/* Handhole Cutout Left Side */}
              <polygon points="145,155 175,170 175,182 145,167" fill="#422e15" stroke="#7a5223" strokeWidth="1" rx="4" />
              
              {/* Lifted Lid on Top */}
              <polygon points="90,105 220,40 320,90 190,155" fill={lightKraft} stroke="#a87d46" strokeWidth="1.5" opacity="0.95" />
              <polygon points="90,105 190,155 190,175 90,125" fill={baseKraft} stroke="#8f6330" strokeWidth="1.5" />
              <polygon points="190,155 320,90 320,110 190,175" fill={darkKraft} stroke="#7a5223" strokeWidth="1.5" />
            </g>
          </svg>
        );

      case "bulk-bins":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full drop-shadow-xl transition-transform duration-500 ease-out">
            <ellipse cx="200" cy="265" rx="125" ry="20" fill="#000000" opacity="0.16" />
            
            {/* Octagonal Heavy Bulk Bin (Octabin) */}
            <g transform={isHovered ? "translate(0, -8)" : "translate(0, 0)"} className="transition-transform duration-300">
              {/* Top Octagon Lid Rim */}
              <polygon points="150,50 250,50 310,80 310,110 250,140 150,140 90,110 90,80" fill={lightKraft} stroke="#9e723e" strokeWidth="1.5" />
              
              {/* Inner Cavity Depth */}
              <polygon points="155,55 245,55 300,82 245,135 155,135 100,82" fill={innerKraft} />

              {/* Octagonal Side Facets */}
              {/* Facet 1 (Left) */}
              <polygon points="90,110 150,140 150,240 90,210" fill="#b88e5b" stroke="#7a5223" strokeWidth="1.5" />
              
              {/* Facet 2 (Front Center) */}
              <polygon points="150,140 250,140 250,240 150,240" fill={lightKraft} stroke="#8f6330" strokeWidth="1.5" />
              
              {/* Facet 3 (Right) */}
              <polygon points="250,140 310,110 310,210 250,240" fill={darkKraft} stroke="#6b481f" strokeWidth="1.5" />
              
              {/* Heavy Duty Rib Lines */}
              <line x1="150" y1="140" x2="150" y2="240" stroke="#7a5223" strokeWidth="2" />
              <line x1="250" y1="140" x2="250" y2="240" stroke="#7a5223" strokeWidth="2" />
            </g>
          </svg>
        );

      case "clamshell-punnet":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full drop-shadow-lg transition-transform duration-500 ease-out">
            <ellipse cx="200" cy="250" rx="135" ry="22" fill="#000000" opacity="0.12" />
            
            {/* Clamshell Produce Box with Hinged Cover */}
            <g transform={isHovered ? "translate(0, -6)" : "translate(0, 0)"} className="transition-transform duration-300">
              {/* Lower Tray Base */}
              <polygon points="100,140 200,195 300,140 200,85" fill={innerKraft} stroke="#6b4a21" strokeWidth="1.5" />
              <polygon points="100,140 200,195 200,230 100,175" fill={baseKraft} stroke="#8f6330" strokeWidth="1.5" />
              <polygon points="200,195 300,140 300,175 200,230" fill={darkKraft} stroke="#7a5223" strokeWidth="1.5" />
              
              {/* Open Hinged Top Frame */}
              <g transform="rotate(-25 100 140)">
                <polygon points="100,130 200,75 300,130 200,185" fill={lightKraft} stroke="#a87d46" strokeWidth="1.5" opacity="0.9" />
                {/* Ventilation Slits */}
                <line x1="160" y1="110" x2="190" y2="125" stroke="#7a5223" strokeWidth="2" strokeLinecap="round" />
                <line x1="210" y1="120" x2="240" y2="105" stroke="#7a5223" strokeWidth="2" strokeLinecap="round" />
              </g>
            </g>
          </svg>
        );

      case "me-trays":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full drop-shadow-lg transition-transform duration-500 ease-out">
            <ellipse cx="200" cy="255" rx="140" ry="24" fill="#000000" opacity="0.13" />
            
            {/* Open Stackable Produce Display Tray */}
            <g transform={isHovered ? "translate(0, -6)" : "translate(0, 0)"} className="transition-transform duration-300">
              {/* Base Cavity */}
              <polygon points="80,120 200,60 320,120 200,180" fill={innerKraft} stroke="#5e411b" strokeWidth="1.5" />
              
              {/* Front Left Wall */}
              <polygon points="80,120 200,180 200,225 80,165" fill={baseKraft} stroke="#8f6330" strokeWidth="1.5" />
              
              {/* Front Right Wall */}
              <polygon points="200,180 320,120 320,165 200,225" fill={darkKraft} stroke="#7a5223" strokeWidth="1.5" />
              
              {/* Reinforced Corner Stacking Posts */}
              <polygon points="80,120 90,115 90,160 80,165" fill="#f0d5ab" stroke="#8f6330" strokeWidth="1" />
              <polygon points="320,120 310,115 310,160 320,165" fill="#a87c48" stroke="#7a5223" strokeWidth="1" />
              <polygon points="200,180 200,225 210,220 210,175" fill="#f0d5ab" stroke="#8f6330" strokeWidth="1" />
            </g>
          </svg>
        );

      case "regular-slotted-carton":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full drop-shadow-xl transition-transform duration-500 ease-out">
            <ellipse cx="200" cy="260" rx="135" ry="22" fill="#000000" opacity="0.14" />
            
            {/* Classic RSC Shipping Carton with Top Flaps Open */}
            <g transform={isHovered ? "translate(0, -8)" : "translate(0, 0)"} className="transition-transform duration-300">
              {/* Box Body */}
              <polygon points="90,130 200,190 200,250 90,190" fill={baseKraft} stroke="#8f6330" strokeWidth="1.5" />
              <polygon points="200,190 310,130 310,190 200,250" fill={darkKraft} stroke="#7a5223" strokeWidth="1.5" />
              
              {/* Open Flap - Left Front */}
              <polygon points="90,130 200,190 180,150 70,90" fill={lightKraft} stroke="#9e723e" strokeWidth="1.5" />
              
              {/* Open Flap - Right Front */}
              <polygon points="200,190 310,130 330,90 220,150" fill={darkKraft} stroke="#6b481f" strokeWidth="1.5" />
              
              {/* Open Flap - Back Left */}
              <polygon points="90,130 200,70 170,40 60,100" fill={innerKraft} opacity="0.8" />
              
              {/* Open Flap - Back Right */}
              <polygon points="200,70 310,130 340,100 230,40" fill={shadowKraft} opacity="0.8" />
            </g>
          </svg>
        );

      case "die-cut-mailer":
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full drop-shadow-xl transition-transform duration-500 ease-out">
            <ellipse cx="200" cy="255" rx="135" ry="20" fill="#000000" opacity="0.13" />
            
            {/* Self-Locking Presentation Mailer Box */}
            <g transform={isHovered ? "translate(0, -8)" : "translate(0, 0)"} className="transition-transform duration-300">
              {/* Mailer Base Tray */}
              <polygon points="80,140 200,200 320,140 200,80" fill={innerKraft} stroke="#6b4a21" strokeWidth="1.5" />
              <polygon points="80,140 200,200 200,235 80,175" fill={baseKraft} stroke="#8f6330" strokeWidth="1.5" />
              <polygon points="200,200 320,140 320,175 200,235" fill={darkKraft} stroke="#7a5223" strokeWidth="1.5" />
              
              {/* Self-locking Hinged Top Lid */}
              <polygon points="80,140 200,80 320,140 200,30" fill={lightKraft} stroke="#a87d46" strokeWidth="1.5" opacity="0.95" />
              {/* Front Locking Tuck Tab */}
              <polygon points="200,30 240,10 160,10" fill={darkKraft} stroke="#7a5223" strokeWidth="1" />
            </g>
          </svg>
        );

      default:
        // Generic Premium Heavy-Duty Box
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full drop-shadow-xl transition-transform duration-500 ease-out">
            <ellipse cx="200" cy="255" rx="135" ry="22" fill="#000000" opacity="0.14" />
            
            <g transform={isHovered ? "translate(0, -6)" : "translate(0, 0)"} className="transition-transform duration-300">
              {/* Top Face */}
              <polygon points="90,110 200,50 310,110 200,170" fill={lightKraft} stroke="#9e723e" strokeWidth="1.5" />
              {/* Left Face */}
              <polygon points="90,110 200,170 200,240 90,180" fill={baseKraft} stroke="#8f6330" strokeWidth="1.5" />
              {/* Right Face */}
              <polygon points="200,170 310,110 310,180 200,240" fill={darkKraft} stroke="#7a5223" strokeWidth="1.5" />
              {/* Tape line across top */}
              <line x1="200" y1="50" x2="200" y2="170" stroke="#ff8c00" strokeWidth="3" opacity="0.8" />
            </g>
          </svg>
        );
    }
  };

  return (
    <div className={`relative w-full aspect-[4/3] flex items-center justify-center p-4 bg-gradient-to-b from-slate-50/80 to-amber-50/20 rounded-xl overflow-hidden ${className}`}>
      {/* Background Subtle CAD Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(${cadStroke} 1px, transparent 1px)`,
          backgroundSize: "16px 16px"
        }}
      />
      
      {/* 3D Box Illustration */}
      <div className="w-full h-full max-w-[280px] max-h-[220px] flex items-center justify-center relative">
        {renderVisual()}
      </div>

      {/* CAD Overlay lines when in CAD view mode */}
      {viewMode === "cad" && (
        <div className="absolute inset-0 border border-orange-500/40 rounded-xl pointer-events-none flex flex-col justify-between p-3">
          <span className="text-[10px] font-mono text-orange-600 font-bold uppercase tracking-wider">CAD SPEC READY</span>
          <span className="text-[10px] font-mono text-orange-600/80 text-right">ECT-32 / B-FLUTE</span>
        </div>
      )}
    </div>
  );
};

export default ProductBoxVisual;
