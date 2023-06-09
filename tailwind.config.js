/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syncopateB: ["SyncopateB"],
        syncopateL: ["SyncopateL"],
        ralewayR: ["RalewayR"],
        ralewayL: ["RalewayL"],
      },
      colors: {
        white: "#DEDEDE",
        gray: "#A0A0A0",
        brown: "#211F24",
        purple: "#8832D4",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
