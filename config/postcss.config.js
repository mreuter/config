module.exports = {
  plugins: {
    'postcss-modules': {
      generateScopedName: '[local]___[hash:base64:5]',
      webpackHotModuleReloading: true,
    },
    'postcss-font-magician': {},
    'cssnano': {},
    'autoprefixer': {},
  },
};
