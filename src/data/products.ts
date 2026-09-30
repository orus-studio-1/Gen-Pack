/**
 * Carapace product catalogue.
 *
 * Single source of truth for the /product listing, the /product/[slug] detail
 * pages and any cross-links (footer, landing page teasers).
 */

export type CategoryId =
  | "corrugated-rolls"
  | "corrugated-boxes"
  | "eco-innovations"
  | "advanced-variants"
  | "retail-packaging"
  | "industrial-heavy-duty"
  | "customization-print"
  | "inserts-protection";

export interface ProductCategory {
  id: CategoryId;
  /** Full name used as a section heading. */
  name: string;
  /** Compact label used inside the filter pills. */
  shortName: string;
  blurb: string;
  image: string;
  /** Shown on every detail page inside this category. */
  benefits: string[];
}

export interface Product {
  slug: string;
  name: string;
  categories: CategoryId[];
  /** Construction / material specification. */
  spec: string;
  /** The job the product is bought to do. */
  useCase: string;
  description: string;
  /** Industries and applications this product is built for. */
  idealFor: string[];
  image: string;
  /** Optional extra selling points, used on the detail page. */
  benefits?: string[];
}

/* ── Photography pool ──────────────────────────────────────────────
   Unsplash CDN ids, grouped by subject so that a category never renders
   the same photo twice in a row inside its grid.                      */
const IMG = {
  corrugatedTexture: "https://images.unsplash.com/photo-1783700697522-fb6c760dae82",
  corrugatedLines: "https://images.unsplash.com/photo-1783700698066-4b2305da043c",
  cardboardBales: "https://images.unsplash.com/photo-1507560461415-997cd00bfd45",
  corrugatedPattern: "https://images.unsplash.com/photo-1673788458533-41fb77e6b06e",
  corrugatedCloseUp: "https://images.unsplash.com/photo-1696764190824-bcdb5c8278d3",
  kraftSheet: "https://images.unsplash.com/photo-1582668155461-b6c27ceca8c3",
  kraftCrinkled: "https://images.unsplash.com/photo-1763030861291-b7e65ae261c9",
  kraftParcel: "https://images.unsplash.com/photo-1764764138654-9f29a11eed95",
  kraftPaper: "https://images.unsplash.com/photo-1602071444081-9b94844dbf88",
  recyclePatch: "https://images.unsplash.com/photo-1669384537216-24740a56a2d5",
  paperBag: "https://images.unsplash.com/photo-1634814407060-de5879efd7a8",
  boxStack: "https://images.unsplash.com/photo-1624137527136-66e631bdaa0e",
  boxesOpen: "https://images.unsplash.com/photo-1700165644892-3dd6b67b25bc",
  boxesRack: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866",
  boxesFloor: "https://images.unsplash.com/photo-1609143739217-01b60dad1c67",
  boxesRoad: "https://images.unsplash.com/photo-1600031316492-ec731a3f4dd6",
  boxLot: "https://images.unsplash.com/photo-1513672494107-cd9d848a383e",
  boxLabeled: "https://images.unsplash.com/photo-1556227996-370b60576b84",
  boxBrown: "https://images.unsplash.com/photo-1573376670329-0261ea9fde97",
  boxBrownAlt: "https://images.unsplash.com/photo-1573376671096-e1fce2d1f19d",
  boxBrownTall: "https://images.unsplash.com/photo-1575833948662-cc99178abbb8",
  boxShallow: "https://images.unsplash.com/photo-1577705998148-6da4f3963bc8",
  boxOnTable: "https://images.unsplash.com/photo-1631010231130-5c7828d9a3a7",
  boxWhiteTable: "https://images.unsplash.com/photo-1595246135406-803418233494",
  boxWhiteTableAlt: "https://images.unsplash.com/photo-1595246007497-15e0ed4b8d96",
  boxOpenTable: "https://images.unsplash.com/photo-1686632800715-b705ba1b0eb6",
  boxTextured: "https://images.unsplash.com/photo-1740842028123-56fd319de33a",
  boxRecycle: "https://images.unsplash.com/photo-1654078054613-a56cfcabdb84",
  boxCoffee: "https://images.unsplash.com/photo-1648587456176-4969b0124b12",
  boxPink: "https://images.unsplash.com/photo-1585221330389-24fb30535ec7",
  boxToothbrush: "https://images.unsplash.com/photo-1605615923013-f26c14fe7155",
  boxBlank: "https://images.unsplash.com/photo-1771255217872-99fe6c876e45",
  boxSticker: "https://images.unsplash.com/photo-1571510175664-855ac60fe8f6",
  boxHandover: "/newAdded/ecommerce&d2c.png",
  boxPerson: "https://images.unsplash.com/photo-1449247666642-264389f5f5b1",
  saleTags: "https://images.unsplash.com/photo-1607083206968-13611e3d76db",
  takeaway: "https://images.unsplash.com/photo-1597974828431-9078248d8cc9",
  foodPouch: "https://images.unsplash.com/photo-1640941978130-bd19c18c5949",
  warehouse: "https://images.unsplash.com/photo-1553413077-190dd305871c",
  warehouseBoxes: "https://images.unsplash.com/photo-1684695749267-233af13276d0",
  warehousePallets: "https://images.unsplash.com/photo-1672552226380-486fe900b322",
  warehouseStack: "https://images.unsplash.com/photo-1709804945989-c8be542e04db",
  pallets: "https://images.unsplash.com/photo-1573209680076-bd7ec7007616",
  loadingDock: "https://images.unsplash.com/photo-1764046155497-ad7e50737ffa",
  forklift: "https://images.unsplash.com/photo-1779517225996-d5b751f80f48",
  forkliftAlt: "https://images.unsplash.com/photo-1779517226273-bcf843b759b9",
  factory: "https://images.unsplash.com/photo-1734357310900-4b513a3a5ae0",
  heritageMill: "https://images.unsplash.com/photo-1727517786578-ff2bb896b852",
  conveyor: "https://images.unsplash.com/photo-1693031630157-7ecc8d06de63",
  press: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a",
  pressInk: "https://images.unsplash.com/photo-1758183961426-88d64eb5f787",
  cardboardPile: "https://images.unsplash.com/photo-1719600804011-3bff3909b183",
  cardboardHeap: "https://images.unsplash.com/photo-1662556828474-aaad95b81fb1",
  craftDesk: "https://images.unsplash.com/photo-1661595677669-868f3591e5db",
  shelfBox: "https://images.unsplash.com/photo-1534723452862-4c874018d66d",
  storeAisle: "https://images.unsplash.com/photo-1601600576337-c1d8a0d1373c",
  groceryAisle: "https://images.unsplash.com/photo-1670684684445-a4504dca0bbc",
  produceShelf: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8",
  cratesApples: "https://images.unsplash.com/photo-1762591871417-67d8940c34a5",
  cratesBerries: "https://images.unsplash.com/photo-1785173601626-d34f7a4016b2",
  cratesOranges: "https://images.unsplash.com/photo-1771904867001-1ee164bf353c",
  fruitRack: "https://images.unsplash.com/photo-1477141970786-c4258cdd87ce",
  blister: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
  blisterPile: "https://images.unsplash.com/photo-1577401132921-cb39bb0adcff",
  pills: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926",
  phonePack: "/newAdded/electronics&appliance.png",
  eyewearPack: "https://images.unsplash.com/photo-1755606045126-1aeb4f0e7c2d",
  paperRolls: "https://images.unsplash.com/photo-1451930264513-2e93da3ba755",
  paperSack: "https://images.unsplash.com/photo-1590820077566-af4e557c1548",
  shreddedPaper: "https://images.unsplash.com/photo-1715522594847-67c90b5b8667",
  plainBox: "https://images.unsplash.com/photo-1567570670593-6596d461ad38",
  fragileBox: "https://images.unsplash.com/photo-1572010696997-c73e95aeebe8",
  fragileParcel: "https://images.unsplash.com/photo-1541544181051-e46607bc22a4",
  fragileTape: "https://images.unsplash.com/photo-1758351507026-71ad3645cb43",
  pcbTester: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e",
  pcbAssembly: "https://images.unsplash.com/photo-1640955785023-1854685dae05",
  pulpTray: "https://images.unsplash.com/photo-1756361771433-d36c10d9dc29",
  pulpTrayStack: "https://images.unsplash.com/photo-1607891715120-da6adb7ff10c",
  printWorkshop: "https://images.unsplash.com/photo-1777446696345-ad217d3a9a7e",
};

