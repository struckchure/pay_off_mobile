/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#721DB4",
          200: "#5D0A9D",
          300: "#DFC2F8",
          400: "#F1E9F8",
        },
        secondary: {
          100: "#FBBC05",
        },
      },
      fontFamily: {
        "space-mono": ["SpaceMono-Bold"],
        "space-mono-regular": ["SpaceMono-Regular"],
        "space-mono-italic": ["SpaceMono-Italic"],
      },
    },
  },
  plugins: [],
};
