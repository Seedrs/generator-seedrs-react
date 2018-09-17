'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing() {
    this.fs.copyTpl(
      this.templatePath('pipeline.yml.tpl'),
      this.destinationPath('./.buildkite/pipeline.yml'),
      { kebabCaseName: this.options.kebabCaseName }
    );

    this.fs.copy(
      this.templatePath('lint.sh.tpl'),
      this.destinationPath('./.buildkite/steps/lint.sh'),
    );

    this.fs.copy(
      this.templatePath('test.sh.tpl'),
      this.destinationPath('./.buildkite/steps/test.sh'),
    );
  }
};
