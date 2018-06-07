const path = require('path');
const webpack = require('webpack');
const {VueLoaderPlugin} = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const PKG = require('./package.json');

module.exports = {
  mode: 'production',
  entry: {
    index: path.resolve(__dirname, 'components/component.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `${PKG.name}.min.js`,
    library: PKG.name,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]},
      {test: /\.html$/, loader: 'html-loader'},
      {test: /\.vue$/, loader: 'vue-loader'},
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.vue'],
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: `${PKG.name}.min.css`,
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {discardComments: {removeAll: true}},
      canPrint: true,
    }),
    new UglifyJsPlugin({
      parallel: true,
      sourceMap: true,
    }),
  ],
};
