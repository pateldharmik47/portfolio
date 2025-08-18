/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: { "2xl": "1280px" }
      },
      boxShadow: {
        soft: "0 10px 25px -10px rgba(0,0,0,0.25)"
      }
    },
  },
  plugins: [],
};
