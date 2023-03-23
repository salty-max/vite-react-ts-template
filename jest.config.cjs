module.exports = {
	preset: "ts-jest",
	moduleNameMapper: {
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
			"<rootDir>/__mocks__/fileMock.js",
		"\\.(css|less|scss|sass)$": "identity-obj-proxy",
	},
	testEnvironment: "jest-environment-jsdom",
	// Automatically clear mock calls, instances and results before every test
	clearMocks: true,
	// Indicates whether the coverage information should be collected while executing the test
	collectCoverage: true,
	// A list of reporter names that Jest uses when writing coverage reports
	coverageReporters: [
		//   "json",
		"text",
		"lcov",
		// "clover",
	],
	// An array of file extensions your modules use
	moduleFileExtensions: ["ts", "tsx", "js"],
	// The root directory that Jest should scan for tests and modules within
	rootDir: "./",
	// A list of paths to directories that Jest should use to search for files in
	roots: ["src"],
}
