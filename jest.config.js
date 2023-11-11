// jest.config.js
module.exports = {
  testEnvironment: "node",
  transformIgnorePatterns: ["node_modules/(?!(axios)/)"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx|mjs)$": "babel-jest",
  },
  moduleFileExtensions: ["js", "mjs", "jsx"],
};
