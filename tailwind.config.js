/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      gold: "#ffb400",
      green: "#0fb223",
      black: "black",
      white: "white",
      transparent: "transparent",
    },
  },
  plugins: [],
};
