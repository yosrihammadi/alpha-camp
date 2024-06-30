import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/uikit/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      transparent: "transparent",
      black: "#000000",
      red: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
        950: "#450a0a",
      },
      green: {
        50: "#829b88",
        100: "#6e8c75",
        200: "#5b7c63",
        300: "#476d51",
        400: "#345e40",
        500: "#345e40",
        600: "#2c5136",
        700: "#24442d",
        800: "#1c3724",
        900: "#152b1b",
        950: "#090B0A",
      },
      blue: {
        700: "#4B5563",
        800: "#3B3C4A",
        900: "#242535",
      },
      gray: {
        50: "#FCFCFD",
        100: "#DFDFE6",
        200: "#E3E8E7",
        300: "#97989F",
        400: "#9D9D9D",
        500: "#828282",
        600: "#555555",
        700: "#222624",
        800: "#393939",
      },
    },
    fontFamily: {
      inter: ["inter", "sans-serif"],
      inika: ["inika", "sans-serif"],
      jakarta: ["Plus Jakarta Sans", "sans-serif"],
      work: ["Work Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
export default config;
