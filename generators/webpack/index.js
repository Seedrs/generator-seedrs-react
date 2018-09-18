'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing () {
    const {
      kebabCaseName,
      snakeCaseName,
      embeddable,
      port
    } = this.options;

    ['development','staging','production'].forEach((env) => {
      this.fs.copyTpl(
        this.templatePath('env/env.js.tpl'),
        this.destinationPath(`./config/env/env.${env}.js`),
        { env }
      );
    });

    this.fs.copyTpl(
      this.templatePath('env/index.js.tpl'),
      this.destinationPath('./config/env/index.js'),
      {
        kebabCaseName,
        port
      }
    );

    ['aliases','config'].forEach((file) => {
      this.fs.copy(
        this.templatePath(`${file}.js.tpl`),
        this.destinationPath(`./config/${file}.js`),
      );
    });

    this.fs.copyTpl(
      this.templatePath('paths.js.tpl'),
      this.destinationPath('./config/paths.js'),
      {
        embeddable
      }
    );

    ['development', 'production'].forEach((env) => {
      this.fs.copyTpl(
        this.templatePath(`webpack.${env}.js.tpl`),
        this.destinationPath(`./config/webpack.${env}.js`),
        {
          kebabCaseName,
          snakeCaseName,
          port,
          embeddable
        }
      );
    });

    this.fs.copy(
      this.templatePath('webpack.common.js.tpl'),
      this.destinationPath('./config/webpack.common.js')
    );
  }
};
