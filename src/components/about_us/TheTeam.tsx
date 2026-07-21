"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Anders Smithsson",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    linkedin: "#",
  },
  {
    name: "Sophie Van Dijk",
    role: "Commercial Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    linkedin: "#",
  },
  {
    name: "Michael Reyes",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
    linkedin: "#",
  },
  {
    name: "Claire Fontaine",
    role: "Quality & Compliance Lead",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
    linkedin: "#",
  },
];

export const TheTeam: React.FC = () => {
  return (
    <section className="w-full bg-white text-[#1c1817] py-24 md:py-36 relative">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">
          
          {/* Left Column: Sticky Title & Description (Stays pinned on left while scrolling) */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 self-start flex flex-col justify-start">
            <p className="text-xs sm:text-sm font-bold tracking-widest text-[#666666] uppercase mb-4 font-mono">
              THE TEAM
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-urbanist text-[#1c1817] tracking-tight mb-6 leading-[1.06]">
              People You Can Rely On.
            </h2>
            <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed max-w-md font-urbanist">
              Our strength lies in our people — from dispatch operators to cross-border drivers. Meet the management team behind every successful delivery.
            </p>
          </div>

          {/* Right Column: Natural Scrolling Team Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.15 }}
                className="flex flex-col group"
              >
                {/* Team Photo */}
                <div className="relative w-full aspect-[4/4.8] rounded-3xl overflow-hidden mb-4 bg-slate-100 border border-black/5 shadow-sm">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 30vw"
                  />
                </div>

                {/* Name & Role */}
                <h3 className="text-xl sm:text-2xl font-bold font-urbanist text-[#1c1817] leading-snug">
                  {member.name}
                </h3>
                <p className="text-sm font-normal text-[#555555] font-urbanist mt-1 mb-2">
                  {member.role}
                </p>

                {/* LinkedIn Link */}
                <a
                  href={member.linkedin}
                  className="text-xs font-mono text-[#555555] hover:text-[#1c1817] flex items-center gap-1 transition-colors self-start"
                >
                  LinkedIn <span className="text-sm">↗</span>
                </a>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TheTeam;
