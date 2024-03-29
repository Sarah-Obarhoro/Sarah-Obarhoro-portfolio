/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#020D19",
        blue: "#C1CFDA",
        gold: "#F5C014",
      },
      fontFamily: {
        dancingScript: ["Dancing Script", "cursive"],
        playFair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};

