import { test, expect } from '@support/fixtures';
import env from '@support/env';

test('test sso login flow on prod', { tag: ["@P1","@case-6e29f41b-c76c-47b8-91ab-9f7004cc47b0","@req-116afb2e-f3d0-47d8-a23a-1533f75e0775"] }, async ({ page, inventoryPage }) => {
  const vars: Record<string, string> = {};
  await test.step('Navigate to URL — URL', async () => {
    await page.goto('{{env.baseURL}}');
  });
  await test.step('Assert visible — product', async () => {
    await inventoryPage.verifyOnPage();
  });
});
