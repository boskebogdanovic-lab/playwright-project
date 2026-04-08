// @ts-check
import { test, expect } from './fixtures';


test('check url after login', async ({loggedInPage}) => {
await expect(loggedInPage).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');

});
