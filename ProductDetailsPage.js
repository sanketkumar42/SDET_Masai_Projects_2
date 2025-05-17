class ProductDetailsPage {
    visitProductPage(productUrl) {
      cy.visit(productUrl);
    }
  
    getProductTitle() {
      return cy.get('div.product-name h1');
    }
  
    getProductDescription() {
      return cy.get('div.product-description');
    }
  
    getProductPrice() {
      return cy.get('span.price-value');
    }
  
    getProductSpecs() {
      return cy.get('div.product-specs');
    }
  
    getProductImage() {
      return cy.get('div.gallery img');
    }

    addToCart() {
        cy.get('#add-to-cart-button-1').click(); 
      }
      
  }
  
  export default ProductDetailsPage;
  