import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

export class AIService {
    private static genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

    static async GenerateAICredentials() {
        const model = this.genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        const prompt = `Give me a username and password to test login on SauceDemo.
                        The response should be only JSON without explanations:
                        { "username": "user", "password": "pass" }`;

        const result = await model.generateContent(prompt);
        let textResponse = result.response.text().replace(/```json|```/g, "").trim();

        try {
            return JSON.parse(textResponse);
        } catch (error) {
            console.error("❌ Error parsing JSON:", error);
            return { username: "standard_user", password: "secret_sauce" }; 
        }
    }

    static async AnalyzeResponse(responseText: string) {
        const model = this.genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        const result = await model.generateContent(`Accurately analyze this login response.: "${responseText}"`);
        return result.response.text();
    }

    static async AnalyzeProducts(names: string[]) {
        const model = this.genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        const result = await model.generateContent(`Accurately analyze these product names: '${names}' and list any Visibility and coherence bugs.`);
        return result.response.text();
    }

    static async analyzeProductDescription(Details: string[]) {
        const model = this.genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        const result = await model.generateContent(`Accurately analyze the following descriptions: "${Details}" and list any Visibility and coherence bugs.`);
        return result.response.text();
    }
}
