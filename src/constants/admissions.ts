import { AdmissionStep } from "@/types";

export interface GradeTierItem {
  tier: string;
  grades: string;
  age: string;
  focus: string;
  highlights: string[];
  intakeStatus: string;
}

export interface ScholarshipItem {
  title: string;
  concession: string;
  criteria: string;
  description: string;
  badge: string;
}

export interface DocumentItem {
  number: string;
  title: string;
  requirement: string;
  detail: string;
  mandatory: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const ADMISSION_STEPS: AdmissionStep[] = [
  {
    step: 1,
    title: "Online Application",
    tagline: "Digital Registration",
    tag: "15 Mins",
    description:
      "Submit candidate details, previous academic transcripts, and personal statement via our streamlined portal.",
    image: "/assets/admission_step1_cutout.png",
    icon: "file-text",
    highlights: [
      "Online Document Upload",
      "Instant Application Tracking ID",
      "Dedicated Admissions Counselor",
    ],
  },
  {
    step: 2,
    title: "Entrance Assessment",
    tagline: "Aptitude & Diagnostic",
    tag: "Standardized",
    description:
      "Comprehensive diagnostic covering analytical aptitude, English reading comprehension, and mathematics.",
    image: "/assets/admission_step2_cutout.png",
    icon: "clipboard-check",
    highlights: [
      "Age-Appropriate Diagnostics",
      "Cognitive Reasoning Review",
      "Prompt Evaluation Feedback",
    ],
  },
  {
    step: 3,
    title: "Personal Interview",
    tagline: "Dean & Faculty Dialogue",
    tag: "Candidate Fit",
    description:
      "Interactive conversational session with the Academic Board and counseling panel to align student aspirations.",
    image: "/assets/admission_step3_cutout.png",
    icon: "users",
    highlights: [
      "Dean of Admissions Meeting",
      "Student Passions & Goals Dialog",
      "Interactive Campus Walkthrough",
    ],
  },
  {
    step: 4,
    title: "Offer & Enrollment",
    tagline: "Welcome & Induction",
    tag: "Formal Acceptance",
    description:
      "Receive formal letter of admission, scholastic welcome packet, and finalize grade tier onboarding.",
    image: "/assets/admission_step4_cutout.png",
    icon: "award",
    highlights: [
      "Official Offer Letter & Kit",
      "House & Mentor Allocation",
      "New Scholar Induction Day",
    ],
  },
];


export const GRADE_TIERS: GradeTierItem[] = [
  {
    tier: "Early Years (Foundational)",
    grades: "Pre-K to Kindergarten",
    age: "3 to 5 Years",
    focus: "Sensory Inquiry, Phonics & Socialization",
    highlights: [
      "Reggio Emilia & Montessori inspired learning playrooms",
      "1:8 Educator-child ratio with nurturing caretakers",
      "Gross motor development & sensorial play zones",
    ],
    intakeStatus: "Rolling Admissions Open",
  },
  {
    tier: "Primary Wing",
    grades: "Grades 1 to 5",
    age: "6 to 10 Years",
    focus: "Conceptual Foundations & Creative Arts",
    highlights: [
      "Singapore Math & Cambridge Primary English framework",
      "Introductory Coding & Robotics from Grade 2",
      "Compulsory vocal music, theatre, and swimming",
    ],
    intakeStatus: "Limited Seats Available",
  },
  {
    tier: "Middle School",
    grades: "Grades 6 to 8",
    age: "11 to 13 Years",
    focus: "Analytical Inquiry & STEM Exploration",
    highlights: [
      "Integrated laboratory science & design thinking",
      "Model United Nations & public debate forums",
      "Competitive inter-house leagues across 8 sports",
    ],
    intakeStatus: "Entrance Exam Required",
  },
  {
    tier: "Senior Secondary",
    grades: "Grades 9 to 12",
    age: "14 to 17 Years",
    focus: "University Prep & Specialized Streams",
    highlights: [
      "Choice of CBSE & Cambridge IGCSE / A-Levels",
      "Science (PCM/PCB), Commerce, and Humanities tracks",
      "Dedicated Ivy League & SAT/NEET career guidance cell",
    ],
    intakeStatus: "Merit Assessment Track",
  },
];

export const SCHOLARSHIPS: ScholarshipItem[] = [
  {
    title: "Chairman's Academic Merit Fellowship",
    concession: "Up to 100% Tuition Waiver",
    criteria: "Score ≥95% in Annual Aptitude Test or Board Examinations",
    description:
      "Awarded annually to prodigies demonstrating unprecedented scholarly excellence and intellectual promise across STEM and Humanities.",
    badge: "Academic Honor",
  },
  {
    title: "Elite Athlete & Arts Endowment",
    concession: "50% Tuition Concession",
    criteria: "State or National Level Medalist / Distinction in Performing Arts",
    description:
      "Supports budding champions representing the state/nation in recognized Olympic sports, symphony orchestras, or national fine arts.",
    badge: "Talent Distinction",
  },
  {
    title: "Sibling & Defense Services Grant",
    concession: "15% - 25% Fee Privilege",
    criteria: "Second child enrolled or children of active/veteran armed forces",
    description:
      "Honoring our defense service families and encouraging lifelong family association with St. Jude's Academy.",
    badge: "Community Grant",
  },
];

export const DOCUMENT_CHECKLIST: DocumentItem[] = [
  {
    number: "01",
    title: "Official Birth Certificate",
    requirement: "Original & 2 Attested Copies",
    detail: "Issued by the Municipal Corporation or competent diplomatic embassy for overseas nationals.",
    mandatory: true,
  },
  {
    number: "02",
    title: "Prior Academic Transcripts",
    requirement: "Past 2 Academic Years",
    detail: "Certified mark sheets and progress reports from the candidate's previous educational institution.",
    mandatory: true,
  },
  {
    number: "03",
    title: "Original Transfer Certificate (TC)",
    requirement: "Counter-Signed by Board / DEO",
    detail: "Mandatory for admissions into Grade 2 and above; must be submitted before formal induction.",
    mandatory: true,
  },
  {
    number: "04",
    title: "Child & Guardian Photographs",
    requirement: "6 Passport-sized (White BG)",
    detail: "Recent color photographs of the student and 2 each of mother, father, and legal guardian.",
    mandatory: true,
  },
  {
    number: "05",
    title: "Comprehensive Health & Immunization Record",
    requirement: "Certified by Registered Pediatrician",
    detail: "Blood group record, allergy reports, and updated vaccination chart as per national medical schedule.",
    mandatory: true,
  },
  {
    number: "06",
    title: "Proof of Residential Address",
    requirement: "Self-Attested Copy",
    detail: "Valid Passport, Aadhaar Card, Electricity Bill, or registered Lease Agreement in parents' name.",
    mandatory: true,
  },
];

export const ADMISSION_FAQS: FAQItem[] = [
  {
    question: "What is the student-to-teacher ratio at St. Jude's Academy?",
    category: "Academics",
    answer:
      "We strictly adhere to a 1:12 ratio in foundational Early Years and 1:18 across Primary and Secondary classes. This guarantees personalized academic mentorship, customized attention, and continuous progress tracking for every single student.",
  },
  {
    question: "Do you offer air-conditioned bus transport with GPS tracking?",
    category: "Facilities",
    answer:
      "Yes. Our academy operates a modern fleet of 35+ air-conditioned buses covering all major residential sectors across the metropolitan region. Every bus is equipped with real-time GPS tracking accessible via our parent mobile app, speed governors, CCTV cameras, and trained female attendants.",
  },
  {
    question: "Can students choose between CBSE and Cambridge curricula?",
    category: "Curriculum",
    answer:
      "From Pre-K to Grade 8, our curriculum blends CBSE foundations with Cambridge inquiry pedagogy. For Grades 9 to 12, parents and students choose between the CBSE Senior Secondary Board Certificate or the Cambridge International IGCSE and A-Levels, supported by our college counseling team.",
  },
  {
    question: "What is the syllabus and format for the entrance assessment?",
    category: "Evaluation",
    answer:
      "The entrance assessment evaluates age-appropriate aptitude in English reading comprehension, mathematical reasoning, and logical problem-solving. It is not an intimidation test, but a diagnostic tool to assess conceptual readiness and ensure proper grade placement.",
  },
  {
    question: "Are day-boarding and meals available at the campus?",
    category: "Campus Life",
    answer:
      "Yes! We offer Extended Day Boarding until 5:30 PM for Grades 3 to 12. This program includes supervised prep and homework assistance, specialized coaching across sports and performing arts, and a nutritious afternoon meal curated by certified pediatric nutritionists.",
  },
  {
    question: "What is the fee payment schedule and refund policy?",
    category: "Finance",
    answer:
      "Tuition fees are structured into four equal quarterly installments. All fee heads are completely transparent with zero hidden capitation charges. Tuition covers digital LMS subscriptions, laboratory consumables, regular sports coaching, and library access.",
  },
];

