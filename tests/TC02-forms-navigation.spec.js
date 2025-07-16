import { test } from '@playwright/test';
import { PracticeForm } from '../pageObject/formPage';

test('Complete form flow: navigate, fill, submit, and verify confirmation', async ({ page }) => {
  const form = new PracticeForm(page);

  await form.navigateToForm();
  await form.fillForm();
  await form.submitFormAndValidate();
});
