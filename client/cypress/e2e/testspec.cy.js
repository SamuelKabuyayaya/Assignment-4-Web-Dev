describe("Navbar E2E Tests", () => {

  beforeEach(() => {
    cy.viewport(1920, 1080);
  });

  it("loads homepage and displays navbar logo", () => {
    cy.visit("http://localhost:3000");
    cy.scrollTo("top");
    cy.get('img[alt="Logo"]').should("be.visible");
  });

  it("shows Login and Register when user not logged in", () => {
    cy.visit("http://localhost:3000");
    cy.scrollTo("top");

    cy.contains("Login").should("be.visible");
    cy.contains("Register").should("be.visible");
  });

  it("logs in user (mock localStorage) and displays username", () => {
    cy.visit("http://localhost:3000", {
      onBeforeLoad(win) {
        win.localStorage.setItem("user", JSON.stringify({ name: "Samuel" }));
        win.localStorage.setItem("token", "abc123");
      },
    });

    cy.scrollTo("top");

    cy.contains("Logged in as").should("be.visible");
    cy.contains("Samuel").should("be.visible");
  });

  it("logs out user", () => {
    cy.visit("http://localhost:3000", {
      onBeforeLoad(win) {
        win.localStorage.setItem("user", JSON.stringify({ name: "Samuel" }));
        win.localStorage.setItem("token", "abc123");
      },
    });

    cy.scrollTo("top");

    cy.contains("Logout").click({ force: true });

    cy.window().then((win) => {
      expect(win.localStorage.getItem("user")).to.be.null;
      expect(win.localStorage.getItem("token")).to.be.null;
    });

    cy.contains("Login").should("be.visible");
    cy.contains("Register").should("be.visible");
  });
});
