"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  FlaskConical,
  Trophy,
  Users,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { FEATURES_DATA } from "@/constants/features";

export default function FeaturesGrid() {
  const getIcon = (type: string) => {
    switch (type) {
      case "award":
        return <Award className="w-4 h-4" />;
      case "flask":
        return <FlaskConical className="w-4 h-4" />;
      case "trophy":
        return <Trophy className="w-4 h-4" />;
      case "faculty":
        return <Users className="w-4 h-4" />;
      default:
        return <Award className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#f8fafc] border-b border-slate-200/80 overflow-hidden" id="features">
      <div className="site-container">
        {/* Section Header with generous bottom spacing so images never overlap */}
        <div className="text-center max-w-2xl mx-auto mb-32 sm:mb-36 md:mb-40">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Senior Secondary Excellence</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-[2.6rem] font-extrabold text-[#0f172a] tracking-tight leading-tight mb-3">
            Why Choose St. Jude&apos;s?
          </h2>
          <div className="w-16 h-1 bg-[#ffaa3b] mx-auto rounded-full mb-4" />
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Empowering older scholars and senior high-school achievers to excel across rigorous academics, cutting-edge STEM, championship athletics, and collegiate leadership.
          </p>
        </div>

        {/* 4 Pop-Out 3D Feature Cards: Static cards (no hover jumps), clean separation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-28 mb-16">
          {FEATURES_DATA.map((feature) => (
            <div
              key={feature.title}
              className="relative bg-[#07172b] border border-white/10 rounded-[28px] p-6 pb-7 flex flex-col justify-between shadow-[0_30px_70px_-10px_rgba(7,23,43,0.52),0_16px_36px_-6px_rgba(7,23,43,0.3)]"
            >
              {/* Senior Student Cutout: Upper Half Pops OUT Above Card, Lower Half Sits INSIDE Card */}
              <div className="relative w-full h-44 -mt-24 sm:-mt-28 mb-4 flex items-end justify-center pointer-events-none overflow-visible">
                {/* Soft ambient depth shadow behind student */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 sm:w-48 h-56 sm:h-60 bg-black/45 blur-2xl rounded-full pointer-events-none -z-0" />

                <div className="relative w-52 sm:w-56 h-64 sm:h-72 z-10">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    priority={true}
                    className="object-contain object-bottom drop-shadow-[0_16px_20px_rgba(0,0,0,0.6)] drop-shadow-[0_30px_35px_rgba(0,0,0,0.45)]"
                    sizes="(max-width: 640px) 210px, 240px"
                  />
                </div>
              </div>

              {/* Card Content Stage */}
              <div className="flex flex-col flex-grow justify-between">
                <div>
                  {/* Category Tagline & Pill Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-white/10 border border-white/15 text-[#ffaa3b] flex items-center justify-center shadow-xs font-bold">
                        {getIcon(feature.icon)}
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#ffaa3b]">
                        {feature.tagline}
                      </span>
                    </div>

                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-[#ffaa3b] text-[#07172b] shadow-xs">
                      {feature.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg sm:text-xl font-extrabold text-white mb-2 leading-snug">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {feature.desc}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-4 border-t border-white/10 mt-auto">
                  <Link
                    href="/admissions"
                    className="inline-flex items-center justify-between w-full text-xs font-bold text-white hover:text-[#ffaa3b] transition-colors"
                  >
                    <span>Explore Discipline</span>
                    <div className="w-7 h-7 rounded-full bg-white/10 border border-white/15 text-[#ffaa3b] flex items-center justify-center shadow-xs">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Wide Banner: School-focused with deep elevation shadow */}
        <div className="relative bg-[#07172b] rounded-3xl border border-white/10 shadow-[0_30px_70px_-10px_rgba(7,23,43,0.52),0_16px_36px_-6px_rgba(7,23,43,0.3)] p-6 sm:p-8 md:p-10 overflow-hidden text-white">
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-[#ffaa3b]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ffaa3b] mb-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#ffaa3b]" />
                <span>St. Jude&apos;s School Admissions 2026-27</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-2.5 tracking-tight">
                Nurturing Minds, Building Character &amp; Inspiring Excellence.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                At St. Jude&apos;s School, we foster curiosity, moral integrity, and creative learning. With modern smart classrooms, Olympic sports facilities, and dedicated teacher mentorship, we empower every child to thrive.
              </p>
            </div>

            {/* Quick Metrics & CTA */}
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3.5 w-full lg:w-auto">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-2xl shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#ffaa3b]/20 text-[#ffaa3b] flex items-center justify-center font-bold text-lg">
                  ★
                </div>
                <div>
                  <div className="font-heading font-extrabold text-white text-base leading-tight">
                    100%
                  </div>
                  <div className="text-[11px] font-medium text-slate-300 uppercase tracking-wide">
                    Board Distinction
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-2xl shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#ffaa3b]/20 text-[#ffaa3b] flex items-center justify-center font-bold text-lg">
                  1:8
                </div>
                <div>
                  <div className="font-heading font-extrabold text-white text-base leading-tight">
                    Student-Teacher
                  </div>
                  <div className="text-[11px] font-medium text-slate-300 uppercase tracking-wide">
                    Faculty Mentorship
                  </div>
                </div>
              </div>

              <Link
                href="/admissions"
                className="px-6 py-3.5 rounded-2xl bg-[#ffaa3b] hover:bg-[#f59e0b] text-[#07172b] font-extrabold text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-200 inline-flex items-center gap-2"
              >
                <span>Apply for School Admission</span>
                <ArrowRight className="w-4 h-4 text-[#07172b]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
