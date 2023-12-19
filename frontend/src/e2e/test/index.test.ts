import { expect } from '@playwright/test';

import { test } from '../testUtils';

test('テスト', async ({ page, interceptGQL }) => {
  await page.goto('http://localhost:3000/list');

  await interceptGQL(page);

  const card = page.getByTestId('playwrightTest').first();

  await expect(
    page.getByRole('heading', { name: 'dashboard', level: 3 })
  ).toBeVisible();

  await expect(card).toBeVisible();

  await card.dblclick();

  const closeButton = page.getByRole('button', { name: 'close' });

  await expect(closeButton).toBeVisible();
});
