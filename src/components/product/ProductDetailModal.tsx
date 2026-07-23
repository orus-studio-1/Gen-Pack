"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductBoxVisual from "./ProductBoxVisual";

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  fluteTypes: string[];
  materialGrade: string;
  ectRating: string;
  minOrderQty: string;
  commonUses: string[];
  features: string[];
}

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [quantity, setQuantity] = useState("500");

  if (!product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      onClose();
    }, 2200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden z-10 border border-gray-200 text-slate-900 my-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors"
            aria-label="Close detail modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
            {/* Visual Header / Left Side */}
            <div className="md:col-span-5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
                  {product.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-urbanist text-white">
                  {product.name}
                </h2>
                <p className="text-sm text-slate-300 mt-2 font-medium">
                  {product.tagline}
                </p>
              </div>

              {/* 3D Visual Box */}
              <div className="my-6 py-4 flex justify-center items-center">
                <ProductBoxVisual slug={product.slug} className="bg-transparent border-0" isHovered={true} />
              </div>

              {/* Quick Spec Badges */}
              <div className="relative z-10 grid grid-cols-2 gap-3 text-xs pt-4 border-t border-slate-700/60">
                <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                  <span className="text-slate-400 block text-[10px] uppercase">Strength</span>
                  <span className="font-semibold text-white">{product.ectRating}</span>
                </div>
                <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                  <span className="text-slate-400 block text-[10px] uppercase">Min Order</span>
                  <span className="font-semibold text-white">{product.minOrderQty}</span>
                </div>
              </div>
            </div>

            {/* Content & Quote Form / Right Side */}
            <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-urbanist mb-2">
                  Structural Specifications
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Key Features & Uses */}
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                      Available Flute Profiles
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {product.fluteTypes.map((flute) => (
                        <span
                          key={flute}
                          className="px-3 py-1 bg-slate-100 border border-slate-300 rounded-md text-xs font-mono font-medium text-slate-700"
                        >
                          {flute}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                      Key Highlights
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {product.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Quote Request Form embedded */}
              <div className="pt-6 border-t border-gray-200">
                {formSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white mb-2">
                      ✓
                    </span>
                    <h4 className="text-sm font-bold text-emerald-900">Quote Request Submitted!</h4>
                    <p className="text-xs text-emerald-700 mt-1">Our packaging team will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <h4 className="text-sm font-bold text-slate-900">Request Custom Quote for {product.name}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-medium text-slate-500 mb-1">Target Quantity</label>
                        <input
                          type="text"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          placeholder="e.g. 1000 pcs"
                          required
                          className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-orange-500"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium text-slate-500 mb-1">Work Email</label>
                        <input
                          type="email"
                          required
                          placeholder="name@company.com"
                          className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-orange-500"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold rounded-lg transition-colors shadow-sm uppercase tracking-wider"
                    >
                      Get Fast Quote & Samples
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProductDetailModal;
