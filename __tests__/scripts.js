'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-seedrs-react:scripts', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/scripts'))
  });

  it('creates files', () => {
    assert.file([
      './scripts/build.js',
      './scripts/test.js'
    ]);
  });
});
