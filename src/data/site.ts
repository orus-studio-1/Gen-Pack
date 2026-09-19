/**
 * Company-wide details. Placeholder contact data — swap in the real
 * addresses, phone numbers and social handles before going live.
 */
export const SITE = {
  name: "Genpack",
  legalName: "Genpack Packaging Pvt. Ltd.",
  tagline: "Sustainable corrugated packaging, engineered to protect.",
  description:
    "Genpack manufactures 100% recyclable corrugated rolls, boxes, inserts and retail displays — plastic-free packaging engineered for e-commerce, FMCG, pharma and export supply chains.",
  email: "hello@genpack.in",
  salesEmail: "sales@genpack.in",
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  altPhone: "+91 80 4567 8900",
  altPhoneHref: "tel:+918045678900",
  address: {
    line1: "Genpack Corrugation Plant",
    line2: "Plot 42, Industrial Area Phase II",
    city: "Bengaluru",
    region: "Karnataka 560058",
    country: "India",
  },
  hours: "Mon – Sat, 9:00 – 18:30 IST",
  social: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Products", href: "/product" },
  { label: "Services", href: "/services" },
  // { label: "Our Fleet", href: "/our-fleet" },
  { label: "Industries", href: "/industries" },
  { label: "Contact Us", href: "/contact" },
];
