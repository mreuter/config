'use strict';

const Fiber = require('fibers');
const path = require('path');
const jsonImporter = require('node-sass-json-importer');
const cssLoaders = require('./css-rules').loaders;

const loaders = function(env, MiniCssExtractPlugin) {
  return [
    {
      loader: 'sass-loader',
      options: {
        importer: jsonImporter()
      },
    },
  ];
};

module.exports = function(env, baseDir, MiniCssExtractPlugin) {
  console.log(path.resolve(baseDir, './src'));
  return {
    test: /\.scss$/,
    include: path.resolve(baseDir, '../src'),
    use: [
      ...cssLoaders(env, MiniCssExtractPlugin),
      ...loaders(env, MiniCssExtractPlugin)
    ]
  };
};
module.exports.loaders = loaders;
