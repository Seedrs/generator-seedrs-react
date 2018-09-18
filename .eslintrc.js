module.exports = {
  "env": {
    "node": true,
    "es6": true,
    "commonjs": true,
    "jest/globals": true
  },
  "plugins": ["jest"],
  "extends": [
    "eslint:recommended",
    "@seedrs/eslint-config-seedrs-base"
  ],
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module"
  }
};
