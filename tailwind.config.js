/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        campaign: {
          blue: "#173657",
          "blue-dark": "#0f2440",
          red: "#CE1F36",
          "red-dark": "#ad162a",
        },
      },
    },
  },
  plugins: [],
};
