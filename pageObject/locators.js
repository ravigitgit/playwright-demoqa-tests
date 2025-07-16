export class Locators {
    constructor(page) {

        this.page = page;
        this.initialize();
    }

    initialize() {

        this.initializeLoginPage();
        this.initializeWebTablesPage();
        this.initializeFormPage();
        this.initializeCheckboxPage();
    }

    initializeLoginPage() {

        // Login Page
        this.usernameInput = this.page.getByPlaceholder('UserName');
        this.passwordInput = this.page.getByPlaceholder('Password');
        this.loginButton = this.page.getByRole('button', { name: 'Login' });
        this.errorMessage = this.page.locator('#name');
        this.logoutText = this.page.getByText('Log out');
        this.usernameDisplay = this.page.locator('#userName-value');
    }

    initializeWebTablesPage() {

        // Navigation
        this.elementsCard = this.page.getByText('Elements', { exact: true });
        this.webTablesLink = this.page.getByText('Web Tables', { exact: true });

        // Buttons
        this.addButton = this.page.getByRole('button', { name: 'Add' });
        this.submitButton = this.page.getByRole('button', { name: 'Submit' });

        // Form fields
        this.firstNameInput = this.page.getByPlaceholder('First Name');
        this.lastNameInput = this.page.getByPlaceholder('Last Name');
        this.emailInput = this.page.getByPlaceholder('name@example.com');
        this.ageInput = this.page.getByPlaceholder('Age');
        this.salaryInput = this.page.getByPlaceholder('Salary');
        this.departmentInput = this.page.getByPlaceholder('Department');

        // Table
        this.table = this.page.locator('.rt-table');

        // Actions
        this.editButton = this.page.locator('span[title="Edit"]').last();
        this.deleteButton = this.page.locator('span[title="Delete"]').last();
    }

    initializeFormPage() {

        this.formsCard = this.page.getByText('Forms', { exact: true });
        this.practiceFormLink = this.page.getByText('Practice Form', { exact: true });
        this.formTitle = this.page.getByText('Student Registration Form');

        this.firstNameInput = this.page.getByPlaceholder('First Name');
        this.lastNameInput = this.page.getByPlaceholder('Last Name');
        this.emailInput = this.page.getByPlaceholder('name@example.com');
        this.genderRadio = this.page.locator('#gender-radio-1');
        this.mobileInput = this.page.getByPlaceholder('Mobile Number');
        this.dobInput = this.page.locator('#dateOfBirthInput');
        this.subjectsInput = this.page.locator('#subjectsInput');
        this.subjectOption = this.page.getByText('Maths', { exact: true });
        this.hobbyReading = this.page.locator('label[for="hobbies-checkbox-2"]');
        this.fileUploadInput = this.page.locator('input[type="file"]');
        this.addressInput = this.page.getByPlaceholder('Current Address');
        this.stateDropdown = this.page.locator('#state');
        this.stateOption = this.page.getByText('NCR', { exact: true });
        this.cityDropdown = this.page.locator('#city');
        this.cityOption = this.page.getByText('Delhi', { exact: true });
        this.submitButton = this.page.getByRole('button', { name: 'Submit' });

        this.modalTitle = this.page.getByText('Thanks for submitting the form');
        this.resultTable = this.page.locator('.table-responsive');
    }

    initializeCheckboxPage() {

        // Navigation
        this.elementsCard = this.page.getByText('Elements', { exact: true });
        this.checkBoxLink = this.page.getByText('Check Box', { exact: true });

        // Functional
        this.expandAllBtn = this.page.locator('button[title="Expand all"]');
        this.output = this.page.locator('#result');
    }

}