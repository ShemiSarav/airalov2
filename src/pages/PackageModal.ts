import { Page, expect } from '@playwright/test';

export class PackageModal {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
// Verifies the package details for Moshi Moshi 1GB / 7 Days / €4.50

  async verifyPackageDetails() {
    await expect(this.page.locator('[data-testid="sim-detail-operator-title"]')).toContainText('Moshi Moshi');
    await expect(this.page.locator('[data-testid="package-detail"] [data-testid="COVERAGE-value"]')).toHaveText(/^\s*Japan\s*$/);
    await expect(this.page.locator('[data-testid="DATA-value"]').first()).toHaveText(/^\s*1 GB\s*$/);
    await expect(this.page.locator('[data-testid="VALIDITY-value"]').nth(1)).toHaveText(/^\s*7 Days\s*$/);
    await expect(this.page.locator('[data-testid="PRICE-value"]').nth(1)).toHaveText(/^\s*4\.50\s*€\s*$/);
    
    
    
    

    
  }

}