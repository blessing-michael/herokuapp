/// <reference types = "cypress" />

describe("Add/Remove Elements Page Tests", () => {
  const baseUrl = "https://the-internet.herokuapp.com/add_remove_elements/";

  beforeEach(() => {
    // Navigate to the Add/Remove Elements page before each test
    cy.visit(baseUrl);
  });
  it("should display the correct page title", () => {
    cy.title().should("eq", "The Internet");
  });
  it("should show page header", () => {
    cy.get("h3").should("have.text", "Add/Remove Elements");
  });
  it("it should add a delete button when the add element button is clicked", () => {
    // Verify a delete button can be Added
    cy.get('[onclick="addElement()"]').click();
    // Verify that a Delete button appears
    cy.get(".added-manually").should("be.visible").and("have.length", 1);
  });
});
