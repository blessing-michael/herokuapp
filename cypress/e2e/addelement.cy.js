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
  // Click the "Add Element" button multiple times
  it("it should add multiple delete buttons on each click", () => {
    const multipleClicks = 3;
    for (let i = 0; i < multipleClicks; i++) {
      cy.get('[onclick="addElement()"]').click();
    }
    // Verify that the correct number of Delete buttons are added
    cy.get(".added-manually").should("have.length", multipleClicks);
  });
  it("should remove a Delete button when clicked", () => {
    // Add a Delete button
    cy.get("button").contains("Add Element").click();

    // Verify the Delete button is visible
    cy.get(".added-manually").should("be.visible");

    // Click the Delete button
    cy.get(".added-manually").click();

    // Verify the Delete button is removed
    cy.get(".added-manually").should("not.exist");
  });

      //Verify Adding and Removing Multiple Buttons
  it('should add and remove multiple Delete buttons correctly', () => {
    const numberOfClicks = 5;

    // Add multiple Delete buttons
    for (let i = 0; i < numberOfClicks; i++) {
      cy.get('button').contains('Add Element').click();
    }

    // Verify the correct number of Delete buttons
    cy.get('.added-manually').should('have.length', numberOfClicks);

    // Remove all Delete buttons one by one
    cy.get('.added-manually').each(($btn) => {
      cy.wrap($btn).click();
    });

    // Verify all Delete buttons are removed
    cy.get('.added-manually').should('not.exist');
  });
});