export const IMAGES = IMG;

export const CATEGORIES: ProductCategory[] = [
  {
    id: "corrugated-rolls",
    name: "Corrugated Rolls",
    shortName: "Rolls",
    blurb:
      "Flexible kraft rolls for wrapping, cushioning and surface protection — slit to the width, length and GSM your packing line runs on.",
    image: IMG.paperRolls,
    benefits: [
      "Slit to any width from 300 mm to 1,800 mm with matching core sizes",
      "Single face, 2-ply, 3-ply and double-wall constructions held in stock",
      "100% recycled kraft liner as standard, virgin kraft on request",
      "Replaces plastic stretch film and bubble wrap without losing protection",
    ],
  },
  {
    id: "corrugated-boxes",
    name: "Standard Corrugated Boxes",
    shortName: "Boxes",
    blurb:
      "FEFCO-standard shipping cartons in 3-ply, 5-ply and 7-ply board — the workhorses of every warehouse and e-commerce line.",
    image: IMG.boxStack,
    benefits: [
      "Full FEFCO range: RSC, HSC, FOL, telescope, folder and die-cut styles",
      "Board strength engineered to your stack height and transit route",
      "Bursting strength and ECT tested on every production batch",
      "Delivered flat-packed to keep your storage footprint low",
    ],
  },
  {
    id: "eco-innovations",
    name: "Eco-Friendly Innovations",
    shortName: "Eco-Friendly",
    blurb:
      "Plastic-free protective packaging — paper void fill, honeycomb, cushions and pads that recycle in the same stream as the carton.",
    image: IMG.boxRecycle,
    benefits: [
      "Kerbside recyclable and home compostable — no plastic separation needed",
      "Drop-in replacements for bubble wrap, air pillows and EPS foam",
      "Made from FSC-certified and post-consumer recycled fibre",
      "Supports EPR reporting and plastic-reduction targets",
    ],
  },
  {
    id: "advanced-variants",
    name: "Functional & Advanced Variants",
    shortName: "Advanced",
    blurb:
      "Treated and coated corrugated board for cold chains, humid warehouses, static-sensitive electronics and food-contact use.",
    image: IMG.boxesRack,
    benefits: [
      "Coatings and laminates tested for moisture, grease and condensation",
      "Food-grade, ESD-safe and fire-retardant options available",
      "Built for cold chain, monsoon storage and long ocean transits",
      "Compliance documentation supplied with every consignment",
    ],
  },
  {
    id: "retail-packaging",
    name: "Retail Packaging & Displays",
    shortName: "Retail",
    blurb:
      "Shelf-ready cartons and printed display units that travel from the pallet to the shelf without a second touch.",
    image: IMG.shelfBox,
    benefits: [
      "Designed around modern-trade shelf-ready packaging guidelines",
      "High-definition litho lamination for photographic brand artwork",
      "One-motion opening cuts shelf replenishment time",
      "Structural and graphic design handled in-house",
    ],
  },
  {
    id: "industrial-heavy-duty",
    name: "Industrial & Heavy-Duty Packaging",
    shortName: "Heavy Duty",
    blurb:
      "Triple-wall boxes, bulk bins and export crates engineered to replace timber for heavy, high-value and overseas freight.",
    image: IMG.forklift,
    benefits: [
      "Load-tested constructions up to 1,200 kg gross weight",
      "ISPM-15 exempt — no fumigation or heat-treatment paperwork",
      "Ships flat, cutting inbound freight and storage cost against timber",
      "Custom partitions and cushioning designed from your component drawing",
    ],
  },
  {
    id: "customization-print",
    name: "Customization & Print Enhancements",
    shortName: "Print & Finish",
    blurb:
      "Flexo, offset and digital print with premium finishing — the difference between a brown box and a brand asset.",
    image: IMG.press,
    benefits: [
      "Up to 6-colour flexo and 4-colour offset with in-line finishing",
      "Water-based and soy-based inks that keep the box recyclable",
      "Free structural CAD samples before any tooling is cut",
      "Variable data printing for codes, batches and personalisation",
    ],
  },
  {
    id: "inserts-protection",
    name: "Specialty Inserts & Protection",
    shortName: "Inserts",
    blurb:
      "Die-cut fitments, dividers, partitions and edge protectors that hold the product still — where most transit damage is won or lost.",
    image: IMG.craftDesk,
    benefits: [
      "Drop, vibration and compression tested against your actual product",
      "Precision die-cut to CAD within a ±1 mm tolerance",
      "Paper-based alternatives to EPS, EPE and moulded plastic",
      "Nests inside your existing carton — no change to the outer pack",
    ],
  },
];

