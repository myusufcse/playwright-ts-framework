import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Tests', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigateTo('https://www.saucedemo.com/');
    });

    test('should login successfully with valid credentials', async () => {
        await loginPage.enterUsername("standard_user");
        await loginPage.enterPassword("secret_sauce");
        await loginPage.submitLogin();

        const dashboardTitle = await loginPage.getDashboardTitle();
        expect(dashboardTitle).toBe('Swag Labs');
    });

    test('should show error message with invalid credentials', async () => {
        await loginPage.enterUsername("standard_user");
        await loginPage.enterPassword("wrong_password");
        await loginPage.submitLogin();

        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service');
    });
});