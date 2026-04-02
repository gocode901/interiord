/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        luxe: {
          cream: "#F7F3ED",
          sand: "#E8DDCF",
          gold: "#B08B57",
          charcoal: "#111111",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["'Playfair Display'", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 12px 30px rgba(17,17,17,0.08)",
      },
    },
  },
  plugins: [],
};