export const PRODUCTS: Product[] = [
  /* ── Corrugated Rolls ─────────────────────────────────────────── */
  {
    slug: "single-face-corrugated-roll",
    name: "Single Face Corrugated Roll",
    categories: ["corrugated-rolls"],
    spec: "One flat liner bonded to one fluted medium",
    useCase: "Surface protection & wrapping",
    description:
      "Flexible single-face corrugated rolls designed for wrapping delicate products and providing lightweight cushioning during storage and transit.",
    idealFor: ["Furniture", "Glassware", "E-commerce"],
    image: IMG.paperRolls,
    benefits: [
      "Wraps around curves, corners and irregular shapes without cracking",
      "Cuts cleanly by hand or on a roll dispenser — no tooling required",
      "Adds cushioning without the bulk of a second carton",
    ],
  },
  {
    slug: "heavy-duty-corrugated-roll",
    name: "Heavy-Duty Corrugated Roll",
    categories: ["corrugated-rolls", "industrial-heavy-duty"],
    spec: "High GSM kraft with reinforced flute",
    useCase: "Heavy-duty cushioning",
    description:
      "Durable corrugated rolls engineered for superior impact protection of heavy and industrial products.",
    idealFor: ["Machinery", "Exports", "Industrial packaging"],
    image: IMG.corrugatedLines,
    benefits: [
      "Reinforced flute holds its shape under sustained compression",
      "High-GSM liner resists puncture from sharp machined edges",
      "Sized to wrap long profiles, shafts and fabricated assemblies",
    ],
  },
  {
    slug: "e-flute-corrugated-roll",
    name: "E-Flute Corrugated Roll",
    categories: ["corrugated-rolls"],
    spec: "Fine flute profile with a smooth outer surface",
    useCase: "Premium packaging",
    description:
      "Smooth-finish E-flute corrugated rolls offering excellent printability and lightweight protection.",
    idealFor: ["Retail packaging", "Cosmetics"],
    image: IMG.corrugatedCloseUp,
  },
  {
    slug: "b-flute-corrugated-roll",
    name: "B-Flute Corrugated Roll",
    categories: ["corrugated-rolls"],
    spec: "Medium flute profile",
    useCase: "General packaging",
    description:
      "Versatile B-flute corrugated rolls providing balanced cushioning and compression strength.",
    idealFor: ["FMCG", "Logistics"],
    image: IMG.kraftSheet,
  },
  {
    slug: "c-flute-corrugated-roll",
    name: "C-Flute Corrugated Roll",
    categories: ["corrugated-rolls"],
    spec: "Standard flute profile",
    useCase: "Shipping protection",
    description:
      "Strong C-flute corrugated rolls designed for superior cushioning and shipping protection.",
    idealFor: ["Industrial packaging"],
    image: IMG.corrugatedPattern,
  },
  {
    slug: "bc-double-wall-roll",
    name: "BC Double Wall Roll",
    categories: ["corrugated-rolls", "industrial-heavy-duty"],
    spec: "Double-wall corrugated construction",
    useCase: "Heavy-duty packaging",
    description:
      "Double-wall corrugated rolls delivering maximum strength and durability for demanding shipping applications.",
    idealFor: ["Export packaging", "Heavy equipment"],
    image: IMG.corrugatedTexture,
  },
  {
    slug: "2-ply-corrugated-roll",
    name: "2-Ply Corrugated Roll",
    categories: ["corrugated-rolls"],
    spec: "2-ply brown kraft paper, customizable widths and lengths",
    useCase: "Flexible cushioning and surface protection",
    description:
      "Cost-effective and lightweight corrugated rolls ideal for wrapping, cushioning and protecting irregularly shaped items.",
    idealFor: ["Movers & packers", "E-commerce", "Furniture", "Logistics"],
    image: IMG.kraftCrinkled,
  },
  {
    slug: "3-ply-corrugated-roll",
    name: "3-Ply Corrugated Roll",
    categories: ["corrugated-rolls"],
    spec: "3-ply construction, enhanced durability, multiple flute sizes",
    useCase: "Extra protection for fragile goods",
    description:
      "Sturdy and versatile corrugated paper rolls designed to safeguard fragile and semi-heavy items during storage and transit.",
    idealFor: ["Ceramics", "Glassware", "Electronics packaging"],
    image: IMG.kraftPaper,
  },
  {
    slug: "customized-corrugated-roll",
    name: "Customized Corrugated Roll",
    categories: ["corrugated-rolls", "customization-print"],
    spec: "Custom GSM, size, ply and branding options",
    useCase: "Tailored for niche industrial needs",
    description:
      "Custom-engineered corrugated rolls built to specific packaging, branding or cushioning requirements with variable ply strength.",
    idealFor: ["Industrial packaging", "OEM vendors", "Bulk manufacturers"],
    image: IMG.kraftParcel,
    benefits: [
      "Any combination of ply, flute and GSM within our board range",
      "Printed liner available for branded wrapping and dispatch areas",
      "Roll length matched to your dispenser and shift consumption",
    ],
  },

  /* ── Standard Corrugated Boxes ────────────────────────────────── */
  {
    slug: "regular-slotted-container",
    name: "Regular Slotted Container (RSC)",
    categories: ["corrugated-boxes"],
    spec: "Standard FEFCO 0201 slotted box",
    useCase: "General shipping",
    description:
      "The industry's most widely used corrugated shipping box, offering strength, efficiency and cost-effective packaging.",
    idealFor: ["E-commerce", "Logistics"],
    image: IMG.boxStack,
    benefits: [
      "Flaps meet at the centre for a fast, single-strip tape seal",
      "Near-zero board waste in die-cutting keeps unit cost lowest",
      "Available in over a hundred stock sizes for same-week dispatch",
    ],
  },
  {
    slug: "half-slotted-container",
    name: "Half Slotted Container (HSC)",
    categories: ["corrugated-boxes"],
    spec: "Open-top corrugated box",
    useCase: "Storage & display",
    description:
      "Open-top corrugated containers providing easy access for storage and warehouse applications.",
    idealFor: ["Manufacturing", "Warehousing"],
    image: IMG.boxBrown,
  },
  {
    slug: "full-overlap-slotted-container",
    name: "Full Overlap Slotted Container (FOL)",
    categories: ["corrugated-boxes", "industrial-heavy-duty"],
    spec: "Full overlapping top and bottom flaps",
    useCase: "Heavy products",
    description:
      "Heavy-duty corrugated boxes with overlapping flaps for enhanced stacking strength and protection.",
    idealFor: ["Exports", "Machinery"],
    image: IMG.boxBrownAlt,
  },
  {
    slug: "full-telescope-box",
    name: "Full Telescope Box (FTD)",
    categories: ["corrugated-boxes"],
    spec: "Separate lid and base, full-depth cover",
    useCase: "Premium protection",
    description:
      "Two-piece telescope boxes offering exceptional strength and premium product presentation.",
    idealFor: ["Industrial components"],
    image: IMG.boxWhiteTable,
  },
  {
    slug: "half-telescope-box",
    name: "Half Telescope Box",
    categories: ["corrugated-boxes"],
    spec: "Partial telescopic cover",
    useCase: "Protective packaging",
    description:
      "Strong two-piece packaging providing added protection for delicate or valuable products.",
    idealFor: ["Electronics"],
    image: IMG.boxWhiteTableAlt,
  },
  {
    slug: "five-panel-folder",
    name: "Five Panel Folder",
    categories: ["corrugated-boxes"],
    spec: "Extended folding panel with end closures",
    useCase: "Long products",
    description:
      "Corrugated folders specifically designed for packaging long or flat products securely.",
    idealFor: ["Furniture", "Automotive"],
    image: IMG.boxShallow,
  },
  {
    slug: "one-piece-folder",
    name: "One Piece Folder",
    categories: ["corrugated-boxes"],
    spec: "Single-piece die-cut construction",
    useCase: "Flat products",
    description:
      "Lightweight single-piece corrugated folders ideal for shipping flat items with minimal assembly.",
    idealFor: ["Books", "Panels"],
    image: IMG.boxBrownTall,
  },
  {
    slug: "die-cut-corrugated-box",
    name: "Die-Cut Corrugated Box",
    categories: ["corrugated-boxes", "customization-print"],
    spec: "Precision die-cut construction to your CAD",
    useCase: "Custom packaging",
    description:
      "Custom-engineered die-cut boxes manufactured to fit the product exactly while enhancing presentation.",
    idealFor: ["Retail", "Electronics"],
    image: IMG.boxBlank,
    benefits: [
      "Self-locking closure means no tape at the packing station",
      "Eliminates void fill by fitting the product within millimetres",
      "Inside and outside print for a complete unboxing experience",
    ],
  },
  {
    slug: "folder-type-box",
    name: "Folder Type Box",
    categories: ["corrugated-boxes"],
    spec: "Foldable corrugated construction",
    useCase: "Flexible packaging",
    description:
      "Easy-to-assemble corrugated folder boxes suitable for a wide range of packaging applications.",
    idealFor: ["Apparel", "Documents"],
    image: IMG.boxOnTable,
  },
  {
    slug: "3-ply-brown-kraft-box",
    name: "3-Ply Brown Kraft Box",
    categories: ["corrugated-boxes"],
    spec: "3-ply board, unprinted brown kraft",
    useCase: "Light items, general packaging",
    description:
      "Lightweight yet sturdy boxes perfect for everyday packaging, retail deliveries and low-weight shipping.",
    idealFor: ["E-commerce saleTags", "Lightweight goods", "Protective outer packaging"],
    image: IMG.plainBox,
  },
  {
    slug: "5-ply-kraft-box",
    name: "5-Ply Kraft Box",
    categories: ["corrugated-boxes"],
    spec: "5-ply board, unprinted or basic print",
    useCase: "Medium to heavy items",
    description:
      "Stronger five-layer corrugated boxes made for medium to heavy items that need extra wall rigidity.",
    idealFor: ["Electronics", "Household goods", "Industrial packaging"],
    image: IMG.boxesFloor,
  },
  {
    slug: "7-ply-heavy-duty-box",
    name: "7-Ply Heavy-Duty Box",
    categories: ["corrugated-boxes", "industrial-heavy-duty"],
    spec: "7-ply export-grade triple wall board",
    useCase: "Industrial & export shipping",
    description:
      "Designed for demanding transit conditions, these heavy-duty boxes ensure maximum protection over long distances.",
    idealFor: ["Industrial equipment", "Bulk exports", "Long-distance shipping"],
    image: IMG.warehouseStack,
  },

  /* ── Eco-Friendly Innovations ─────────────────────────────────── */
  {
    slug: "paper-void-fill",
    name: "Paper Void Fill",
    categories: ["eco-innovations"],
    spec: "Crumpled or fan-fold kraft paper",
    useCase: "Void filling & cushioning",
    description:
      "Sustainable paper void fill designed to protect products during transit while replacing plastic cushioning materials.",
    idealFor: ["E-commerce", "Retail", "Logistics"],
    image: IMG.paperSack,
    benefits: [
      "Fan-folded stacks feed straight into standard void-fill dispensers",
      "One material for carton and fill — a single recycling stream",
      "Expands to fill irregular voids that air pillows bridge over",
    ],
  },
  {
    slug: "corrugated-layer-pads",
    name: "Corrugated Layer Pads",
    categories: ["eco-innovations", "inserts-protection"],
    spec: "Flat corrugated sheets cut to pallet or carton size",
    useCase: "Product separation",
    description:
      "Durable corrugated layer pads that separate stacked products and improve load stability during shipping.",
    idealFor: ["Warehousing", "FMCG", "Exports"],
    image: IMG.corrugatedLines,
  },
  {
    slug: "corrugated-slip-sheets",
    name: "Corrugated Slip Sheets",
    categories: ["eco-innovations", "industrial-heavy-duty"],
    spec: "High-strength kraft liner with pull tabs",
    useCase: "Palletized shipping",
    description:
      "Lightweight corrugated slip sheets that reduce shipping weight while improving pallet handling efficiency.",
    idealFor: ["Export logistics", "Manufacturing"],
    image: IMG.pallets,
  },
  {
    slug: "honeycomb-inserts",
    name: "Honeycomb Inserts",
    categories: ["eco-innovations", "inserts-protection"],
    spec: "Hexagonal kraft honeycomb core",
    useCase: "Sustainable cushioning",
    description:
      "Eco-friendly honeycomb inserts providing superior strength and impact protection without plastic.",
    idealFor: ["Electronics", "Furniture", "Appliances"],
    image: IMG.corrugatedPattern,
    benefits: [
      "Strength-to-weight ratio comparable to EPS at a fraction of the volume",
      "Absorbs repeated impacts without permanent deformation",
      "Fully recyclable with the outer carton",
    ],
  },
  {
    slug: "paper-cushion-inserts",
    name: "Paper Cushion Inserts",
    categories: ["eco-innovations", "inserts-protection"],
    spec: "Folded multi-layer kraft paper cushioning",
    useCase: "Fragile product protection",
    description:
      "Recyclable paper cushion inserts engineered to absorb impact while supporting sustainable packaging initiatives.",
    idealFor: ["D2C brands", "Glassware", "Cosmetics"],
    image: IMG.shreddedPaper,
  },
  {
    slug: "corrugated-dividers",
    name: "Corrugated Dividers",
    categories: ["eco-innovations", "inserts-protection"],
    spec: "Multi-cell corrugated partitions, slotted assembly",
    useCase: "Product separation",
    description:
      "Recyclable corrugated dividers that securely separate products and minimise damage during transportation.",
    idealFor: ["Bottles", "Jars", "FMCG", "Cosmetics"],
    image: IMG.boxesOpen,
    benefits: [
      "Cell count and size built to your product's exact footprint",
      "Slot-together assembly with no glue or staples",
      "Stops glass-on-glass contact, the biggest cause of transit breakage",
    ],
  },
  {
    slug: "bottle-partitions",
    name: "Bottle Partitions",
    categories: ["eco-innovations", "inserts-protection"],
    spec: "Die-cut corrugated cells, full or half height",
    useCase: "Bottle protection",
    description:
      "Sustainable bottle partitions that prevent breakage during storage and shipment.",
    idealFor: ["Beverage industry", "Wineries", "Pharmaceuticals"],
    image: IMG.cardboardHeap,
  },
  {
    slug: "paper-bubble-wrap",
    name: "Paper Bubble Wrap",
    categories: ["eco-innovations"],
    spec: "Kraft paper with a honeycomb expansion structure, sold per metre",
    useCase: "Wrapping electronics, glass and gifts",
    description:
      "A plastic-free alternative to bubble wrap, made from kraft paper with a honeycomb structure that expands and locks around the product.",
    idealFor: ["Glassware", "Electronics", "Gifting"],
    image: IMG.fragileParcel,
    benefits: [
      "Expands up to three times its flat width as it is pulled",
      "Self-gripping — wraps without tape on most shapes",
      "Reads as premium and sustainable at the customer's unboxing",
    ],
  },
  {
    slug: "corrugated-pads",
    name: "Corrugated Pads",
    categories: ["eco-innovations", "inserts-protection"],
    spec: "Flat layered kraft sheets, single or double wall",
    useCase: "Cushioning & separation",
    description:
      "Flat, layered kraft sheets that add internal cushioning and protect items from impact.",
    idealFor: ["Separating fragile items", "Padding cartons"],
    image: IMG.kraftSheet,
  },
  {
    slug: "honeycomb-boards",
    name: "Honeycomb Boards",
    categories: ["eco-innovations", "industrial-heavy-duty"],
    spec: "Hexagonal kraft core panels, sold per sq. ft.",
    useCase: "Pallets, partitions and furniture",
    description:
      "Rigid kraft panels with a honeycomb core that deliver strength without weight.",
    idealFor: ["Pallet bases", "Partitions", "Eco furniture"],
    image: IMG.loadingDock,
  },
  {
    slug: "recyclable-kraft-inserts",
    name: "Recyclable Kraft Inserts",
    categories: ["eco-innovations", "inserts-protection"],
    spec: "Custom eco-friendly die-cut inserts",
    useCase: "Branding + protection",
    description:
      "Custom-cut eco inserts that keep your products secure while enhancing brand appeal.",
    idealFor: ["Sustainable packaging", "Product displays", "D2C unboxing"],
    image: IMG.boxOpenTable,
  },

  /* ── Functional & Advanced Variants ───────────────────────────── */
  {
    slug: "anti-static-corrugated-box",
    name: "Anti-Static Corrugated Box",
    categories: ["advanced-variants"],
    spec: "ESD-treated corrugated board with conductive inserts",
    useCase: "Electronics protection",
    description:
      "Protects static-sensitive products using ESD-safe corrugated materials and anti-static packaging solutions.",
    idealFor: ["PCBs", "Semiconductors", "Electronics"],
    image: IMG.pcbTester,
    benefits: [
      "Surface resistivity tested to ANSI/ESD S541 handling requirements",
      "Pairs with conductive foam or ESD bags for a complete solution",
      "Printed ESD symbols so handling rules are obvious on the floor",
    ],
  },
  {
    slug: "water-resistant-laminated-box",
    name: "Water-Resistant Laminated Box",
    categories: ["advanced-variants"],
    spec: "PE or BOPP laminated kraft board",
    useCase: "Moisture protection",
    description:
      "Moisture-resistant corrugated boxes engineered for humid environments and outdoor transportation.",
    idealFor: ["FMCG", "Agriculture", "Exports"],
    image: IMG.boxTextured,
  },
  {
    slug: "corrugated-pallet-boxes",
    name: "Corrugated Pallet Boxes",
    categories: ["advanced-variants", "industrial-heavy-duty"],
    spec: "Heavy-duty multi-ply construction sized to the pallet",
    useCase: "Bulk transportation",
    description:
      "Large-format corrugated pallet boxes designed for heavy loads and efficient warehouse handling.",
    idealFor: ["Industrial packaging", "Exports"],
    image: IMG.warehousePallets,
  },
  {
    slug: "thermal-insulated-boxes",
    name: "Thermal Insulated Boxes",
    categories: ["advanced-variants"],
    spec: "Foil-lined or insulated liner construction",
    useCase: "Temperature-controlled shipping",
    description:
      "Thermally insulated corrugated packaging designed to maintain product temperature during transit.",
    idealFor: ["Vaccines", "Pharmaceuticals", "Frozen food"],
    image: IMG.blister,
    benefits: [
      "Liner and wall thickness matched to your required hold time",
      "Compatible with gel packs, dry ice and phase-change materials",
      "Validated shipper configurations available on request",
    ],
  },
  {
    slug: "reusable-corrugated-totes",
    name: "Reusable Corrugated Totes",
    categories: ["advanced-variants"],
    spec: "Reinforced foldable construction for multiple trips",
    useCase: "Multi-trip logistics",
    description:
      "Durable reusable corrugated totes engineered for repeated warehousing and return logistics applications.",
    idealFor: ["Warehousing", "Inventory management"],
    image: IMG.boxesRack,
  },
  {
    slug: "food-grade-corrugated-boxes",
    name: "Food Grade Corrugated Boxes",
    categories: ["advanced-variants"],
    spec: "Virgin kraft, food-safe compliant liners and inks",
    useCase: "Food packaging",
    description:
      "Hygienic food-grade corrugated boxes suitable for direct and secondary food packaging applications.",
    idealFor: ["Food processing", "Bakeries", "Fresh produce"],
    image: IMG.takeaway,
  },
  {
    slug: "moisture-resistant-corrugated-boxes",
    name: "Moisture-Resistant Corrugated Boxes",
    categories: ["advanced-variants"],
    spec: "Water-resistant surface coating on kraft liner",
    useCase: "Humid storage",
    description:
      "Corrugated packaging with enhanced moisture resistance for extended protection in damp environments.",
    idealFor: ["Agriculture", "Exports"],
    image: IMG.cratesOranges,
  },
  {
    slug: "wax-coated-corrugated-boxes",
    name: "Wax-Coated Corrugated Boxes",
    categories: ["advanced-variants"],
    spec: "Wax-coated kraft liners, curtain or cascade coated",
    useCase: "Cold-chain packaging",
    description:
      "Wax-coated corrugated boxes designed to withstand moisture and condensation in refrigerated logistics.",
    idealFor: ["Seafood", "Meat", "Fresh produce"],
    image: IMG.cratesBerries,
  },
  {
    slug: "ventilated-corrugated-boxes",
    name: "Ventilated Corrugated Boxes",
    categories: ["advanced-variants"],
    spec: "Die-cut ventilation slots on sides and ends",
    useCase: "Air circulation",
    description:
      "Ventilated corrugated packaging that promotes airflow to preserve the freshness of agricultural and food products.",
    idealFor: ["Fruits", "Vegetables", "Flowers"],
    image: IMG.fruitRack,
    benefits: [
      "Vent placement designed for forced-air pre-cooling",
      "Slot geometry keeps compression strength while opening airflow",
      "Stacks and interlocks on standard export pallets",
    ],
  },
  {
    slug: "fire-retardant-corrugated-boxes",
    name: "Fire-Retardant Corrugated Boxes",
    categories: ["advanced-variants"],
    spec: "Flame-resistant treated board",
    useCase: "High-risk environments",
    description:
      "Fire-retardant corrugated packaging providing enhanced safety for sensitive industrial applications.",
    idealFor: ["Electrical equipment", "Chemicals"],
    image: IMG.warehouseBoxes,
  },

  /* ── Retail Packaging & Displays ──────────────────────────────── */
  {
    slug: "shelf-ready-packaging",
    name: "Shelf Ready Packaging (SRP)",
    categories: ["retail-packaging"],
    spec: "Perforated retail tray with tear-away front",
    useCase: "Shelf display",
    description:
      "Retail-ready packaging that converts directly into a shelf display for faster merchandising.",
    idealFor: ["FMCG", "Modern trade"],
    image: IMG.shelfBox,
    benefits: [
      "Opens in one motion — no knife, no loose lid to dispose of",
      "Front panel printed for on-shelf branding after opening",
      "Cuts shelf replenishment time against loose-case stocking",
    ],
  },
  {
    slug: "retail-display-trays",
    name: "Retail Display Trays",
    categories: ["retail-packaging"],
    spec: "Open-front corrugated display tray",
    useCase: "Product presentation",
    description:
      "Corrugated display trays designed to maximise product visibility on retail shelves.",
    idealFor: ["Grocery", "Retail"],
    image: IMG.produceShelf,
  },
  {
    slug: "counter-display-units",
    name: "Counter Display Units",
    categories: ["retail-packaging"],
    spec: "Die-cut countertop display with printed header",
    useCase: "Promotions",
    description:
      "Eye-catching countertop display units engineered to boost impulse purchases.",
    idealFor: ["Retail", "Convenience stores"],
    image: IMG.storeAisle,
  },
  {
    slug: "pop-displays",
    name: "POP Displays",
    categories: ["retail-packaging", "customization-print"],
    spec: "Printed promotional display, floor or shelf standing",
    useCase: "In-store marketing",
    description:
      "Custom point-of-purchase displays designed to strengthen in-store branding and drive sales.",
    idealFor: ["Brand promotions", "Product launches"],
    image: IMG.saleTags,
  },
  {
    slug: "pos-displays",
    name: "POS Displays",
    categories: ["retail-packaging", "customization-print"],
    spec: "Premium printed display units with laminated finish",
    useCase: "Retail marketing",
    description:
      "Professional point-of-sale display units developed to attract customer attention at checkout areas.",
    idealFor: ["Retail chains", "FMCG brands"],
    image: IMG.groceryAisle,
  },
  {
    slug: "retail-ready-packaging",
    name: "Retail Ready Packaging",
    categories: ["retail-packaging"],
    spec: "Easy-open corrugated cartons with perforated opening",
    useCase: "Shelf replenishment",
    description:
      "Corrugated retail-ready packaging that simplifies shelf stocking while improving product presentation.",
    idealFor: ["Supermarkets", "FMCG"],
    image: IMG.boxLot,
  },

  /* ── Industrial & Heavy-Duty ──────────────────────────────────── */
  {
    slug: "export-shipping-boxes",
    name: "Export Shipping Boxes",
    categories: ["industrial-heavy-duty"],
    spec: "Export-grade multi-ply corrugated board",
    useCase: "International shipping",
    description:
      "Heavy-duty export boxes engineered to withstand long-distance shipping and international logistics.",
    idealFor: ["Exporters", "Freight forwarders"],
    image: IMG.fragileBox,
    benefits: [
      "Board specified for humidity loss over multi-week ocean transit",
      "No ISPM-15 fumigation certificate required, unlike timber",
      "Optional water-resistant coating for deck and port storage",
    ],
  },
  {
    slug: "heavy-duty-export-crates",
    name: "Heavy-Duty Export Crates",
    categories: ["industrial-heavy-duty"],
    spec: "Reinforced corrugated construction with edge protection",
    useCase: "Industrial exports",
    description:
      "Corrugated export crates providing maximum protection for heavy industrial equipment during overseas transportation.",
    idealFor: ["Machinery", "Capital equipment"],
    image: IMG.forkliftAlt,
  },
  {
    slug: "corrugated-pallet-containers",
    name: "Corrugated Pallet Containers",
    categories: ["industrial-heavy-duty"],
    spec: "Pallet-compatible heavy-duty sleeve, base and cap",
    useCase: "Bulk logistics",
    description:
      "Large corrugated pallet containers designed for efficient warehousing and bulk transportation.",
    idealFor: ["Manufacturing", "Distribution"],
    image: IMG.warehouse,
  },
  {
    slug: "gaylord-bulk-boxes",
    name: "Gaylord Bulk Boxes",
    categories: ["industrial-heavy-duty"],
    spec: "Triple-wall corrugated construction",
    useCase: "Bulk storage",
    description:
      "High-capacity Gaylord boxes offering exceptional durability for bulk storage and shipping.",
    idealFor: ["Chemicals", "Agriculture", "Recycling"],
    image: IMG.cardboardPile,
  },
  {
    slug: "octabin-containers",
    name: "Octabin Containers",
    categories: ["industrial-heavy-duty"],
    spec: "Octagonal heavy-duty design with top and bottom caps",
    useCase: "Bulk exports",
    description:
      "Heavy-duty octagonal corrugated containers engineered for large-volume industrial packaging.",
    idealFor: ["Powders", "Granules", "Resins"],
    image: IMG.factory,
    benefits: [
      "Eight-sided geometry eliminates the sidewall bulge of square bins",
      "Ships flat and erects on the pallet in under a minute",
      "Optional inner liner bag for powders and food-grade granulates",
    ],
  },
  {
    slug: "industrial-bin-boxes",
    name: "Industrial Bin Boxes",
    categories: ["industrial-heavy-duty"],
    spec: "Reinforced corrugated construction with open pick front",
    useCase: "Warehouse storage",
    description:
      "Durable corrugated storage bins designed for efficient warehouse organisation and inventory management.",
    idealFor: ["Warehouses", "Spare parts stores"],
    image: IMG.boxesRack,
  },
  {
    slug: "machine-parts-packaging",
    name: "Machine Parts Packaging",
    categories: ["industrial-heavy-duty", "inserts-protection"],
    spec: "Reinforced board with fitted inserts and cushioning",
    useCase: "Equipment protection",
    description:
      "Precision corrugated packaging developed to protect machine components from transit damage.",
    idealFor: ["Engineering", "Capital goods"],
    image: IMG.conveyor,
  },
  {
    slug: "automotive-component-boxes",
    name: "Automotive Component Boxes",
    categories: ["industrial-heavy-duty", "inserts-protection"],
    spec: "Heavy-duty board with customised partitions and inserts",
    useCase: "Auto parts packaging",
    description:
      "Industrial corrugated packaging with customised partitions for the safe transportation of automotive components.",
    idealFor: ["Automotive OEMs", "Tier-1 suppliers"],
    image: IMG.forklift,
  },

  /* ── Customization & Print Enhancements ───────────────────────── */
  {
    slug: "inside-printing",
    name: "Inside Printing",
    categories: ["customization-print"],
    spec: "Interior single or multi-colour printing",
    useCase: "Brand experience",
    description:
      "Enhance the customer unboxing experience with custom interior printing carrying branding, instructions or promotional messages.",
    idealFor: ["Luxury brands", "D2C", "Subscription boxes"],
    image: IMG.boxSticker,
  },
  {
    slug: "spot-uv",
    name: "Spot UV",
    categories: ["customization-print"],
    spec: "High-gloss selective UV coating",
    useCase: "Premium packaging",
    description:
      "Spot UV coating highlights logos, graphics and text with a premium glossy finish against a matt background.",
    idealFor: ["Luxury packaging", "Cosmetics"],
    image: IMG.boxPink,
  },
  {
    slug: "embossing",
    name: "Embossing",
    categories: ["customization-print"],
    spec: "Raised logo or artwork pressed into the liner",
    useCase: "Premium branding",
    description:
      "Embossed packaging creates a tactile, premium finish that elevates brand identity.",
    idealFor: ["Luxury goods", "Gifting"],
    image: IMG.kraftParcel,
  },
  {
    slug: "debossing",
    name: "Debossing",
    categories: ["customization-print"],
    spec: "Recessed logo or artwork",
    useCase: "Elegant packaging",
    description:
      "Debossed packaging delivers a refined appearance through recessed branding and design elements.",
    idealFor: ["Premium consumer products"],
    image: IMG.boxToothbrush,
  },
  {
    slug: "foil-stamping",
    name: "Foil Stamping",
    categories: ["customization-print"],
    spec: "Metallic foil application, hot or cold",
    useCase: "Luxury branding",
    description:
      "Metallic foil stamping enhances packaging with premium gold, silver or coloured foil finishes.",
    idealFor: ["Cosmetics", "Jewellery", "Luxury gifts"],
    image: IMG.eyewearPack,
  },
  {
    slug: "barcodes",
    name: "Barcodes",
    categories: ["customization-print"],
    spec: "Printed UPC, EAN or SKU codes",
    useCase: "Inventory management",
    description:
      "Professionally printed barcodes improve retail scanning, inventory management and supply chain efficiency.",
    idealFor: ["Retail", "Warehousing", "FMCG"],
    image: IMG.boxLabeled,
  },
  {
    slug: "sequential-numbering",
    name: "Sequential Numbering",
    categories: ["customization-print"],
    spec: "Variable serial numbering per carton",
    useCase: "Product traceability",
    description:
      "Sequential numbering enables batch tracking, traceability and quality control across production runs.",
    idealFor: ["Manufacturing", "Exports"],
    image: IMG.printWorkshop,
  },
  {
    slug: "security-printing",
    name: "Security Printing",
    categories: ["customization-print"],
    spec: "Anti-counterfeit printing features",
    useCase: "Brand protection",
    description:
      "Advanced security printing incorporates authentication features that help prevent counterfeiting and confirm product authenticity.",
    idealFor: ["Pharmaceuticals", "Electronics", "Luxury goods"],
    image: IMG.pills,
  },
  {
    slug: "4-color-printing",
    name: "4-Color Printing (Offset / Flexo)",
    categories: ["customization-print"],
    spec: "High-resolution CMYK offset or flexo printing",
    useCase: "Retail, D2C and unboxing",
    description:
      "Offset or flexo printing for vibrant, professional branding across the full surface of your packaging.",
    idealFor: ["Retail displays", "Unboxing experiences", "Brand storytelling"],
    image: IMG.pressInk,
    benefits: [
      "Photographic-quality artwork via litho lamination",
      "Water-based inks keep the finished box kerbside recyclable",
      "Colour matched to your brand guide and signed off on a proof",
    ],
  },
  {
    slug: "die-cut-handles-windows",
    name: "Die-Cut Handles & Windows",
    categories: ["customization-print"],
    spec: "Custom shapes cut into the box face",
    useCase: "Easy carry, product visibility",
    description:
      "Functional or visual cut-outs that make packs easier to carry and put the product on show.",
    idealFor: ["Retail-ready boxes", "Promotional kits"],
    image: IMG.boxHandover,
  },
  {
    slug: "perforated-tear-lines",
    name: "Perforated Tear Lines",
    categories: ["customization-print"],
    spec: "Engineered perforation for easy opening or tamper evidence",
    useCase: "E-commerce packaging",
    description:
      "Built-in tear zones make packages easy to open while providing clear tamper evidence.",
    idealFor: ["E-commerce deliveries", "Secure shipments"],
    image: IMG.boxPerson,
  },
  {
    slug: "matt-gloss-lamination",
    name: "Matt or Gloss Lamination",
    categories: ["customization-print"],
    spec: "Protective laminate film over printed liner",
    useCase: "Luxury packaging",
    description:
      "Give your box a refined finish with added durability and moisture protection.",
    idealFor: ["Luxury packaging", "Food boxes", "Cosmetic shipments"],
    image: IMG.boxWhiteTable,
  },
  {
    slug: "qr-codes-variable-print",
    name: "QR Codes & Variable Print",
    categories: ["customization-print"],
    spec: "Unique codes printed per unit via digital heads",
    useCase: "Tracking & marketing",
    description:
      "Add personalised codes for tracking, customer engagement or product authentication.",
    idealFor: ["Marketing campaigns", "Logistics", "Interactive packaging"],
    image: IMG.press,
  },

  /* ── Specialty Inserts & Protection ───────────────────────────── */
  {
    slug: "cardboard-fitments",
    name: "Cardboard Fitments",
    categories: ["inserts-protection"],
    spec: "Custom die-cut corrugated fitments",
    useCase: "Product positioning",
    description:
      "Precision-engineered cardboard fitments hold products in place, improving presentation and reducing movement in transit.",
    idealFor: ["Consumer electronics", "Appliances", "Luxury goods"],
    image: IMG.craftDesk,
  },
  {
    slug: "die-cut-corrugated-inserts",
    name: "Die-Cut Corrugated Inserts",
    categories: ["inserts-protection"],
    spec: "Precision cut to the product profile",
    useCase: "Electronics, glass and cosmetics",
    description:
      "Precisely shaped inserts that cradle your product and prevent movement inside the carton.",
    idealFor: ["Electronics", "Cosmetics", "Glassware"],
    image: IMG.boxWhiteTableAlt,
    benefits: [
      "Modelled from your 3D file or a physical sample",
      "Removes the need for loose fill in premium packs",
      "Prototyped on a digital cutting table before tooling is committed",
    ],
  },
  {
    slug: "corrugated-edge-protectors",
    name: "Corrugated Edge Protectors",
    categories: ["inserts-protection", "industrial-heavy-duty"],
    spec: "L-profile laminated kraft angle boards",
    useCase: "Fragile or export goods",
    description:
      "Reinforce box edges and pallet corners to prevent crushing damage during handling.",
    idealFor: ["Fragile goods", "Export shipments", "Palletised loads"],
    image: IMG.pallets,
  },
  {
    slug: "anti-static-foam-inserts",
    name: "Anti-Static Foam Inserts",
    categories: ["inserts-protection"],
    spec: "Pink or black conductive foam, die-cut to profile",
    useCase: "Circuit boards, chips and ESD products",
    description:
      "Conductive pink and black foam inserts designed for static-sensitive items.",
    idealFor: ["Chips", "Processors", "PCBs"],
    image: IMG.pcbAssembly,
  },
  {
    slug: "pulp-moulded-paper-inserts",
    name: "Pulp Moulded Paper Inserts",
    categories: ["inserts-protection", "eco-innovations"],
    spec: "Moulded recycled pulp trays",
    useCase: "Bottles, jars and electronics",
    description:
      "Biodegradable moulded trays that offer eco-friendly cushioning with a clean, premium look.",
    idealFor: ["Bottles", "Jars", "Glass products"],
    image: IMG.pulpTray,
  },
];

