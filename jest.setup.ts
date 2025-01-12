/* eslint-disable import/first */
/* eslint-disable import/newline-after-import */

const originalEnv = { ...process.env };

beforeAll(async () => {
  process.env.DB_NAME = process.env.DB_TEST_NAME;
});

beforeEach(() => {
  jest.resetModules();

  process.env = { ...originalEnv };
  /**
   * Use this to change any env variables for testing
   * WARNING: This applies to all tests. To change env for an individual test change it on the test or the desired scope
   *
   * Example
   * process.env.TOKEN_SECRET = "Super secure secret";
   */

  process.env.DEBUG_VERBOSE = "false";
});

afterEach(() => {
  // Restore the env after each test
  process.env = originalEnv;
});

afterAll(() => {});

/**
 * Use this file to add any util functions to use during testing
 */
