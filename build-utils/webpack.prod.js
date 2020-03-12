const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/Container.tsx',
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new Dotenv({
      path: '../../.env.production',
    })
  ],
};
