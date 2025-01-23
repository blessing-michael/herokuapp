/// <reference types = "cypress" />

describe("Add/Remove Elements Page Tests", () => {
  const baseUrl = "https://the-internet.herokuapp.com/abtest";
  beforeEach(() => {
    // Navigate to the A/B Test Variation 1 page before each test
    cy.visit(baseUrl);
  });
  // Ensure the correct page title is displayed
  it("verify page title", () => {
    cy.title().should("eq", "The Internet");
  });
  // Ensure correct page header is displayed
  it("it should have correct page header", () => {
    cy.get("h3").should("contain.text", "A/B Test Control");
  });
  // Ensure the paragraph contains text
  it("it should ensure paragraph contains text", () => {
    cy.get("p").should("not.be.empty");
  });

  it("should display the footer link to Elemental Selenium", () => {
    cy.get("div#page-footer a")
      .should("be.visible")
      .and("have.text", "Elemental Selenium")
      .and("have.attr", "href", "http://elementalselenium.com/");
  });
  it("it should verify footer link", () => {
    cy.get("div#page-footer a")
      .should("be.visible")
      .and("have.text", "Elemental Selenium")
      .and("have.attr", "href", "http://elementalselenium.com/");
  });
  it("should verify that the variation header matches expected options", () => {
    const expectedHeaders = ["A/B Test Control", "A/B Test Variation 1"];
    cy.get("h3").then(($header) => {
      const headerText = $header.text();
      expect(expectedHeaders).to.include(headerText);
    });
  });
});
