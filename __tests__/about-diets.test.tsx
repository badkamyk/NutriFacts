import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AboutDiets, { diets } from "../app/(product-related)/about-diets/page"

describe("AboutDiets", () => {
    beforeEach(() => {
        render(<AboutDiets/>);
    });

    it("renders an about diets component", () => {
        const aboutDiets = screen.getByRole("main");
        expect(aboutDiets).toBeInTheDocument();
    });


    it("renders an about diets component with a heading", () => {
        const heading = screen.getByRole("heading", {
            name: "Diet types",
        });
        expect(heading).toBeInTheDocument();
    });

    it("renders an about diets component with a heading with a class name", () => {
        const heading = screen.getByRole("heading", {
            name: "Diet types",
        });
        expect(heading).toHaveClass("text-6xl font-bold mb-3");
    });

    it("renders an about diets div with a class name", () => {
        const aboutDiets = screen.getByRole("list");
        expect(aboutDiets).toHaveClass("flex flex-col gap-12 border-t-2");
    });

    it("renders an about diets div with all diets listed", () => {
        const aboutDiets = screen.getByRole("list");
        expect(aboutDiets).toHaveTextContent(diets.map(diet => diet.name + diet.description).join(""));
    });
});