/** What actually moves the price on a corrugated quotation. */
export const PRICING_FACTORS: { factor: string; impact: string }[] = [
  {
    factor: "GSM & ply count",
    impact: "Higher GSM and more plies mean more fibre per box — and a higher unit cost.",
  },
  {
    factor: "Box dimensions",
    impact: "Larger boxes consume more board area, so price scales with the flat blank size.",
  },
  {
    factor: "Minimum order quantity",
    impact: "Higher volumes spread set-up and tooling across more units, lowering the per-unit cost.",
  },
  {
    factor: "Printing & coating",
    impact: "Extra colours, laminations and premium finishes each add a pass on the line.",
  },
  {
    factor: "Custom design",
    impact: "Die-cutting, inserts and bespoke structures carry one-time tooling and design cost.",
  },
  {
    factor: "Freight & delivery",
    impact: "Distance from the plant and load efficiency decide the final delivered cost.",
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getCategory(id: CategoryId): ProductCategory | undefined {
  return CATEGORIES.find((c) => c.id === id);
}

export function getProductsByCategory(id: CategoryId): Product[] {
  return PRODUCTS.filter((p) => p.categories.includes(id));
}

/** Other products from the same primary category, excluding the product itself. */
export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return PRODUCTS.filter(
    (p) => p.slug !== product.slug && p.categories.includes(product.categories[0])
  ).slice(0, limit);
}
