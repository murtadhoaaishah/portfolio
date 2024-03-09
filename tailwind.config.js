/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroungImage: {
        hero: "/public/images/IMG_1502.jpg",
      },
    },
  },
  plugins: [],
};
