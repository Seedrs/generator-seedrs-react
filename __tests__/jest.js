'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-seedrs-react:jest', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/jest'))
      .withOptions({
        kebabCaseName: 'seedrs-react-project',
        embeddable: false
      });
  });

  it('creates files', () => {
    assert.file('src/__tests__/app.test.js');
  });
});
