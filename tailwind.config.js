/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
      },
      colors: {
        blue: "#2d98f0",
        ash: "#f2f3f7",
        gray: "#999999",
        gold: "#f9bf3f",
        red: "#ec5453",
        purple: "#a84cb8",
        ligbtBlack: "#4c4c4c",
        green: "#2fa499",
        darkBlue: "#4054b2",
        ash: "#f2f3f7",
      },
    },
  },
  plugins: [],
};
