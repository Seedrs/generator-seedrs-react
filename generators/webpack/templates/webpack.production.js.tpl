const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");
<% if (embeddable) {%>
const BundleScriptTagPlugin = require('@seedrs/bundle-script-tag-plugin');
const { build } = require('./paths');
<% } else {%>
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { build, appHtml } = require('./paths');
<% } %>
const {
  appName,
  publicPath
} = require('./env');

module.exports = merge(common, {

  mode: 'production',

  entry: {
    web: [
      'babel-polyfill',
      './src/<%= snakeCaseName %>.js'
    ]
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    new webpack.IgnorePlugin(/^\.\/locale$/,/moment$/),

    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$/,
      threshold: 10240,
      minRatio: 0
    }),

<% if (embeddable) {%>
  new BundleScriptTagPlugin.default({
    prefix: appName,
    publicPath,
    output: build
  })
<% } else {%>
  new HtmlWebpackPlugin({
      inject: true,
      template: appHtml,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    })
<% } %>
  ]
});

