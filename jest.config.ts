import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['<rootDir>/**/__tests__/**/*.test.ts'],
    testPathIgnorePatterns: ['/node_modules/'],
    transform: {
        '^.+\\.(t|j)sx?$': ['ts-jest', {
            diagnostics: false,
        }],
    },
};

export default config;
