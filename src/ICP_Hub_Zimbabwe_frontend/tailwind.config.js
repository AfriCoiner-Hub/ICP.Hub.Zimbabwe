/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
        'tallscreen': { 'raw': '(min-aspect-ratio: 1/2)' },
      },
      colors: {
        'blacky': '#250b60',
        'bluey': '#3433fc',
        'dark': '#1a0936',
        'blu': '#b25ffb',
        'goldy': '#f5b0aa',
        'blu2': '#3c127a'
      }
    },
  },
  plugins: [],
}