"use client";

import React from "react";
import HeroSlideshow from "@/components/home/HeroSlideshow";
import StatsStrip from "@/components/home/StatsStrip";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import CampusGallery from "@/components/home/CampusGallery";
import TestimonialMarquee from "@/components/home/TestimonialMarquee";
import { useModal } from "@/context/ModalContext";

export default function HomePage() {
  const { openApply, openVideo } = useModal();

  return (
    <>
      <HeroSlideshow onOpenApply={openApply} onOpenVideo={openVideo} />
      <StatsStrip />
      <FeaturesGrid />
      <CampusGallery />
      <TestimonialMarquee />
    </>
  );
}
