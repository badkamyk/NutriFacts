// export {}
describe("renders home page", () => {
    beforeEach(() => {
        cy.visit("localhost:3000");
    });

    it("renders header", () => {
        cy.get("h1").should("exist");
    });

    it("renders hero links", () => {
        cy.get("main a").should("exist");
        cy.get("main a").should("have.length", 2);
    });

    it("renders feature section", () => {
        cy.get("dl").should("exist");
    });

    it("renders all feature elements", () => {
        cy.get("dl dt").should("have.length", 4);
        cy.get("dl dd").should("have.length", 4);
    });

    it("renders nav and footer", () => {
        cy.get("nav").should("exist");
        cy.get("nav").should("have.length", 2)
        cy.get("footer").should("exist");
    });

    it("renders the correct number of links in the nav", () => {
        cy.get("nav").first().find("a").should("have.length", 6);
    });

    it("renders the correct number of links in the footer", () => {
        cy.get("nav").last().find("a").should("have.length", 4);
    });
});