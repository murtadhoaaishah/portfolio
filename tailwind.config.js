/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2d98f0",
        ash: "#f2f3f7",
        gray: "#999999",
        gold: "#f9bf3f",
        red: "#ec5453",
        purple: "#a84cb8",
        ligbtBlack: "#000000b3",
        green: "#2fa499",
        darkBlue: "#4054b2",
      },
      backgroundImage: {
        hero: "url('/public/images/IMG_1502.PNG')",
      },
    },
  },
  plugins: [],
};
