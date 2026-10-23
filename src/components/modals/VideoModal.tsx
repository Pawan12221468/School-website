"use client";

import React, { useEffect, useRef, useState } from "react";
import { X, Film, RotateCcw } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isEnded, setIsEnded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsEnded(false);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {
          // Autoplay was prevented by browser policy
        });
      }
    } else {
      setIsEnded(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [isOpen]);

  const handleReplay = () => {
    setIsEnded(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[1000] flex items-center justify-center p-3 sm:p-6 transition-all duration-300"
      onClick={onClose}
    >
      <div
        className="bg-[#07172b] border border-white/20 rounded-2xl max-w-6xl w-full h-[90vh] p-4 sm:p-6 relative shadow-[0_25px_80px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#ffaa3b]/20 text-[#ffaa3b] flex items-center justify-center">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading text-white text-base sm:text-xl font-bold">
                St. Jude&apos;s Academy — Virtual Campus Video Tour
              </h3>
              <p className="text-white/70 text-xs">
                Immersive colonial heritage walkthrough, research laboratories & student life
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-white/80 hover:text-white bg-white/10 hover:bg-[#ffaa3b] hover:text-[#07172b] px-4 py-2 rounded-full flex items-center gap-2 text-xs font-bold transition-all duration-200 cursor-pointer"
            aria-label="Close video"
          >
            <X className="w-4 h-4" />
            <span>Close Tour</span>
          </button>
        </div>

        {/* Video Player */}
        <div className="relative flex-1 w-full h-full overflow-hidden rounded-xl bg-black shadow-2xl flex items-center justify-center">
          {/* Replay Icon Overlay */}
          {isEnded && (
            <div className="absolute inset-0 z-30 bg-black/20 flex items-center justify-center">
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

          <video
            ref={videoRef}
            className="w-full h-full object-contain rounded-xl"
            src="/assets/gemini_generated_video_e73b9942.mp4"
            controls
            autoPlay
            playsInline
            preload="metadata"
            onPlay={() => setIsEnded(false)}
            onEnded={() => setIsEnded(true)}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
