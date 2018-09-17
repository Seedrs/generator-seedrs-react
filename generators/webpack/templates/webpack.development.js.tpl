const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
<% if (embeddable) {%>
const BundleScriptTagPlugin = require('@seedrs/bundle-script-tag-plugin');
const { build, appPublic } = require('./paths');
<% } else {%>
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { build, appHtml, appPublic } = require('./paths');
<% } %>
const { HOST } = require('./config');
const { publicPath } = require('./env');

module.exports = merge(common, {
  mode: 'development',
  entry: {
    <%= snakeCaseName %>: [
      'react-hot-loader/patch',
      `webpack-dev-server/client?${publicPath}`,
      'babel-polyfill',
      './src/<%= snakeCaseName %>.js'
    ]
  },

  devServer: {
    public: '<%= kebabCaseName %>.seedrs.local:<%= port %>',
    disableHostCheck: true,
    host: HOST,
    port: <%= port %>,
    hot: true,
    inline: true,
    contentBase: appPublic,
    compress: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    allowedHosts: [
      '.seedrs.local'
    ]
  },

  plugins: [
    new webpack.NamedModulesPlugin()
  <% if (!embeddable) { %>
    new HtmlWebpackPlugin({
      inject: true,
      template: appHtml,
    })
  <% } %>
  ]
});
