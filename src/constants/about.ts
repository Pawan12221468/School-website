export interface PillarItem {
  icon: string;
  title: string;
  tagline: string;
  description: string;
}

export interface FacilityItem {
  title: string;
  category: string;
  highlight: string;
  description: string;
}

export interface AccreditationItem {
  name: string;
  authority: string;
  year: string;
  badge: string;
}

export const LEADERSHIP_MESSAGE = {
  name: "Dr. Rajeshwar Sharma",
  designation: "Principal & Head of Institution",
  qualifications: "Ph.D. in Educational Pedagogy (Cambridge), M.Ed.",
  image: "/assets/principal_portrait.jpg",
  quote:
    "At St. Jude's Academy, education transcends examinations. Our mission is to ignite the innate spark within every young mind—fostering not just scholarly brilliance, but empathy, resilience, moral courage, and an unquenchable thirst to shape a better tomorrow.",
  tenure: "28+ Years in Educational Leadership",
  highlights: [
    "Pioneered inquiry-based STEM integration across primary & secondary grades",
    "Recipient of the National Educational Leadership Citation (2022)",
    "Published author of 'Educating the Whole Child for the 21st Century'",
  ],
};

export const CORE_PILLARS: PillarItem[] = [
  {
    icon: "BookOpen",
    title: "Academic Rigor & Global Horizons",
    tagline: "Dual CBSE & Cambridge Accreditation",
    description:
      "Combining deep conceptual mastery with international inquiry frameworks, preparing scholars for premier universities worldwide.",
  },
  {
    icon: "Cpu",
    title: "STEM Innovation & Future Tech",
    tagline: "AI, Robotics & Prototyping Labs",
    description:
      "Hands-on coding, robotics engineering, 3D printing, and artificial intelligence tracks embedded into weekly curricula from Grade 4.",
  },
  {
    icon: "Trophy",
    title: "Athletic & Artistic Distinction",
    tagline: "25-Acre Sports Complex & Fine Arts",
    description:
      "Olympic-standard swimming, FIFA turf, indoor badminton courts, alongside symphony orchestras, theatre arts, and creative studios.",
  },
  {
    icon: "Globe",
    title: "Character & Ethical Leadership",
    tagline: "Civic Responsibility & Social Impact",
    description:
      "Nurturing compassionate world citizens through active community service, environmental stewardship, and Model United Nations.",
  },
];

export const CAMPUS_FACILITIES: FacilityItem[] = [
  {
    title: "Heritage Central Library",
    category: "Learning Atrium",
    highlight: "45,000+ Books & Digital JSTOR Pods",
    description:
      "Multi-tier reading spaces, silent research cubicles, and full access to premier international digital periodicals.",
  },
  {
    title: "Next-Gen Science & Biotech Labs",
    category: "Scientific Research",
    highlight: "Physics, Chem, Biology & Space Science",
    description:
      "Ultra-modern apparatus, digital sensors, spectroscopy units, and safety-certified laboratory workstations.",
  },
  {
    title: "Olympic Aquatic & Sports Arena",
    category: "Physical Fitness",
    highlight: "All-Weather Heated Swimming & Turf",
    description:
      "8-lane 50m pool, FIFA-grade football turf, 400m synthetic track, and professional coaching academies.",
  },
  {
    title: "1,200-Seat Grand Auditorium",
    category: "Performing Arts",
    highlight: "Acoustically Treated Theatre Stage",
    description:
      "Equipped with motorized stage rigging, surround sound, and broadcast lighting for dramatics and symphonies.",
  },
  {
    title: "Innovation & Robotics Sandbox",
    category: "Technology",
    highlight: "Drone Prototyping & AI Workstations",
    description:
      "Equipped with laser cutters, micro-controllers, VR simulation headsets, and algorithmic computing servers.",
  },
  {
    title: "Wellness & Child Care Infirmary",
    category: "Health & Nutrition",
    highlight: "Full-Time Pediatricians & Nutritionists",
    description:
      "Equipped medical center with dedicated ambulance, registered nurses, and organic cafeteria meals.",
  },
];

export const ACCREDITATIONS: AccreditationItem[] = [
  {
    name: "Central Board of Secondary Education",
    authority: "Affiliation No. 2130894",
    year: "Since 1998",
    badge: "All-India Top Tier",
  },
  {
    name: "Cambridge Assessment International",
    authority: "Centre Code: IN892",
    year: "Since 2011",
    badge: "IGCSE & A-Levels",
  },
  {
    name: "British Council International School",
    authority: "Excellence in Global Pedagogy",
    year: "Awarded 2023",
    badge: "Global Dimension",
  },
  {
    name: "National Green School Gold Certification",
    authority: "Centre for Science & Environment",
    year: "Consecutive 5 Years",
    badge: "Zero-Carbon Campus",
  },
];
