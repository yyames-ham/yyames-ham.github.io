import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#c4ad8f ",
        text: "#140c01",
      },
      fontFamily: {
        sans: ["Fira Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
