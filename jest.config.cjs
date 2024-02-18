module.exports = {
  testEnvironment: 'node',
  testMatch: [
    '**/_tests_/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};