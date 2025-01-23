/// <reference types = "cypress" />

describe("Add/Remove Elements Page Tests", () => {
  const baseUrl = "https://the-internet.herokuapp.com/abtest";
  beforeEach(() => {
    // Navigate to the A/B Test Variation 1 page before each test
    cy.visit(baseUrl);
});
it("verify page title", () => {
    cy.title().should("eq", "The Internet");
  });
  
  it('it should have correct page header', ()=>{
    cy.get('h3').should('contain.text', 'A/B Test Control')
})
  it('it should ensure paragraph contains text', ()=>{
    cy.get('p').should('not.be.empty')
  })

});

