/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#B6CDCF',
        'custom-pink': '#D09081',
      },
      fontFamily: {
        'bodoni': ['Bodoni Moda SC', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'], // Example for Montserrat
      },
    },
  },
  plugins: [],
};