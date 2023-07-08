import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  // Files to exclude
  exclude: [],

  conditions: {
    lightMode: "[data-color-mode=light] &",
    darkMode: "[data-color-mode=dark] &",
  },
  // Useful for theme customization
  theme: {
    // SEE: panda css default theme configurations
    // https://panda-css.com/docs/customization/theme
    extend: {
      breakpoints: {
        "3xl": "1920px",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
    },
    tokens: {
      spacing: {
        "1px": { value: "0.0625rem" },
        "0px": { value: "0rem" },
        "2px": { value: "0.125rem" },
        "4px": { value: "0.25rem" },
        "8px": { value: "0.5rem" },
        "16px": { value: "1rem" },
        "24px": { value: "1.5rem" },
        "32px": { value: "2rem" },
        "40px": { value: "2.5rem" },
        "48px": { value: "3rem" },
        "56px": { value: "3.5rem" },
        "64px": { value: "4rem" },
        "72px": { value: "4.5rem" },
        "80px": { value: "5rem" },
      },
      sizes: {
        "1px": { value: "0.0625rem" },
        "2px": { value: "0.125rem" },
        "4px": { value: "0.25rem" },
        "8px": { value: "0.5rem" },
        "16px": { value: "1rem" },
        "24px": { value: "1.5rem" },
        "32px": { value: "2rem" },
        "40px": { value: "2.5rem" },
        "48px": { value: "3rem" },
        "56px": { value: "3.5rem" },
        "64px": { value: "4rem" },
        "72px": { value: "4.5rem" },
        "80px": { value: "5rem" },
        "120px": { value: "7.5rem" },
        "200px": { value: "12.5rem" },
        "240px": { value: "15rem" },
        "320px": { value: "20rem" },
        "360px": { value: "22.5rem" },
        "400px": { value: "25rem" },
        "480px": { value: "30rem" },
        "560px": { value: "35rem" },
        "640px": { value: "40rem" },
        "720px": { value: "45rem" },
        "800px": { value: "50rem" },
        "960px": { value: "60rem" },
        "1280px": { value: "80rem" },
      },
      colors: {
        primary: {
          value: "#14b8a6",
        },
        // primaryDark: {
        //   value: {
        //     _dark: "colors.teal.700",
        //     _light: "colors.teal.600",
        //   },
        // },
        // primaryLight: {
        //   value: {
        //     _dark: "colors.teal.500",
        //     _light: "colors.teal.400",
        //   },
        // },
      },
    },
  },
  // The output directory for your css system
  outdir: "styled-system",
});
