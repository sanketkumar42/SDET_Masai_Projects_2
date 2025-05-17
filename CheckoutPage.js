class CheckoutPage {
    visitCartAndCheckout() {
      cy.visit('https://demowebshop.tricentis.com/cart');
      cy.get('#termsofservice').check();
      cy.get('#checkout').click();
    }
  
    continueAsGuest() {
      cy.get('.checkout-as-guest-button').click();
    }
  
    fillBillingAddress({
      firstName,
      lastName,
      email,
      country,
      city,
      address,
      zip,
      phone
    }) {
      cy.get('#BillingNewAddress_FirstName').clear().type(firstName);
      cy.get('#BillingNewAddress_LastName').clear().type(lastName);
      cy.get('#BillingNewAddress_Email').clear().type(email);
      cy.get('#BillingNewAddress_CountryId').select(country);
      cy.get('#BillingNewAddress_City').type(city);
      cy.get('#BillingNewAddress_Address1').type(address);
      cy.get('#BillingNewAddress_ZipPostalCode').type(zip);
      cy.get('#BillingNewAddress_PhoneNumber').type(phone);
      cy.get('input.button-1.new-address-next-step-button').click();
    }
  
    continueShippingMethod() {
      cy.get('input.button-1.shipping-method-next-step-button').click();
    }
  
    continuePaymentMethod() {
      cy.get('input.button-1.payment-method-next-step-button').click();
    }
  
    continuePaymentInfo() {
      cy.get('input.button-1.payment-info-next-step-button').click();
    }
  
    confirmOrder() {
      cy.get('input.button-1.confirm-order-next-step-button').click();
    }
  
    getOrderSuccessMessage() {
      return cy.contains('Your order has been successfully processed!');
    }
  
    submitEmptyBillingForm() {
      cy.get('input.button-1.new-address-next-step-button').click();
    }
  
    getFieldError(fieldId) {
      return cy.get(`#${fieldId}-error`);
    }
  }
  
  export default CheckoutPage;
  