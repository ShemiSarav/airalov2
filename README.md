# 🧪 Airalo Playwright Tests

This project contains automated **UI and API tests** for the Airalo platform using [Playwright](https://playwright.dev/). It includes a clean service layer (`AiraloAPI`) to simplify and structure API interactions.

> ✅ Designed for maintainability, speed, and CI/CD integration.

---

## 📁 Project Structure

```
src/
├── services/        # Service layer abstraction for API logic
│   └── airaloApi.ts
├── tests/
│   ├── api/         # API tests (e.g. order flows, package listings)
│   │   └── order.spec.ts
│   └── ui/          # UI tests (e.g. Japan package page)
├── config/          # Config variables (e.g. env.ts)
```

---

## 🚀 Getting Started

### 1. Clone and install dependencies

```bash
git clone https://github.com/ShemiSarav/airalov2.git
cd airalov2
npm install
```

---

### 2. Configure Environment Variables

Create a `.env` file (or modify `src/config/env.ts` if you're not using dotenv):

```
API_BASE_URL=https://sandbox-partners-api.airalo.com
CLIENT_ID=your_client_id
CLIENT_SECRET=your_client_secret
```

✅ These are required for API test authentication.

---

## 🧪 Running the Tests

### Run all tests (UI + API)

```bash
npx playwright test
```

### Run only API tests

```bash
npx playwright test src/tests/api
```

### Run only UI tests

```bash
npx playwright test src/tests/ui
```

### View the latest report

```bash
npx playwright show-report
```

---

## ⚙️ CI/CD Integration

This project uses **GitHub Actions** to run tests automatically on push to `main`.

![CI](https://github.com/ShemiSarav/airalov2/actions/workflows/playwright.yml/badge.svg)

You’ll find the workflow config in:

```
.github/workflows/playwright.yml
```

---

## 🧱 Technologies Used

- [Playwright](https://playwright.dev/)
- TypeScript
- GitHub Actions (CI)
- Node.js 18+

---

## 📌 Features

- ✅ Clean **API service layer** (`AiraloAPI`)
- ✅ CI-compatible test design
- ✅ Modular structure for API & UI tests
- ✅ Reusable test logic and configurations
- ✅ Report-friendly assertions (`test.step`, `testInfo.attach`, etc.)

---

## 📝 License

This project is intended for learning and demonstration purposes. License info can be added here if needed (MIT, Apache 2.0, etc.).

---

## 👋 Acknowledgements

Built with ❤️ by [@ShemiSarav](https://github.com/ShemiSarav).  
API access provided by the [Airalo Partner Sandbox](https://www.airalo.com/partners).