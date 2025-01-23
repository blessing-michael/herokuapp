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
  

});

