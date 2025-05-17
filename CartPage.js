class CartPage {
    visitCart() {
      cy.visit('https://demowebshop.tricentis.com/cart');
    }
  
    getCartRows() {
      return cy.get('.cart-item-row');
    }
  
    updateQuantity(index, qty) {
      this.getCartRows().eq(index).find('.qty-input').clear().type(qty);
    }
  
    clickUpdateCart() {
      cy.get('input[name="updatecart"]').click();
    }
  
    getTotal() {
      return cy.get('.product-subtotal');
    }
  
    removeItem(index) {
      this.getCartRows().eq(index).find('input.remove-from-cart').check();
      this.clickUpdateCart();
    }
  
    getEmptyCartMessage() {
      return cy.contains('Your Shopping Cart is empty!');
    }
  }
  
  export default CartPage;
  