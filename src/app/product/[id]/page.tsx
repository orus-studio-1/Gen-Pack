import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import CTAButton from "@/components/landing_page/CTAButton";
import ProductCard from "@/components/product/ProductCard";
import {
  CATEGORIES,
  PRODUCTS,
  getCategory,
  getProduct,
  getRelatedProducts,
} from "@/data/products";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ id: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    return { title: "Product not found" };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | Carapace`,
      description: product.description,
      images: [`${product.image}?auto=format&fit=crop&w=1200&q=70`],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) notFound();

  const primary = getCategory(product.categories[0]);
  const related = getRelatedProducts(product, 4);

  /* Every product is quoted against the same set of variables — these are the
     questions our estimators ask before they price a job. */
  const quoteInputs = [
    { label: "Construction", value: product.spec },
    { label: "Primary use", value: product.useCase },
    { label: "Board options", value: "3-ply · 5-ply · 7-ply, 120–250 GSM liners" },
    { label: "Print", value: "Plain kraft, 1–6 colour flexo, or 4-colour offset" },
    { label: "Minimum order", value: "From 100 units on stock sizes" },
    { label: "Lead time", value: "7–12 working days after artwork sign-off" },
  ];

  return (
    <main className="w-full min-h-screen bg-white text-[#1c1817] selection:bg-orange-600 selection:text-white overflow-x-clip font-urbanist">
      {/* ─── Breadcrumb ─── */}
      <section className="w-full pt-24 sm:pt-28 md:pt-36 pb-3 sm:pb-4 bg-white">
        <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 md:px-16 lg:px-24">
          <nav className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-[#999999] flex-wrap">
            <Link href="/" className="hover:text-orange-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/product" className="hover:text-orange-600 transition-colors">
              Products
            </Link>
            {primary && (
              <>
                <span>/</span>
                <Link
                  href={`/product?category=${primary.id}#catalog`}
                  className="hover:text-orange-600 transition-colors"
                >
                  {primary.name}
                </Link>
              </>
            )}
            <span>/</span>
            <span className="text-[#1c1817] font-semibold">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* ─── Hero ─── */}
      <section className="w-full pb-12 sm:pb-16 md:pb-24 bg-white">
        <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
            {/* Left: copy */}
            <div className="lg:col-span-5 pt-2 sm:pt-4">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <span className="w-3.5 h-3.5 rounded-full border-[2.5px] border-orange-600 flex items-center justify-center shrink-0">
                  <span className="w-1 h-1 rounded-full bg-orange-600" />
                </span>
                <span className="font-bold text-xs sm:text-sm tracking-[0.2em] uppercase text-[#1c1817]">
                  {primary?.name}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] mb-4 sm:mb-6">
                {product.name}
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-[#555555] leading-relaxed max-w-md mb-7">
                {product.description}
              </p>

              {/* Ideal for */}
              <div className="mb-8">
                <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-slate-400 mb-3">
                  Ideal for
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.idealFor.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <CTAButton label="Request a Quote" href="/contact" variant="solid" size="md" />
                <Link
                  href="/product"
                  className="text-sm font-semibold text-slate-600 hover:text-orange-600 transition-colors underline underline-offset-4 decoration-slate-300"
                >
                  Back to catalogue
                </Link>
              </div>
            </div>

            {/* Right: photography */}
            <div className="lg:col-span-7 relative w-full">
              <div className="relative w-full aspect-[16/11] rounded-2xl md:rounded-3xl overflow-hidden bg-[#f4f4f6] border border-[#e5e5e5]">
                <Image
                  src={`${product.image}?auto=format&fit=crop&w=1400&q=75`}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { k: "Material", v: "Recyclable kraft" },
                  { k: "Recyclability", v: "100%" },
                  { k: "Plastic content", v: "None" },
                  { k: "Customisable", v: "Size · Print · Ply" },
                ].map((chip) => (
                  <div
                    key={chip.k}
                    className="rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-3"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono mb-1">
                      {chip.k}
                    </p>
                    <p className="text-sm font-semibold text-slate-800">{chip.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Specification & benefits ─── */}
      <section className="w-full py-14 sm:py-20 md:py-28 bg-[#f4f4f4] border-y border-slate-200/70">
        <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Spec table */}
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
                Specification
              </h2>
              <dl className="rounded-2xl overflow-hidden border border-slate-200 bg-white divide-y divide-slate-100">
                {quoteInputs.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 px-5 sm:px-6 py-4"
                  >
                    <dt className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400 font-mono">
                      {row.label}
                    </dt>
                    <dd className="sm:col-span-2 text-sm sm:text-base text-slate-700 leading-relaxed">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="text-xs sm:text-sm text-slate-500 mt-4 leading-relaxed">
                Board grade, flute and GSM are finalised against your product
                weight, stack height and transit route — share a drawing or a
                sample and we will specify it for you.
              </p>
            </div>

            {/* Benefits */}
            <div className="lg:col-span-5">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
                Why this pack works
              </h2>
              <ul className="space-y-4">
                {[...(product.benefits ?? []), ...(primary?.benefits ?? [])]
                  .slice(0, 6)
                  .map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-orange-600 shrink-0" />
                      <span className="text-sm sm:text-base text-slate-700 leading-relaxed">
                        {benefit}
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Also available in ─── */}
      {product.categories.length > 1 && (
        <section className="w-full py-10 sm:py-14 bg-white">
          <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 md:px-16 lg:px-24">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-slate-400 mb-4">
              Also listed under
            </p>
            <div className="flex flex-wrap gap-2.5">
              {product.categories.map((catId) => {
                const cat = CATEGORIES.find((c) => c.id === catId);
                if (!cat) return null;
                return (
                  <Link
                    key={catId}
                    href={`/product?category=${catId}#catalog`}
                    className="text-sm font-semibold px-4 py-2 rounded-full border border-slate-200 text-slate-600 hover:border-orange-600 hover:text-orange-600 transition-colors"
                  >
                    {cat.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ─── Related products ─── */}
      {related.length > 0 && (
        <section className="w-full py-14 sm:py-20 md:py-24 bg-[#fcfcfc] border-t border-slate-100">
          <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 md:px-16 lg:px-24">
            <div className="flex items-end justify-between gap-4 mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                More from {primary?.name}
              </h2>
              <Link
                href={`/product?category=${primary?.id}#catalog`}
                className="text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors shrink-0"
              >
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {related.map((item) => (
                <ProductCard
                  key={item.slug}
                  product={item}
                  categoryLabel={getCategory(item.categories[0])?.shortName}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── CTA ─── */}
      <section className="w-full py-16 sm:py-24 bg-[#1c1817] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[320px] bg-orange-600/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 md:px-16 lg:px-24 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
              Need {product.name.toLowerCase()} to your own size?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              Send us the product dimensions, weight and where it is travelling.
              You will get a board specification, a free structural CAD sample
              and a delivered price — usually within one working day.
            </p>
            <CTAButton label="Talk to a Packaging Engineer" href="/contact" variant="solid" size="lg" />
          </div>
        </div>
      </section>
    </main>
  );
}
