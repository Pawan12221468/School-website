"use client";

import React, { useState } from "react";
import {
  FileSignature,
  GraduationCap,
  Sparkles,
  Award,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Download,
  HelpCircle,
  PhoneCall,
  Clock,
  ShieldAlert,
  Play,
} from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import {
  GRADE_TIERS,
  SCHOLARSHIPS,
  ADMISSION_FAQS,
} from "@/constants/admissions";
import { useModal } from "@/context/ModalContext";

export default function AdmissionsPage() {
  const { openApply, openVideo } = useModal();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      {/* Admissions Hero - Exact Full Screen Height (100% viewport coverage below navbar) */}
      <section
        className="relative h-[calc(100vh-76px)] min-h-[560px] flex items-end justify-center text-white bg-cover bg-center overflow-hidden pb-8 sm:pb-10 md:pb-12 px-4"
        style={{ backgroundImage: "url('/assets/admissions_day.png')" }}
      >
        {/* Cinematic dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07172b]/50 via-[#07172b]/60 to-[#07172b]/90 pointer-events-none" />

        {/* Bottom Vignette to blend into next section */}
        <div className="absolute inset-x-0 bottom-0 h-64 sm:h-80 bg-gradient-to-t from-[#07172b] via-[#07172b]/85 to-transparent pointer-events-none" />

        <div className="site-container relative z-10 text-center mx-auto max-w-3xl">
          <div className="inline-block bg-[#ffaa3b]/20 text-[#ffaa3b] border border-[#ffaa3b]/40 backdrop-blur-sm px-4 py-1.5 rounded-full text-[0.8rem] font-bold tracking-[0.05em] uppercase mb-3.5 shadow-sm">
            JOIN OUR COMMUNITY
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-[2.9rem] font-semibold mb-3 tracking-[-0.015em] leading-tight text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
            Admissions &amp; Enrollment
          </h1>
          <p className="text-base sm:text-lg text-white/95 max-w-[620px] mx-auto leading-relaxed mb-6 drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
            We welcome ambitious, inquisitive students ready to embrace challenge and discovery. Begin your journey with St. Jude&apos;s Academy.
          </p>
          <div className="flex items-center justify-center">
            <button
              onClick={openApply}
              className="btn-shimmer bg-[#ffaa3b] hover:bg-[#f59e0b] hover:-translate-y-0.5 text-[#0b1524] font-extrabold text-sm sm:text-base px-8 py-3 rounded-[8px] transition-all duration-200 shadow-[0_4px_20px_rgba(245,158,11,0.4)] cursor-pointer"
            >
              Start Online Application
            </button>
          </div>
        </div>
      </section>

      {/* Grade Tiers & Age Eligibility Criteria */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="site-container">
          <SectionHeading
            title="Grade Tiers & Age Eligibility"
            subtitle="Structured age cut-offs and customized learning frameworks across four distinct developmental phases."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GRADE_TIERS.map((tier) => (
              <div
                key={tier.tier}
                className="academy-interactive-card rounded-2xl p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[0.72rem] font-black uppercase tracking-wider text-[#92400e] bg-[#ffaa3b]/25 border border-[#ffaa3b]/50 px-3 py-1 rounded-full shadow-xs">
                      {tier.age}
                    </span>
                    <Clock className="w-4 h-4 text-[#334155]" />
                  </div>

                  <h3 className="font-heading text-lg font-black text-[#07172b] mb-1">
                    {tier.tier}
                  </h3>
                  <p className="text-xs font-bold text-[#334155] mb-4">
                    {tier.grades}
                  </p>

                  <div className="bg-[#f1f5f9] p-3.5 rounded-xl border-2 border-slate-300/80 mb-4">
                    <p className="text-xs text-[#0f172a] font-bold leading-relaxed">
                      <span className="font-black text-[#07172b]">Focus: </span>
                      {tier.focus}
                    </p>
                  </div>

                  <div className="space-y-2.5 mb-6">
                    {tier.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs font-bold text-[#1e293b]">
                        <CheckCircle2 className="w-4 h-4 text-[#d97706] mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t-2 border-[#e2e8f0]">
                  <span className="inline-block text-[0.72rem] font-black uppercase tracking-wider text-[#07172b] bg-[#07172b]/10 border border-[#07172b]/20 px-3 py-1 rounded-md">
                    {tier.intakeStatus}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure & Merit Scholarships */}
      <section className="py-20 bg-white">
        <div className="site-container">
          <SectionHeading
            title="Scholarships & Tuition Grants"
            subtitle="Recognizing extraordinary academic talent, athletic vigor, and supporting our defense community."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {SCHOLARSHIPS.map((scholarship) => (
              <div
                key={scholarship.title}
                className="academy-interactive-card rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Highlighted Glowing Corner Accent & Badge */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-bl from-[#ffaa3b]/40 via-[#d97706]/20 to-transparent rounded-full pointer-events-none" />
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#ffaa3b]/20 border border-[#ffaa3b]/45 flex items-center justify-center text-[#b45309] shadow-xs">
                  <Award className="w-4 h-4" />
                </div>

                <div>
                  <div className="inline-flex items-center gap-1.5 bg-[#07172b] text-[#ffaa3b] text-[0.72rem] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4 shadow-sm border border-[#ffaa3b]/40">
                    <Sparkles className="w-3 h-3 text-[#ffaa3b]" />
                    <span>{scholarship.badge}</span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-[1.3rem] font-black text-[#07172b] mb-2 leading-snug">
                    {scholarship.title}
                  </h3>

                  <div className="text-[1.8rem] font-black text-[#b45309] tracking-tight mb-4 leading-tight">
                    {scholarship.concession}
                  </div>

                  {/* Dark & Highlighted Criteria Box */}
                  <div className="mb-4 bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-transparent p-3.5 rounded-xl border-2 border-amber-500/40 shadow-xs">
                    <div className="text-[10px] font-black uppercase tracking-wider text-[#92400e] mb-1 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d97706]" />
                      <span>Eligibility Criteria</span>
                    </div>
                    <p className="text-xs font-bold text-[#0f172a] leading-relaxed">
                      {scholarship.criteria}
                    </p>
                  </div>

                  {/* Darker, Clear Description */}
                  <p className="text-[#1e293b] text-[0.92rem] font-semibold leading-relaxed">
                    {scholarship.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Transparent Policy Strip */}
          <div className="bg-[#07172b]/5 border border-[#07172b]/15 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#07172b] text-[#ffaa3b] flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold text-[#07172b]">
                  Zero Hidden Costs & All-Inclusive Tuition
                </h4>
                <p className="text-[#64748b] text-sm mt-0.5">
                  Tuition includes smart classrooms, laboratory consumables, digital LMS credentials, and library access without arbitrary surcharges.
                </p>
              </div>
            </div>

            <button
              onClick={openApply}
              className="whitespace-nowrap bg-[#07172b] hover:bg-[#112038] text-white text-sm font-bold px-6 py-3 rounded-lg transition-colors cursor-pointer"
            >
              Request Fee Schedule
            </button>
          </div>
        </div>
      </section>

      {/* Admissions Frequently Asked Questions (FAQ) */}
      <section className="py-20 bg-white">
        <div className="site-container">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Clear answers to common questions regarding admissions, academics, campus transport, and student life."
          />

          <div className="max-w-3xl mx-auto space-y-4">
            {ADMISSION_FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={faq.question}
                  className={`border rounded-xl transition-all ${
                    isOpen
                      ? "border-[#ffaa3b] bg-[#fffdfa] shadow-sm"
                      : "border-[#e2e8f0] bg-white hover:border-[#cbd5e1]"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle
                        className={`w-5 h-5 shrink-0 ${
                          isOpen ? "text-[#d97706]" : "text-[#94a3b8]"
                        }`}
                      />
                      <span className="font-heading text-base sm:text-lg font-bold text-[#0f172a]">
                        {faq.question}
                      </span>
                    </div>

                    <div className="shrink-0 text-[#64748b]">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#d97706]" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-[#64748b] text-[0.93rem] leading-relaxed border-t border-[#fef3c7]/60">
                      <span className="inline-block text-[0.68rem] font-bold uppercase tracking-wider text-[#d97706] bg-[#ffaa3b]/15 px-2 py-0.5 rounded mb-2">
                        {faq.category}
                      </span>
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Need Personal Guidance CTA Card */}
      <section className="py-20 md:py-24 bg-[#f8fafc] border-t border-slate-200/80">
        <div className="site-container">
          <div className="bg-gradient-to-r from-[#07172b] via-[#0d223f] to-[#07172b] border border-white/10 rounded-[28px] p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-[0_26px_50px_-10px_rgba(7,23,43,0.32),0_12px_24px_-6px_rgba(7,23,43,0.2)] relative overflow-hidden text-white">
            <div className="inline-flex items-center gap-2 bg-[#ffaa3b]/15 text-[#ffaa3b] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Admissions Office Support</span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold mb-3">
              Ready to Begin Your St. Jude&apos;s Academy Journey?
            </h3>
            <p className="text-white/80 text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Our admissions advisors are available Monday through Saturday to answer questions, arrange campus tours, and assist with document submission.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={openApply}
                className="w-full sm:w-auto bg-[#ffaa3b] hover:bg-[#f59e0b] text-[#0b1524] font-extrabold text-base px-8 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <FileSignature className="w-5 h-5" />
                <span>Submit Online Application</span>
              </button>

              <button
                onClick={openVideo}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold text-base px-7 py-3.5 rounded-lg border border-white/20 transition-all cursor-pointer flex items-center justify-center gap-2 hover:border-[#ffaa3b]/60"
              >
                <Play className="w-4 h-4 fill-white text-white" />
                <span>Watch Campus Tour</span>
              </button>

              <a
                href="tel:+919876543210"
                className="w-full sm:w-auto bg-white/5 hover:bg-white/15 text-white/90 hover:text-white font-semibold text-base px-7 py-3.5 rounded-lg border border-white/10 transition-colors no-underline flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#ffaa3b]" />
                <span>Speak with Admissions</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

