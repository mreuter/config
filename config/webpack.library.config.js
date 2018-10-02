'use strict';

const path = require('path');
const babelRules = require('./webpack/babel-rules');
const nodeExternals = require('webpack-node-externals');

module.exports = function(baseDir) {
  return function(env = 'production') {
    return {
      mode: env,
      cache: env === 'development',
      entry: './src/index.js',
      context: path.resolve(baseDir, '..'),
      output: {
        library: Symbol(), // force error message
        libraryTarget: env === 'development' ? 'umd' : 'commonjs2',
        path: path.resolve(baseDir, '../lib'),
        filename: 'index.js',
      },
      module: {
        strictExportPresence: true,
        rules: [
          babelRules(env, baseDir),
        ],
      },
      externals: [nodeExternals({modulesFromFile: true, importType: env === 'development' ? 'umd' : 'commonjs2'})],
      devtool: env === 'development' ? 'eval-source-map': undefined,
    };
  };
};
