import path from 'path';
import { expect } from '@playwright/test';
import { fileURLToPath } from 'url';
import { Locators } from './locators';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class PracticeForm {
  constructor(page) {
    this.page = page;
    this.locators = new Locators(page);
  }

  async navigateToForm() {
    await this.page.goto('/');
    await this.locators.formsCard.scrollIntoViewIfNeeded();
    await this.locators.formsCard.click();

    await this.locators.practiceFormLink.scrollIntoViewIfNeeded();
    await this.locators.practiceFormLink.click();

    await expect(this.page).toHaveURL(/.*automation-practice-form/);
    await expect(this.locators.formTitle).toBeVisible();
  }

  async fillForm() {
    await this.page.waitForTimeout(1000);
    await this.locators.firstNameInput.fill('Sumit');
    await this.page.waitForTimeout(1000);
    await this.locators.lastNameInput.fill('Mishra');
    await this.page.waitForTimeout(1000);
    await this.locators.emailInput.fill('sumit@example.com');

    await this.page.waitForTimeout(1000);
    await this.page.evaluate(() => {
      document.querySelector('#fixedban')?.remove();
      document.querySelectorAll('iframe').forEach(el => el.remove());
    });

    await this.page.waitForTimeout(1000);
    await this.page.locator('label[for="gender-radio-1"]').scrollIntoViewIfNeeded();
    await this.page.locator('label[for="gender-radio-1"]').waitFor({ state: 'visible' });
    await this.page.locator('label[for="gender-radio-1"]').click();
    await expect(this.page.locator('label[for="gender-radio-1"]')).toBeChecked();

    await this.page.waitForTimeout(1000);
    await this.locators.mobileInput.waitFor({ state: 'visible' });
    await this.locators.mobileInput.fill('9876543210');

    await this.page.waitForTimeout(1000);
    await this.locators.dobInput.scrollIntoViewIfNeeded();
    await this.locators.dobInput.waitFor({ state: 'visible' });
    await this.locators.dobInput.click();
    await this.page.keyboard.press('Control+A');
    await this.page.keyboard.type('10 Jul 1995');

    await this.page.waitForTimeout(1000);
    await this.locators.subjectsInput.scrollIntoViewIfNeeded();
    await this.locators.subjectsInput.waitFor({ state: 'visible' });
    await this.locators.subjectsInput.fill('Math');
    await this.locators.subjectOption.click();

    await this.page.waitForTimeout(3000);
    await this.page.locator('label[for="hobbies-checkbox-2"]').scrollIntoViewIfNeeded();
    await this.page.locator('label[for="hobbies-checkbox-2"]').waitFor({ state: 'visible' });
    await this.page.locator('label[for="hobbies-checkbox-2"]').click();

    await this.page.waitForTimeout(1000);
    const filePath = path.resolve(__dirname, '../userData/QA.png');
    await this.locators.fileUploadInput.setInputFiles(filePath);

    await this.page.waitForTimeout(1000);
    await this.locators.addressInput.waitFor({ state: 'visible' });
    await this.locators.addressInput.fill('123 Main Street, Demo City');

    await this.page.waitForTimeout(1000);
    await this.locators.stateDropdown.waitFor({ state: 'visible' });
    await this.locators.stateDropdown.click();
    await this.locators.stateOption.waitFor({ state: 'visible' });
    await this.locators.stateOption.click();

    await this.locators.cityDropdown.waitFor({ state: 'visible' });
    await this.locators.cityDropdown.click();
    await this.locators.cityOption.waitFor({ state: 'visible' });
    await this.locators.cityOption.click();
  }

  async submitFormAndValidate() {
    await this.locators.submitButton.scrollIntoViewIfNeeded();
    await this.locators.submitButton.waitFor({ state: 'visible' });
    await this.locators.submitButton.click({ force: true });

    await expect(this.locators.modalTitle).toBeVisible({ timeout: 10000 });

    await expect(this.locators.resultTable).toContainText('Sumit Mishra');
    await expect(this.locators.resultTable).toContainText('sumit@example.com');
    await expect(this.locators.resultTable).toContainText('Male');
    await expect(this.locators.resultTable).toContainText('9876543210');
    await expect(this.locators.resultTable).toContainText('10 July,1995');
    await expect(this.locators.resultTable).toContainText('Maths');
    await expect(this.locators.resultTable).toContainText('Reading');
    await expect(this.locators.resultTable).toContainText('QA.png');
    await expect(this.locators.resultTable).toContainText('123 Main Street, Demo City');
    await expect(this.locators.resultTable).toContainText('NCR Delhi');
  }
}
