import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
import AppShell from "@/components/layout/AppShell";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "St. Jude's Academy | Excellence in Holistic Education",
  description:
    "Welcome to St. Jude's Academy - empowering future leaders through academic excellence, world-class faculty, and innovative STEM learning.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakartaSans.variable}`}
    >
      <body className="font-sans text-[#1e293b] bg-white antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
