import nextJest from 'next/jest';

const createJestConfig = nextJest({
    dir: './'
})

const config = {
    verbose: true,
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    setupFilesAfterEnv: ['./jest-setup.ts', '@testing-library/jest-dom/extend-expect'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '\\.(css|less|scss)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif)$': '<rootDir>/src/assets',
        "^.+\\.svg$": "jest-svg-transformer"
    },
};

module.exports = createJestConfig(config);