/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#730B94',
        'secondary': '#6451A9',
        'tertiary': '#FF6565',
        'white': '#FFFFFF',
        'dark': '#403E45',
        'background': '#FF6565',
      },
      fontFamily: {
        sans: ['Titillium', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

