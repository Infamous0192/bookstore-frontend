import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#FBFBFB",
          200: "#EAEAEA",
          300: "#DFDFDF",
          400: "#999999",
          500: "#7F7F7F",
          600: "#666666",
          700: "#4C4C4C",
          800: "#333333",
          900: "#191919",
        },
        blue: {
          100: "#E6F0FD",
          200: "#CCE2FC",
          300: "#99C5FA",
          400: "#66A9F7",
          500: "#338CF5",
          600: "#0070F4",
          700: "#0064DA",
          800: "#0059C2",
          900: "#004391",
        },
        sunglow: {
          DEFAULT: "#FDC830",
          50: "#FFF8E6",
          100: "#FFF3D2",
          200: "#FEE8A9",
          300: "#FEDD81",
          400: "#FDD358",
          500: "#FDC830",
          600: "#F3B402",
          700: "#BB8B02",
          800: "#836201",
          900: "#4C3801",
        },
        teal: {
          100: "#E6FFFA",
          200: "#B2F5EA",
          300: "#81E6D9",
          400: "#4FD1C5",
          500: "#3ABAB4",
          600: "#319795",
          700: "#2C7A7B",
          800: "#285E61",
          900: "#234E52",
        },
      },
      boxShadow: {
        DEFAULT:
          "0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.02)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.02)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.01)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.01)",
      },
      spacing: {
        "9/16": "56.25%",
        "3/4": "75%",
        "1/1": "100%",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.625rem",
        "5xl": "3.25rem",
        "6xl": "5.5rem",
      },
      inset: {
        "1/2": "50%",
        full: "100%",
      },
      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.01em",
        normal: "0",
        wide: "0.01em",
        wider: "0.02em",
        widest: "0.4em",
      },
      lineHeight: {
        none: "1",
        tighter: "1.125",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
        3: ".75rem",
        4: "1rem",
        5: "1.2rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
      },
      screens: {
        xs: "480px",
      },
      minWidth: {
        10: "2.5rem",
        48: "12rem",
        36: "9rem",
        44: "11rem",
        56: "14rem",
        60: "15rem",
        72: "18rem",
        80: "20rem",
      },
      opacity: {
        90: "0.9",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      scale: {
        98: ".98",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5%)" },
        },
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "group-hover"],
    textColor: ["responsive", "hover", "focus", "group-hover"],
    translate: ["responsive", "hover", "focus", "group-hover"],
    boxShadow: ["responsive", "hover", "focus", "focus-within"],
    opacity: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
