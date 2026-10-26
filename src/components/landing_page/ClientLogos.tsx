import React from "react";

interface LogoProps {
  className?: string;
}

const baseImageClass =
  "h-7 sm:h-8 md:h-9 w-auto object-contain transition-all duration-300 hover:scale-105 select-none";

// 1. ITC Limited - Official Corporate Crest & Serif Wordmark
export const ItcLogo: React.FC<LogoProps> = ({ className = "" }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/clients/itc.png"
    alt="ITC Limited"
    className={`h-8 sm:h-9 md:h-10 w-auto object-contain transition-all duration-300 hover:scale-105 select-none ${className}`}
    loading="lazy"
  />
);

// 2. Nestlé - Official Bird in Nest & Wordmark
export const NestleLogo: React.FC<LogoProps> = ({ className = "" }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/clients/nestle.png"
    alt="Nestlé"
    className={`h-6 sm:h-7 md:h-8 w-auto object-contain transition-all duration-300 hover:scale-105 select-none ${className}`}
    loading="lazy"
  />
);

// 3. Hindustan Unilever Limited (HUL) - Iconic 'U' & Brandmark
export const HulLogo: React.FC<LogoProps> = ({ className = "" }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/clients/hul.png"
    alt="Hindustan Unilever Limited"
    className={`${baseImageClass} ${className}`}
    loading="lazy"
  />
);

// 4. PepsiCo - Globe Emblem & Bold Wordmark
export const PepsiCoLogo: React.FC<LogoProps> = ({ className = "" }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/clients/pepsico.png"
    alt="PepsiCo"
    className={`h-6 sm:h-7 md:h-8 w-auto object-contain transition-all duration-300 hover:scale-105 select-none ${className}`}
    loading="lazy"
  />
);

// 5. Tata Consumer Products - Split-T Logotype & Wordmark
export const TataConsumerLogo: React.FC<LogoProps> = ({ className = "" }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/clients/tata-consumer.png"
    alt="Tata Consumer Products"
    className={`${baseImageClass} ${className}`}
    loading="lazy"
  />
);

// 6. Bosch - Official Armature Emblem & Bold Red Logotype
export const BoschLogo: React.FC<LogoProps> = ({ className = "" }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/clients/bosch.png"
    alt="Bosch"
    className={`h-6 sm:h-7 md:h-8 w-auto object-contain transition-all duration-300 hover:scale-105 select-none ${className}`}
    loading="lazy"
  />
);

// 7. LG - Official Crimson Circular Face & Wordmark
export const LgLogo: React.FC<LogoProps> = ({ className = "" }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/clients/lg.png"
    alt="LG"
    className={`${baseImageClass} ${className}`}
    loading="lazy"
  />
);

// 8. Havells - Official Brand Logo (Enlarged per user design request)
export const HavellsLogo: React.FC<LogoProps> = ({ className = "" }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/clients/havells.png"
    alt="Havells"
    className={`h-8 sm:h-9 md:h-11 w-auto object-contain transition-all duration-300 hover:scale-105 select-none ${className}`}
    loading="lazy"
  />
);

// 9. Britannia - Arched Red Banner with Yellow & Green Ribbon Swoosh
export const BritanniaLogo: React.FC<LogoProps> = ({ className = "" }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/clients/britannia.png"
    alt="Britannia"
    className={`${baseImageClass} ${className}`}
    loading="lazy"
  />
);

// 10. Dabur - Iconic Banyan Tree & Green Script Wordmark
export const DaburLogo: React.FC<LogoProps> = ({ className = "" }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/clients/dabur.png"
    alt="Dabur"
    className={`h-8 sm:h-9 md:h-10 w-auto object-contain transition-all duration-300 hover:scale-105 select-none ${className}`}
    loading="lazy"
  />
);

// 11. Crompton - Official Brand Logotype (Crompton Greaves Consumer Electricals)
export const CromptonLogo: React.FC<LogoProps> = ({ className = "" }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/clients/crompton.png"
    alt="Crompton"
    className={`h-6 sm:h-7 md:h-8 w-auto object-contain transition-all duration-300 hover:scale-105 select-none ${className}`}
    loading="lazy"
  />
);

// 12. Manyavar - Official Brand Logo with Royal M Shield & Wordmark
export const ManyavarLogo: React.FC<LogoProps> = ({ className = "" }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/clients/manyavar.png"
    alt="Manyavar"
    className={`${baseImageClass} ${className}`}
    loading="lazy"
  />
);

// 13. Aditya Birla Fashion - Geometric Prismatic Sun & Corporate Wordmark
export const AdityaBirlaLogo: React.FC<LogoProps> = ({ className = "" }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/clients/aditya-birla.png"
    alt="Aditya Birla Fashion & Retail"
    className={`h-8 sm:h-9 md:h-10 w-auto object-contain transition-all duration-300 hover:scale-105 select-none ${className}`}
    loading="lazy"
  />
);

// 14. Orient Electric - Official Brand Logo with 'O' Vortex Symbol & Wordmark
export const OrientLogo: React.FC<LogoProps> = ({ className = "" }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/clients/orient.svg"
    alt="Orient Electric"
    className={`${baseImageClass} ${className}`}
    loading="lazy"
  />
);

// 15. Bisk Farm - Official Farmstead Illustration & Framed Wordmark
export const BiskFarmLogo: React.FC<LogoProps> = ({ className = "" }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/clients/bisk-farm.png"
    alt="Bisk Farm"
    className={`h-8 sm:h-9 md:h-10 w-auto object-contain transition-all duration-300 hover:scale-105 select-none ${className}`}
    loading="lazy"
  />
);

// 16. Ballantine's - Signature Script Logo (Enlarged per user design request)
export const BallentineLogo: React.FC<LogoProps> = ({ className = "" }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/clients/ballantines.svg"
    alt="Ballantine's"
    className={`h-8 sm:h-9 md:h-11 w-auto object-contain transition-all duration-300 hover:scale-105 select-none filter contrast-125 ${className}`}
    loading="lazy"
  />
);

// 17. Industry Safety Products (ISP) - Official Corporate Logo with Safety Gloves Crest
export const IspLogo: React.FC<LogoProps> = ({ className = "" }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/clients/isp.png"
    alt="Industrial Safety Products (ISP)"
    className={`h-6 sm:h-7 md:h-8 w-auto object-contain transition-all duration-300 hover:scale-105 select-none ${className}`}
    loading="lazy"
  />
);

// 18. Glider - Official Brand Badge with "We Create Better..." slogan (Replaces incorrect caret logo)
export const GliderLogo: React.FC<LogoProps> = ({ className = "" }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/clients/glider.png"
    alt="Glider - We Create Better"
    className={`${baseImageClass} ${className}`}
    loading="lazy"
  />
);
