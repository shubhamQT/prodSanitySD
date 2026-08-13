import { test, expect } from '@support/fixtures';
import env from '@support/env';
import testData from '@testdata/test-data.json';

test('E2E-001: Login with valid credentials and verify redirect to inventory page', { tag: ["@e2e","@regression","@P0","@case-dddf70f8-3b5d-43fa-b314-1d363ca002b6"] }, async ({ page, loginPage, inventoryPage }) => {
  await test.step('Before — User has valid credentials: standard_user / secret_sauce', async () => {
    await page.goto(env.baseURL);
    await expect(page).not.toHaveTitle(/404|Error|Not Found/i);
  });

  await test.step('Open — Navigate to SauceDemo login page', async () => {
    await page.goto('https://www.saucedemo.com/');
  });

  await test.step('Click — Fill username field', async () => {
    await loginPage.fillUsername(env.username);
  });

  await test.step('Click — Fill password field', async () => {
    await loginPage.fillPassword(env.password);
  });

  await test.step('Click — Click Login button', async () => {
    await loginPage.clickLogin();
  });

  await test.step('Assert visible — Verify inventory page title is visible', async () => {
    await inventoryPage.expectTitleVisible();
  });

  await test.step('Assert text — Verify page title text is \'Products\'', async () => {
    await inventoryPage.expectTitleText('Products');
  });
});


test('E2E-003: Add Sauce Labs Backpack to cart and verify cart icon count updates', { tag: ["@e2e","@regression","@P0","@case-6536683e-8269-4a50-9716-9cd3c7a83114"] }, async ({ page, loginPage, inventoryPage }) => {
  await test.step('Before — User has valid credentials: standard_user / secret_sauce', async () => {
    await page.goto(env.baseURL);
    await expect(page).not.toHaveTitle(/404|Error|Not Found/i);
  });

  await test.step('Open — Navigate to SauceDemo login page', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Click — Perform login with valid credentials', async () => {
    await loginPage.performLogin();
  });

  await test.step('Assert visible — Verify Add to Cart button for Sauce Labs Backpack is visible', async () => {
    await inventoryPage.expectAddToCartSauceLabsBackpackSauceLabsBackpackVisible();
  });

  await test.step('Click — Click Add to Cart for Sauce Labs Backpack', async () => {
    await inventoryPage.clickAddToCartSauceLabsBackpackSauceLabsBackpack();
  });

  await test.step('Assert visible — Verify shopping cart badge is visible', async () => {
    await inventoryPage.expectShoppingCartVisible();
  });

  await test.step('Assert text — Verify cart badge shows count of 1', async () => {
    await inventoryPage.expectShoppingCartText('1');
  });
});
