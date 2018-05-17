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
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
  ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};