import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          dark: "#07172b",
          stats: "#112038",
          footer: "#07172b",
          card: "#0b1524",
          hover: "#112540",
        },
        amber: {
          brand: "#ffaa3b",
          hover: "#f59e0b",
        },
        text: {
          heading: "#0f172a",
          dark: "#1e293b",
          muted: "#64748b",
          light: "#475569",
        },
        surface: {
          light: "#f8fafc",
          border: "#e2e8f0",
          cardBorder: "#e8ecef",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        heading: ["var(--font-outfit)", "var(--font-plus-jakarta)", "sans-serif"],
      },
      maxWidth: {
        container: "1240px",
      },
      borderRadius: {
        sm: "6px",
        md: "12px",
        lg: "16px",
      },
      animation: {
        marquee: "marqueeContinuous 35s linear infinite",
      },
      keyframes: {
        marqueeContinuous: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-50% - 12px))" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
