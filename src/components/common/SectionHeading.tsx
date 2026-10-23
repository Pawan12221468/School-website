import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`text-center mb-10 sm:mb-12 ${className}`}>
      <h2 className="font-heading text-3xl sm:text-4xl md:text-[2.4rem] font-extrabold text-[#0f172a] tracking-[-0.015em] mb-3 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#64748b] text-[0.98rem] max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
