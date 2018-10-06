module.exports = {
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	setupFiles: ['<rootDir>/test/setup.ts'],
	testRegex: '(/test/specs/.*|(\\.|/)(spec))\\.tsx?$',
	moduleFileExtensions: ['tsx', 'ts', 'js', 'json', 'node'],
	modulePathIgnorePatterns: ['<rootDir>/dist'],
	coverageReporters: ['text-summary', 'lcov'],
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.ts', '!src/index.ts'],
};
