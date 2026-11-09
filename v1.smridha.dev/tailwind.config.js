/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js", "./assets/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        'global-bg': '#1D1F20',
        'global-text': '#c9c9c9'
      },
    },
  },
  plugins: [],
}
