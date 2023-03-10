/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: "class",

  theme: {
    container: { center: true },

    extend: {
      colors: {
        primary: "rgb(74, 108, 247)",
        secondary: "rgba(9, 14, 52)",
      },
    },
  },

  plugins: [],
};
