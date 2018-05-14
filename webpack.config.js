const path = require('path');

module.exports = {
  entry: './src/index.js',
  devServer: {
      contentBase: './dist'
    },
    mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};