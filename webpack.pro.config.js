const path = require('path');
const webpack = require('webpack');
const {VueLoaderPlugin} = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const NAME = require('./package.json').name;

module.exports = {
  mode: 'production',
  entry: {
    lanlanUI: path.resolve(__dirname, 'components/component.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `${NAME}.min.js`,
    library: NAME,
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
      filename: `${NAME}.min.css`,
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
