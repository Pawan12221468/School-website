"use client";

import React, { useState } from "react";
import { X, CheckCircle2 } from "lucide-react";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplyModal({ isOpen, onClose }: ApplyModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    grade: "",
    phone: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", grade: "", phone: "" });
      onClose();
    }, 2000);
  };

  return (
    <div
      className="fixed inset-0 bg-[#07172b]/75 backdrop-blur-[6px] z-[1000] flex items-center justify-center p-5 transition-all duration-300 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[16px] max-w-[500px] w-full p-9 relative shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-[18px] right-[18px] bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#475569] hover:text-[#0f172a] w-[34px] height-[34px] h-[34px] rounded-full flex items-center justify-center transition-all duration-200"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4 animate-bounce" />
            <h3 className="font-heading text-2xl font-extrabold text-[#0f172a] mb-2">
              Application Submitted!
            </h3>
            <p className="text-[#64748b] text-sm">
              Thank you, {formData.name || "applicant"}. Our admissions team will contact you shortly.
            </p>
          </div>
        ) : (
          <>
            <h3 className="font-heading text-[1.7rem] font-extrabold text-[#0f172a] mb-1.5 leading-tight">
              Admission Enquiry
            </h3>
            <p className="text-[#64748b] text-[0.9rem] mb-6">
              Enroll for Academic Year 2026-2027 at St. Jude&apos;s Academy
            </p>

            <form onSubmit={handleSubmit} className="space-y-[18px]">
              <div>
                <label className="block text-[0.85rem] font-bold text-[#334155] mb-1.5">
                  Student Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="e.g. Alexander Smith"
                  className="w-full px-3.5 py-3 border border-[#cbd5e1] rounded-[6px] text-[0.95rem] outline-none transition-all duration-200 focus:border-[#07172b] focus:ring-4 focus:ring-[#07172b]/10"
                />
              </div>

              <div>
                <label className="block text-[0.85rem] font-bold text-[#334155] mb-1.5">
                  Applying For Grade
                </label>
                <select
                  required
                  value={formData.grade}
                  onChange={(e) =>
                    setFormData({ ...formData, grade: e.target.value })
                  }
                  className="w-full px-3.5 py-3 border border-[#cbd5e1] rounded-[6px] text-[0.95rem] outline-none transition-all duration-200 focus:border-[#07172b] focus:ring-4 focus:ring-[#07172b]/10 bg-white"
                >
                  <option value="">Select Grade Level...</option>
                  <option value="9">Grade 9</option>
                  <option value="10">Grade 10</option>
                  <option value="11">Grade 11</option>
                  <option value="12">Grade 12</option>
                </select>
              </div>

              <div>
                <label className="block text-[0.85rem] font-bold text-[#334155] mb-1.5">
                  Contact Phone
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="+1 (234) 567-890"
                  className="w-full px-3.5 py-3 border border-[#cbd5e1] rounded-[6px] text-[0.95rem] outline-none transition-all duration-200 focus:border-[#07172b] focus:ring-4 focus:ring-[#07172b]/10"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#07172b] hover:bg-[#112540] text-white py-3.5 rounded-[6px] text-base font-extrabold cursor-pointer transition-all duration-200 mt-2 shadow-sm"
              >
                Submit Application
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
