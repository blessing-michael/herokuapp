/// <reference types = "cypress" />

describe('Basic Auth Page Tests', () => {
    const username = 'admin';
    const password = 'admin';
    const baseUrl = `https://${username}:${password}@the-internet.herokuapp.com/basic_auth`;
  
    beforeEach(() => {
      // Navigate to the Basic Auth page before each test
      cy.visit(baseUrl);
    });
    it('should display correct page title', ()=>{
        cy.title().should('eq', 'The Internet')
    })
    it('should successfully authenticate and display the success message', () => {
        // Verify the heading
        cy.get('h3').should('have.text', 'Basic Auth');
    
        // Verify the success message
        cy.get('p').should('contain.text', 'Congratulations! You must have the proper credentials.');
      });
    
})