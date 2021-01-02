/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const defaultTheme = require('tailwindcss/defaultTheme');

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
        OxfordBlue: '#2D3748',
        Mirage: '#1A202C',
        Alabaster: '#F8F8F8',
        'neon-orange': '#f92300',
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
      serif: ['Fira Sans', ...defaultTheme.fontFamily.serif],
      mono: ['Fira Sans', ...defaultTheme.fontFamily.mono],
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
