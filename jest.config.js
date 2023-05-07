module.exports = {
  testEnvironment: 'jsdom',
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  testMatch: [
    '**/__tests__/**/*.tsx',
    '**/?(*.)+(spec|test).tsx',
    '__tests__/**/*.test.tsx',
  ],
};
