"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Send, Check } from "lucide-react";
import { SCHOOL_INFO } from "@/constants/navigation";

interface FooterProps {
  onOpenApply: () => void;
}

export default function Footer({ onOpenApply }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 3000);
  };

  return (
    <footer className="bg-[#07172b] text-white pt-20 pb-[30px] border-t border-white/10">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1.3fr_1.5fr] gap-10 mb-15 pb-12 border-b border-white/10">
          {/* Column 1: Brand Info */}
          <div>
            <h3 className="font-heading text-[1.8rem] font-extrabold text-white mb-4">
              {SCHOOL_INFO.name}
            </h3>
            <p className="text-[#94a3b8] text-[0.95rem] leading-[1.7] mb-6 whitespace-pre-line">
              123 Academic Lane, Knowledge Park,
              <br />
              Excellence State, 56789
              <br />
              Phone: {SCHOOL_INFO.phone}
              <br />
              Email: {SCHOOL_INFO.email}
            </p>
            <div className="flex gap-3">
              {["facebook", "twitter", "instagram", "linkedin"].map((net) => (
                <a
                  key={net}
                  href={`#${net}`}
                  className="w-[38px] h-[38px] rounded-[8px] bg-white/[0.08] border border-white/15 text-white flex items-center justify-center hover:bg-[#ffaa3b] hover:text-[#07172b] hover:border-[#ffaa3b] transition-all duration-200 uppercase text-xs font-bold"
                  aria-label={net}
                >
                  {net.slice(0, 2).toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading text-[0.9rem] font-extrabold tracking-[0.08em] text-[#cbd5e1] uppercase mb-[22px]">
              Quick Links
            </h4>
            <ul className="list-none p-0 m-0 space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-[#94a3b8] hover:text-[#ffaa3b] hover:pl-1 text-[0.95rem] transition-all duration-200 no-underline inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#94a3b8] hover:text-[#ffaa3b] hover:pl-1 text-[0.95rem] transition-all duration-200 no-underline inline-block"
                >
                  About Academy
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions"
                  className="text-[#94a3b8] hover:text-[#ffaa3b] hover:pl-1 text-[0.95rem] transition-all duration-200 no-underline inline-block"
                >
                  Admissions Process
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#94a3b8] hover:text-[#ffaa3b] hover:pl-1 text-[0.95rem] transition-all duration-200 no-underline inline-block"
                >
                  Campus Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Campus Visit */}
          <div>
            <h4 className="font-heading text-[0.9rem] font-extrabold tracking-[0.08em] text-[#cbd5e1] uppercase mb-[22px]">
              Campus Visit
            </h4>
            <p className="text-[#94a3b8] text-[0.95rem] mb-3">
              {SCHOOL_INFO.visitingHours}
            </p>
            <button
              onClick={onOpenApply}
              className="mt-4 bg-transparent text-[#ffaa3b] border border-[#ffaa3b] px-5 py-2.5 rounded-[6px] font-bold text-[0.9rem] cursor-pointer hover:bg-[#ffaa3b] hover:text-[#07172b] transition-all duration-200"
            >
              Schedule a Private Tour
            </button>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-heading text-[0.9rem] font-extrabold tracking-[0.08em] text-[#cbd5e1] uppercase mb-[22px]">
              Newsletter
            </h4>
            <p className="text-[#94a3b8] text-[0.9rem] mb-[18px] leading-[1.5]">
              Stay updated with academic bulletins and campus announcements.
            </p>
            <form onSubmit={handleNewsletter} className="relative flex">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full bg-white/[0.08] border border-white/20 rounded-[6px] py-3 pr-[50px] pl-4 text-white text-[0.9rem] outline-none focus:border-[#ffaa3b] transition-all duration-200"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 w-9 bg-[#ffaa3b] text-[#07172b] border-none rounded-[4px] cursor-pointer flex items-center justify-center font-bold hover:bg-[#f59e0b] transition-colors"
                aria-label="Subscribe"
              >
                {subscribed ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="text-center text-[#64748b] text-[0.875rem] pt-5">
          <p>© 2026 St. Jude&apos;s Academy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
