const path = require('path');
const aliases = require('./aliases');
const { appSrc } = require('./paths');
const {
  appName,
  publicPath
} = require('./env');
const { APP_ENV } = require('./config');

const isDevelopment = APP_ENV === 'development' ;
const outputFilename = isDevelopment ? `${appName}-[name].js` : `${appName}-[name].[hash].js`;

module.exports = {
  cache: false,

  devtool: 'cheap-module-source-map',

  output: {
    pathinfo: true,
    path: path.resolve('build'),
    filename: outputFilename,
    publicPath: `${publicPath}/`
  },

  resolve: {
    alias: aliases,
    extensions: ['.js','.jsx']
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        include: appSrc
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: appSrc,
        use: ['babel-loader'],
      }
    ]
  },

  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
};

