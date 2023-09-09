module.exports = {
    testEnvironment: "jsdom",
    moduleFileExtensions: ["js", "jsx"],
    testMatch: ["**/tests/**/*.js?(x)"],
    collectCoverage: true,
    collectCoverageFrom: ["**/src/*.{js,jsx}"],
    coverageReporters: ["json", "lcov", "text", "clover"],
    coverageDirectory: "coverage",
};
