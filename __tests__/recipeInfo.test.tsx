import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import RecipeInfo from "../components/RecipeInfo";
import { RecipeType } from "../components/types/RecipeType"

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

const basicRecipeTests = () => describe("RecipeInfo", () => {


});
describe("RecipeInfo with recipe", () => {
    beforeEach(() => {
        render(<RecipeInfo recipe={[recipe]}/>);
    });

    it("doesn't render h2", () => {
        const h2 = screen.queryByRole("heading", {
            name: "Your results will be shown here",
        });
        expect(h2).not.toBeInTheDocument();
    });

    it("renders a MealCard component", () => {
        const mealCard = screen.getByRole("figure");
        expect(mealCard).toBeInTheDocument();
    });

    it("renders a div with all cards", () => {
        const allCardsDiv = screen.getByRole("list");
        expect(allCardsDiv).toBeInTheDocument();
    });

    it("renders a all cards div with a class name", () => {
        const allCardsDiv = screen.getByRole("list");
        expect(allCardsDiv).toHaveClass("max-w-full flex md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-6 flex-wrap mb-3 justify-center");
    });
})

describe("RecipeInfo without recipe", () => {
    beforeEach(() => {
        render(<RecipeInfo recipe={[]}/>);
    });

    it("renders h2", () => {
        const h2 = screen.getByRole("heading", {
            name: "Your results will be shown here",
        });
        expect(h2).toBeInTheDocument();
    });

    it("renders h2 with a class name", () => {
        const h2 = screen.getByRole("heading", {
            name: "Your results will be shown here",
        });
        expect(h2).toHaveClass("text-center w-full text-sm lg:text-md xl:text-lg 2xl:text-xl");
    });

    it("doesn't render a meal card div", () => {
        const mealCardDiv = screen.queryByRole("list");
        expect(mealCardDiv).not.toBeInTheDocument();
    });

    it("doesn't render a MealCard component", () => {
        const mealCard = screen.queryByRole("figure");
        expect(mealCard).not.toBeInTheDocument();
    });
});

