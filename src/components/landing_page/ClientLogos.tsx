import React from "react";

interface LogoProps {
  className?: string;
}

/* ── Optical sizing ────────────────────────────────────────────────────
   Logos have very different shapes (square emblems vs long wordmarks).
   Giving them all the same height makes wide wordmarks look huge and
   square emblems look tiny, so the height is derived from each file's
   aspect ratio instead:  height = BASE × aspect^-0.42, clamped.
   `weight` is a small optical correction: < 1 for logos that are solid
   colour blocks (they read heavier), > 1 for thin / airy marks.
   Sizes scale down on phones via the --logo-scale variable set by the
   marquee container (falls back to 1).                                  */
const BASE_HEIGHT = 42;
const MIN_HEIGHT = 18;
const MAX_HEIGHT = 46;

function logoHeight(aspect: number, weight = 1): number {
  const h = BASE_HEIGHT * Math.pow(aspect, -0.42) * weight;
  return Math.round(Math.min(MAX_HEIGHT, Math.max(MIN_HEIGHT, h)));
}

interface ClientLogoSpec {
  src: string;
  alt: string;
  /** width ÷ height of the trimmed artwork */
  aspect: number;
  weight?: number;
  extraClass?: string;
}

const ClientLogo: React.FC<ClientLogoSpec & LogoProps> = ({
  src,
  alt,
  aspect,
  weight,
  extraClass = "",
  className = "",
}) => {
  const h = logoHeight(aspect, weight);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      draggable={false}
      style={{
        height: `calc(${h}px * var(--logo-scale, 1))`,
        width: `calc(${Math.round(h * aspect)}px * var(--logo-scale, 1))`,
      }}
      className={`object-contain select-none ${extraClass} ${className}`}
    />
  );
};

export const ItcLogo: React.FC<LogoProps> = (p) => (
  <ClientLogo src="/clients/itc.png" alt="ITC Limited" aspect={0.94} {...p} />
);

export const NestleLogo: React.FC<LogoProps> = (p) => (
  <ClientLogo src="/clients/nestle.png" alt="Nestlé" aspect={3.45} weight={1.05} {...p} />
);

// Hindustan Unilever: the "U" emblem only (wordmark removed for legibility at small size)
export const HulLogo: React.FC<LogoProps> = (p) => (
  <ClientLogo src="/clients/hul-emblem.png" alt="Hindustan Unilever Limited" aspect={0.95} weight={0.92} {...p} />
);

export const PepsiCoLogo: React.FC<LogoProps> = (p) => (
  <ClientLogo src="/clients/pepsico.png" alt="PepsiCo" aspect={4.25} {...p} />
);

export const TataConsumerLogo: React.FC<LogoProps> = (p) => (
  <ClientLogo src="/clients/tata-consumer.png" alt="Tata Consumer Products" aspect={1.81} {...p} />
);

export const BoschLogo: React.FC<LogoProps> = (p) => (
  <ClientLogo src="/clients/bosch.png" alt="Bosch" aspect={3.97} {...p} />
);

export const LgLogo: React.FC<LogoProps> = (p) => (
  <ClientLogo src="/clients/lg.png" alt="LG" aspect={2.28} {...p} />
);

export const HavellsLogo: React.FC<LogoProps> = (p) => (
  <ClientLogo src="/clients/havells.png" alt="Havells" aspect={1.52} {...p} />
);

export const BritanniaLogo: React.FC<LogoProps> = (p) => (
  <ClientLogo src="/clients/britannia.png" alt="Britannia" aspect={2.78} weight={0.92} {...p} />
);

export const DaburLogo: React.FC<LogoProps> = (p) => (
  <ClientLogo src="/clients/dabur.png" alt="Dabur" aspect={1.12} {...p} />
);

export const CromptonLogo: React.FC<LogoProps> = (p) => (
  <ClientLogo src="/clients/crompton.png" alt="Crompton" aspect={5.54} weight={0.9} {...p} />
);

export const ManyavarLogo: React.FC<LogoProps> = (p) => (
  <ClientLogo src="/clients/manyavar.png" alt="Manyavar" aspect={3.05} {...p} />
);

export const AdityaBirlaLogo: React.FC<LogoProps> = (p) => (
  <ClientLogo src="/clients/aditya-birla.png" alt="Aditya Birla Fashion & Retail" aspect={1.03} weight={0.88} {...p} />
);

export const OrientLogo: React.FC<LogoProps> = (p) => (
  <ClientLogo src="/clients/orient.svg" alt="Orient Electric" aspect={2.76} weight={0.9} {...p} />
);

export const BiskFarmLogo: React.FC<LogoProps> = (p) => (
  <ClientLogo src="/clients/bisk-farm.png" alt="Bisk Farm" aspect={1.08} weight={0.95} {...p} />
);

export const BallentineLogo: React.FC<LogoProps> = (p) => (
  <ClientLogo src="/clients/ballantines.svg" alt="Ballantine's" aspect={2.92} weight={1.1} extraClass="contrast-125" {...p} />
);

// Industrial Safety Products: the ISP crest only (long company-name line removed)
export const IspLogo: React.FC<LogoProps> = (p) => (
  <ClientLogo src="/clients/isp-emblem.png" alt="Industrial Safety Products (ISP)" aspect={0.76} {...p} />
);

export const GliderLogo: React.FC<LogoProps> = (p) => (
  <ClientLogo src="/clients/glider.png" alt="Glider" aspect={2.71} {...p} />
);
