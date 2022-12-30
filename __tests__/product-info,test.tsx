import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import ProductInfo from "../components/ProductInfo";

const ingredients = [
    {
        product: "Product",
        sugar_g: 1,
        fiber_g: 1,
        serving_size_g: 1,
        sodium_mg: 1,
        name: "product1",
        potassium_mg: 1,
        fat_saturated_g: 1,
        fat_total_g: 1,
        calories: 1,
        cholesterol_mg: 1,
        protein_g: 1,
        carbohydrates_total_g: 1,
    },
    {
        product: "Product2",
        sugar_g: 12,
        fiber_g: 12,
        serving_size_g: 12,
        sodium_mg: 12,
        name: "product2",
        potassium_mg: 12,
        fat_saturated_g: 12,
        fat_total_g: 12,
        calories: 12,
        cholesterol_mg: 12,
        protein_g: 12,
        carbohydrates_total_g: 12,
    },
];


describe("ProductInfo", () => {
    beforeEach(() => {
        render(<ProductInfo ingredients={ingredients}/>);
    });

    it("renders a table with ingredients", () => {
        const table = screen.getByRole("table");
        expect(table).toBeInTheDocument();
    });

    it("renders a table with table body and table head", () => {
        const tableBody = screen.getAllByRole("rowgroup");
        expect(tableBody).toHaveLength(2)
    });

    it("renders a table with ingredients with a 12 header columns with a class name", () => {
        const heading = screen.getAllByRole("columnheader");
        expect(heading).toHaveLength(12);
        heading.forEach((heading) => {
            expect(heading).toHaveClass("md-text:sm lg:text-md xl:text-md 2xl:text-lg");
        });
    });

    it("renders a h2 with a proper text and classes", () => {
        const heading = screen.getByRole("heading", {
            name: "Crucial information",
        });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveClass("text-md lg:text-lg xl:text-xl 2xl:text-2xl text-teal-800");
    });

    it("renders a h3 with a proper text and classes", () => {
        const heading = screen.getByRole("heading", {
            name: "Your meal contains:",
        });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveClass("text-sm md-text:sm lg:text-md xl:text-lg 2xl:text-xl");
    });
});
