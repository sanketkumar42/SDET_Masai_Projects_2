class HomePage {
  visit() {
    cy.visit('https://demowebshop.tricentis.com/');
  }

  getHeaderLink(text) {
    return cy.get('div.header-menu').contains(text);
  }

  getFooterLink(text) {
    return cy.get('div.footer-block').contains(text);
  }

  search(keyword) {
    cy.get('#small-searchterms').clear().type(`${keyword}{enter}`);
  }

  getSearchResults() {
    return cy.get('.product-item');
  }

  getNoResultsMessage() {
    return cy.contains('No products were found');
  }
}

export default HomePage;