'use strict';

const path = require('path');

const loaders = function(env, MiniCssExtractPlugin) {
  return [
    env === 'production'
      ? {
        loader: MiniCssExtractPlugin.loader,
      }
      : 'style-loader',
    {
      loader: 'css-loader',
      options: {
        importLoader: 1,
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        config: {
          path: './config/'
        },
      },
    },
  ];
};

module.exports = function(env, baseDir, MiniCssExtractPlugin) {
  return {
    test: /\.css$/,
    include: path.resolve(baseDir, '../src'),
    use: loaders(env, MiniCssExtractPlugin)
  };
};
module.exports.loaders = loaders;
