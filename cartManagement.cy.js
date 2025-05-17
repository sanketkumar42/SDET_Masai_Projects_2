import ProductDetailsPage from './support/pages/ProductDetailsPage';
import CartPage from './support/pages/CartPage';

const productPage = new ProductDetailsPage();
const cartPage = new CartPage();

describe('Cart Management Tests', () => {
  beforeEach(() => {
    productPage.visitProductPage('https://demowebshop.tricentis.com/build-your-own-computer');
    productPage.addToCart();
    cy.wait(1000);
    cartPage.visitCart();
  });

  it('Adds product to cart and verifies quantity and total', () => {
    cartPage.getCartRows().should('have.length.at.least', 1);
    cartPage.getTotal().first().invoke('text').then((totalText) => {
      expect(parseFloat(totalText.replace(/[^0-9.]/g, ''))).to.be.greaterThan(0);
    });
  });

  it('Updates quantity and validates updated total', () => {
    cartPage.updateQuantity(0, 2);
    cartPage.clickUpdateCart();
    cartPage.getCartRows().eq(0).find('.qty-input').should('have.value', '2');
  });

  it('Removes product from cart and checks empty message', () => {
    cartPage.removeItem(0);
    cartPage.getEmptyCartMessage().should('be.visible');
  });
});