'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing() {
    if (!this.options.embeddable) {
      this.fs.copyTpl(
        this.templatePath('index.html.tpl'),
        this.destinationPath('./public/index.html'),
        {
          kebabCaseName: this.options.kebabCaseName
        }
      );
    }
  }
};
