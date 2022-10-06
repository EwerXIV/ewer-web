/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx,css,html}'
  ],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif']
    },
    extend: {
      colors: {
        'brand': '#052c47',
        'brand-bg': '#032338',
      }
    },
  },
  plugins: [],
}
