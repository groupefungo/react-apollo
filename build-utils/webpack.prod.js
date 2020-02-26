const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new Dotenv({
      path: '../../.env.production',
    })
  ],
};
