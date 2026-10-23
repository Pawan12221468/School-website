import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { TESTIMONIALS_DATA } from "@/constants/testimonials";

export default function TestimonialMarquee() {
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="site-container">
        <SectionHeading
          title="Voices of Our Community"
          subtitle="Hear from our students, proud parents, and global alumni about life at St. Jude's."
        />
      </div>

      <div className="marquee-container-mask">
        <div className="marquee-track">
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.author}-${index}`}
              className="w-[380px] shrink-0 bg-white border border-[#e2e8f0] hover:border-[#cbd5e1] rounded-[18px] p-[32px_28px] flex flex-col justify-between shadow-[0_20px_45px_-8px_rgba(15,23,42,0.22),0_8px_18px_-4px_rgba(15,23,42,0.12)] hover:shadow-[0_28px_60px_-10px_rgba(15,23,42,0.3)] transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* 5 Golden Stars */}
                <div className="flex gap-1 text-[#ffaa3b] mb-4">
                  {Array.from({ length: item.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-[#ffaa3b]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[0.95rem] text-[#334155] leading-[1.65] italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5">
                <div className="relative w-[46px] h-[46px] rounded-full overflow-hidden border-2 border-[#e2e8f0] shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-[0.95rem] font-bold text-[#0f172a]">
                    {item.author}
                  </h4>
                  <p className="text-[0.8rem] text-[#64748b]">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
