'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');

module.exports = class extends Generator {

  default () {
    const {
      name,
      embeddable,
      port
    } = this.props;

    const snakeCaseName = _.snakeCase(name);
    const kebabCaseName = _.kebabCase(name);

    this.composeWith('generator-node/generators/git');
    this.composeWith(require.resolve('../buildkite'), { kebabCaseName, snakeCaseName });
    this.composeWith(require.resolve('../webpack'), { kebabCaseName, snakeCaseName, port, embeddable });
    this.composeWith(require.resolve('../public'), { kebabCaseName, embeddable });
    this.composeWith(require.resolve('../scripts'));
    this.composeWith(require.resolve('../src'), { snakeCaseName, kebabCaseName });
    this.composeWith(require.resolve('../jest'));
  }

  prompting () {
    this.log(
      yosay(`Welcome to the smashing ${chalk.red('generator-seedrs-react')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your app?',
        default: _.kebabCase(this.appname)
      },
      {
        type: 'input',
        name: 'port',
        message: 'What port to you want to expose from your docker container to the host?',
        default: 8080
      },
      {
        type: 'confirm',
        name: 'embeddable',
        message: 'Are you embedding this application into an existing page?',
        default: false
      }
    ];

    return this.prompt(prompts).then((props) => {
      this.props = props;
    });
  }

  writing () {
    const {
      name,
      embeddable
    } = this.props;

    const snakeCaseName = _.snakeCase(name);
    const kebabCaseName = _.kebabCase(name);

    this.fs.copyTpl(
      this.templatePath('package.json.tpl'),
      this.destinationPath('package.json'),
      {
        name: kebabCaseName
      }
    );

    if (embeddable) {
      this.fs.extendJSON(this.destinationPath('package.json'),{
        devDependencies: {
          '@seedrs/bundle-script-tag-plugin': '^1.0.3'
        }
      });
    }

    this.fs.copy(
      this.templatePath('.eslintrc.js.tpl'),
      this.destinationPath('.eslintrc.js')
    );

    this.fs.copy(
      this.templatePath('.babelrc.tpl'),
      this.destinationPath('.babelrc')
    );

    this.fs.copy(
      this.templatePath('.npmrc.tpl'),
      this.destinationPath('.npmrc')
    );

    this.fs.copyTpl(
      this.templatePath('README.md.tpl'),
      this.destinationPath('README.md'),
      {
        kebabCaseName,
        snakeCaseName
      }
    );

    this.fs.copy(
      this.templatePath('Dockerfile.tpl'),
      this.destinationPath('Dockerfile'),
    );

    this.fs.copyTpl(
      this.templatePath('docker-compose.yml.tpl'),
      this.destinationPath('docker-compose.yml'),
      {
        snakeCaseName,
        port: this.props.port
      }
    );
  }
};
