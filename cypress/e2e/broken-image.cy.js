/// <reference types = "cypress" />

describe("Broken Images Page Tests", () => {
  const baseUrl = "https://the-internet.herokuapp.com/broken_images";

  beforeEach(() => {
    // Navigate to the Broken Images page before each test
    cy.visit(baseUrl);
  });
  it("should display the correct page title", () => {
    cy.title().should("eq", "The Internet");
  });

  it("should display the page header", () => {
    cy.get("h3").should("have.text", "Broken Images");
  });
  it("should verify all images on the page", () => {
    // Find all images on the page
    cy.get("img").each(($img) => {
      // Ensure the image's naturalWidth is greater than 0 (not broken)
      cy.wrap($img)
        .should("be.visible")
        .and(($el) => {
          const image = $el[0];
          expect(image.naturalWidth).to.be.greaterThan(
            0,
            `Image ${image.src} is broken`
          );
        });
    });
  });
  it("should verify the footer link to Elemental Selenium", () => {
    cy.get("div#page-footer a")
      .should("be.visible")
      .and("have.text", "Elemental Selenium")
      .and("have.attr", "href", "http://elementalselenium.com/");
  });
});
