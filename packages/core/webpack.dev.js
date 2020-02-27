const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './', 'dist'),
    publicPath: '/',
    filename: 'Container.js'
  },
  devServer: {
    contentBase: './dist'
  },
};