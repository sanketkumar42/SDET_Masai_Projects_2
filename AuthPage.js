class AuthPage {
    visitLogin() {
      cy.visit('https://demowebshop.tricentis.com/login');
    }
  
    visitRegister() {
      cy.visit('https://demowebshop.tricentis.com/register');
    }
  
    registerUser({ gender = 'M', firstName, lastName, email, password }) {
      if (gender === 'M') cy.get('#gender-male').check();
      else cy.get('#gender-female').check();
  
      cy.get('#FirstName').type(firstName);
      cy.get('#LastName').type(lastName);
      cy.get('#Email').type(email);
      cy.get('#Password').type(password);
      cy.get('#ConfirmPassword').type(password);
      cy.get('#register-button').click();
    }
  
    login(email, password) {
      cy.get('#Email').type(email);
      cy.get('#Password').type(password);
      cy.get('input[value="Log in"]').click();
    }
  }
  
  export default AuthPage;
  