const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './app/assets/frontend/main.jsx'
  },
  // devtool: 'eval-source-map', // inline map
  devtool: false, // use SourceMapDevToolPlugin
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].bundle.js.map'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'app/assets/javascripts'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
