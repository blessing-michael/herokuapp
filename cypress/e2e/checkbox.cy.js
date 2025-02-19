/// <reference types = "cypress" />
describe("Checkboxes on the Internet", () => {
  beforeEach(() => {
    // Visit the URL before each test
    cy.visit("https://the-internet.herokuapp.com/checkboxes");
  });

  it("should check the first checkbox", () => {
    // ensure the first checkbox is not checked
    cy.get('input[type="checkbox"]').first().should("not.be.checked");

    // Check the first checkbox
    cy.get('input[type="checkbox"]').first().check();

    //ensure the first checkbox  is now checked
    cy.get('input[type="checkbox"]').first().should("be.checked");
  });
  it("should uncheck the second checkbox", () => {
    // Assert that the second checkbox is checked initially
    cy.get('input[type="checkbox"]').eq(1).should("be.checked");

    // Uncheck the second checkbox
    cy.get('input[type="checkbox"]').eq(1).uncheck();

    // Assert that the second checkbox is now unchecked
    cy.get('input[type="checkbox"]').eq(1).should("not.be.checked");
  });
  it("should check both checkboxes", () => {
    // Check both checkboxes
    cy.get('input[type="checkbox"]').each(($checkbox) => {
      if (!$checkbox.prop("checked")) {
        cy.wrap($checkbox).check();
      }
    });
    // Assert that both checkboxes are checked
    cy.get('input[type="checkbox"]').each(($checkbox) => {
      cy.wrap($checkbox).should("be.checked");
    });
  });
});
