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
    assert.file('./src/seedrs_react_project.js');
  });

  it('creates a file with the correct content', () => {
    assert.fileContent('./src/seedrs_react_project.js','import React from \'react\';');
    assert.fileContent('./src/seedrs_react_project.js','import ReactDOM from \'react-dom\';');
    assert.fileContent('./src/seedrs_react_project.js','ReactDOM.render(');
    assert.fileContent('./src/seedrs_react_project.js',',document.getElementById(\'seedrs-react-project\')');
  });
});
