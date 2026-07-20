import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#252626",
        terracotta: "#B94E30",
        sand: "#E1D4C0",
        olive: "#847E42",
        platinum: "#EFEFEF",
        // Existing class names used across the site — mapped to brand Colour Palette
        brandDark: "#252626",
        brandLight: "#EFEFEF",
        accent: "#B94E30",
        creamCard: "#E1D4C0",
      },
      fontFamily: {
        // Brand typography sheet: Inter only (Bold / Medium / Regular)
        editorial: [
          "var(--font-inter)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        serif: [
          "var(--font-inter)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
