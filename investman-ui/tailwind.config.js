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
        error: 'var(--text-error)',
      },
      backgroundColor: {
        primary: 'var(--primary)',
        default: 'var(--bg-default)',
        secondary: 'var(--bg-secondary)',
        "input-box": 'var(--bg-input-box)',
      },
      borderColor: {
        primary: 'var(--primary)',
        default: 'var(--border-default)',
        secondary: 'var(--border-secondary)',
      },
      ringColor: {
        primary: 'var(--primary)',
        default: 'var(--bg-default)',
        secondary: 'var(--bg-secondary)',
      },
      gradientColorStops: {
        "light-50": 'var(--gradient-light-50)',
        "light-100": 'var(--gradient-light-100)',
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
