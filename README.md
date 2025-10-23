# Promo-Commerce-E2E-Tests-with-Playwright

This is an **end-to-end (E2E)** test suite for the **Promo Commerce** e-commerce site using **Playwright**.  
It covers **login** and **adding products to the cart** on  👉 [https://rahulshettyacademy.com/angularpractice/](https://rahulshettyacademy.com/angularpractice/) 

---

## 📋 Contents
- [Requirements](#-requirements-)
- [Setup](#-setup-)
- [Running Tests](#-running-tests-)
- [Test Details](#-test-details-)
- [Config](#-config-)
---

### 🧰 File Overview

- **BasePage.ts** → Base class with shared methods (clicking buttons, filling fields).  
- **LoginPage.ts** → Handles login page inputs and form submission. 🔐  
- **HomePage.ts** → Manages product selection and checkout on the shop page. 🛍️
- **CheckOutPage.ts**: Automates checkout with location and terms. 💳
- **PomPromo.spec.ts** → Main test script for login and cart actions. 🧪  
- **TestData.json** → Stores test data (username, email, password, etc.). 📊  
- **PromoFixture.ts** → Sets up Playwright page objects. 🔄  
- **playwright.config.ts** → Playwright configuration file. ⚙️  

---

## 🛠️ Requirements

- **Node.js** (v16 or higher)  
- **Playwright** (installed via npm)  
- **Modern browser** (Chromium, Firefox, or WebKit) 🌐  

---

## ⚙️ Setup

Clone the repository:

```bash
git clone https://github.com/Fatma-shehata123/Promo-Commerce-E2E-Tests-with-Playwright.git
cd Promo-Commerce-E2E-Tests-with-Playwright
```
Install dependencies:
```
npm install
```
Running Tests

Run Playwright tests in headless mode:
```
npx playwright test
```

Run tests with headed mode (for debugging)
```
npx playwright test --headed
```
Run a specific test file:
```
npx playwright test tests/PomPromo.spec.ts
```

## 📝 Test Details
- **Login Test:** Verifies user login with credentials from TestData.json.
- **Cart Test:** Adds products to cart and validates cart contents.

## 🔧 Config
Modify playwright.config.ts to adjust browser settings, viewport size, timeout, etc.
