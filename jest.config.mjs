import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
})
 
// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
    // Add more setup options before each test is run
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
 
    testEnvironment: 'jest-environment-jsdom',

    // Here we tell Jest to look for test files in the __tests__ directory only.
    testMatch: ['<rootDir>/__tests__/**/*.?(m)ts?(x)'], // This will match both .js, .jsx, .mjs files within __tests__ directories
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)