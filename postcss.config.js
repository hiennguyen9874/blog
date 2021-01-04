module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss',
    [
      'postcss-preset-env',
      {
        stage: 1,
      },
    ],
    'postcss-nested',
    'postcss-custom-properties',
    'autoprefixer',
  ],
};
