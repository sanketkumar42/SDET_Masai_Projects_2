class LayoutPage {
    visitHome() {
      cy.visit('https://demowebshop.tricentis.com/');
    }
  
    getHeader() {
      return cy.get('.header');
    }
  
    getFooter() {
      return cy.get('.footer');
    }
  
    getMainNav() {
      return cy.get('.top-menu');
    }
  
    getSearchBox() {
      return cy.get('#small-searchterms');
    }
  
    getLogo() {
      return cy.get('.header-logo');
    }
  }
  
  export default LayoutPage;
  