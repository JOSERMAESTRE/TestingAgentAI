import { InventoryPage } from "../Pages/InventoryPage";
import { AIService } from "../Models/AIService";
import { Page } from "@playwright/test";

export class VerifyProducts {
    static async AnalyzeName(page: Page) {
        const inventoryPage = new InventoryPage(page);
        if (await inventoryPage.IsDisplayed()) {
            const product = await inventoryPage.GetProductList();
            if (product.length > 0) {
                const aiProductsResponse = await AIService.AnalyzeProducts(product);
                console.log('📌 AI analysis (Products):', aiProductsResponse);
            } else {
                console.log("📌 There are no products in the inventory.");
            }
        }
    }

    static async AnalyzeDrescption(page: Page) {
        const inventoryPage = new InventoryPage(page);
        if (await inventoryPage.IsDisplayed()) {
            const Description = await inventoryPage.GetDescription();
            if (Description.length > 0) {
                const aiDetailsResponse = await AIService.analyzeProductDescription(Description);
                console.log('📌 AI analysis (Description):', aiDetailsResponse);
            } else {
                console.log("📌 There are no products in the inventory.");
            }
        }
    }
}
