// St. Jude's Academy - Campus & Infrastructure Showcase
// Permanently spread layout displaying all 8 facility cards around the center heading

"use client";

import React from "react";

export interface StackSpreadItem {
  src: string;
  alt?: string;
  title?: string;
  category?: string;
  highlight?: string;
}

export interface StackSpreadTarget {
  x: number;
  y: number;
  rotate: number;
  scale?: number;
  w: number;
  h: number;
}

export interface StackSpreadCard {
  item: StackSpreadItem;
  target: StackSpreadTarget;
  z?: number;
}

// 8 Campus Facility Cards positioned permanently in the exact spread layout
export const CAMPUS_SPREAD_CARDS: StackSpreadCard[] = [
  // 1. top-left (Library)
  {
    item: {
      src: "/assets/campus_library.jpg",
      alt: "Heritage Central Library",
      title: "Heritage Central Library",
      category: "Learning Atrium",
      highlight: "45,000+ Books & Digital Pods",
    },
    target: { x: -28, y: -23, rotate: -2, scale: 1.05, w: 20, h: 23 },
    z: 2,
  },
  // 2. top-right (Olympic Pool)
  {
    item: {
      src: "/assets/campus_olympic_pool.jpg",
      alt: "Olympic Aquatic Arena",
      title: "Olympic Aquatic Arena",
      category: "Aquatic Sports",
      highlight: "Heated 50m Pool & Grandstand",
    },
    target: { x: 28, y: -23, rotate: 2, scale: 1.05, w: 20, h: 23 },
    z: 3,
  },
  // 3. mid-left (Biotech Lab)
  {
    item: {
      src: "/assets/campus_biotech_lab.jpg",
      alt: "Biotech & Science Labs",
      title: "Biotech & Science Labs",
      category: "Scientific Research",
      highlight: "Digital Electron Spectroscopy",
    },
    target: { x: -36, y: 1, rotate: -1, scale: 1.05, w: 18, h: 24 },
    z: 4,
  },
  // 4. top-centre (Athletics - positioned high with ample clearance above heading)
  {
    item: {
      src: "/assets/athletics.png",
      alt: "FIFA Turf & Athletic Arena",
      title: "FIFA Turf & Athletics",
      category: "Physical Fitness",
      highlight: "25-Acre Sports Complex",
    },
    target: { x: 0, y: -30, rotate: 0, scale: 1.0, w: 21, h: 19 },
    z: 5,
  },
  // 5. mid-right (Performing Arts)
  {
    item: {
      src: "/assets/performing_arts.png",
      alt: "1,200-Seat Grand Auditorium",
      title: "Grand Performing Theatre",
      category: "Performing Arts",
      highlight: "Acoustic Stage & Broadcast Rig",
    },
    target: { x: 36, y: 1, rotate: 1, scale: 1.05, w: 18, h: 24 },
    z: 6,
  },
  // 6. bottom-left (Robotics)
  {
    item: {
      src: "/assets/robotics_club.png",
      alt: "Robotics & AI Sandbox",
      title: "Robotics & AI Sandbox",
      category: "Technology",
      highlight: "Drone Prototyping & AI",
    },
    target: { x: -28, y: 24, rotate: 2, scale: 1.05, w: 20, h: 23 },
    z: 7,
  },
  // 7. bottom-centre (Smart Studios - positioned low with ample clearance below subtitle)
  {
    item: {
      src: "/assets/interactive_learning.png",
      alt: "Smart Interactive Studios",
      title: "Smart Learning Studios",
      category: "Digital Pedagogy",
      highlight: "Interactive Collaboration Pods",
    },
    target: { x: 0, y: 30, rotate: 0, scale: 1.0, w: 21, h: 19 },
    z: 8,
  },
  // 8. bottom-right (Green Campus)
  {
    item: {
      src: "/assets/about_heritage.png",
      alt: "25-Acre Green Campus",
      title: "25-Acre Green Campus",
      category: "Heritage Architecture",
      highlight: "Colonial Eco Ecosystem",
    },
    target: { x: 28, y: 24, rotate: -2, scale: 1.05, w: 20, h: 23 },
    z: 9,
  },
];

