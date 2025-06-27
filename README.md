# Playwright TypeScript Framework

This project is a Playwright testing framework built with TypeScript. It follows the Page Object Model (POM) design pattern to organize test cases and page interactions, making it easier to maintain and scale tests.

## Project Structure

```
playwright-ts-framework/
├── tests/                        # All test cases
│   ├── login.spec.ts            # Test cases for login functionality
│   └── dashboard.spec.ts         # Test cases for dashboard functionality
│
├── pages/                        # Page Object Model files
│   ├── BasePage.ts               # Base class for common page methods
│   └── LoginPage.ts              # Login page specific methods
│
├── utils/                        # Helper functions or constants
│   ├── testData.ts               # Test data used across tests
│   └── logger.ts                 # Utility functions for logging
│
├── config/                       # Environment configs
│   ├── dev.config.ts             # Development environment settings
│   ├── prod.config.ts            # Production environment settings
│   └── index.ts                  # Aggregated configuration settings
│
├── playwright.config.ts          # Main Playwright configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # NPM dependencies & scripts
├── .env                          # Environment variables (optional)
└── README.md                     # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd playwright-ts-framework
   ```

2. **Install dependencies:**
   ```bash
   npm init -y
   npm i -D playwright @playwright/test typescript ts-node
   npx playwright install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the root directory and add any necessary environment variables.

4. **Run tests:**
   You can run the tests using the following command:
   ```bash
   npx playwright test
   ```

## Usage Guidelines

- Test cases are located in the `tests` directory. Each test file should contain related test cases.
- Page objects are defined in the `pages` directory. Use the `BasePage` class for common functionality and extend it for specific pages.
- Use the `fixtures` directory for any reusable test data or setup functions.
- Utility functions can be added to the `utils` directory for logging and other helper functions.
- Configuration settings for different environments can be found in the `config` directory.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
