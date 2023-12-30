import { test as baseTest } from '@playwright/test';

import { interceptGQL } from './interceptGQL';

export const test = baseTest.extend<{ interceptGQL: typeof interceptGQL }>({
  interceptGQL: async ({}, use) => {
    await use(interceptGQL);
  }
});
