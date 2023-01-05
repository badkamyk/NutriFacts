describe("renders home page", () => {
    it("renders home page", () => {
        cy.visit("/");
        cy.get("h1").contains("Hello World");
    });
});