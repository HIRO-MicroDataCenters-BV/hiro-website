// eslint-disable-next-line no-undef
module.exports = {
  plugins: {
    '@csstools/postcss-global-data': {
      files: ['./src/assets/base.css', './src/assets/breakpoints.css'],
    },
    'postcss-custom-media': {},
    'postcss-nesting': {},
  },
};
