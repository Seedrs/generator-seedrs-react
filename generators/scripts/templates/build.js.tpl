'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.NODE_ENV = process.env.NODE_ENV || 'production';
process.env.BABEL_ENV = process.env.NODE_ENV;

const webpack = require('webpack');
const config = require('../config/webpack.production');
const fs = require('fs-extra');
const { build } = require('../config/paths');

const cleanBuildDir = async (path) => {
  try {
    await fs.emptyDir(path)
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

const ensureBuildDir = async (path) => {
  try {
    await fs.ensureDir(path);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
ensureBuildDir(build)
.then(() => cleanBuildDir(build))
.then(() => webpack(config).run());
