'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing () {
    ['build','test'].forEach((file) => {
      this.fs.copy(
        this.templatePath(`${file}.js.tpl`),
        this.destinationPath(`./scripts/${file}.js`)
      );
    });
  }
};
