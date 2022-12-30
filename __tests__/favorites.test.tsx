import FavoritePage from "../app/(product-related)/favorites/page";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { navTest } from "./nav.test";
import { footerTest } from "./footer.test";

describe("FavoritePage", () => {
    beforeEach(() => {
        render(<FavoritePage/>);
    });

    it("renders a favorite page component", () => {
        const favoritePage = screen.getByRole("main");
        expect(favoritePage).toBeInTheDocument();
    });

    it("renders a favorite page component with a heading", () => {
        const heading = screen.getByRole("heading", {
            name: "Favorite meals",
        });
        expect(heading).toBeInTheDocument();
    });

    it("renders a favorite page component with a heading with a class name", () => {
        const heading = screen.getByRole("heading", {
            name: "Favorite meals",
        });
        expect(heading).toHaveClass("mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center");
    });
});

navTest();
footerTest();
