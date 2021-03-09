import type { JestPlaywrightConfig, ConnectOptions } from '../types/global'

export const IMPORT_KIND_PLAYWRIGHT = 'playwright'

export const CONFIG_ENVIRONMENT_NAME = 'jest-playwright'

export const CHROMIUM = 'chromium'
export const FIREFOX = 'firefox'
export const WEBKIT = 'webkit'

export const LAUNCH = 'LAUNCH'
export const PERSISTENT = 'PERSISTENT'
export const SERVER = 'SERVER'

export const DEFAULT_CONFIG: JestPlaywrightConfig = {
  launchType: SERVER,
  launchOptions: {},
  connectOptions: {} as ConnectOptions,
  contextOptions: {},
  browsers: [CHROMIUM],
  exitOnPageError: true,
  collectCoverage: false,
  coverageOutput: 'file',
}

export const DEFAULT_TEST_PLAYWRIGHT_TIMEOUT = 15000

export const PACKAGE_NAME = 'jest-playwright-preset'
