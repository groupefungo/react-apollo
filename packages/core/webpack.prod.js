const path = require('path');

module.exports = {
  entry: './index.tsx',
  output: {
    path: path.resolve(__dirname, './', 'dist'),
    publicPath: '/',
    filename: 'Container.tsx'
  },
  devServer: {
    contentBase: './dist'
  },
};