'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-seedrs-react:public', () => {
  describe('when embeddable is false', () => {
    beforeAll(() => helpers
    .run(path.join(__dirname, '../generators/public'))
    .withOptions({
      kebabCaseName: 'seedrs-react-project',
      embeddable: false
    }));

    it('creates the index.html file', () => {
      assert.file('./public/index.html');
    });

    it('adds the root div', () => {
      assert.fileContent('./public/index.html','<div id="seedrs-react-project"></div>');
    });
  });

  describe('when embeddable is true', () => {
    beforeAll(() => helpers
    .run(path.join(__dirname, '../generators/public'))
    .withOptions({
      kebabCaseName: 'seedrs-react-project',
      embeddable: true
    }));

    it('does not create the index.html file', () => {
      assert.noFile('./public/index.html');
    });
  });
});
