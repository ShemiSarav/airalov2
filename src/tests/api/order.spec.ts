// src/tests/api/order.spec.ts
import { test, expect } from '@playwright/test';
import { AiraloAPI } from '../../services/airaloApi';
import env from '../../../config/env';

test.describe('Order API – Place & Validate', () => {
  let api: AiraloAPI;

  test.beforeAll(async () => {
    api = await AiraloAPI.createWithToken(
      env.API_BASE_URL,
      env.CLIENT_ID,
      env.CLIENT_SECRET
    );
  });

  test('Place order with insufficient stock and validate packages list', async ({}, testInfo) => {
    // STEP 1: Attempt order
    await test.step('Place order for 6 eSIMs (expect 422)', async () => {
      const orderRes = await api.placeOrder('merhaba-7days-1gb', 6);
      expect(orderRes.status()).toBe(422); // Expected failure due to stock
    });

    // STEP 2: Validate package listing
    await test.step('Validate eSIM packages list contains expected data', async () => {
      const { data: esims } = await api.getPackages();

      expect(Array.isArray(esims)).toBeTruthy();
      expect(esims.length).toBeGreaterThan(0);

      for (const esim of esims) {
        expect.soft(esim).toHaveProperty('slug');
      }
    });

    // STEP 3: Attach metadata to test report
    testInfo.attach('API Base URL', {
      body: env.API_BASE_URL,
      contentType: 'text/plain'
    });
  });
});