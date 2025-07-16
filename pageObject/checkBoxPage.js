import { expect } from '@playwright/test';
import { Locators } from './locators';

export class CheckBoxPage {
    constructor(page) {
        this.page = page;
        this.locators = new Locators(page);
    }

    async navigateToCheckBoxPage() {
        await this.page.goto('/');
        await this.locators.elementsCard.scrollIntoViewIfNeeded();
        await this.locators.elementsCard.click();

        await this.locators.checkBoxLink.scrollIntoViewIfNeeded();
        await this.locators.checkBoxLink.click();

        await expect(this.page).toHaveURL(/.*checkbox/);
    }

    async expandAllNodes() {
        await this.locators.expandAllBtn.click();
    }

    async selectCheckboxes(checkboxIds = []) {
        for (const id of checkboxIds) {
            await this.page.locator(`label[for="tree-node-${id}"]`).click();
        }
    }

    async validateSelectedOutput(expected = []) {
        for (const value of expected) {
            await expect(this.locators.output).toContainText(value.toLowerCase());
        }
    }
}
