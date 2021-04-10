const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layouts/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Mono', 'sans-serif']
    },
  },
  variants: {
    typography: ['dark']
  },
  plugins: [require('@tailwindcss/typography')]
}