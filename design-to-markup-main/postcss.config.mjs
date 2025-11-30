/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    'postcss-preset-env': {
      stage: 2,
      features: {
        'custom-properties': false,
        'nesting-rules': true,
        'custom-media-queries': true,
      }
    },
  },
};

export default config;
