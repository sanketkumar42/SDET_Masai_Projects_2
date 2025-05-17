# Cypress Testing - Tricentis Demo Web Shop

This project is designed to demonstrate **end-to-end testing** using [Cypress](https://www.cypress.io/) on the [Tricentis Demo Web Shop](https://demowebshop.tricentis.com/), a publicly available e-commerce site used for QA and automation practice.

---

## 🌐 Website Under Test

**URL**: [https://demowebshop.tricentis.com/](https://demowebshop.tricentis.com/)

The site includes features such as user registration, login, product categories, cart functionality, and checkout – perfect for automating common e-commerce workflows.

---

## 🧪 What You Can Test with Cypress

- User registration & login
- Adding items to the shopping cart
- Searching for products
- Filtering product listings
- Adding/removing from wishlist
- Proceeding through checkout
- Validating UI elements and error messages
- API intercepts and network request validations

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/demo-webshop-cypress.git
cd demo-webshop-cypress
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Cypress Tests

#### In Headed Mode:

```bash
npx cypress open
```

#### In Headless Mode:

```bash
npx cypress run
```

---

## 🗂️ Project Structure

```
cypress/
  ├── e2e/
  │   ├── login.cy.js
  │   ├── registration.cy.js
  │   ├── addToCart.cy.js
  │   ├── checkout.cy.js
  │   └── search.cy.js
  ├── fixtures/
  ├── support/
  │   ├── commands.js
  │   └── e2e.js
cypress.config.js
```

---

## 🧾 Sample Test - Add to Cart

```js
describe('Add Product to Cart', () => {
  it('should add a product to the shopping cart', () => {
    cy.visit('https://demowebshop.tricentis.com/');
    cy.get('.product-box-add-to-cart-button').first().click();
    cy.get('.content').should('contain', 'The product has been added to your shopping cart');
  });
});
```

---

## 🛠 Tools & Technologies

- Cypress 13+
- JavaScript / TypeScript (optional)
- Mocha + Chai assertions
- GitHub Actions (optional for CI)

---

## ⚠️ Important Notes

- **No real orders** are placed – this is a demo environment.
- Use fake data for registration and checkout.
- Be mindful of data persistence (some data resets may occur).

---

## 📄 License

This is a demo project using publicly available test infrastructure provided by **Tricentis**. Intended for educational and QA automation practice only.

---

## 🙋 Support

For Cypress documentation, visit: [https://docs.cypress.io](https://docs.cypress.io)

For Tricentis Demo Web Shop info: [https://www.tricentis.com](https://www.tricentis.com)
