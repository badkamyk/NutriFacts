import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import Table from "../components/Table";

const nutrients = [
    {
        name: "Protein",
        amount: 10,
        unit: "g",
        percentOfDailyNeeds: 20
    },
    {
        name: "Fat",
        amount: 10,
        unit: "g",
        percentOfDailyNeeds: 20
    },
]

describe("Table", () => {
    beforeEach(() => {
        render(<Table nutrients={nutrients}/>);
    });

    it("renders a table with a class name", () => {
        const table = screen.getByRole("table");
        expect(table).toBeInTheDocument();
    });

    it("renders a table with table body and table head", () => {
        const tableBody = screen.getAllByRole("rowgroup");
        expect(tableBody).toHaveLength(2)
    });

    it("renders a table with nutrients with a 4 header columns with a class name", () => {
        const heading = screen.getAllByRole("columnheader");
        expect(heading).toHaveLength(4);
        heading.forEach((heading) => {
            expect(heading).toHaveClass("py-3 px-6");
        });
    });

    it('renders tbody with 2 rows', () => {
        const rowHeader = screen.getAllByRole("rowheader")
        expect(rowHeader).toHaveLength(nutrients.length)
    });

    it('renders tbody with 2 rows with a class name', () => {
        const rowHeader = screen.getAllByRole("rowheader")
        rowHeader.forEach((rowHeader) => {
            expect(rowHeader).toHaveClass("py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white");
        });
    });

    it('renders tbody cells', () => {
        const cell = screen.getAllByRole("cell")
        expect(cell).toHaveLength(nutrients.length * 3)
    });

    it('renders tbody cells with a class name', () => {
        const cell = screen.getAllByRole("cell")
        cell.forEach((cell) => {
            expect(cell).toHaveClass("py-4 px-6");
        });
    });

});
