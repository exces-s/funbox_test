const {defaults} = require('jest-config');

module.exports = {
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/src/__test__/__mocks__/styleMock.js"
  },
  setupTestFrameworkScriptFile: "<rootDir>/src/setupTests.js",
};
