const path = require('path');
const webpack = require('webpack');
const {VueLoaderPlugin} = require('vue-loader');


module.exports = {
  mode: 'development',
  entry: {
    ui: path.resolve(__dirname, 'components/component.js'),
    index: path.resolve(__dirname, 'server/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'server/lib'),
    filename: '[name].js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'server'),
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {test: /\.css$/,
        use: [
          'vue-style-loader',
          'style-loader',
          'css-loader',
        ],
      },
      {test: /\.html$/, loader: 'html-loader'},
      {test: /\.vue$/, loader: 'vue-loader'},
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.md$/,
        exclude: /node_modules/,
        use: [{
          loader: 'html-loader',
        }, {
          loader: 'markdown-loader',
        }],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.css', '.vue'],
    alias: {
      '@components': path.resolve('components'),
      '@mixins': path.resolve('mixins'),
      '@directives': path.resolve('directives'),
      '@util': path.resolve('components/util'),
      '@webComponents': path.resolve('server/webComponents'),
      '@pages': path.resolve('server/pages'),
    },
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new VueLoaderPlugin(),
  ],
};
