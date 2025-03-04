/// <reference types = "cypress" />

describe("Digest Authentication Test", () => {
  beforeEach(() => {
    // Digest Authentication requires an additional HTTP header, so we can't directly use `cy.visit` with credentials
    // The way to handle Digest Authentication is to intercept the request and pass the necessary authentication header

    // We use the `cy.request` to visit the page because Digest Authentication requires special handling of headers.
    cy.request({
      method: "GET",
      url: "https://the-internet.herokuapp.com/digest_auth", // The page we are testing
      auth: {
        username: "admin", // Your Digest Authentication username
        password: "admin", // Your Digest Authentication password
      },
    }).then((response) => {
      // Check that the response status is 200, meaning authentication was successful
      expect(response.status).to.eq(200);
    });
  });

  it("should successfully load the Digest Authentication page", () => {
    // Visit the page with authentication already handled by `cy.request`
    cy.visit("https://the-internet.herokuapp.com/digest_auth");

    // Assert that the page contains specific content (e.g., a heading or text on the page)
    cy.contains(
      "Congratulations! You must have the proper credentials."
    ).should("be.visible");
  });
});
