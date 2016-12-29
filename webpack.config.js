var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './app.ts',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: 'build.js'
  },
  resolve: {
      extensions: ['.ts', '.js'],
  },

  module: {
      rules: [
          { test: /\.ts$/, use: {loader: 'ts-loader'} },
          // toggle these lines to see HMR difference
          // { test: /\.ts$/, use: {loader: 'ts-loader', options: {transpileOnly: true}} },
      ],
  },
  devServer: {
    port: 8080,
    host: 'localhost',
    watchOptions: { aggregateTimeout: 300, poll: 1000 }
  },
}
