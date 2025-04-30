import { test, expect } from '@playwright/test';

test('simple smoke test', async () => {
  expect(1 + 1).toBe(2);
});
