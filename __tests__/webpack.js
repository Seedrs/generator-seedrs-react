'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-seedrs-react:webpack', () => {
  describe('when embeddable is false', () => {
    beforeAll(() => helpers
    .run(path.join(__dirname, '../generators/webpack'))
    .withOptions({
      kebabCaseName: 'seedrs-react-project',
      snakeCaseName: 'seedrs_react_project',
      port: 8080,
      embeddable: false
    }));

    it('creates files', () => {
      assert.file([
        './config/env/env.development.js',
        './config/env/env.production.js',
        './config/env/env.staging.js',
        './config/env/index.js',
        './config/aliases.js',
        './config/config.js',
        './config/paths.js',
        './config/webpack.common.js',
        './config/webpack.development.js',
        './config/webpack.production.js'
      ]);
    });

    it('adds the entrypoint', () => {
      assert.fileContent('./config/webpack.production.js','./src/seedrs_react_project.js');
    });

    it('creates paths.js with the a reference to appHtml', () => {
      assert.fileContent('./config/paths.js','appHtml: resolveApp(\'public/index.html\')');
    });

    it('creates webpack.development.js with a reference to the HtmlWebpackPlugin', () => {
      assert.fileContent('./config/webpack.development.js','new HtmlWebpackPlugin({');
    });

    it('creates webpack.production.js with the bundle script tag plugin', () => {
      assert.noFileContent([
        [
          './config/webpack.production.js',
          'const BundleScriptTagPlugin = require(\'@seedrs/bundle-script-tag-plugin\''
        ],
        [
          './config/webpack.production.js',
          'new BundleScriptTagPlugin.default({'
        ]
      ]);
    });
  });

  describe('when embeddable is true', () => {
    beforeAll(() => helpers
    .run(path.join(__dirname, '../generators/webpack'))
    .withOptions({
      kebabCaseName: 'seedrs-react-project',
      snakeCaseName: 'seedrs_react_project',
      port: 8080,
      embeddable: true
    }));

    it('creates paths.js without a reference to appHtml', () => {
      assert.noFileContent('./config/paths.js','appHtml: resolveApp(\'public/index.html\')');
    });

    it('creates webpack.development.js without a reference to the HtmlWebpackPlugin', () => {
      assert.noFileContent('./config/webpack.development.js','new HtmlWebpackPlugin({');
    });

    it('creates webpack.production.js with the bundle script tag plugin', () => {
      assert.fileContent([
        [
          './config/webpack.production.js',
          'const BundleScriptTagPlugin = require(\'@seedrs/bundle-script-tag-plugin\''
        ],
        [
          './config/webpack.production.js',
          'new BundleScriptTagPlugin.default({'
        ]
      ]);
    });
  });
});
