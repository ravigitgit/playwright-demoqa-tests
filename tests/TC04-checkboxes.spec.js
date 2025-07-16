import { test } from '@playwright/test';
import { CheckBoxPage } from '../pageObject/checkBoxPage';

test('Checkbox Tree - Expand, Select, and Validate Output', async ({ page }) => {
  const checkBoxPage = new CheckBoxPage(page);

  await checkBoxPage.navigateToCheckBoxPage();

  await checkBoxPage.expandAllNodes();

  await checkBoxPage.selectCheckboxes(['notes', 'react', 'commands']);

  await checkBoxPage.validateSelectedOutput(['notes', 'react', 'commands']);
});
