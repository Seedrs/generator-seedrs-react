const path = require('path');

module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "node": true,
    "es6": true,
    "jest/globals": true
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": path.resolve(__dirname,"config", 'webpack.development.js')
      }
    }
  },
  "extends": [
    "eslint:recommended",
    "@seedrs/eslint-config-seedrs-base",
    "@seedrs/eslint-config-seedrs-react"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": ["jest"]
};
