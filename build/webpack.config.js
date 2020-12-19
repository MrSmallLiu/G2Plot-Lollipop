const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '../src/index.ts'),
  mode: 'production',
  externals: {'@antv/g2plot':'G2Plot'},
  output: {
    filename: 'g2plot-lollipop.min.js', // 输出文件名字
    library: 'Lollipop',// 引入的库的名字
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      { test: /\.ts$/, exclude: /node_modules/, use: ['ts-loader'] }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ['**/*'] }),
  ]
}
