const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true,
    content: [
      "./src/**/*.html",
      "./src/**/*.ts"
    ]
  },
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
        "secondary-soft": 'var(--bg-secondary-soft)',
      },
      borderColor: {
        primary: 'var(--primary)',
        default: 'var(--bg-default)',
        secondary: 'var(--bg-secondary)',
        "secondary-soft": 'var(--bg-secondary-soft)',
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
      sky: colors.sky,
      purple: colors.purple,
      white: '#ffffff',
      black: '#000000'
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
