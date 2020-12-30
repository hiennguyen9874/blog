const defaultSans = [
  'system-ui',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  '"Noto Sans"',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
  '"Noto Color Emoji"',
];

const defaultSerif = [
  'Georgia',
  'Cambria',
  '"Times New Roman"',
  'Times',
  'serif',
];

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
      display: ['Open Sans', ...defaultSans],
      body: ['Merriweather', ...defaultSerif],
    },
  },
  plugins: [require('@tailwindcss/typography')],
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
};
