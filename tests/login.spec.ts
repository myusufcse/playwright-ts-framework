import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { testData } from '../utils/testData';

test.describe('Login Tests', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigateTo('https://www.saucedemo.com/');
    });

    test('should login successfully with valid credentials', async () => {
        await loginPage.enterUsername(testData.validUser.username);
        await loginPage.enterPassword(testData.validUser.password);
        await loginPage.submitLogin();

        const dashboardTitle = await loginPage.getDashboardTitle();
        expect(dashboardTitle).toBe(testData.homePage.title);
    });

    test('should show error message with invalid credentials', async () => {
        await loginPage.enterUsername(testData.invalidUser.username);
        await loginPage.enterPassword(testData.invalidUser.password);
        await loginPage.submitLogin();

        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service');
    });
});