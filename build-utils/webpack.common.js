const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              "@babel/preset-react",
              "@babel/preset-env"
            ]
          }
        }
      },
      {
        test: /\.(scss)$/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ]
      }

    ]
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx', '.scss']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hello Webpack bundled JavaScript Project',
      template: './src/index.html'
    })
  ],
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    publicPath: '/',
    filename: 'Container.tsx'
  },
  devServer: {
    contentBase: './dist'
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
  }
};