import type { Config } from "tailwindcss";

export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        purple: "#7469B6",
        purplerMedium: "#9f8efa",
        purpleLight: "#EEF1FF",
        pink: "#E95793",
        pinkLight: "#FFE6EB",
        blueLight: "#C4EBF5",
        red: "#FF8080",
      },
    },
  },
  plugins: [],
} satisfies Config;
