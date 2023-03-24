/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      aa: ["Dancing Script", "cursive"],
      bb: ["Climate Crisis", "cursive"],
      sans: ["Sans Serif"],
    },
    screens: {
      tateti: "900px",
    },
  },
  plugins: [],
};
