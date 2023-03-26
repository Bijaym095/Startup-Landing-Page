/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: "class",

  theme: {
    container: { center: true },

    screens: {
      sm: "480px",
      md: "769px",
      lg: "1025px",
      xl: "1201px",
    },

    fontFamily: {
      body: ["Inter", "sans-serif"],
    },

    extend: {
      colors: {
        primary: "rgb(74, 108, 247)",
        secondary: "rgba(9, 14, 52)",
        darkblue: "#090E34",
      },
    },
  },

  plugins: [],
};
