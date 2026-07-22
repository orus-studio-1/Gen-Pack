"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export const ConnectedFleetSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth dynamic background color interpolation on scroll across the 3 blocks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0.15, 0.45, 0.8],
    ["#fae8df", "#fbeee6", "#d2f9d0"]
  );

  return (
    <motion.section
      ref={containerRef}
      style={{ backgroundColor }}
      className="w-full text-[#1c1817] py-16 sm:py-24 font-urbanist select-none transition-colors duration-700"
    >
      <div className="w-full max-w-[1000px] mx-auto px-6 md:px-12 space-y-16 sm:space-y-20">
        {/* ================= BLOCK 1: Connected Fleet, Connected You. ================= */}
        <div className="space-y-8 sm:space-y-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-xl mx-auto space-y-2"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1c1817] font-urbanist">
              Connected Fleet, Connected You.
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm lg:text-base font-urbanist max-w-lg mx-auto leading-relaxed">
              Every vehicle is equipped with advanced telematics hardware, giving you real-time visibility and proactive alerts.
            </p>
          </motion.div>

          {/* 2x2 Grid 1 (Ultra compact managed cards matching reference) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4.5 max-w-[700px] mx-auto">
            {/* Card 1: Live GPS Tracking */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-sm border border-orange-100/60 flex flex-col text-center"
            >
              <div className="relative w-full aspect-[16/9.2] max-h-[145px] rounded-xl bg-[#fbe5da] flex items-center justify-center mb-3 overflow-hidden">
                <div className="flex flex-col items-center justify-center space-y-1">
                  <svg className="w-9 h-9 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 14.5A5 5 0 0112 13a5 5 0 013.5 1.5M6 11.5a9 9 0 0112 0" />
                    <circle cx="12" cy="18" r="2.5" fill="#f97316" stroke="none" />
                  </svg>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#1c1817] font-urbanist mb-0.5">
                Live GPS Tracking
              </h3>
              <p className="text-slate-600 text-[11px] sm:text-xs font-urbanist">
                See exact location and ETA.
              </p>
            </motion.div>

            {/* Card 2: API Integration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-sm border border-orange-100/60 flex flex-col text-center"
            >
              <div className="relative w-full aspect-[16/9.2] max-h-[145px] rounded-xl overflow-hidden mb-3 bg-slate-900">
                <Image
                  src="/Logistic6.png"
                  alt="API Integration TMS Dashboard"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#1c1817] font-urbanist mb-0.5">
                API Integration
              </h3>
              <p className="text-slate-600 text-[11px] sm:text-xs font-urbanist">
                Embed tracking into your TMS or portal.
              </p>
            </motion.div>

            {/* Card 3: Automated Alerts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-sm border border-orange-100/60 flex flex-col text-center"
            >
              <div className="relative w-full aspect-[16/9.2] max-h-[145px] rounded-xl overflow-hidden mb-3 bg-slate-900 flex items-center justify-center p-2.5">
                <Image
                  src="/industry4.png"
                  alt="Route Alert Notification"
                  fill
                  className="object-cover opacity-30"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="relative z-10 bg-black/80 backdrop-blur-md border border-orange-500/40 rounded-lg p-2 text-left w-full max-w-[92%] shadow-xl space-y-0.5">
                  <div className="flex items-center justify-between text-[9px] text-slate-400">
                    <span className="inline-flex items-center gap-1 text-[9px] font-bold text-red-500 uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                      CRITICAL
                    </span>
                    <span>1m ago</span>
                  </div>
                  <div className="text-[11px] font-semibold text-white">
                    Route deviation detected.
                  </div>
                  <div className="text-[9px] text-slate-400">
                    Vehicle #LV-204 exited planned route.
                  </div>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#1c1817] font-urbanist mb-0.5">
                Automated Alerts
              </h3>
              <p className="text-slate-600 text-[11px] sm:text-xs font-urbanist">
                Route deviations, temperature excursions.
              </p>
            </motion.div>

            {/* Card 4: Telematics Dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-sm border border-orange-100/60 flex flex-col text-center"
            >
              <div className="relative w-full aspect-[16/9.2] max-h-[145px] rounded-xl bg-[#fbe5da] flex items-center justify-center mb-3 p-2.5 overflow-hidden">
                <div className="w-[74%] aspect-[16/10] bg-white rounded border-2 border-slate-800 p-1.5 shadow-sm flex flex-col justify-between">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="h-2.5 bg-orange-100 rounded flex items-center px-0.5">
                      <span className="w-1 h-1 rounded-full bg-orange-500" />
                    </div>
                    <div className="h-2.5 bg-slate-100 rounded flex items-center px-0.5">
                      <span className="w-1 h-1 rounded-full bg-slate-400" />
                    </div>
                    <div className="h-2.5 bg-slate-100 rounded flex items-center px-0.5">
                      <span className="w-1 h-1 rounded-full bg-slate-400" />
                    </div>
                    <div className="h-2.5 bg-orange-100 rounded flex items-center px-0.5">
                      <span className="w-1 h-1 rounded-full bg-orange-500" />
                    </div>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="w-2/3 h-full bg-orange-500" />
                  </div>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#1c1817] font-urbanist mb-0.5">
                Telematics Dashboard
              </h3>
              <p className="text-slate-600 text-[11px] sm:text-xs font-urbanist">
                Speed, fuel consumption, driver behavior.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ================= BLOCK 2: Rigorous Care. Maximum Uptime. ================= */}
        <div className="space-y-8 sm:space-y-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-xl mx-auto space-y-2"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1c1817] font-urbanist">
              Rigorous Care. Maximum Uptime.
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm lg:text-base font-urbanist max-w-lg mx-auto leading-relaxed">
              Loginord's in-house maintenance team follows strict inspection schedules and leverages predictive analytics to minimize downtime and maximize safety.
            </p>
          </motion.div>

          {/* 2x2 Grid 2 (Ultra compact managed cards matching reference) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4.5 max-w-[700px] mx-auto">
            {/* Card 1: Preventive Maintenance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-sm border border-orange-100/60 flex flex-col text-center"
            >
              <div className="relative w-full aspect-[16/9.2] max-h-[145px] rounded-xl bg-[#fbe5da] flex items-center justify-center mb-3 overflow-hidden">
                <svg className="w-10 h-10 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                  <circle cx="7" cy="17" r="2" />
                  <circle cx="17" cy="17" r="2" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#1c1817] font-urbanist mb-0.5">
                Preventive Maintenance
              </h3>
              <p className="text-slate-600 text-[11px] sm:text-xs font-urbanist">
                Regular checks on vehicles & refrigeration.
              </p>
            </motion.div>

            {/* Card 2: Compliance Audits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-sm border border-orange-100/60 flex flex-col text-center"
            >
              <div className="relative w-full aspect-[16/9.2] max-h-[145px] rounded-xl overflow-hidden mb-3 bg-slate-900">
                <Image
                  src="/industry5.png"
                  alt="Compliance Audit Certificate Documents"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#1c1817] font-urbanist mb-0.5">
                Compliance Audits
              </h3>
              <p className="text-slate-600 text-[11px] sm:text-xs font-urbanist">
                ADR, HACCP and EU/US transport regulations.
              </p>
            </motion.div>

            {/* Card 3: Driver Training */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-sm border border-orange-100/60 flex flex-col text-center"
            >
              <div className="relative w-full aspect-[16/9.2] max-h-[145px] rounded-xl overflow-hidden mb-3 bg-slate-900">
                <Image
                  src="/Logistic1.png"
                  alt="Driver Training Windshield Road View"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#1c1817] font-urbanist mb-0.5">
                Driver Training
              </h3>
              <p className="text-slate-600 text-[11px] sm:text-xs font-urbanist">
                Regular safety and eco-driving courses.
              </p>
            </motion.div>

            {/* Card 4: 24/7 Roadside Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-sm border border-orange-100/60 flex flex-col text-center"
            >
              <div className="relative w-full aspect-[16/9.2] max-h-[145px] rounded-xl bg-[#fbe5da] flex items-center justify-center mb-3 p-2.5 overflow-hidden">
                <div className="w-[36%] aspect-[9/16] bg-white rounded-lg border-2 border-slate-800 p-1 shadow-sm flex flex-col items-center justify-center relative">
                  <div className="w-full h-full border border-dashed border-slate-200 rounded flex items-center justify-center relative">
                    <svg className="w-4 h-4 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-8-6.8-8-12a8 8 0 1116 0c0 5.2-8 12-8 12z" />
                      <circle cx="12" cy="9" r="2.5" fill="#f97316" stroke="none" />
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-orange-500 text-white rounded-full flex items-center justify-center text-[8px] font-bold">
                    !
                  </div>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#1c1817] font-urbanist mb-0.5">
                24/7 Roadside Support
              </h3>
              <p className="text-slate-600 text-[11px] sm:text-xs font-urbanist">
                Rapid response for on-route issues.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ================= BLOCK 3: Towards a Greener Fleet. ================= */}
        <div className="space-y-8 sm:space-y-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-xl mx-auto space-y-2"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1c1817] font-urbanist">
              Towards a Greener Fleet.
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm lg:text-base font-urbanist max-w-lg mx-auto leading-relaxed">
              We're investing in eco-friendly vehicles and processes to reduce carbon footprint and support your ESG goals.
            </p>
          </motion.div>

          {/* 2x2 Grid 3 (Ultra compact managed cards matching reference) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4.5 max-w-[700px] mx-auto">
            {/* Card 1: Route Optimization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-sm border border-emerald-100/60 flex flex-col text-center"
            >
              <div className="relative w-full aspect-[16/9.2] max-h-[145px] rounded-xl bg-[#e2fae1] flex items-center justify-center mb-3 overflow-hidden">
                <div className="flex items-center gap-4">
                  <div className="w-3.5 h-3.5 rounded-full border-2 border-orange-500 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-orange-500" />
                  </div>
                  <div className="w-4.5 h-4.5 rounded-full border-2.5 border-orange-500 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  </div>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#1c1817] font-urbanist mb-0.5">
                Route Optimization
              </h3>
              <p className="text-slate-600 text-[11px] sm:text-xs font-urbanist">
                For lower fuel consumption.
              </p>
            </motion.div>

            {/* Card 2: Partnership */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-sm border border-emerald-100/60 flex flex-col text-center"
            >
              <div className="relative w-full aspect-[16/9.2] max-h-[145px] rounded-xl overflow-hidden mb-3 bg-slate-900">
                <Image
                  src="/industry2.png"
                  alt="Partnership Globe Earth Hand"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#1c1817] font-urbanist mb-0.5">
                Partnership
              </h3>
              <p className="text-slate-600 text-[11px] sm:text-xs font-urbanist">
                With carbon offset programs.
              </p>
            </motion.div>

            {/* Card 3: Pilot Program */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-sm border border-emerald-100/60 flex flex-col text-center"
            >
              <div className="relative w-full aspect-[16/9.2] max-h-[145px] rounded-xl overflow-hidden mb-3 bg-slate-900">
                <Image
                  src="/Logistic3.png"
                  alt="Pilot Program Electric Vans"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#1c1817] font-urbanist mb-0.5">
                Pilot Program
              </h3>
              <p className="text-slate-600 text-[11px] sm:text-xs font-urbanist">
                With electric urban vans.
              </p>
            </motion.div>

            {/* Card 4: Euro VI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-sm border border-emerald-100/60 flex flex-col text-center"
            >
              <div className="relative w-full aspect-[16/9.2] max-h-[145px] rounded-xl bg-[#e2fae1] flex items-center justify-center mb-3 overflow-hidden">
                <svg className="w-10 h-10 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22v-9" />
                  <path d="M12 13c-4.5 0-7.5-3-7.5-7.5C9 5.5 12 8.5 12 13z" />
                  <path d="M12 13c4.5 0 7.5-3 7.5-7.5C15 5.5 12 8.5 12 13z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#1c1817] font-urbanist mb-0.5">
                Euro VI
              </h3>
              <p className="text-slate-600 text-[11px] sm:text-xs font-urbanist">
                Emission standards on all heavy vehicles.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ConnectedFleetSection;
