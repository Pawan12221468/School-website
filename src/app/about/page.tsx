import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import {
  BookOpen,
  Cpu,
  Trophy,
  Globe,
  Quote,
  CheckCircle2,
} from "lucide-react";
import StackSpread from "@/components/ui/stack-spread";
import SectionHeading from "@/components/common/SectionHeading";
import MilestonesStairs from "@/components/about/MilestonesStairs";
import {
  LEADERSHIP_MESSAGE,
  CORE_PILLARS,
} from "@/constants/about";

export const metadata: Metadata = {
  title: "About Us | St. Jude's Academy",
  description:
    "Discover our history, mission, leadership, core pillars, and campus infrastructure at St. Jude's Academy.",
};

const PILLAR_ICONS: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Trophy: <Trophy className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
};

export default function AboutPage() {
  return (
    <>
      {/* About Hero - Exact Full Screen Height (100% viewport coverage below navbar) */}
      <section
        className="relative h-[calc(100vh-76px)] min-h-[560px] flex items-end justify-center text-white bg-cover bg-center overflow-hidden pb-8 sm:pb-10 md:pb-12 px-4"
        style={{ backgroundImage: "url('/assets/about_heritage.png')" }}
      >
        {/* Cinematic dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07172b]/50 via-[#07172b]/60 to-[#07172b]/90 pointer-events-none" />

        {/* Bottom Vignette to blend into next section */}
        <div className="absolute inset-x-0 bottom-0 h-64 sm:h-80 bg-gradient-to-t from-[#07172b] via-[#07172b]/85 to-transparent pointer-events-none" />

        <div className="site-container relative z-10 text-center mx-auto max-w-3xl">
          <div className="inline-block bg-[#ffaa3b]/20 text-[#ffaa3b] border border-[#ffaa3b]/40 backdrop-blur-sm px-4 py-1.5 rounded-full text-[0.8rem] font-bold tracking-[0.05em] uppercase mb-3.5 shadow-sm">
            ABOUT OUR INSTITUTION
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-[2.9rem] font-semibold mb-3 tracking-[-0.015em] leading-tight text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
            Our Legacy of Educational Excellence
          </h1>
          <p className="text-base sm:text-lg text-white/95 max-w-[620px] mx-auto leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
            Nurturing leaders, thinkers, and innovators since 1995. Discover the heritage and commitment behind St. Jude&apos;s Academy.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Mission Card */}
            <div className="bg-white rounded-[26px] border-2 border-[#78350f] pl-14 sm:pl-16 pr-8 sm:pr-10 pt-12 pb-8 flex flex-col justify-between shadow-[0_32px_64px_-12px_rgba(0,0,0,0.38),0_16px_32px_-6px_rgba(0,0,0,0.26),0_6px_12px_rgba(0,0,0,0.14)] relative overflow-hidden">
              
              {/* 1. Academic School Ruler Ticks along the Top Border */}
              <div className="absolute top-0 inset-x-20 h-3 flex items-center justify-center pointer-events-none opacity-80">
                <svg className="w-full h-3" preserveAspectRatio="none">
                  <defs>
                    <pattern id="ruler-top-mission" width="32" height="12" patternUnits="userSpaceOnUse">
                      <line x1="0" y1="0" x2="0" y2="12" stroke="#07172b" strokeWidth="1.5" />
                      <line x1="8" y1="0" x2="8" y2="4" stroke="#94a3b8" strokeWidth="1" />
                      <line x1="16" y1="0" x2="16" y2="7" stroke="#78350f" strokeWidth="1.3" />
                      <line x1="24" y1="0" x2="24" y2="4" stroke="#94a3b8" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="12" fill="url(#ruler-top-mission)" />
                </svg>
              </div>

              {/* 2. School Geometry Vertical Ruler Scale with Numbers along the Left Border */}
              <div className="absolute left-0 inset-y-12 w-8 flex pointer-events-none opacity-85">
                <svg className="w-5 h-full" preserveAspectRatio="none">
                  <defs>
                    <pattern id="ruler-left-mission" width="20" height="40" patternUnits="userSpaceOnUse">
                      <line x1="0" y1="0" x2="16" y2="0" stroke="#07172b" strokeWidth="1.5" />
                      <line x1="0" y1="8" x2="6" y2="8" stroke="#94a3b8" strokeWidth="1" />
                      <line x1="0" y1="16" x2="6" y2="16" stroke="#94a3b8" strokeWidth="1" />
                      <line x1="0" y1="24" x2="6" y2="24" stroke="#94a3b8" strokeWidth="1" />
                      <line x1="0" y1="32" x2="11" y2="32" stroke="#78350f" strokeWidth="1.3" />
                    </pattern>
                  </defs>
                  <rect width="20" height="100%" fill="url(#ruler-left-mission)" />
                </svg>
                {/* Scale Measurement Labels */}
                <div className="flex flex-col justify-between py-2 text-[0.52rem] font-mono font-bold text-slate-500 select-none">
                  <span className="text-[#78350f] font-bold">CM</span>
                  <span>05</span>
                  <span>10</span>
                  <span>15</span>
                  <span>20</span>
                </div>
              </div>

              {/* 3. Notebook Margin Guide Line (Vertical Brown Accent) */}
              <div className="absolute left-11 sm:left-12 top-5 bottom-5 w-px bg-gradient-to-b from-[#78350f]/60 via-[#78350f]/25 to-transparent pointer-events-none" />

              {/* 4. Inner Certificate Dashed Pinstripe (Matching Brown) */}
              <div className="absolute inset-2.5 sm:inset-3 rounded-[20px] border border-dashed border-[#78350f]/35 pointer-events-none" />

              {/* 5. Top Center: Mounted School Charter Ribbon */}
              <div className="absolute top-3.5 left-1/2 -translate-x-1/2 bg-[#07172b] text-[#ffaa3b] border border-[#78350f] px-4 py-1 rounded-full text-[0.68rem] font-bold tracking-[0.14em] uppercase shadow-md z-20 whitespace-nowrap">
                CHARTER OF INQUIRY
              </div>

              {/* 6. Background Academic Diploma Seal Stamp */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full border-2 border-dashed border-[#78350f]/25 flex items-center justify-center pointer-events-none opacity-30 rotate-12 z-0">
                <div className="w-24 h-24 rounded-full border border-[#07172b]/25 flex flex-col items-center justify-center text-[0.52rem] font-black tracking-widest text-[#07172b]/50 uppercase text-center p-2">
                  <span>ST. JUDE&apos;S</span>
                  <span className="text-[#78350f] text-[0.7rem] my-0.5">★ ★ ★</span>
                  <span>EST. 1995</span>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 pt-2">
                {/* Eyebrow with High Contrast */}
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#78350f]" />
                  <span className="text-xs font-bold text-[#07172b] tracking-[0.12em] uppercase">
                    EMPOWERING FUTURE LEADERS
                  </span>
                </div>

                <h3 className="font-heading text-2xl sm:text-[1.85rem] font-extrabold text-[#07172b] mb-3.5 tracking-[-0.01em]">
                  Our Mission
                </h3>
                <p className="text-[#334155] text-base sm:text-[1.02rem] leading-[1.85]">
                  To empower students with critical intellectual inquiry, emotional resilience, ethical leadership, and global responsibility to thrive in a dynamically evolving world.
                </p>
              </div>

              {/* Key Commitments Tags */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap gap-2 relative z-10">
                <span className="text-xs font-bold px-3.5 py-1.5 rounded-lg bg-slate-50 text-[#07172b] border border-slate-200/90 shadow-sm">
                  ✦ Intellectual Inquiry
                </span>
                <span className="text-xs font-bold px-3.5 py-1.5 rounded-lg bg-slate-50 text-[#07172b] border border-slate-200/90 shadow-sm">
                  ✦ Ethical Leadership
                </span>
                <span className="text-xs font-bold px-3.5 py-1.5 rounded-lg bg-slate-50 text-[#07172b] border border-slate-200/90 shadow-sm">
                  ✦ Global Responsibility
                </span>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-[26px] border-2 border-[#78350f] pl-14 sm:pl-16 pr-8 sm:pr-10 pt-12 pb-8 flex flex-col justify-between shadow-[0_32px_64px_-12px_rgba(0,0,0,0.38),0_16px_32px_-6px_rgba(0,0,0,0.26),0_6px_12px_rgba(0,0,0,0.14)] relative overflow-hidden">
              
              {/* 1. Academic School Ruler Ticks along the Top Border */}
              <div className="absolute top-0 inset-x-20 h-3 flex items-center justify-center pointer-events-none opacity-80">
                <svg className="w-full h-3" preserveAspectRatio="none">
                  <defs>
                    <pattern id="ruler-top-vision" width="32" height="12" patternUnits="userSpaceOnUse">
                      <line x1="0" y1="0" x2="0" y2="12" stroke="#07172b" strokeWidth="1.5" />
                      <line x1="8" y1="0" x2="8" y2="4" stroke="#94a3b8" strokeWidth="1" />
                      <line x1="16" y1="0" x2="16" y2="7" stroke="#78350f" strokeWidth="1.3" />
                      <line x1="24" y1="0" x2="24" y2="4" stroke="#94a3b8" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="12" fill="url(#ruler-top-vision)" />
                </svg>
              </div>

              {/* 2. School Geometry Vertical Ruler Scale with Numbers along the Left Border */}
              <div className="absolute left-0 inset-y-12 w-8 flex pointer-events-none opacity-85">
                <svg className="w-5 h-full" preserveAspectRatio="none">
                  <defs>
                    <pattern id="ruler-left-vision" width="20" height="40" patternUnits="userSpaceOnUse">
                      <line x1="0" y1="0" x2="16" y2="0" stroke="#07172b" strokeWidth="1.5" />
                      <line x1="0" y1="8" x2="6" y2="8" stroke="#94a3b8" strokeWidth="1" />
                      <line x1="0" y1="16" x2="6" y2="16" stroke="#94a3b8" strokeWidth="1" />
                      <line x1="0" y1="24" x2="6" y2="24" stroke="#94a3b8" strokeWidth="1" />
                      <line x1="0" y1="32" x2="11" y2="32" stroke="#78350f" strokeWidth="1.3" />
                    </pattern>
                  </defs>
                  <rect width="20" height="100%" fill="url(#ruler-left-vision)" />
                </svg>
                {/* Scale Measurement Labels */}
                <div className="flex flex-col justify-between py-2 text-[0.52rem] font-mono font-bold text-slate-500 select-none">
                  <span className="text-[#78350f] font-bold">CM</span>
                  <span>05</span>
                  <span>10</span>
                  <span>15</span>
                  <span>20</span>
                </div>
              </div>

              {/* 3. Notebook Margin Guide Line (Vertical Brown Accent) */}
              <div className="absolute left-11 sm:left-12 top-5 bottom-5 w-px bg-gradient-to-b from-[#78350f]/60 via-[#78350f]/25 to-transparent pointer-events-none" />

              {/* 4. Inner Certificate Dashed Pinstripe (Matching Brown) */}
              <div className="absolute inset-2.5 sm:inset-3 rounded-[20px] border border-dashed border-[#78350f]/35 pointer-events-none" />

              {/* 5. Top Center: Mounted School Charter Ribbon */}
              <div className="absolute top-3.5 left-1/2 -translate-x-1/2 bg-[#07172b] text-[#ffaa3b] border border-[#78350f] px-4 py-1 rounded-full text-[0.68rem] font-bold tracking-[0.14em] uppercase shadow-md z-20 whitespace-nowrap">
                GLOBAL HORIZON 2030
              </div>

              {/* 6. Background Academic Diploma Seal Stamp */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full border-2 border-dashed border-[#78350f]/25 flex items-center justify-center pointer-events-none opacity-30 -rotate-12 z-0">
                <div className="w-24 h-24 rounded-full border border-[#07172b]/25 flex flex-col items-center justify-center text-[0.52rem] font-black tracking-widest text-[#07172b]/50 uppercase text-center p-2">
                  <span>EXCELLENCIA</span>
                  <span className="text-[#78350f] text-[0.7rem] my-0.5">★ ★ ★</span>
                  <span>VERITAS</span>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 pt-2">
                {/* Eyebrow with High Contrast */}
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#78350f]" />
                  <span className="text-xs font-bold text-[#07172b] tracking-[0.12em] uppercase">
                    GLOBAL RECOGNITION
                  </span>
                </div>

                <h3 className="font-heading text-2xl sm:text-[1.85rem] font-extrabold text-[#07172b] mb-3.5 tracking-[-0.01em]">
                  Our Vision
                </h3>
                <p className="text-[#334155] text-base sm:text-[1.02rem] leading-[1.85]">
                  To be internationally recognized as a beacon of academic excellence, holistic character development, STEM innovation, and cultural inclusivity.
                </p>
              </div>

              {/* Key Commitments Tags */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap gap-2 relative z-10">
                <span className="text-xs font-bold px-3.5 py-1.5 rounded-lg bg-slate-50 text-[#07172b] border border-slate-200/90 shadow-sm">
                  ✦ Academic Excellence
                </span>
                <span className="text-xs font-bold px-3.5 py-1.5 rounded-lg bg-slate-50 text-[#07172b] border border-slate-200/90 shadow-sm">
                  ✦ Next-Gen STEM
                </span>
                <span className="text-xs font-bold px-3.5 py-1.5 rounded-lg bg-slate-50 text-[#07172b] border border-slate-200/90 shadow-sm">
                  ✦ Cultural Inclusivity
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Address / Leadership Message */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="site-container">
          <SectionHeading
            title="Message from the Principal"
            subtitle="Guiding young minds with wisdom, integrity, and international pedagogy."
          />

          <div className="max-w-4xl mx-auto bg-white rounded-[26px] border border-slate-200/90 p-8 sm:p-12 shadow-[0_22px_55px_-10px_rgba(15,23,42,0.14),0_10px_24px_-5px_rgba(15,23,42,0.08)] relative overflow-hidden">
            {/* Elegant Top Gold Accent Border */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#ffaa3b] via-[#f59e0b] to-[#07172b]" />

            <Quote className="absolute top-6 right-6 w-20 h-20 text-[#ffaa3b]/10 pointer-events-none" />

            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
              {/* Avatar Frame */}
              <div className="flex flex-col items-center text-center shrink-0">
                {/* Avatar Frame with Gold Border & Ring */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-[#ffaa3b] ring-4 ring-[#ffaa3b]/25 relative overflow-hidden shadow-xl mb-3 shrink-0 bg-slate-100">
                  <Image
                    src={LEADERSHIP_MESSAGE.image}
                    alt={LEADERSHIP_MESSAGE.name}
                    fill
                    className="object-cover object-top"
                    priority={true}
                    sizes="128px"
                  />
                </div>
                <h4 className="font-heading text-lg font-bold text-[#0f172a]">
                  {LEADERSHIP_MESSAGE.name}
                </h4>
                <p className="text-[#d97706] text-xs font-bold uppercase tracking-wider">
                  {LEADERSHIP_MESSAGE.designation}
                </p>
                <p className="text-[#64748b] text-[0.8rem] mt-1 max-w-[200px]">
                  {LEADERSHIP_MESSAGE.qualifications}
                </p>
              </div>

              {/* Message Body */}
              <div className="flex-1">
                <p className="text-[#334155] text-lg italic leading-relaxed mb-6">
                  &ldquo;{LEADERSHIP_MESSAGE.quote}&rdquo;
                </p>

                <div className="border-t border-[#f1f5f9] pt-5">
                  <h5 className="text-xs font-bold text-[#64748b] uppercase tracking-wider mb-3">
                    Institutional Commitments & Pedagogy
                  </h5>
                  <div className="space-y-2.5">
                    {LEADERSHIP_MESSAGE.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-[0.92rem] text-[#475569]">
                        <CheckCircle2 className="w-4 h-4 text-[#ffaa3b] mt-1 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Core Pillars of Excellence */}
      <section className="py-20 bg-white">
        <div className="site-container">
          <SectionHeading
            title="Our Four Pillars of Excellence"
            subtitle="A comprehensive framework designed to cultivate intellectual curiosity and global citizenship."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white rounded-2xl p-7 flex flex-col justify-between border-2 border-[#ffaa3b]/60 shadow-[0_26px_50px_-10px_rgba(7,23,43,0.28),0_12px_24px_-6px_rgba(7,23,43,0.18),0_4px_10px_rgba(0,0,0,0.1)] relative"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#ffaa3b]/15 text-[#d97706] flex items-center justify-center mb-5">
                    {PILLAR_ICONS[pillar.icon]}
                  </div>
                  <span className="text-[0.72rem] font-extrabold uppercase tracking-wider text-[#d97706] bg-[#ffaa3b]/15 border border-[#ffaa3b]/30 px-3 py-1 rounded-full inline-block mb-3">
                    {pillar.tagline}
                  </span>
                  <h4 className="font-heading text-lg font-bold text-[#0f172a] mb-2.5">
                    {pillar.title}
                  </h4>
                  <p className="text-[#64748b] text-[0.9rem] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Journey - Ascending Staircase */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="site-container">
          <SectionHeading
            title="Milestones in Our Journey"
            subtitle="An ascending journey of academic distinction, campus growth, and world-class achievement."
          />

          <MilestonesStairs />
        </div>
      </section>

      {/* World-Class Campus & Infrastructure - Interactive Stack Spread Showcase */}
      <StackSpread />
    </>
  );
}
