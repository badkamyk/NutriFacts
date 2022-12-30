import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { navTest } from "./nav.test";
import { footerTest } from "./footer.test";
import AboutPage from "../app/(product-related)/about/page";

describe("AboutPage", () => {
    beforeEach(() => {
        render(<AboutPage/>);
    });

    it("renders an about page component", () => {
        const aboutPage = screen.getByRole("main");
        expect(aboutPage).toBeInTheDocument();
    });

    it("renders an about page component with a heading", () => {
        const heading = screen.getByRole("heading", {
            name: "About",
        });
        expect(heading).toBeInTheDocument();
    });

    it("renders an about page component with a heading with a class name", () => {
        const heading = screen.getByRole("heading", {
            name: "About",
        });
        expect(heading).toHaveClass("text-6xl font-bold");
    });

});

navTest();
footerTest();
