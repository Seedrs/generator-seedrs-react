const { APP_ENV } = require('../config');

const moduleExists = function (file) {
  try {
    require.resolve(file)
  } catch(err){
    return false;
  }
  return true;
};

const envFile = `./env.${APP_ENV}.js`;
const envConfig = moduleExists(envFile) ? require(envFile) : {};

module.exports = Object.assign({
  appName: '<%=kebabCaseName%>',
  publicPath: 'http://<%=kebabCaseName%>.seedrs.local:<%=port%>'
}, envConfig);
