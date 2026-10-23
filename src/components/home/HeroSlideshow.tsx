"use client";

import React, { useState, useEffect, useRef } from "react";
import { Send, Play, X, Sparkles, RotateCcw } from "lucide-react";
import { HERO_SLIDES } from "@/constants/hero-slides";

interface HeroSlideshowProps {
  onOpenApply: () => void;
  onOpenVideo?: () => void;
}

export default function HeroSlideshow({
  onOpenApply,
}: HeroSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlayingTour, setIsPlayingTour] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isPlayingTour) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4200);
    return () => clearInterval(timer);
  }, [isPlayingTour]);

  const handleStartTour = () => {
    setIsPlayingTour(true);
    setIsEnded(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleStopTour = () => {
    setIsPlayingTour(false);
    setIsEnded(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleReplay = () => {
    setIsEnded(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <section className="relative min-h-[calc(100vh-76px)] flex items-center text-white overflow-hidden py-20 md:py-24 bg-[#07172b]">
      {/* Fullscreen Video Tour inside Hero Section */}
      {isPlayingTour && (
        <div className="hero-video-container">
          {/* Floating Exit Cross Button */}
          <button
            onClick={handleStopTour}
            className="absolute top-5 right-5 sm:top-6 sm:right-8 z-40 bg-black/60 hover:bg-[#ffaa3b] text-white hover:text-[#07172b] p-3 rounded-full backdrop-blur-md border border-white/20 transition-all duration-200 cursor-pointer shadow-xl hover:scale-110 active:scale-95"
            aria-label="Exit Campus Tour"
            title="Exit Campus Tour"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Replay Icon Overlay when video finishes */}
          {isEnded && (
            <div className="absolute inset-0 z-[35] bg-black/20 flex items-center justify-center transition-all duration-300">
              <button
                onClick={handleReplay}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/40 hover:bg-black/65 text-white flex items-center justify-center backdrop-blur-sm border border-white/40 hover:border-white/90 shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer group"
                aria-label="Replay Video"
                title="Replay Video"
              >
                <RotateCcw className="w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[1.9] group-hover:-rotate-45 transition-transform duration-300" />
              </button>
            </div>
          )}

          {/* Fullscreen Video Element */}
          <video
            ref={videoRef}
            className="hero-video-element"
            src="/assets/gemini_generated_video_e73b9942.mp4"
            autoPlay
            controls
            playsInline
            onPlay={() => setIsEnded(false)}
            onEnded={() => setIsEnded(true)}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Background Slides */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.image}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out transform brightness-[0.95] contrast-[1.02] ${
              isActive
                ? "opacity-100 scale-105 z-0"
                : "opacity-0 scale-100 z-0 pointer-events-none"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        );
      })}

      {/* Hero Overlay: Rich cinematic dark overlay for crystal-clear text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#07172b]/70 via-[#07172b]/78 to-[#07172b]/88 z-[1]" />
      <div className="absolute inset-y-0 left-0 w-full sm:w-[780px] bg-gradient-to-r from-[#07172b]/95 via-[#07172b]/75 to-transparent pointer-events-none z-[1]" />

      {/* Bottom Vignette: Smooth rich dark fade along the bottom edge */}
      <div className="absolute inset-x-0 bottom-0 h-48 sm:h-64 bg-gradient-to-t from-[#07172b] via-[#07172b]/80 via-45% to-transparent pointer-events-none z-[2]" />

      {/* Content Container */}
      <div className="site-container relative z-10 w-full">
        <div className="max-w-[740px]">
          {/* Badge */}
          <div className="inline-block glass-pill px-4 py-1.5 rounded-full text-[0.8rem] font-bold tracking-[0.06em] uppercase mb-5">
            {currentSlide.badge}
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.6rem] font-semibold leading-[1.12] mb-5 tracking-[-0.015em] text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.65)]">
            {currentSlide.title}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-[1.15rem] text-white/95 leading-[1.65] mb-9 max-w-[620px] drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
            {currentSlide.description}
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 flex-wrap">
            <button
              onClick={onOpenApply}
              className="btn-shimmer bg-[#ffaa3b] hover:bg-[#f59e0b] hover:-translate-y-0.5 text-[#0b1524] font-extrabold text-base px-8 py-3.5 rounded-[8px] border-none cursor-pointer transition-all duration-200 shadow-[0_4px_20px_rgba(245,158,11,0.4)] hover:shadow-[0_8px_28px_rgba(245,158,11,0.55)] inline-flex items-center gap-2"
            >
              <Send className="w-4 h-4 fill-current" />
              <span>Apply Now</span>
            </button>

            <button
              onClick={handleStartTour}
              className="bg-white/[0.1] hover:bg-[#ffaa3b] hover:text-[#07172b] text-white font-bold text-base px-7 py-3 rounded-[8px] border border-white/35 hover:border-[#ffaa3b] backdrop-blur-[10px] cursor-pointer transition-all duration-300 inline-flex items-center gap-2.5 shadow-[0_4px_16px_rgba(0,0,0,0.2)] group"
            >
              <Play className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
              <span>Watch Campus Tour</span>
            </button>
          </div>
        </div>
      </div>

      {/* Slide Indicators - Bottom Center */}
      {!isPlayingTour && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-[4px] cursor-pointer transition-all duration-300 border-none p-0 ${
                i === currentIndex
                  ? "w-8 bg-[#ffaa3b] shadow-[0_0_10px_rgba(255,170,59,0.6)]"
                  : "w-3 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
