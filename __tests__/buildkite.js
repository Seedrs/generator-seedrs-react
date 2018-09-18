'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-seedrs-react:buildkite', () => {
  beforeAll(() => helpers
  .run(path.join(__dirname, '../generators/buildkite'))
  .withOptions({
    kebabCaseName: 'seedrs-react-project'
  }));

  it('creates files', () => {
    assert.file([
      './.buildkite/pipeline.yml',
      './.buildkite/steps/lint.sh',
      './.buildkite/steps/test.sh'
    ]);
  });
});
