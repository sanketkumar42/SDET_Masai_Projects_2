import HomePage from './support/pages/HomePage';

const homePage = new HomePage();

describe('Homepage Navigation Tests', () => {
  beforeEach(() => {
    homePage.visit();
  });

  it('Header links navigate correctly', () => {
    homePage.getHeaderLink('Log in').click();
    cy.url().should('include', '/login');

    homePage.visit();

    homePage.getHeaderLink('Register').click();
    cy.url().should('include', '/register');
  });

  it('Footer links navigate correctly', () => {
    homePage.getFooterLink('Search').click();
    cy.url().should('include', '/search');
  });

  it('Search bar handles valid keywords', () => {
    homePage.search('laptop');
    homePage.getSearchResults().should('have.length.greaterThan', 0);
  });

  it('Search bar handles invalid or edge-case keywords', () => {
    homePage.search('!@#$%^&*()');
    homePage.getNoResultsMessage().should('be.visible');
  });
});