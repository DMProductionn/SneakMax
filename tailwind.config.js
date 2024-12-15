/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#484283',
        'red': '#F14F4F',
        'gray': '#444B58',
        'gray-light': '#B2B5BB', 
        'brown': '#DBBBA9',
        'brown-light': '#FFF4EE',
      },
    },
  },
  plugins: [],
}