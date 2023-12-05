/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#ffb400",
        green: "#0fb223",
        gray1: "#828282",
        gray2: "#88807B",
        black: "#112020",
        white: "#f8f8f8",
        transparent: "transparent",
        sunlight: "#F2D855",
        clay: "#b0582c",
        aqua: "#73e5bf",
        sage: "#c3d9cd",
      },
    },
  },
  plugins: [],
};
