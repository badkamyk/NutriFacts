import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MealCard from "../components/MealCard";
import { RecipeType } from "../components/types/RecipeType";

const recipe: RecipeType = {
    id: 1,
    title: "Meal Title",
    image: "image",
    imageType: "imageType",
    usedIngredientCount: 1,
    missedIngredientCount: 1,
    missedIngredients: [
        {
            id: 2,
            amount: 2,
            unit: "unit2",
            unitLong: "unitLong2",
            unitShort: "unitShort2",
            aisle: "aisle2",
            name: "name2",
            original: "original2",
            originalName: "originalName2",
            meta: ["meta2"],
            extendedName: "extendedName2",
            image: "image2",
        },
    ],
    unusedIngredients: [],
    likes: 1,
};

export const MealCardTest = () => describe("MealCard without favorites", () => {
    beforeEach(() => {
        render(<MealCard mealInfo={recipe} addedToFavorites={[]} setAddedToFavorites={() => {
        }}/>);
    });

    it("renders a meal card", () => {
        const mealCard = screen.getByRole("figure");
        expect(mealCard).toBeInTheDocument();
    });

    it("renders a meal card with a heading", () => {
        const heading = screen.getByRole("heading", {
            name: "Meal Title",
        });
        expect(heading).toBeInTheDocument();
    });

    it("renders a meal card with a heading with a class name", () => {
        const heading = screen.getByRole("heading", {
            name: "Meal Title",
        });
        expect(heading).toHaveClass("text-2xl font-semibold tracking-tight text-gray-900 dark:text-white");
    });

    it("renders a link on title to a meal", () => {
        expect(screen.getByText('Meal Title').closest('a')).toHaveAttribute('href', '/recipe/1')
    });

    it("renders a link with meal details", () => {
        expect(screen.getByText('Check details').closest('a')).toHaveAttribute('href', '/recipe/1')
    });

    it("renders a button with a class name", () => {
        const button = screen.getByRole("button");
        expect(button).toHaveClass("rounded-lg bg-green-500 ml-2 px-4 py-3.5 text-center text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800");
    });

    it("renders a button with a text", () => {
        const button = screen.getByRole("button");
        expect(button).toHaveTextContent("Add to favorites");
    });
});

MealCardTest();
