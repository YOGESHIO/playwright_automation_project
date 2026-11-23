
# 👋 Hi, I'm Yogesh Dixit

### Senior QA Automation Engineer | Playwright Automation Engineer

🚀 Quality Assurance Engineer with **7+ years of experience** in Software Testing, Banking, FinTech, and Digital Lending applications.

I specialize in Manual Testing, UI Automation, API Testing, Database Validation, and End-to-End Testing. Currently focusing on building scalable automation frameworks using Playwright with JavaScript.

---

## 👨‍💻 About Me

- 💼 7+ years of experience in Software Quality Assurance.
- 🏦 Experienced in Banking, FinTech, and Digital Lending domains.
- 🎭 Working with Playwright and JavaScript for UI Automation.
- 🧩 Building custom automation frameworks using Page Object Model (POM).
- 🔗 Experienced in REST API Testing using Postman.
- 🗄️ Database Testing using SQL and MySQL.
- 🔍 Experienced in Functional, Regression, Integration, Smoke, and Sanity Testing.
- 🤖 Using AI tools like ChatGPT and Claude for QA productivity.
- 🌱 Continuously improving Automation Testing and Quality Engineering skills.

---

## 🛠️ Technical Skills

| Category | Technologies & Tools |
|---|---|
| Automation Testing | Playwright, JavaScript |
| Framework | Page Object Model (POM), Reusable Functions |
| API Testing | Postman, REST API, JSON |
| Database Testing | SQL, MySQL |
| Manual Testing | Functional, Regression, Smoke, Sanity, SIT |
| Automation Concepts | Locators, Assertions, Auto-waiting, Async/Await |
| Reporting & Debugging | Playwright HTML Reports, Trace Viewer |
| Version Control | Git, GitHub |
| Project Management | Jira, Azure DevOps, TFS |
| AI Tools | ChatGPT, Claude |
| Methodology | Agile, Scrum |

---

## 🎭 Playwright Automation Framework

I work with a custom Playwright framework based on the Page Object Model (POM).

### Framework Features

- Page Object Model (POM)
- Reusable Page Classes and Methods
- JSON-driven Test Data
- Custom Locators
- Web-first Assertions
- Built-in Auto-waiting
- Cross-browser Testing
- Playwright HTML Reporting
- Trace Viewer Debugging
- Reusable Test Functions

### Example Project Structure

```text
playwright-automation/
│
├── tests/
│   ├── login.spec.js
│   └── dashboard.spec.js
│
├── pages/
│   ├── LoginPage.js
│   └── DashboardPage.js
│
├── test-data/
│   └── testData.json
│
├── utils/
│   └── helpers.js
│
├── playwright.config.js
├── package.json
└── README.md
```

---

## 🧪 Automation Testing Example

### Playwright Login Test

```javascript
import { test, expect } from '@playwright/test';

test('Verify successful login', async ({ page }) => {

    await page.goto('/login');

    await page.getByLabel('Username').fill('testuser');

    await page.getByLabel('Password').fill('password123');

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/dashboard/);

});
```

---

## 🔗 API Testing

Experienced in REST API testing using Postman.

### API Testing Activities

- GET, POST, PUT, PATCH and DELETE requests.
- Status Code Validation.
- Request and Response Validation.
- JSON Schema Validation.
- Header and Authentication Validation.
- Bearer Token Authentication.
- API Negative Testing.
- Response Time Validation.
- Postman Collection Runner.
- Environment and Global Variables.

---

## 🗄️ Database Testing

Hands-on experience in SQL and MySQL database validation.

### Database Testing Activities

- SELECT, INSERT and UPDATE queries.
- JOIN and GROUP BY operations.
- Data Integrity Validation.
- Backend Data Verification.
- Transaction Validation.
- Audit Log Verification.
- Loan Account and EMI Data Validation.

---

## 🏦 Banking & FinTech Domain Experience

Experienced in testing enterprise banking and financial applications.

### Key Functional Areas

- CASA (Current Account and Savings Account).
- Customer Onboarding.
- Digital KYC (Aadhaar and PAN Verification).
- Loan Management System (LMS).
- Personal Loan, Gold Loan and other Lending Workflows.
- Maker-Checker Approval Workflow.
- Credit Decisioning.
- EMI and Interest Calculation.
- Role-Based Access Control.

---

## 💼 Key Projects

### 1. NAMCO Bank – Enterprise Loan Management System

**Technologies:** Playwright, JavaScript, Postman, MySQL, .NET, Angular, Mifos LMS.

Responsibilities:
- Tested end-to-end customer onboarding.
- Validated CASA and KYC workflows.
- Automated login and application submission scenarios.
- Tested Maker-Checker approval workflows.
- Validated loan balances, EMI schedules and interest calculations.

### 2. IDBRAINE – Digital Identity Verification & e-KYC

**Technologies:** Postman, MySQL, Angular, .NET, REST APIs.

Responsibilities:
- Tested digital KYC onboarding.
- Validated PAN and Aadhaar verification APIs.
- Verified API responses and status codes.
- Validated verification status and audit logs.

### 3. CREDBRAINE – Digital Lending Platform

**Technologies:** Postman, SQL, REST APIs.

Responsibilities:
- Tested credit decisioning workflows.
- Validated loan eligibility and approval thresholds.
- Tested borrower scoring rules.
- Verified backend transaction records.

---

## 💼 Professional Experience

| Company | Designation | Duration |
|---|---|---|
| GTSFinlabs | Senior QA Engineer | April 2026 – Present |
| Finbraine Fintech Pvt. Ltd. | Senior Software Engineer – QA | March 2021 – March 2026 |
| NewVision Softcomm & Consultancy Pvt. Ltd. | Associate QA Engineer | August 2019 – March 2021 |

---

## 🤖 AI-Assisted Quality Engineering

I use AI tools to improve QA productivity and automation development.

- ChatGPT for test scenario generation.
- Claude integration with VS Code.
- AI-assisted test case design.
- Boundary value and edge case analysis.
- Test data generation using JSON and CSV.
- Automation code refactoring and debugging.

---

## 📚 Currently Learning

- Advanced Playwright Automation.
- JavaScript for Test Automation.
- API Automation.
- Scalable Automation Framework Design.
- CI/CD Integration for Automated Testing.

---

## 🎓 Education & Certification

- Bachelor of Technology (B.Tech) – RGPV University, Bhopal.
- Certified MS SQL Developer.

---

## 🔗 Connect With Me

- **GitHub:** https://github.com/YogeshIO
- **LinkedIn:** https://www.linkedin.com/in/yogeshdixit2012/

---

### ⭐ My Goal

To build reliable, scalable, and maintainable automation solutions that improve software quality and accelerate delivery.

**Quality is not an act, it is a habit.**

---

⭐ If you find my QA Automation work useful, feel free to explore my repositories and connect with me!
