import { LoginPage } from "../Pages/LoginPage";
import { AIService } from "../Models/AIService";
import { Page } from "@playwright/test";

export class Login {
    static async AICredentials(page: Page) {
        const { username, password } = await AIService.GenerateAICredentials();
        console.log(`🔹 Login with User: ${username}, Password: ${password}`);

        const loginPage = new LoginPage(page);
        await loginPage.EnterCredentials(username, password);

        return loginPage.GetErrorMessage();
    }
}
