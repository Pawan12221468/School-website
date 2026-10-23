"use client";

import React, { useEffect, useState, useRef } from "react";
import { STATS_DATA } from "@/constants/stats";

interface StatCounterProps {
  rawNumber: string;
  label: string;
}

function StatCounter({ rawNumber, label }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // Extract target number and suffix (e.g., "1500+" -> 1500 and "+")
  const targetNumber = parseInt(rawNumber.replace(/\D/g, ""), 10) || 0;
  const suffix = rawNumber.replace(/[0-9]/g, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 2000; // 2 seconds animation
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Smooth cubic ease-out
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(easeOut * targetNumber);

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(targetNumber);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) {
        observer.unobserve(currentElem);
      }
    };
  }, [targetNumber, hasAnimated]);

  return (
    <div ref={elementRef} className="stat-item transform transition-transform duration-300 hover:scale-105">
      <div className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-[#ffaa3b] leading-none mb-2 tracking-tight stats-number-glow">
        {count}
        {suffix}
      </div>
      <div className="text-base text-white/85 font-semibold">
        {label}
      </div>
    </div>
  );
}

export default function StatsStrip() {
  return (
    <section className="bg-[#112038] py-14 text-white border-t border-white/10 relative overflow-hidden shadow-inner">
      <div className="site-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS_DATA.map((stat) => (
            <StatCounter
              key={stat.label}
              rawNumber={stat.number}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
