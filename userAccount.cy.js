import AuthPage from './support/pages/AuthPage';
import AccountPage from './support/pages/AccountPage';

const authPage = new AuthPage();
const accountPage = new AccountPage();

const email = `testuser_${Date.now()}@example.com`;
const password = 'Test@1234';

describe('User Account Functionality', () => {
  it('Registers a new user successfully', () => {
    authPage.visitRegister();
    authPage.registerUser({
      gender: 'M',
      firstName: 'John',
      lastName: 'Doe',
      email,
      password
    });

    cy.contains('Your registration completed').should('be.visible');
  });

  it('Logs in and updates user profile info', () => {
    authPage.visitLogin();
    authPage.login(email, password);

    accountPage.visitAccountInfo();
    accountPage.updateFirstName('Johnny');
    cy.get('#FirstName').should('have.value', 'Johnny');
  });

  it('Views order history (should be empty)', () => {
    accountPage.visitOrderHistory();
    accountPage.getOrderList().should('contain', 'No orders');
  });

  it('Adds item to wishlist and verifies it', () => {
    accountPage.addToWishlistFromProductPage();
    accountPage.visitWishlist();
    accountPage.getWishlistItems().should('contain', '14.1-inch Laptop');
  });
});