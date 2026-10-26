/**
 * Company-wide details. Placeholder contact data — swap in the real
 * addresses, phone numbers and social handles before going live.
 */
export const SITE = {
  name: "Carapace",
  legalName: "Sri Vishnu Industries",
  tagline: "Sustainable corrugated packaging, engineered to protect.",
  description:
    "Carapace manufactures 100% recyclable corrugated rolls, boxes, inserts and retail displays — plastic-free packaging engineered for e-commerce, FMCG, pharma and export supply chains.",
  email: "info@carapaceintl.com",
  salesEmail: "sales@carapaceintl.com",
  phone: "+91 9903622821",
  phoneHref: "tel:+919903622821",
  altPhone: "+91 9830694795",
  altPhoneHref: "tel:+919830694795",
  address1 : {
    line: "76/H/1 & 2, Dr. S. C. Banerjee Road",
    city: "Kolkata – 700010",
    region: "West Bengal",
    country: "India",
  },
  address2 : {
    line: "6 & 7 P.T.R Siding Shalimar",
    city: "Howrah – 711102",
    region: "West Bengal",
    country: "India"
  },
  hours: "Mon – Sat, 9:00 – 18:30 IST",
  social: {
    linkedin: "https://www.linkedin.com/company/genpack-corp/",
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
