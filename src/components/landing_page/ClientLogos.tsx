import React from "react";

interface LogoProps {
  className?: string;
}

const baseImageClass =
  "h-7 sm:h-8 md:h-9 w-auto object-contain transition-all duration-300 hover:scale-105 select-none";

// 1. Manyavar - Official Brand Logo with Royal M Shield & Wordmark
export const ManyavarLogo: React.FC<LogoProps> = ({ className = "" }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/clients/manyavar.png"
    alt="Manyavar"
    className={`${baseImageClass} ${className}`}
    loading="lazy"
  />
);

// 2. Havells - Official Brand Logo with Red 'H' Mark & Wordmark
export const HavellsLogo: React.FC<LogoProps> = ({ className = "" }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/clients/havells.png"
    alt="Havells"
    className={`${baseImageClass} ${className}`}
    loading="lazy"
  />
);

// 3. Crompton - Official Brand Logotype (Crompton Greaves Consumer Electricals)
export const CromptonLogo: React.FC<LogoProps> = ({ className = "" }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/clients/crompton.png"
    alt="Crompton"
    className={`h-6 sm:h-7 md:h-8 w-auto object-contain transition-all duration-300 hover:scale-105 select-none ${className}`}
    loading="lazy"
  />
);

// 4. Orient Electric - Official Brand Logo with 'O' Vortex Symbol & Wordmark
export const OrientLogo: React.FC<LogoProps> = ({ className = "" }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/clients/orient.svg"
    alt="Orient Electric"
    className={`${baseImageClass} ${className}`}
    loading="lazy"
  />
);

// 5. Ballantine's - Official World-Renowned Signature Script Logo
export const BallentineLogo: React.FC<LogoProps> = ({ className = "" }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/clients/ballantines.svg"
    alt="Ballantine's"
    className={`h-6 sm:h-7 md:h-8 w-auto object-contain transition-all duration-300 hover:scale-105 select-none filter contrast-125 ${className}`}
    loading="lazy"
  />
);

// 6. Industry Safety Products (ISP) - Official Corporate Logo with Safety Gloves Crest
export const IspLogo: React.FC<LogoProps> = ({ className = "" }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/clients/isp.png"
    alt="Industrial Safety Products (ISP)"
    className={`h-7 sm:h-8 md:h-9 w-auto object-contain transition-all duration-300 hover:scale-105 select-none ${className}`}
    loading="lazy"
  />
);

// 7. Dynamic Cables - Official Dynamic Cables Limited Logo
export const DynamicLogo: React.FC<LogoProps> = ({ className = "" }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/clients/dynamic-emblem.png"
    alt="Dynamic"
    className={`${baseImageClass} ${className}`}
    loading="lazy"
  />
);

// 8. Glider - Liberty Gliders Footwear / Casuals Logo
export const GliderLogo: React.FC<LogoProps> = ({ className = "" }) => (
  <div
    className={`flex items-center gap-1.5 font-sans tracking-wider select-none ${className}`}
    aria-label="Gliders"
  >
    <svg viewBox="0 0 28 20" className="w-5 h-4 fill-slate-800" aria-hidden="true">
      <path d="M2 14L14 3l12 11-4 1.5-8-7.5-8 7.5z" />
    </svg>
    <span className="text-base sm:text-lg font-black tracking-widest text-slate-800 uppercase italic">
      GLIDERS
    </span>
  </div>
);

// 9. Cat Mint - Catmint Kids Wear (Kolkata)
export const CatMintLogo: React.FC<LogoProps> = ({ className = "" }) => (
  <div
    className={`flex items-center gap-2 select-none font-sans ${className}`}
    aria-label="Catmint"
  >
    <div className="w-6 h-6 rounded-md bg-amber-600/90 text-white flex items-center justify-center font-bold text-xs shadow-sm">
      CM
    </div>
    <div className="flex flex-col leading-none">
      <span className="text-sm sm:text-base font-extrabold tracking-tight text-slate-900 uppercase">
        CATMINT
      </span>
      <span className="text-[9px] font-semibold tracking-widest text-slate-500 uppercase">
        KIDS WEAR
      </span>
    </div>
  </div>
);

// 10. Global Clothing - Kolkata Export Garments
export const GlobalClothingLogo: React.FC<LogoProps> = ({ className = "" }) => (
  <div
    className={`flex items-center gap-2 select-none font-sans ${className}`}
    aria-label="Global Clothing"
  >
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="w-5 h-5 text-slate-800"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
    <div className="flex flex-col leading-none">
      <span className="text-xs sm:text-sm font-black tracking-wider text-slate-900 uppercase">
        GLOBAL
      </span>
      <span className="text-[8px] font-bold tracking-[0.2em] text-slate-600 uppercase">
        CLOTHING
      </span>
    </div>
  </div>
);

// 11. Tirupati Agro Products - Agro Commodity & Grain Enterprise
export const TirupatiAgroLogo: React.FC<LogoProps> = ({ className = "" }) => (
  <div
    className={`flex items-center gap-2 select-none font-sans ${className}`}
    aria-label="Tirupati Agro Products"
  >
    <div className="w-5 h-5 rounded-full border-2 border-emerald-700 flex items-center justify-center text-emerald-700 text-xs font-bold">
      🌾
    </div>
    <div className="flex flex-col leading-none">
      <span className="text-xs sm:text-sm font-extrabold tracking-wide text-slate-900 uppercase">
        TIRUPATI AGRO
      </span>
      <span className="text-[8px] font-semibold tracking-[0.16em] text-slate-500 uppercase">
        PRODUCTS
      </span>
    </div>
  </div>
);
