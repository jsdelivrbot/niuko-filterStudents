const merge = require('webpack-merge')
const common = require('./webpack.config.common.js')
const webpack = require('webpack')
var proxy = require('http-proxy-middleware');

module.exports = merge(common, {
  devServer: {
    disableHostCheck: true
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: ['cache-loader', 'babel-loader'],
        exclude: [/node_modules/, /build/]
      }
    ]
  }
})
