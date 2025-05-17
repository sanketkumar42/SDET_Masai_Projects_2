class AccountPage {
    visitAccountInfo() {
      cy.get('.account').click();
    }
  
    updateFirstName(newFirstName) {
      cy.get('#FirstName').clear().type(newFirstName);
      cy.get('input.button-1.save-customer-info-button').click();
    }
  
    visitOrderHistory() {
      cy.contains('Orders').click();
    }
  
    visitWishlist() {
      cy.contains('Wishlist').click();
    }
  
    getOrderList() {
      return cy.get('.order-list');
    }
  
    addToWishlistFromProductPage() {
      cy.visit('https://demowebshop.tricentis.com/14-inch-laptop');
      cy.get('input[value="Add to wishlist"]').click();
    }
  
    getWishlistItems() {
      return cy.get('.wishlist-content');
    }
  }
  
  export default AccountPage;
  