import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20 bg-white text-center">
      <div className="site-container">
        <h1 className="font-heading text-7xl font-extrabold text-[#ffaa3b] mb-4">
          404
        </h1>
        <h2 className="font-heading text-3xl font-extrabold text-[#0f172a] mb-4">
          Page Not Found
        </h2>
        <p className="text-[#64748b] text-base max-w-md mx-auto mb-8">
          The page you are looking for might have been moved, removed, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="bg-[#07172b] hover:bg-[#112540] text-white font-extrabold px-8 py-3.5 rounded-[6px] inline-flex items-center gap-2 no-underline transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}
