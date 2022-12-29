import Hero from "../components/Hero";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

export const heroTest = () => describe("Hero", () => {
    beforeEach(() => {
        render(<Hero/>);
    });

    it("renders a hero component title", () => {
        const heroTitle = screen.getByRole("heading", {
            name: "Data to boost your health",
        });
        expect(heroTitle).toBeInTheDocument();
    });

    it("renders a hero component description", () => {
        const heroDescription = screen.getByText("Pay attention to your meals and get the most out of your diet." +
            " NutriFacts is a nutrition facts analyzer that helps you understand what you eat.");
        expect(heroDescription).toBeInTheDocument();
    });

    it("renders a hero component analyze link", () => {
        const heroLink = screen.getByRole("link", {
            name: "Analyze nutrition",
        });
        expect(heroLink).toBeInTheDocument();
    });

    it("renders a hero component shop link", () => {
        const heroShopLink = screen.getByRole("link", {
            name: "Shop",
        });
        expect(heroShopLink).toBeInTheDocument();
    });

    it("renders a hero component image", () => {
        const heroImage = screen.getByRole("img", {
            name: "Image with vegetables",
        });
        expect(heroImage).toBeInTheDocument();
    });
});

heroTest();
