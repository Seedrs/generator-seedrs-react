'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');


describe('generator-seedrs-react:src', () => {
  beforeAll(() => helpers
  .run(path.join(__dirname, '../generators/src'))
  .withOptions({
    snakeCaseName: 'seedrs_react_project',
    kebabCaseName: 'seedrs-react-project'
  }));

  it('creates files', () => {
    assert.file([
      './src/seedrs_react_project.js',
      './src/components/app/App.js'
    ]);
  });

  it('creates a root file with the correct content', () => {
    const rootPath = './src/seedrs_react_project.js';
    assert.fileContent([
      [rootPath, 'import React from \'react\';'],
      [rootPath, 'import ReactDOM from \'react-dom\';'],
      [rootPath, 'import App from \'components/app/App\';'],
      [rootPath, 'ReactDOM.render('],
      [rootPath, '<App />'],
      [rootPath, ',document.getElementById(\'seedrs-react-project\')']
    ]);
  });

  it('creates an app file with the correct content', () => {
    const appPath = './src/components/app/App.js';
    assert.fileContent([
      [appPath, 'import React from \'react\';'],
      [appPath, 'import { hot } from \'react-hot-loader\';'],
      [appPath, 'const App = () => ('],
      [appPath, '<h1>It works!</h1>'],
      [appPath, 'export default hot(module)(App);']
    ]);
  });
});
