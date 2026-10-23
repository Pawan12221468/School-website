export interface HeroSlide {
  image: string;
  badge: string;
  title: string;
  description: string;
}

export interface StatItem {
  number: string;
  label: string;
}

export interface FeatureItem {
  icon: string;
  tagline: string;
  title: string;
  desc: string;
  image: string;
  tag: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  stars: number;
}

export interface GalleryItem {
  title: string;
  image: string;
  isTall?: boolean;
}

export interface MilestoneItem {
  year: string;
  title: string;
  description: string;
}

export interface AdmissionStep {
  step: number;
  title: string;
  description: string;
  tagline?: string;
  tag?: string;
  image?: string;
  icon?: string;
  highlights?: string[];
  duration?: string;
}

