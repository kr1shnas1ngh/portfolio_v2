/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#191819',
        cardBackground: '#30373B',
        text1: '#FFFEFE',
        text2: '#BBBBBB',
         // Corrected color code
        primary1: '#07beb8',
      },
      fontSize: {
        small: '0.875rem',
        medium: '1rem', // Corrected key name
        subHeading: '1.25rem',
        heading: '2rem',
        heroHeading: '3rem',
      },
      fontFamily: {
        text1: ['inter', 'sans-serif'],
        text2: ['Oxanium', 'inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
