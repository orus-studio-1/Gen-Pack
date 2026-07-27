"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProductItem } from "./ProductCard";

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [quantity, setQuantity] = useState("500 units");

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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto font-urbanist">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-gray-200 text-slate-900 my-auto"
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
            {/* Visual Left Section */}
            <div className="md:col-span-5 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
                  {product.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-urbanist">
                  {product.name}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 font-medium">
                  {product.tagline}
                </p>
              </div>

              {/* Product Image Preview */}
              <div className="my-6 py-4 flex justify-center items-center bg-white/5 rounded-2xl p-4 border border-white/10">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-[220px] object-contain drop-shadow-xl"
                />
              </div>

              {/* Quick Spec Badges */}
              <div className="relative z-10 grid grid-cols-2 gap-3 text-xs pt-4 border-t border-slate-800">
                <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase">Material</span>
                  <span className="font-semibold text-white">{product.specs?.material || "Corrugated Cardboard"}</span>
                </div>
                <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase">Eco Rating</span>
                  <span className="font-semibold text-emerald-400">{product.specs?.ecoRating || "100% Recyclable"}</span>
                </div>
              </div>
            </div>

            {/* Content & Quote Form Right Section */}
            <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-urbanist mb-2">
                  Structural Description & Overview
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-urbanist">
                  {product.description}
                </p>

                {/* Key Features */}
                {product.features && product.features.length > 0 && (
                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                        Key Capabilities & Features
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 font-urbanist">
                        {product.features.map((feat: string, idx: number) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Quote Request Form */}
              <div className="pt-6 border-t border-gray-200">
                {formSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-center">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white mb-2">
                      ✓
                    </span>
                    <h4 className="text-sm font-bold text-emerald-900">Quote Request Submitted!</h4>
                    <p className="text-xs text-emerald-700 mt-1">Our packaging team will contact you within 2 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3 font-urbanist">
                    <h4 className="text-sm font-bold text-slate-900">Request Custom Quote for {product.name}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-medium text-slate-500 mb-1">Estimated Quantity</label>
                        <input
                          type="text"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          placeholder="e.g. 500 units"
                          required
                          className="w-full text-xs px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:border-orange-500"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium text-slate-500 mb-1">Work Email</label>
                        <input
                          type="email"
                          required
                          placeholder="name@company.com"
                          className="w-full text-xs px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:border-orange-500"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold rounded-xl transition-colors shadow-md uppercase tracking-wider"
                    >
                      Get Fast Quote & Prototyping
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
