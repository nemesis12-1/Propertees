/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1A202C',
        primary: '#6366F1',

      },

      fontFamily: {
        'Raleway': ['Raleway', 'sans-serif'],
        'Manrope': ['Manrope', 'sans-serif']
      },
    },
  },
  plugins: [],
}