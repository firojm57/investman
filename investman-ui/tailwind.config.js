const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        primary: 'var(--primary)',
        default: 'var(--text-default)',
        secondary: 'var(--text-secondary)',
      },
      backgroundColor: {
        primary: 'var(--primary)',
        default: 'var(--bg-default)',
        secondary: 'var(--bg-secondary)',
      },
      borderColor: {
        primary: 'var(--primary)',
        default: 'var(--bg-default)',
        secondary: 'var(--bg-secondary)',
      }
    },
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
