/// <reference types = "cypress" />
describe("Test case for challenging dom page", () => {
  const baseUrl = "https://the-internet.herokuapp.com/challenging_dom";
  const possibleTexts = ["bar", "baz", "qux", "foo"];
  const buttonNames = ["button", "alert", "success"];
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it("should verify the correct title", () => {
    cy.title().should("eq", "The Internet");
  });
  it("ensures elements are in the correct order", function () {
    // Verify that elements are ordered correctly
    cy.get(".example").find("h3").eq(0).should("have.text", "Challenging DOM");
  });
  it("verifies dynamic table contents", function () {
    // Verify that the dynamic table is populated with data
    // ensures that there are multiple rows in the table
    cy.get("table").find("tr").should("have.length.greaterThan", 1);

    // Verify that a row contains a specific text
    cy.get("table tr").contains("1").should("exist");
  });

  it("clicks all the buttons serially", function () {
    cy.get(".alert").each(($btn, index) => {
      // For each button, log the text and click it
      cy.wrap($btn).should("be.visible").click();
    });
  });
});
