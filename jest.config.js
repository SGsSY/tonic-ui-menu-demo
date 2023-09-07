module.exports = {
    testEnvironment: "jsdom",
    moduleFileExtensions: ["js", "jsx"],
    testMatch: ["**/tests/**/*.js?(x)"],
    collectCoverage: true,
    collectCoverageFrom: ["**/src/*.{js,jsx}"],
    coverageReporters: ["json", "lcov", "text", "clover"],
    coverageDirectory: "coverage",
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },
};
