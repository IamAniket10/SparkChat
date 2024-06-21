/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#1c1d2c",
        secondary : "#9b10ca"
      }
    },
  },
  plugins: [],
}