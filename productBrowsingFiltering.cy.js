import ProductPage from './support/pages/ProductPage';

const productPage = new ProductPage();

describe('Product Browsing and Filtering', () => {
  it('Displays categories and subcategories correctly', () => {
    cy.visit('https://demowebshop.tricentis.com/');
    productPage.visitCategory('Computers');
    cy.url().should('include', '/computers');
    productPage.visitSubcategory('Desktops');
    cy.url().should('include', '/desktops');
    productPage.getProductItems().should('exist');
  });

  it('Applies manufacturer filter and validates results', () => {
    cy.visit('https://demowebshop.tricentis.com/desktops');
    productPage.filterByManufacturer('Simple Computer');
    productPage.getFilteredResults().should('have.length.at.least', 1);
  });

  it('Applies price filter and validates results', () => {
    cy.visit('https://demowebshop.tricentis.com/desktops');
    productPage.applyPriceFilter(1000, 1200);
    productPage.getFilteredResults().each(($el) => {
      cy.wrap($el).find('.prices').invoke('text').then((priceText) => {
        const price = parseFloat(priceText.replace(/[^0-9.]/g, ''));
        expect(price).to.be.within(1000, 1200);
      });
    });
  });
});