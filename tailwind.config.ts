import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brandDark: "#1a1a1a",
        brandLight: "#FAFAF8",
        accent: "#c0392b",
        creamCard: "#f5f3ee",
      },
      fontFamily: {
        serif: [
          "var(--font-display)",
          "ui-serif",
          "Georgia",
          "serif",
        ],
        display: [
          "var(--font-display)",
          "ui-serif",
          "Georgia",
          "serif",
        ],
        sans: ['"DM Sans"', "ui-sans-serif", "system-ui", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

