const path = require('path');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withPlugins(
  [
    [withBundleAnalyzer],
    [
      optimizedImages,
      {
        responsive: {
          adapter: require('responsive-loader/sharp'),
        },
      },
    ],
  ],
  {
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = {
          fs: 'empty',
        };
      }

      // import svg file as component
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      return config;
    },
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
      domains: [],
    },
  },
);
