import { test } from '@playwright/test';
import { Login } from '../pageObject/login';

test.setTimeout(60000);

test.describe('Login Tests', () => {
  let login;

  test.beforeEach(async ({ page }) => {
    login = new Login(page);
    await page.context().clearCookies();
    await login.goTo('/login');
    await login.waitForLoginFields();
  });

  test('login to DemoQA with valid credentials', async () => {
    await login.login('SumitMishra', 'Pass@123');
    await login.assertSuccessfulLogin('SumitMishra');
  });

  test('login to DemoQA with invalid credentials shows error', async () => {
    await login.login('InvalidUser', 'WrongPass123');
    await login.assertLoginError();
  });

  test('required field validations trigger for blank username and password', async () => {
    await login.validateRequiredFields();
  });
});
