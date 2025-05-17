import ProductDetailsPage from './support/pages/ProductDetailsPage';

const productDetailsPage = new ProductDetailsPage();

describe('Product Details Verification', () => {
  beforeEach(() => {
    productDetailsPage.visitProductPage('https://demowebshop.tricentis.com/build-your-own-computer');
  });

  it('Verifies product title, description, and price', () => {
    productDetailsPage.getProductTitle().should('contain.text', 'Build your own computer');
    productDetailsPage.getProductDescription().should('be.visible');
    productDetailsPage.getProductPrice().should('match', /\$\d+/);
  });

  it('Verifies specifications or specs section if available', () => {
    productDetailsPage.getProductSpecs().should('exist');
  });

  it('Ensures product image is loaded and visible', () => {
    productDetailsPage.getProductImage()
      .should('be.visible')
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });
});