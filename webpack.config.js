const path = require('path');
let SRC_DIR = path.join(__dirname, "src");
let WWW_DIR = path.join(__dirname, "www");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  context: SRC_DIR,
  entry: [
    './main', './stylesheets/application.scss'
  ],
  output: {
    path: WWW_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
    ],
  },
  plugins: [
      new ExtractTextPlugin({
          filename: './bundle.css',
          allChunks: true
      })
  ],
  resolve: {
    extensions: ['.js', '*'],
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};