const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  env: resolveApp('config/env'),
  config: resolveApp('config'),
  build: resolveApp('build'),
  appPublic: resolveApp('public'),
  <% if(!embeddable) { %>
  appHtml: resolveApp('public/index.html'),
  <% } %>
  appSrc: resolveApp('src'),
  appConfig: resolveApp('config')
};
