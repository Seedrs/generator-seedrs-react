'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-seedrs-react:app', () => {
  describe('when embeddable is false', () => {
    beforeAll(() => helpers
    .run(path.join(__dirname, '../generators/app'))
    .withPrompts({
      name: 'seedrs-react-project',
      embeddable: false
    }));

    it('creates files', () => {
      assert.file([
        'package.json',
        '.eslintrc.js',
        '.babelrc',
        '.npmrc',
        '.gitignore',
        'README.md',
        'Dockerfile',
        'docker-compose.yml'
      ]);
    });

    it('creates a README.md', () => {
      assert.fileContent('README.md','# seedrs-react-project');
      assert.fileContent('README.md','docker-compose run seedrs_react_project bash');
    });

    it('creates a package.json', () => {
      assert.JSONFileContent('package.json',{
        name: 'seedrs-react-project',
        scripts: {
          start: 'webpack-dev-server --config config/webpack.development.js --hot',
          lint: 'eslint src/**/*.js',
          test: 'node scripts/test.js --env=jsdom'
        },
        dependencies: {
          '@babel/polyfill': '7.0.0',
          normalizr: '^3.2.4',
          polished: '^1.9.2',
          'prop-types': '^15.6.1',
          react: '^16.5.1',
          'react-dom': '^16.5.1',
          'react-redux': '^5.0.7',
          redux: '^4.0.0',
          'redux-actions': '^2.3.0',
          'redux-saga': '^0.16.0',
          reselect: '^3.0.1',
          'styled-components': '^3.2.6'
        },
        devDependencies: {
          '@babel/core': '7.1.2',
          '@babel/plugin-proposal-object-rest-spread': '7.0.0',
          '@babel/plugin-transform-react-jsx': '7.0.0',
          '@babel/preset-env': '7.1.0',
          '@babel/preset-react': '7.0.0',
          '@seedrs/eslint-config-seedrs-base': '^1.1.0',
          '@seedrs/eslint-config-seedrs-react': '^1.0.0',
          'babel-core': '^7.0.0-bridge',
          'babel-eslint': '10.0.1',
          'babel-jest': '23.6.0',
          'babel-loader': '8.0.4',
          'compression-webpack-plugin': '^1.1.11',
          enzyme: '^3.3.0',
          'enzyme-adapter-react-16': '^1.1.1',
          eslint: '^5.6.0',
          'eslint-import-resolver-webpack': '^0.9.0',
          'eslint-loader': '^2.0.0',
          'eslint-plugin-import': '^2.11.0',
          'eslint-plugin-jest': '^21.15.1',
          'eslint-plugin-react': '^7.7.0',
          'html-webpack-plugin': '^3.2.0',
          jest: '^22.4.3',
          'react-hot-loader': '^4.3.8',
          'regenerator-runtime': '^0.12.1',
          webpack: '^4.6.0',
          'webpack-cli': '^2.0.15',
          'webpack-dev-server': '^3.1.3',
          'webpack-merge': '^4.1.2'
        },
        jest: {
          testMatch: [
            '<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}',
            '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}'
          ],
          testEnvironment: 'node',
          testURL: 'http://localhost',
          transformIgnorePatterns: [
            '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$'
          ],
          setupFiles: [
            '<rootDir>/node_modules/regenerator-runtime/runtime'
          ],
          moduleNameMapper: {
            '^actions(.+)': '<rootDir>/src/actions$1',
            '^components(.+)': '<rootDir>/src/components$1',
            '^config$': '<rootDir>/src/config/development.config.js',
            '^constants(.+)': '<rootDir>/src/constants$1',
            '^containers(.+)': '<rootDir>/src/containers$1',
            '^reducers(.+)': '<rootDir>/src/reducers$1',
            '^sagas(.+)': '<rootDir>/src/sagas$1',
            '^schemas(.+)': '<rootDir>/src/schemas$1',
            '^selectors(.+)': '<rootDir>/src/selectors$1'
          },
          moduleFileExtensions: [
            'web.js',
            'mjs',
            'js',
            'json',
            'web.jsx',
            'jsx',
            'node'
          ]
        }
      });
    });
  });

  describe('embeddable is true', () => {
    beforeAll(() => helpers
    .run(path.join(__dirname, '../generators/app'))
    .withPrompts({
      name: 'seedrs-react-project',
      embeddable: true
    }));

    it('creates package.json', () => {
      assert.JSONFileContent('package.json',{
        devDependencies: {
          '@seedrs/bundle-script-tag-plugin': '^1.0.3'
        }
      });
    });
  });
});
