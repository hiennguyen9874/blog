module.exports = {
  plugins: [
    'tailwindcss',
    'autoprefixer',
    'postcss-preset-env',
    'postcss-import',
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
  ],
};
