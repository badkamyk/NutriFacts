import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "../components/Input";

describe("Input", () => {
    beforeEach(() => {
        render(<Input name={"name"} type={"text"} className={"w-full"} placeholder={"Search"}/>);
    });

    it("renders an input component", () => {
        const input = screen.getByRole("textbox");
        expect(input).toBeInTheDocument();
    });

    it("renders an input component with a placeholder", () => {
        const input = screen.getByPlaceholderText("Search");
        expect(input).toBeInTheDocument();
    });

    it("renders an input component with a class name", () => {
        const input = screen.getByRole("textbox");
        expect(input).toHaveClass("w-full");
    });

    it("renders an input component with a type", () => {
        const input = screen.getByRole("textbox");
        expect(input).toHaveAttribute("type", "text");
    });

    it("renders an input component with a name", () => {
        const input = screen.getByRole("textbox");
        expect(input).toHaveAttribute("name");
    });

});
