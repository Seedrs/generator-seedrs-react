const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
<% if (embeddable) {%>
const { appPublic } = require('./paths');
<% } else {%>
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { appHtml, appPublic } = require('./paths');
<% } %>
const { HOST } = require('./config');

module.exports = merge(common, {
  mode: 'development',
  entry: {
    <%= snakeCaseName %>: [
      'babel-polyfill',
      './src/<%= snakeCaseName %>.js'
    ]
  },

  devServer: {
    public: '<%= kebabCaseName %>.seedrs.local:<%= port %>',
    disableHostCheck: true,
    host: HOST,
    port: <%= port %>,
    contentBase: appPublic,
    compress: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
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
