"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap, Menu, X } from "lucide-react";
import { NAV_LINKS, SCHOOL_INFO } from "@/constants/navigation";

interface NavbarProps {
  onOpenApply: () => void;
}

export default function Navbar({ onOpenApply }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] bg-[#07172b] py-[18px] shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all duration-300">
      <div className="site-container flex items-center justify-between">
        {/* Brand Name */}
        <Link
          href="/"
          className="font-heading text-[1.7rem] font-extrabold text-white tracking-[-0.01em] no-underline flex items-center gap-2.5"
        >
          <GraduationCap className="w-8 h-8 text-[#ffaa3b]" />
          <span>{SCHOOL_INFO.name}</span>
        </Link>

        {/* Desktop Nav Links & Action */}
        <div className="hidden md:flex items-center gap-9">
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative text-base font-semibold py-1.5 transition-all duration-200 no-underline ${isActive
                        ? "text-white after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[3px] after:bg-[#ffaa3b] after:rounded-[2px]"
                        : "text-[#cbd5e1] hover:text-white"
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            onClick={onOpenApply}
            className="bg-[#ffaa3b] hover:bg-[#f59e0b] hover:-translate-y-[1px] text-[#07172b] font-extrabold text-[0.9rem] px-6 py-2.5 rounded-[6px] border-none cursor-pointer transition-all duration-200 shadow-[0_2px_8px_rgba(255,170,59,0.25)]"
          >
            Apply Now
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white bg-transparent border-none p-1 cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07172b] border-t border-white/10 px-6 py-5 space-y-4">
          <ul className="flex flex-col gap-3 list-none p-0 m-0">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2 text-base font-semibold ${isActive ? "text-[#ffaa3b]" : "text-[#cbd5e1]"
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenApply();
            }}
            className="w-full bg-[#ffaa3b] hover:bg-[#f59e0b] text-[#07172b] font-extrabold text-[0.9rem] py-3 rounded-[6px] shadow-md"
          >
            Apply Now
          </button>
        </div>
      )}
    </header>
  );
}
