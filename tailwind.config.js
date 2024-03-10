/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monument: ["MonumentExtended-Ultrabold", "sans-serif"],
      },
      dropShadow: {
        mainbutton: "0 35px 35px rgba(200, 20, 20, 0.25)",
      },
    },
  },
  plugins: [],
};
