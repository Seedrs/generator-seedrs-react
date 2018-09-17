'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing() {
    this.fs.copy(
      this.templatePath('app.test.js.tpl'),
      this.destinationPath('./src/__tests__/app.test.js')
    );
  }
};
