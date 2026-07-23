## Running Tests

Install dependencies:

```bash
npm install
```

Run all tests:

```bash
npm run wdio
```

The tests will run in:

- Google Chrome
- Microsoft Edge

in parallel.

---

## Generating Allure Report

After the test execution, generate the report:

```bash
npx allure generate allure-results --clean -o allure-report
```

Open the report:

```bash
npx allure open allure-report
```

---

"End-to-End" Flow

Focus: Happy path execution and checkout logic.

Launch URL: [https://www.saucedemo.com/](https://www.saucedemo.com/

UC-1 Checkout Flow:

oLogin with standard_user.

oAdd a specific product to the cart (parametrize the product name, e.g., "Sauce Labs Backpack").

oNavigate to the Cart and validate the item is present.

oProceed to Checkout.

oFill in the Information form (First Name, Last Name, Zip).

oComplete the checkout and validate the success message: "Thank you for your order!".

UC-2 Data Driven Login:

oUse a Data Provider to test login with:

1. standard_user (Should pass).

2. locked_out_user (Should fail with specific error message).

Technical Requirements:

Tool: WebDriverIO.

Browsers: Chrome, Edge (Run in Parallel).

Pattern: Page Object Model (POM).

Locators: CSS Selectors.

Reporting: Generate an Allure Report (or similar HTML report) for the test run.

Documentation: Add a README.md explaining how to run the tests and generate the report.