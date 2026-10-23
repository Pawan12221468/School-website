"use client";

import React from "react";
import { MILESTONES_DATA } from "@/constants/milestones";

interface StairStep {
  stepNum: string;
  stepName: string;
  elevationMark: string;
  year: string;
  title: string;
  description: string;
  metric: string;
  icon: string;
  isSummit?: boolean;
  stepHeight: string; // vertical riser offset
}

// Ordered strictly from LEFT (Today - Summit) to RIGHT (1995 - Foundation)
const REALISTIC_STAIRS: StairStep[] = [
  {
    stepNum: "04",
    stepName: "THE SUMMIT",
    elevationMark: "EL. +1.20M",
    year: MILESTONES_DATA[3].year, // "Today"
    title: MILESTONES_DATA[3].title,
    description: MILESTONES_DATA[3].description,
    metric: "Oxford & MIT Alumni",
    icon: "🏆",
    isSummit: true,
    stepHeight: "translate-y-0", // Highest landing on the left
  },
  {
    stepNum: "03",
    stepName: "INNOVATION",
    elevationMark: "EL. +0.80M",
    year: MILESTONES_DATA[2].year, // "2018"
    title: MILESTONES_DATA[2].title,
    description: MILESTONES_DATA[2].description,
    metric: "Robotics & AI Lab",
    icon: "🔬",
    stepHeight: "translate-y-6 lg:translate-y-8", // Step 3
  },
  {
    stepNum: "02",
    stepName: "EXPANSION",
    elevationMark: "EL. +0.40M",
    year: MILESTONES_DATA[1].year, // "2008"
    title: MILESTONES_DATA[1].title,
    description: MILESTONES_DATA[1].description,
    metric: "25-Acre Sports Complex",
    icon: "🏛️",
    stepHeight: "translate-y-12 lg:translate-y-16", // Step 2
  },
  {
    stepNum: "01",
    stepName: "FOUNDATION",
    elevationMark: "EL. 0.00M (BASE)",
    year: MILESTONES_DATA[0].year, // "1995"
    title: MILESTONES_DATA[0].title,
    description: MILESTONES_DATA[0].description,
    metric: "50 Founding Students",
    icon: "🌱",
    stepHeight: "translate-y-18 lg:translate-y-24", // Base landing on the right
  },
];

export default function MilestonesStairs() {
  return (
    <div className="w-full max-w-5xl mx-auto">

      {/* 2. DESKTOP: REALISTIC DESCENDING STAIRWAY (From Left [Today] to Right [1995]) */}
      <div className="hidden lg:grid grid-cols-4 gap-4 items-start pb-8 pt-2">
        {REALISTIC_STAIRS.map((step, index) => {
          return (
            <div
              key={step.stepNum}
              className={`flex flex-col transition-transform duration-300 ${step.stepHeight}`}
            >
              {/* Realistic Stair Step (Unified Monolithic Architectural Block) */}
              <div
                className={`relative bg-white rounded-xl p-5 flex flex-col justify-between transition-all duration-300 border-2 ${
                  step.isSummit
                    ? "border-[#d97706] shadow-[0_20px_45px_-10px_rgba(217,119,6,0.22),0_8px_18px_-4px_rgba(217,119,6,0.12)] hover:-translate-y-1.5"
                    : "border-slate-300/80 shadow-[0_16px_36px_-10px_rgba(15,23,42,0.14),0_6px_14px_-3px_rgba(15,23,42,0.06)] hover:-translate-y-1.5 hover:border-slate-400"
                }`}
              >
                {/* Architectural Stair Tread Nosing (Realistic Front Beveled Edge) */}
                <div
                  className={`absolute top-0 inset-x-0 h-1.5 rounded-t-lg shadow-inner ${
                    step.isSummit
                      ? "bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#d97706]"
                      : "bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200"
                  }`}
                />

                {/* Top Badge & Elevation Level */}
                <div className="pt-1">
                  <div className="flex items-center justify-between mb-2.5">
                    <span
                      className={`text-[0.62rem] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded border ${
                        step.isSummit
                          ? "bg-[#ffaa3b]/15 text-[#b45309] border-[#ffaa3b]/40"
                          : "bg-slate-100 text-slate-700 border-slate-200"
                      }`}
                    >
                      {step.isSummit ? "★ SUMMIT" : `STEP ${step.stepNum}`}
                    </span>
                    <span className="text-[0.6rem] font-mono font-bold text-slate-400">
                      {step.elevationMark}
                    </span>
                  </div>

                  {/* Year Typography (Compact, Powerful) */}
                  <div
                    className={`font-heading text-2xl sm:text-[1.75rem] font-black mb-1.5 tracking-tight ${
                      step.isSummit
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-[#b45309] to-[#d97706]"
                        : "text-[#07172b]"
                    }`}
                  >
                    {step.year}
                  </div>

                  {/* Title */}
                  <h4 className="font-heading text-[0.95rem] font-bold text-[#0f172a] mb-1.5 leading-snug">
                    {step.title}
                  </h4>

                  {/* Description (Concise & Readable) */}
                  <p className="text-[#475569] text-[0.78rem] leading-[1.65] mb-3.5">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Milestone Highlight */}
                <div
                  className={`pt-2.5 border-t flex items-center gap-1.5 text-[0.72rem] font-bold ${
                    step.isSummit
                      ? "border-[#ffaa3b]/30 text-[#b45309]"
                      : "border-slate-100 text-slate-600"
                  }`}
                >
                  <span className="text-sm">{step.icon}</span>
                  <span className="truncate">{step.metric}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. MOBILE & TABLET: COMPACT STEPPED TIMELINE (From Top [Today] Down to [1995]) */}
      <div className="lg:hidden flex flex-col space-y-4 relative pl-5 border-l-2 border-[#d97706]/40 ml-3 my-4">
        {REALISTIC_STAIRS.map((step) => (
          <div key={step.stepNum} className="relative">
            {/* Step Marker on Riser Line */}
            <div
              className={`absolute -left-[27px] top-4 w-6 h-6 rounded-full flex items-center justify-center font-bold text-[0.65rem] border-2 shadow-sm ${
                step.isSummit
                  ? "bg-[#d97706] text-white border-white ring-2 ring-[#d97706]/30"
                  : "bg-[#07172b] text-white border-white"
              }`}
            >
              {step.stepNum}
            </div>

            {/* Compact Step Card */}
            <div
              className={`bg-white rounded-xl p-4 border-2 shadow-sm ${
                step.isSummit ? "border-[#d97706]" : "border-slate-200"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span
                  className={`text-[0.62rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    step.isSummit
                      ? "bg-[#ffaa3b]/20 text-[#b45309]"
                      : "bg-slate-100 text-[#07172b]"
                  }`}
                >
                  {step.isSummit ? "SUMMIT PINNACLE" : `STEP ${step.stepNum} • ${step.stepName}`}
                </span>
                <span className="font-heading text-xl font-black text-[#d97706]">
                  {step.year}
                </span>
              </div>

              <h4 className="font-heading text-sm font-bold text-[#07172b] mb-1">
                {step.title}
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed mb-2.5">
                {step.description}
              </p>

              <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                <span>{step.icon}</span>
                <span>{step.metric}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
