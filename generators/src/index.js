const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing () {
    this.fs.copyTpl(
      this.templatePath('root_component.js.tpl'),
      this.destinationPath(`./src/${this.options.snakeCaseName}.js`),
      {
        kebabCaseName: this.options.kebabCaseName
      }
    );
  }
};
