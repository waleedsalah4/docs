import { createPreset } from "fumadocs-ui/tailwind-plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./mdx-components.{ts,tsx}",
    "./node_modules/fumadocs-ui/dist/**/*.js",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        inter: "var(--inter)",
      },
      keyframes: {
        modal: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
      },
      colors: {},
      animation: {
        modal: "modal 200ms ease-in-out",
      },
    },
  },
  // plugins: [require("tailwindcss-animate")],
  presets: [
    createPreset({
      preset: "vitepress",
      addGlobalColors: true,
    }),
  ],
};
