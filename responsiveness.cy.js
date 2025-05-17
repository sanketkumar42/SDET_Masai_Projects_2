import LayoutPage from './support/pages/LayoutPage';

const layoutPage = new LayoutPage();

const viewports = {
  desktop: [1280, 720],
  tablet: [768, 1024],
  mobile: [375, 667]
};

describe('Responsive Layout Tests', () => {
  Object.entries(viewports).forEach(([device, size]) => {
    it(`should display layout correctly on ${device}`, () => {
      cy.viewport(size[0], size[1]);
      layoutPage.visitHome();

      layoutPage.getHeader().should('be.visible');
      layoutPage.getFooter().should('be.visible');
      layoutPage.getMainNav().should('be.visible');
      layoutPage.getSearchBox().should('be.visible');
      layoutPage.getLogo().should('be.visible');
    });
  });
});