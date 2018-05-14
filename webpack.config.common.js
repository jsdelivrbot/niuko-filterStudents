const jsonImporter = require('node-sass-json-importer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: [
    './src/index.js'
  ],
  module: {
    loaders: [{
      test: /\.css$/,
      include: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'node_modules/@warda/library-ui'),
        path.resolve(__dirname, 'node_modules/@warda-snapshot/library-ui')
      ],
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              // localIdentName: '_[local]--[hash:base64:5]',
              minimize: true
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      })
    }, {
      test: /\.scss$/,
      include: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'node_modules/@warda/library-ui'),
        path.resolve(__dirname, 'node_modules/@warda-snapshot/library-ui')
      ],
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              // localIdentName: '_[local]--[hash:base64:5]',
              minimize: true
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              importer: jsonImporter
            }
          }
        ]
      })
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader'
      ]
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader'
      ]
    }]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './'
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'bundle.css',
      disable: false
    }),
    new Dotenv({
      path: './.env',
      safe: false,
      systemvars: true
    })
  ]
}
