"use client";

import React, { createContext, useContext, useState } from "react";
import ApplyModal from "@/components/modals/ApplyModal";
import VideoModal from "@/components/modals/VideoModal";

interface ModalContextType {
  openApply: () => void;
  closeApply: () => void;
  openVideo: () => void;
  closeVideo: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        openApply: () => setIsApplyOpen(true),
        closeApply: () => setIsApplyOpen(false),
        openVideo: () => setIsVideoOpen(true),
        closeVideo: () => setIsVideoOpen(false),
      }}
    >
      {children}
      <ApplyModal isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
