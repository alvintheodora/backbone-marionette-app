const path = require('path');

module.exports = {
  entry: './src/index.js',
  devServer: {
      contentBase: './dist',
      historyApiFallback: true//for SPA
    },
  mode: 'development',
  module: {
    rules: [
      {
          test: /\.html$/,
          exclude: /node_modules/,
          use: {loader: 'html-loader'}
      }
  ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};