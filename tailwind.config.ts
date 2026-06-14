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
        void: "#0a0700",
        deep: "#111008",
        surface: "#111008",
        cream: "#e8dcc8",
        gold: "#c8a84b",
        "gold-bright": "#d4b85a",
        "india-blue": "#003b7e",
        "cricket-red": "#c0392b",
        "field-green": "#1a4a2a",
        "card-gold": "#b8860b",
        "card-blue": "#1b3a6b",
        "card-red": "#8b1a1a",
        primary: "#e8dcc8",
        secondary: "rgba(232, 220, 200, 0.65)",
        muted: "rgba(232, 220, 200, 0.4)",
        electric: "#c8a84b",
        alert: "#c0392b",
        error: "#c0392b",
        success: "#1a4a2a",
        warning: "#c8a84b",
        pitch: "#0a0700",
        navy: "#0a0700",
        "off-white": "#e8dcc8",
        raised: "#111008",
        "glass-border": "rgba(232, 220, 200, 0.15)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Barlow Condensed", "sans-serif"],
        heading: ["var(--font-display)", "Barlow Condensed", "sans-serif"],
        body: ["var(--font-body)", "DM Sans", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
        accent: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      animation: {
        ticker: "ticker 40s linear infinite",
        "float-y": "float-y 3s ease-in-out infinite",
        "pulse-arrow": "pulse-arrow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
