/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    mode: 'all',
    content: [
      './components/**/*.{js,ts,jsx,tsx,css}',
      './pages/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      safelist: { deep: [/blur$/] },
    },
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        blueGray: colors.blueGray,
        coolGray: colors.coolGray,
        cyan: colors.cyan,
        lightBlue: colors.lightBlue,
      },
      fontSize: {
        '7xl': '4.5rem',
      },
      spacing: {
        14: '3.375rem',
      },
    },
    fontFamily: {
      san: ['Fira Sans', ...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss'),
    require('precss'),
    require('autoprefixer'),
  ],
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
};
