const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

function withOpacity(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}

module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.ts"
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        primary: withOpacity('--primary'),
        default: withOpacity('--text-default'),
        component: withOpacity('--bg-component'),
        muted: withOpacity('--text-muted'),
        error: withOpacity('--text-error'),
        danger: withOpacity('--text-danger'),
        safe: withOpacity('--text-safe'),
        info: withOpacity('--text-info'),
        warn: withOpacity('--text-warn'),
      },
      backgroundColor: {
        primary: withOpacity('--primary'),
        default: withOpacity('--bg-default'),
        component: withOpacity('--bg-component'),
        danger: withOpacity('--bg-danger'),
        safe: withOpacity('--bg-safe'),
        info: withOpacity('--bg-info'),
        warn: withOpacity('--bg-warn'),
      },
      borderColor: {
        primary: withOpacity('--primary'),
        default: withOpacity('--border-default'),
      },
      divideColor: {
        primary: withOpacity('--primary'),
        default: withOpacity('--border-default'),
      },
      ringColor: {
        primary: withOpacity('--primary'),
        default: withOpacity('--bg-default'),
        component: withOpacity('--bg-component'),
      },
      boxShadowColor: {
        primary: withOpacity('--primary'),
        default: withOpacity('--bg-default'),
        component: withOpacity('--bg-component'),
        danger: withOpacity('--bg-danger'),
        safe: withOpacity('--bg-safe'),
        info: withOpacity('--bg-info'),
        warn: withOpacity('--bg-warn'),
      },
      stroke: {
        primary: withOpacity('--primary'),
        default: withOpacity('--bg-default'),
        component: withOpacity('--bg-component'),
        danger: withOpacity('--bg-danger'),
        safe: withOpacity('--bg-safe'),
        info: withOpacity('--bg-info'),
        warn: withOpacity('--bg-warn'),
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      red: colors.red,
      yellow: colors.amber,
      gray: colors.gray,
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
        'Poppins',
        'sans-serif',
        'system-ui',
        '-apple-system'
      ]
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
        'h4': { fontSize: theme('fontSize.base') },
        'h5': { fontSize: theme('fontSize.sm') },
        'h6': { fontSize: theme('fontSize.xs') },
      })
    })
  ],
}
