'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-seedrs-react:buildkite', () => {
  beforeAll(() => helpers
  .run(path.join(__dirname, '../generators/buildkite'))
  .withOptions({
    kebabCaseName: 'seedrs-react-project',
    snakeCaseName: 'seedrs_react_project'
  }));

  it('creates files', () => {
    assert.file([
      './.buildkite/pipeline.yml',
      './.buildkite/steps/lint.sh',
      './.buildkite/steps/test.sh'
    ]);
  });

  it('creates files with the correct output', () => {
    assert.fileContent([
      [
        './.buildkite/pipeline.yml',
        'run: seedrs_react_project'
      ],
      [
        './.buildkite/pipeline.yml',
        'queue: seedrs-react-project-agent'
      ]
    ]);
  });
});
