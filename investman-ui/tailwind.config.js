const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    "./src/**/*.html",
    "./src/**/*.ts"
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      red: colors.red,
      yellow: colors.amber,
      gray: colors.gray,
      yellow: colors.amber,
      green: colors.emerald,
      teal: colors.teal,
      blue: colors.indigo,
      cyan: colors.cyan,
      purple: colors.purple,

      primary: colors.sky,
      secondary: colors.yellow,
      neutral: colors.gray,
      white: '#fff',
      black: '#000',
    },
    fontFamily: {
      sans: [
        'Quicksand',
        'Inter',
        '"Open Sans"',
        'system-ui',
        '-apple-system',
        'sans-serif'
      ]
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
