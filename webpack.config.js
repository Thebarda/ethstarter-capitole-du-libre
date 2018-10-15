/* eslint-disable */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: "cheap-module-source-map",
  entry: [
    "babel-polyfill",
    "./src/index"
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:3000/'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    publicPath: 'http://localhost:3000/',
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    hot: true
  },
  module: {
    rules: [{
      test: /\.md$/,
      loader: "html-loader!markdown-loader?gfm=false"
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      include: __dirname
    }, {
      test: /\.css$/,
      loaders: ["style-loader", "raw-loader"],
      include: __dirname
    }, {
      test: /\.svg$/,
      loader: "url-loader?limit=10000&mimetype=image/svg+xml",
      include: path.join(__dirname, "assets")
    }, {
      test: /\.png$/,
      loader: "url-loader?mimetype=image/png",
      include: path.join(__dirname, "assets")
    }, {
      test: /\.gif$/,
      loader: "url-loader?mimetype=image/gif",
      include: path.join(__dirname, "assets")
    }, {
      test: /\.jpg$/,
      loader: "url-loader?mimetype=image/jpg",
      include: path.join(__dirname, "assets")
    }]
  }
};
