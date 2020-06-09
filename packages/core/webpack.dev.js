const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './', 'dist'),
    publicPath: '/',
    filename: 'index.js'
  },
  devServer: {
    contentBase: './dist'
  },
  devtool: 'source-map',
};