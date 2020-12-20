'use strict'
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "example"),
    compress: true,
    port: 9000
  },
  mode: 'development',
  devtool: 'source-map',
  entry: path.resolve(__dirname, '../example/index.ts'),
  // target: 'web',
  output: {
    filename: 'g2plot-lollipop.min.js', // 输出文件名字
    library: 'Lollipop',// 引入的库的名字
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      { test: /\.ts$/, exclude: /node_modules/, use: ['ts-loader'] },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'G2Plot Lollipop',
      template: 'example/index.html',
  })
  ]
}
