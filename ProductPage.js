class ProductPage {
    visitCategory(category) {
      cy.get('.top-menu').contains(category).click();
    }
  
    visitSubcategory(subcategory) {
      cy.get('.sub-category-item').contains(subcategory).click();
    }
  
    getProductItems() {
      return cy.get('.product-item');
    }
  
    applyPriceFilter(min, max) {
      // Demo site doesn't have an input-based price filter, so we simulate available ranges
      cy.get('.price-range-filter').contains(`$${min}.00 - $${max}.00`).click();
    }
  
    filterByManufacturer(name) {
      cy.get('.manufacturer-filter').contains(name).click();
    }
  
    getFilteredResults() {
      return cy.get('.product-item');
    }
  }
  
  export default ProductPage;
  