import CheckoutPage from './support/pages/CheckoutPage';

const checkoutPage = new CheckoutPage();

describe('Checkout Process with POM', () => {
  beforeEach(() => {
    cy.visit('https://demowebshop.tricentis.com/build-your-own-computer');
    cy.get('#add-to-cart-button-1').click();
    cy.wait(1000);
    checkoutPage.visitCartAndCheckout();
  });

  it('Completes guest checkout flow successfully', () => {
    checkoutPage.continueAsGuest();

    checkoutPage.fillBillingAddress({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      country: 'United States',
      city: 'New York',
      address: '123 Main St',
      zip: '10001',
      phone: '1234567890'
    });

    checkoutPage.continueShippingMethod();
    checkoutPage.continuePaymentMethod();
    checkoutPage.continuePaymentInfo();
    checkoutPage.confirmOrder();

    checkoutPage.getOrderSuccessMessage().should('be.visible');
  });

  it('Shows validation errors when billing fields are missing', () => {
    checkoutPage.continueAsGuest();
    checkoutPage.submitEmptyBillingForm();

    checkoutPage.getFieldError('BillingNewAddress_FirstName').should('contain', 'First name is required.');
    checkoutPage.getFieldError('BillingNewAddress_LastName').should('contain', 'Last name is required.');
    checkoutPage.getFieldError('BillingNewAddress_Email').should('contain', 'Email is required.');
  });
});