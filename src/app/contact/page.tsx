"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";
import { SCHOOL_INFO } from "@/constants/navigation";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <>
      {/* Contact Hero - Exact Full Screen Height (100% viewport coverage below navbar) */}
      <section
        className="relative h-[calc(100vh-76px)] min-h-[560px] flex items-end justify-center text-white bg-cover bg-center overflow-hidden pb-8 sm:pb-10 md:pb-12 px-4"
        style={{ backgroundImage: "url('/assets/campus_contact.png')" }}
      >
        {/* Cinematic dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07172b]/50 via-[#07172b]/60 to-[#07172b]/90 pointer-events-none" />

        {/* Bottom Vignette to blend into next section */}
        <div className="absolute inset-x-0 bottom-0 h-64 sm:h-80 bg-gradient-to-t from-[#07172b] via-[#07172b]/85 to-transparent pointer-events-none" />

        <div className="site-container relative z-10 text-center mx-auto max-w-3xl">
          <div className="inline-block bg-[#ffaa3b]/20 text-[#ffaa3b] border border-[#ffaa3b]/40 backdrop-blur-sm px-4 py-1.5 rounded-full text-[0.8rem] font-bold tracking-[0.05em] uppercase mb-3.5 shadow-sm">
            GET IN TOUCH
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-[2.9rem] font-semibold mb-3 tracking-[-0.015em] leading-tight text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
            Contact St. Jude&apos;s Academy
          </h1>
          <p className="text-base sm:text-lg text-white/95 max-w-[620px] mx-auto leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
            We are here to assist prospective families, students, and alumni. Reach out to our admissions advisors or plan your visit.
          </p>
        </div>
      </section>

      {/* Details & Form Grid */}
      <section className="py-20 bg-white">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Contact Info */}
            <div>
              <h2 className="font-heading text-3xl font-extrabold text-[#0f172a] mb-5">
                Visit Our Main Campus
              </h2>
              <p className="text-[#64748b] leading-[1.7] mb-8">
                Located in the serene Knowledge Park district, our 25-acre campus combines classic colonial architecture with cutting-edge academic facilities.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-[#ffaa3b]/15 text-[#d97706] rounded-[10px] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#0f172a]">
                      Campus Address
                    </h4>
                    <p className="text-[#64748b] text-[0.95rem]">
                      {SCHOOL_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-[#07172b]/10 text-[#07172b] rounded-[10px] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#0f172a]">
                      Phone Numbers
                    </h4>
                    <p className="text-[#64748b] text-[0.95rem]">
                      Admissions: {SCHOOL_INFO.phone}
                      <br />
                      Main Office: {SCHOOL_INFO.secondaryPhone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-[#ffaa3b]/15 text-[#d97706] rounded-[10px] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#0f172a]">
                      Electronic Mail
                    </h4>
                    <p className="text-[#64748b] text-[0.95rem]">
                      {SCHOOL_INFO.generalEmail} | {SCHOOL_INFO.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Message Form Card */}
            <div className="bg-[#fbfcfd] border border-[#e8ecef] rounded-[12px] p-9 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              <h3 className="font-heading text-[1.6rem] font-extrabold text-[#0f172a] mb-1.5 leading-tight">
                Send Us a Message
              </h3>
              <p className="text-[#64748b] text-[0.9rem] mb-6">
                Our advisors usually respond within 1 business day.
              </p>

              {submitted ? (
                <div className="py-8 text-center bg-white border border-emerald-100 rounded-[8px]">
                  <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto mb-3 animate-bounce" />
                  <h4 className="font-heading text-xl font-bold text-[#0f172a] mb-1">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-[#64748b] text-sm max-w-sm mx-auto">
                    Thank you, {formData.name}. Our admissions representative will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-[18px]">
                  <div>
                    <label className="block text-[0.85rem] font-bold text-[#334155] mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. John Doe"
                      className="w-full px-3.5 py-3 border border-[#cbd5e1] rounded-[6px] text-[0.95rem] outline-none transition-all duration-200 focus:border-[#07172b] focus:ring-4 focus:ring-[#07172b]/10 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[0.85rem] font-bold text-[#334155] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="john@example.com"
                      className="w-full px-3.5 py-3 border border-[#cbd5e1] rounded-[6px] text-[0.95rem] outline-none transition-all duration-200 focus:border-[#07172b] focus:ring-4 focus:ring-[#07172b]/10 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[0.85rem] font-bold text-[#334155] mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="e.g. High School Admissions Inquiry"
                      className="w-full px-3.5 py-3 border border-[#cbd5e1] rounded-[6px] text-[0.95rem] outline-none transition-all duration-200 focus:border-[#07172b] focus:ring-4 focus:ring-[#07172b]/10 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[0.85rem] font-bold text-[#334155] mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="How can we assist you?"
                      className="w-full px-3.5 py-3 border border-[#cbd5e1] rounded-[6px] text-[0.95rem] outline-none transition-all duration-200 focus:border-[#07172b] focus:ring-4 focus:ring-[#07172b]/10 bg-white resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#07172b] hover:bg-[#112540] text-white py-3.5 rounded-[6px] text-base font-extrabold cursor-pointer transition-all duration-200 mt-2 shadow-sm"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
