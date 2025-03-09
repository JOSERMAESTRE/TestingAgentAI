import { Page } from "@playwright/test";

export class InventoryPage {
    constructor(private page: Page) {}

    async GetProductList(): Promise<string[]> {
        return await this.page.locator(".inventory_item_name").allTextContents();
    }

    async IsDisplayed(): Promise<boolean> {
        return await this.page.locator(".inventory_list").isVisible();
    }

    async GetDescription(): Promise<string[]> {
        return await this.page.locator(".inventory_item_desc").allTextContents();
    }
}
