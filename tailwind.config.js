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
      gray1: "#828282",
      gray2: "#88807B",
      black: "black",
      white: "white",
      transparent: "transparent",
    },
  },
  plugins: [],
};
