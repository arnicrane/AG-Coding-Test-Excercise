module.exports = {
  rootDir: "./../",
  resetMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/source/*.js"],
  testMatch: ["<rootDir>/tests/**/*.js"],
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.js$",
    "node_modules/(?!(ol)/)",
  ],
  testPathIgnorePatterns: [
    "source/constants/*.js"
  ],
  moduleFileExtensions: ["js", "json", "node"],
  coverageReporters: ["html", "text", "lcov"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
};
