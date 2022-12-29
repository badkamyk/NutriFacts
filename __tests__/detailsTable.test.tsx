import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Table from "../components/Table";

describe("Table", () => {
    beforeEach(() => {
        render(<Table nutrients={[
            {
                name: "Calcium",
                amount: 100,
                unit: "mg",
                percentOfDailyNeeds: 10
            }
        ]}/>);
    });

    it("renders a table component", () => {
        const table = screen.getByRole("table");
        expect(table).toBeInTheDocument();
    });

    it("renders a table component with a class name", () => {
        const table = screen.getByRole("table");
        expect(table).toHaveClass("w-full text-sm text-left text-gray-500 dark:text-gray-400 relative");
    });

    it("renders a table component with a table head with a class name", () => {
        const tableHead = screen.getAllByRole("rowgroup")
        expect(tableHead).toHaveLength(2);
        expect(tableHead[0]).toHaveClass("text-xs text-gray-900 uppercase dark:text-gray-400 sticky top-0 bg-blue-200");
    });

    it("renders a table component with a table head with a table row with a table heading", () => {
        const tableHeadings = ["Nutrient", "Amount", "Unit", "% of Daily Needs"];
        tableHeadings.forEach((heading, index) => {
            const tableHeading = screen.getByRole("columnheader", {
                name: heading,
            });
            expect(tableHeading).toBeInTheDocument();
        });
    });

    it("renders a table component with a table head with a table row with a table heading with a class name", () => {
        const tableHeadings = ["Nutrient", "Amount", "Unit", "% of Daily Needs"];
        tableHeadings.forEach((heading, index) => {
            const tableHeading = screen.getByRole("columnheader", {
                name: heading,
            });
            expect(tableHeading).toHaveClass("py-3 px-6");
        });
    });
});
