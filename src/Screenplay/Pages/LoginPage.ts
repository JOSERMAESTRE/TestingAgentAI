import { Page } from "@playwright/test";

export class LoginPage {
    constructor(private page: Page) {}

    async EnterCredentials(username: string, password: string) {
        await this.page.fill("#user-name", username);
        await this.page.fill("#password", password);
        await this.page.click("#login-button");
    }

    async GetErrorMessage(): Promise<string | null> {
        return await this.page.locator(".error-message-container").isVisible()
            ? await this.page.locator(".error-message-container").textContent()
            : null;
    }
}
