import 'dotenv/config';
import { test as base } from '@playwright/test';
import loginCredentials from '../utils/testData.js';

export const test = base.extend({
loggedInPage: async ({ page }, use) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.locator('#username').fill(process.env.LOGIN_USERNAME);
    await page.locator('#password').fill(process.env.LOGIN_PASSWORD);
    await page.locator('#submit').click();
    await use(page);
},
});

export { expect } from '@playwright/test';