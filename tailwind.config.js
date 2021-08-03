/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
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
        'heading-dark': '#edf2f7',
        'heading-light': '#2d3748',
        'text-light': '#718096',
        'text-dark': '#cbd5e0',
        'header-dark': '#2d3748',
        'omega-dark': '#718096',
        'omega-light': '#e2e8f0',
        'body-light': '#f8f8f8',
        'body-dark': '#1a202c',
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
    container: {
      center: true,
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }
      },
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
