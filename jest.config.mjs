import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './'
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '@app/(.*)$': '<rootDir>/src/$1',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@containers/(.*)': '<rootDir>/src/containers/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '@store/(.*)': '<rootDir>/src/store/$1',
    '@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '@pages/(.*)': '<rootDir>/src/pages/$1',
    '@styles/(.*)': '<rootDir>/src/styles/$1'
  }
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
