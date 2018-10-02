'use strict';

const path = require('path');

module.exports = function(env, baseDir) {
  return {
    // Use babel for javascript
    test: /\.(js|mjs|jsx)$/,
    exclude: /node_modules/,
    include: path.resolve(baseDir, '../src'),
    loader: 'babel-loader',
    query: {
      plugins: [
        '@babel/transform-react-jsx',
        [
          'react-css-modules',
          {
            context: path.resolve(baseDir, '..'),
            generateScopedName: '[local]___[hash:base64:5]',
            "filetypes": {
              ".scss": {
                "syntax": "postcss-scss"
              }
            }
          }
        ]
      ]
    },
  };
};
