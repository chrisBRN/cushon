import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['<rootDir>/**/__tests__/**/*.test.ts'],
    testPathIgnorePatterns: ['/node_modules/'],
    globals: { 'ts-jest': { diagnostics: false } },
    transform: {},
};

export default config;
