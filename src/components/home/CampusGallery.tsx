import React from "react";
import Image from "next/image";
import { Bot, Drama, Trophy, Code2, GraduationCap } from "lucide-react";

export default function CampusGallery() {
  return (
    <section className="py-20 bg-white" id="gallery">
      <div className="site-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <h2 className="font-heading text-3xl md:text-[2.25rem] font-extrabold text-[#0f172a] leading-tight">
              Campus Life & Experiences
            </h2>
            <p className="text-[#64748b] text-base mt-1">
              Moments of discovery, joy, innovation, and achievement across our grounds.
            </p>
          </div>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Column 1 */}
          <div className="flex flex-col gap-5">
            {/* Card 1 */}
            <div className="group relative rounded-[14px] overflow-hidden bg-[#0b1524] h-[220px]">
              <Image
                src="/assets/robotics_club.png"
                alt="Robotics & Innovation Club"
                fill
                className="object-cover transition-transform duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/30 to-black/75 group-hover:to-black/85 flex items-end p-6 transition-all duration-300">
                <span className="text-white font-heading text-[1.2rem] font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] flex items-center gap-2">
                  <Bot className="w-5 h-5 text-[#ffaa3b]" />
                  Robotics & STEM Lab
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative rounded-[14px] overflow-hidden bg-[#0b1524] h-[220px]">
              <Image
                src="/assets/performing_arts.png"
                alt="Performing Arts"
                fill
                className="object-cover transition-transform duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/30 to-black/75 group-hover:to-black/85 flex items-end p-6 transition-all duration-300">
                <span className="text-white font-heading text-[1.2rem] font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] flex items-center gap-2">
                  <Drama className="w-5 h-5 text-[#ffaa3b]" />
                  Performing Arts & Theater
                </span>
              </div>
            </div>
          </div>

          {/* Column 2 (Tall Feature) */}
          <div className="flex flex-col gap-5">
            <div className="group relative rounded-[14px] overflow-hidden bg-[#0b1524] h-[300px] md:h-full min-h-[300px] md:min-h-[460px]">
              <Image
                src="/assets/athletics.png"
                alt="Athletics & Sports"
                fill
                className="object-cover transition-transform duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/30 to-black/75 group-hover:to-black/85 flex items-end p-6 transition-all duration-300">
                <span className="text-white font-heading text-[1.2rem] font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-[#ffaa3b]" />
                  Varsity Athletics & Leadership
                </span>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-5">
            {/* Card 4 */}
            <div className="group relative rounded-[14px] overflow-hidden bg-[#0b1524] h-[220px]">
              <Image
                src="/assets/interactive_learning.png"
                alt="Interactive Classrooms"
                fill
                className="object-cover transition-transform duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/30 to-black/75 group-hover:to-black/85 flex items-end p-6 transition-all duration-300">
                <span className="text-white font-heading text-[1.2rem] font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-[#ffaa3b]" />
                  Smart Digital Classrooms
                </span>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group relative rounded-[14px] overflow-hidden bg-[#0b1524] h-[220px]">
              <Image
                src="/assets/graduation_day.png"
                alt="Graduation Day Ceremony"
                fill
                className="object-cover transition-transform duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/30 to-black/75 group-hover:to-black/85 flex items-end p-6 transition-all duration-300">
                <span className="text-white font-heading text-[1.2rem] font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#ffaa3b]" />
                  Convocation & Graduation Day
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
