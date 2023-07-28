import type { Config } from 'jest';
import path from 'path';

const config: Config = {
  clearMocks: true,

  coveragePathIgnorePatterns: ['/node_modules/'],

  moduleDirectories: ['node_modules', 'src'],

  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node'
  ],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // The glob patterns Jest uses to detect test files
  testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],

  // The root directory that Jest should scan for tests and modules within
  rootDir: '../../',

  setupFilesAfterEnv: ['<rootDir>config/jest/jestSetup.ts'],

  moduleNameMapper: {
    '\\.(scss)$': 'identity-obj-proxy'
    // '\\.svg': [path.resolve(__dirname, 'jestEmptySvg.tsx')]
  }
};

export default config;
