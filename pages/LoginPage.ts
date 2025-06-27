import BasePage from './BasePage';

export class LoginPage extends BasePage {

    getDashboardTitle() {
        return this.page.title();
    }
    
    private usernameInput = 'input[name="user-name"]';
    private passwordInput = 'input[name="password"]';
    private loginButton = 'input[name="login-button"]';
    private errorMessage = 'h3[data-test="error"]';

    async enterUsername(username: string) {
        await this.page.fill(this.usernameInput, username);
    }

    async enterPassword(password: string) {
        await this.page.fill(this.passwordInput, password);
    }

    async submitLogin() {
        await this.page.click(this.loginButton);
    }

    async getErrorMessage() {
        await this.page.waitForSelector(this.errorMessage);
        return this.page.locator(this.errorMessage).innerText();
    }

    async login(username: string, password: string) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.submitLogin();
    }
}