# 🏆 Playwright + Screenplay + Serenity/JS + AI

This project implements automated testing with **Playwright** following the **Screenplay** pattern, along with **Serenity/JS** to enhance maintainability and scalability. It also integrates **Gemini AI** to generate credentials and analyze responses.

## 📂 Project Structure

```
/src
  ├── Screenplay
  │   ├── Tasks
  │   │   ├── Login.ts
  │   │   ├── VerifyProducts.ts
  │   ├── Questions
  │   │   ├── LoginResponse.ts
  │   ├── models
  │   │   ├── AIService.ts
  │   ├── pages
  │   │   ├── LoginPage.ts
  │   │   ├── InventoryPage.ts
/tests
  ├── demo-todo-app.spec.ts
```

### 📌 **Main Components**

- **`Models/AIService.ts`** → Communicates with Gemini AI to generate credentials and analyze data.
- **`Pages/`** → UI element mapping.
- **`Tasks/`** → Actions performed by the user (e.g., login, verify products).
- **`Questions/`** → Validations to extract information from the UI.

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/JOSERMAESTRE/TestingAgentAI.git
cd TestingAgentAI
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Configure Gemini API Key
Modify **`.env`** file in the project root and add:
```env
GEMINI_API_KEY=your_api_key
```

### 4️⃣ Run Tests
```bash
npx npx playwright test --ui
```

## 📊 Key Features
✅ **Playwright** for modern browser testing.  
✅ **Screenplay Pattern** for modular and reusable code.  
✅ **Serenity/JS** for better test organization.  
✅ **Gemini AI** for credential generation and response analysis.  

## 🛠 Future Improvements
🔹 Add more tests for negative scenarios.  
🔹 Implement reporting with Allure.  
🔹 Improve error handling in AI responses.  

---
**Developed with 💙 by [JOSERMAESTRE]**

