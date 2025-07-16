import { expect } from '@playwright/test';
import { Locators } from './locators';

export class Login {
  constructor(page) {
    this.page = page;
    this.locators = new Locators(page);
  }

  async goTo(url) {
    await this.page.goto(url, { timeout: 45000 });
  }

  async waitForLoginFields() {
    await expect(this.locators.usernameInput).toBeVisible();
    await expect(this.locators.passwordInput).toBeVisible();
    await this.locators.usernameInput.scrollIntoViewIfNeeded();
    await this.locators.passwordInput.scrollIntoViewIfNeeded();
  }

  async login(username, password) {
    await this.locators.usernameInput.fill(username);
    await this.locators.passwordInput.fill(password);
    await this.locators.loginButton.click();
  }

  async assertSuccessfulLogin(expectedUsername) {
    await expect(this.locators.logoutText).toBeVisible();
    const usernameText = await this.locators.usernameDisplay.textContent();
    expect(usernameText).toBe(expectedUsername);
  }

  async assertLoginError(message = 'Invalid username or password!') {
    await expect(this.locators.errorMessage).toBeVisible();
    await expect(this.locators.errorMessage).toHaveText(new RegExp(message));
  }

  async validateRequiredFields() {
    await this.locators.loginButton.click();

    const isUsernameValid = await this.locators.usernameInput.evaluate(el => el.checkValidity());
    const isPasswordValid = await this.locators.passwordInput.evaluate(el => el.checkValidity());

    expect(isUsernameValid).toBe(false);
    expect(isPasswordValid).toBe(false);

    const usernameBorder = await this.locators.usernameInput.evaluate(el => getComputedStyle(el).borderColor);
    const passwordBorder = await this.locators.passwordInput.evaluate(el => getComputedStyle(el).borderColor);

    expect(usernameBorder).toMatch(/rgb\(.*\)/);
    expect(passwordBorder).toMatch(/rgb\(.*\)/);
  }
}