function CardFace({
  item,
  cardRadius = 16,
}: {
  item: StackSpreadItem;
  cardRadius?: number;
}) {
  return (
    <div
      className="relative h-full w-full overflow-hidden shadow-[0_20px_45px_-10px_rgba(7,23,43,0.22),0_8px_18px_-4px_rgba(7,23,43,0.1)] border-2 border-white ring-1 ring-slate-200/80 group select-none bg-[#07172b] transition-all duration-300 hover:shadow-[0_28px_60px_-12px_rgba(7,23,43,0.35)] hover:scale-[1.03]"
      style={{ borderRadius: `${cardRadius}px` }}
    >
      <img
        src={item.src}
        alt={item.alt ?? ""}
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
      />
      {/* Dark Navy Vignette for Legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#07172b]/95 via-[#07172b]/25 to-transparent pointer-events-none" />

      {/* Facility Information Overlay */}
      {item.title && (
        <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 z-10 flex flex-col justify-end pointer-events-none">
          {item.category && (
            <span className="text-[0.62rem] sm:text-[0.68rem] font-bold uppercase tracking-wider text-[#ffaa3b] mb-0.5 sm:mb-1 block drop-shadow-sm">
              {item.category}
            </span>
          )}
          <h4 className="text-white text-xs sm:text-sm md:text-[0.95rem] font-extrabold leading-tight drop-shadow-md line-clamp-1">
            {item.title}
          </h4>
          {item.highlight && (
            <p className="text-white/80 text-[0.58rem] sm:text-[0.7rem] mt-0.5 line-clamp-1 hidden sm:block">
              {item.highlight}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export interface StackSpreadStageProps {
  cards?: StackSpreadCard[];
  bgColor?: string;
  textColor?: string;
  headline?: React.ReactNode;
  subtitle?: string;
}

export function StackSpreadStage({
  cards = CAMPUS_SPREAD_CARDS,
  bgColor = "#ffffff",
  textColor = "#07172b",
  headline,
  subtitle,
}: StackSpreadStageProps) {
  return (
    <section className="relative w-full overflow-hidden" style={{ backgroundColor: bgColor }}>
      {/* DESKTOP PERMANENT SPREAD SHOWCASE (Fixed in exact spread state, no open/close animation) */}
      <div className="hidden lg:flex relative w-full h-[850px] items-center justify-center overflow-hidden">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,170,59,0.06),transparent_70%)] pointer-events-none" />

        {/* Center Text (Permanently Displayed in Center) */}
        <div className="pointer-events-none absolute inset-0 z-[5] flex flex-col items-center justify-center px-6 text-center">
          <div className="inline-block bg-[#ffaa3b]/15 text-[#b45309] border border-[#ffaa3b]/40 backdrop-blur-md px-3.5 py-1 rounded-full text-[0.72rem] font-bold tracking-[0.14em] uppercase mb-2.5 shadow-sm">
            CAMPUS &amp; INFRASTRUCTURE
          </div>

          <h2
            className="w-full whitespace-pre-line text-[2.75vw] font-extrabold leading-[1.14] tracking-[-0.015em] font-heading drop-shadow-sm text-[#07172b]"
            style={{ color: textColor }}
          >
            {headline ?? (
              <>
                World-Class Campus <br />
                <span className="text-[#d97706]">&amp; Infrastructure</span>
              </>
            )}
          </h2>
          <p
            className="mt-2 w-full max-w-[45ch] text-[0.96vw] leading-relaxed tracking-normal text-[#475569] font-normal"
          >
            {subtitle ??
              "A 25-acre green ecosystem engineered for experiential learning, safety, and athletic achievement."}
          </p>
        </div>

        {/* 8 Cards Permanently Placed in Spread Layout */}
        <div className="absolute inset-0 z-10 pointer-events-auto">
          {cards.map((card, i) => (
            <div
              key={i}
              className="absolute will-change-transform"
              style={{
                left: `calc(50% + ${card.target.x}vw)`,
                top: `calc(50% + ${card.target.y}vh)`,
                width: `${card.target.w}vw`,
                height: `${card.target.h}vh`,
                transform: `translate(-50%, -50%) rotate(${card.target.rotate}deg) scale(${card.target.scale ?? 1})`,
                zIndex: card.z ?? 1,
              }}
            >
              <CardFace item={card.item} />
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE & TABLET RESPONSIVE FACILITY GRID */}
      <div className="lg:hidden site-container py-14">
        <div className="text-center mb-8">
          <div className="inline-block bg-[#ffaa3b]/15 text-[#b45309] border border-[#ffaa3b]/40 px-3.5 py-1 rounded-full text-[0.72rem] font-bold tracking-[0.14em] uppercase mb-2.5">
            CAMPUS &amp; INFRASTRUCTURE
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07172b] font-heading mb-2">
            World-Class Campus <span className="text-[#d97706]">&amp; Infrastructure</span>
          </h2>
          <p className="text-sm text-[#475569] max-w-md mx-auto">
            A 25-acre green ecosystem engineered for experiential learning, safety, and athletic achievement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {cards.map((card, i) => (
            <div key={i} className="h-56 relative rounded-2xl overflow-hidden shadow-md border-2 border-white">
              <CardFace item={card.item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function StackSpread(props: StackSpreadStageProps) {
  return <StackSpreadStage {...props} />;
}
