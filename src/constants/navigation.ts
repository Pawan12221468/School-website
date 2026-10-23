export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

export const SCHOOL_INFO = {
  name: "St. Jude's Academy",
  address: "123 Academic Lane, Knowledge Park, Excellence State, 56789",
  phone: "+1 (234) 567-890",
  secondaryPhone: "+1 (234) 567-891",
  email: "admissions@stjudes.edu",
  generalEmail: "info@stjudes.edu",
  visitingHours: "Admissions Office: Mon - Fri, 8 AM - 4 PM",
};
