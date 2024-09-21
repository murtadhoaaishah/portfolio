/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2d98f0",
        ash: "#f2f3f7",
        gray: "",
      },
      backgroundImage: {
        hero: "url('/public/images/IMG_1502.PNG')",
      },
    },
  },
  plugins: [],
};
