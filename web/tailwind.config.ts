import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nineties: ["var(--font-nineties)"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      colors: {
        atlas: {
          dark: "#1a1a1a",
          charcoal: "#2c2c2c",
          cream: "#ecece3",
          gray: "#555555",
          muted: "#888888",
        },
      },
    },
  },
  plugins: [],
};

export default config;
