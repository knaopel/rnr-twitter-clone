const webpack = require('webpack');

module.exports = {
  entry: './app/assets/frontend/main.jsx',
  devtool: false,
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: __dirname + '/app/assets/javascripts',
    filename: 'bundle.js'
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
