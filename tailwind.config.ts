import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#383637",
        terracotta: "#B1694F",
        sand: "#DFD1B7",
        olive: "#847E42",
        platinum: "#EFEFEF",
        // Existing class names used across the site — mapped to Tom's palette
        brandDark: "#383637",
        brandLight: "#EFEFEF",
        accent: "#B1694F",
        creamCard: "#DFD1B7",
      },
      fontFamily: {
        // Libre Baskerville — hero-level editorial headlines only
        editorial: [
          "var(--font-editorial)",
          "Libre Baskerville",
          "ui-serif",
          "Georgia",
          "serif",
        ],
        serif: [
          "var(--font-editorial)",
          "Libre Baskerville",
          "ui-serif",
          "Georgia",
          "serif",
        ],
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
