/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        primary:'#f59e0b',
        secondary:'#ec4899'
      }
    },
  },
  plugins: [],
}

