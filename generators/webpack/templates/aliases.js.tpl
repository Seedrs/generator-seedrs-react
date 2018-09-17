const path = require('path');
const {
  appSrc
} = require('./paths');

const {
  APP_ENV
} = require('./config');

// Add additional aliases here as needed
module.exports = {
  actions: path.resolve(appSrc, 'actions'),
  constants: path.resolve(appSrc, 'constants'),
  components: path.resolve(appSrc, 'components'),
  containers: path.resolve(appSrc, 'containers'),
  reducers: path.resolve(appSrc, 'reducers'),
  sagas: path.resolve(appSrc, 'sagas'),
  schemas: path.resolve(appSrc, 'schemas'),
  selectors: path.resolve(appSrc, 'selectors'),
  config: path.resolve(appSrc, `config/${APP_ENV}.config.js`)
};
