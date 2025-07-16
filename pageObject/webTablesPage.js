import { expect } from '@playwright/test';
import { Locators } from './locators';

export class WebTables {
  constructor(page) {
    this.page = page;
    this.locators = new Locators(page);
  }

  async navigateToWebTables() {
    await this.page.goto('/');
    await this.locators.elementsCard.scrollIntoViewIfNeeded();
    await this.locators.elementsCard.click();

    await this.locators.webTablesLink.scrollIntoViewIfNeeded();
    await this.locators.webTablesLink.click();

    await expect(this.page).toHaveURL(/.*webtables/);
  }

  async addUser({ firstName, lastName, email, age, salary, department }) {
    await this.locators.addButton.click();

    await this.locators.firstNameInput.fill(firstName);
    await this.locators.lastNameInput.fill(lastName);
    await this.locators.emailInput.fill(email);
    await this.locators.ageInput.fill(age);
    await this.locators.salaryInput.fill(salary);
    await this.locators.departmentInput.fill(department);

    await this.locators.submitButton.click();

    await expect(this.locators.table).toContainText(firstName);
    await expect(this.locators.table).toContainText(lastName);
  }

  async editLastUserAge(newAge) {
    await this.locators.editButton.click();
    await this.locators.ageInput.fill(newAge);
    await this.locators.submitButton.click();

    await expect(this.locators.table).toContainText(newAge);
  }

  async deleteLastUser(firstNameToDelete) {
    await this.locators.deleteButton.click();
    await expect(this.locators.table).not.toContainText(firstNameToDelete);
  }
}
