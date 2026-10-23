# St. Jude's Academy - Next.js & Tailwind CSS Website

> **Enterprise-grade, scalable Next.js 14 App Router project styled with Tailwind CSS & TypeScript.**  
> Built with modular component architecture, 100% pixel-perfect design fidelity, Google Fonts, and zero layout shift.

---

## 🚀 How to Run Locally

```bash
# 1. Install dependencies (if not already done)
npm install

# 2. Start the development server
npm run dev

# 3. Open in your browser
http://localhost:3000
```

To build for production:
```bash
npm run build
npm start
```

---

## 📁 Scalable MNC Architecture

```text
educore-school-website/
├── public/
│   └── assets/                     # 6 High-Res campus photography images
│
├── src/
│   ├── app/                        # Next.js App Router (Fast SSR & SEO)
│   │   ├── layout.tsx              # Google Fonts (Outfit & Plus Jakarta Sans), AppShell
│   │   ├── page.tsx                # Main Landing Page (Hero, Stats, Gallery, Marquee)
│   │   ├── about/page.tsx          # About Academy, Vision & Milestones Timeline
│   │   ├── admissions/page.tsx     # 4-Step Process & Application CTA
│   │   ├── contact/page.tsx        # Campus Coordinates & Interactive Inquiry Form
│   │   └── not-found.tsx           # Custom 404 Page
│   │
│   ├── components/                 # Clean Atomic Architecture
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Sticky Nav, Active Links, Mobile Drawer
│   │   │   ├── Footer.tsx          # Multi-column Footer + Newsletter
│   │   │   └── AppShell.tsx        # Global Shell with Centralized Modal Management
│   │   ├── home/
│   │   │   ├── HeroSlideshow.tsx   # Auto-advancing (3.8s) Crossfade Slideshow
│   │   │   ├── StatsStrip.tsx      # Metrics Grid (1500+ Students, 98% Pass Rate)
│   │   │   ├── FeaturesGrid.tsx    # Academic & Labs Cards with Hover Elevation
│   │   │   ├── CampusGallery.tsx   # 3-Column Masonry Gallery with Zoom Effects
│   │   │   └── TestimonialMarquee.tsx # Infinite Continuous Marquee Track
│   │   ├── common/
│   │   │   └── SectionHeading.tsx  # Reusable Heading with Golden Underline Bar
│   │   └── modals/
│   │       ├── ApplyModal.tsx      # Admission Enquiry Form + Submit Feedback
│   │       └── VideoModal.tsx      # YouTube Virtual Campus Tour
│   │
│   ├── constants/                  # Business Data (Zero hardcoding in UI components)
│   │   ├── navigation.ts           # Header links & school metadata
│   │   ├── hero-slides.ts          # Slides text & high-res image references
│   │   ├── stats.ts                # Student, teacher & board pass rate metrics
│   │   ├── features.ts             # Academic excellence features
│   │   ├── testimonials.ts         # Parent, student & alumni reviews
│   │   ├── milestones.ts           # History timeline data
│   │   └── admissions.ts           # 4-step admissions data
│   │
│   ├── context/
│   │   └── ModalContext.tsx        # Centralized modal state (open/close anywhere)
│   │
│   ├── types/
│   │   └── index.ts                # Strict TypeScript data types & interfaces
│   │
│   └── styles/
│       └── globals.css             # Tailwind directives + Marquee keyframes
│
├── tailwind.config.ts              # Exact brand color tokens & font variables
├── tsconfig.json                   # Strict TypeScript compiler options (@/* path alias)
├── next.config.mjs                 # Next.js configuration
├── postcss.config.js               # PostCSS setup
└── package.json                    # Dependencies & scripts (dev, build, start)
```

---

## 🎨 Features
1. **Dynamic Hero Slideshow**: Auto-advancing (3.8s) crossfade slider across 6 high-resolution campus photography slides with indicators.
2. **Stats Strip**: 4-column key metrics highlighting enrollment, educators, years, and pass rates.
3. **Academic Features**: 4 interactive cards with hover transformation and icon rotations.
4. **Campus Life Gallery**: 3-column masonry layout with hover zoom effects.
5. **Community Testimonials**: Infinite horizontal marquee track with star ratings.
6. **Pop-up Modals**:
   - *Apply Now Modal*: Interactive admission inquiry form with state feedback.
   - *Campus Video Modal*: Responsive video tour player.
