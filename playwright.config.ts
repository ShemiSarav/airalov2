// playwright.config.ts
import { defineConfig } from '@playwright/test';

import dotenv from 'dotenv';
dotenv.config();


export default defineConfig({
  /* ***** runner-wide settings ***** */
  testDir: './src/tests',          // where specs live
  timeout: 10 * 1000,              // 10 s per test
  retries: 2,                      // 2 retries  → 3 total attempts
  reporter: [['list'], ['html', { open: 'never' }]],

  /* ***** default context / page options ***** */
  use: {
    baseURL: 'https://www.airalo.com',
    headless: true,
    viewport: { width: 1920, height: 1080 },   // drives screenshot & video size
    screenshot: 'only-on-failure',             // save on fail
    video: 'retain-on-failure',                // record, keep only if test fails
    trace: 'retain-on-failure',                // same rule for traces
  },

  /* ***** cross-browser matrix ***** */
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'firefox',  use: { browserName: 'firefox'  } },
  ],

  /* (optional) where Playwright stores ALL artefacts — defaults to test-results */
  // outputDir: './test-results',
});
