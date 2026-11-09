/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*/index.html", "./src/**/*.mjs", "./assets/js/*.js"],
  theme: {
    extend: {
      colors: {
        "global-bg": "#1D1F20",
        "global-text": "#c9c9c9",
        surface: "#212326",
        accent: "#2abc89",
      },
    },
  },
  plugins: [],
};
