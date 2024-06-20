import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      transparent: "transparent",
      black: "#000000",
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
      },
      blue: {
        800: "#4B5563",
        900: "#3B3C4A",
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
      },
    },
    fontFamily: {
      inter: ["inter", "sans-serif"],
      inika: ["inika", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
export default config;