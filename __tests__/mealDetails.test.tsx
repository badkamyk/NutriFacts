import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import { Details } from "../app/(product-related)/recipe/[recipeId]/page";
import { RecipeDetails } from "../components/types/RecipeDetails";
import { usedNutrients } from "../app/(product-related)/recipe/[recipeId]/page";

const mockRecipeDetails: RecipeDetails = {
    id: 1,
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    veryHealthy: false,
    cheap: false,
    veryPopular: false,
    sustainable: false,
    weightWatcherSmartPoints: 5,
    gaps: "no",
    lowFodmap: false,
    preparationMinutes: 10,
    cookingMinutes: 20,
    nutrition: {
        nutrients: [{
            name: "Protein",
            amount: 10,
            unit: "g",
            percentOfDailyNeeds: 20
        }],
        caloricBreakdown: {
            percentProtein: 10,
            percentFat: 20,
            percentCarbs: 30
        }
    },
    aggregateLikes: 10,
    healthScore: 5,
    creditsText: "creditsText",
    sourceName: "sourceName",
    pricePerServing: 10,
    extendedIngredients: [{
        id: 1,
        aisle: "aisle",
        image: "https://spoonacular.com/cdn/ingredients_100x100/white-sugar.jpg",
        consistency: "consistency",
        name: "nameExtendedIngredients",
        original: "orginalName",
        // originalString: "test",
        originalName: "originalNameExtendedIngredients",
        amount: 10,
        unit: "g",
        meta: ["test"],
        // metaInformation: ["test"],
        measures: {
            us: {
                amount: 10,
                unitShort: "g",
                unitLong: "g"
            },
            metric: {
                amount: 10,
                unitShort: "g",
                unitLong: "g"
            }
        }
    }],
    title: "Recipe title",
    image: "https://spoonacular.com/cdn/ingredients_100x100/white-sugar.jpg",
    imageType: "jpg",
    instructions: "test",
    readyInMinutes: 10,
    servings: 10,
    sourceUrl: "test",
    analyzedInstructions: [],
    cuisines: ["cuisines"],
    dishTypes: ["dishTypes"],
    diets: ["diet1", "diet2"],
    occasions: ["occasions"],
    summary: "summary",
    winePairing: {
        pairedWines: ["pairedWines"],
        pairingText: "pairingText",
        productMatches: [{
            id: 1,
            title: "test",
            description: "description",
            price: "10",
            imageUrl: "https://spoonacular.com/cdn/ingredients_100x100/white-sugar.jpg",
            averageRating: 5,
            ratingCount: 10,
            score: 5,
            link: "link"
        }]
    },
    originalId: null,
    spoonacularSourceUrl: "test"
}

describe("Details", () => {
    beforeEach(() => {
        render(Details(mockRecipeDetails));
    });
    it("renders the heading h2", () => {
        const heading = screen.getByRole("heading", { name: mockRecipeDetails.title });
        expect(heading).toBeInTheDocument();
    });

    it("renders the heading h2 with class name", () => {
        const heading = screen.getByRole("heading", { name: mockRecipeDetails.title });
        expect(heading).toHaveClass("mb-1.5 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white xl:mb-9");
    });

    it("renders the diet-group div", () => {
        const dietGroup = screen.getByRole("diet-group");
        expect(dietGroup).toBeInTheDocument();
    });

    it("renders the diet-group div with class name", () => {
        const dietGroup = screen.getByRole("diet-group");
        expect(dietGroup).toHaveClass("md:flex");
    });

    it(`renders ${mockRecipeDetails.diets.length} diet types spans`, () => {
        const dietGroup = screen.getAllByRole("diet-item");
        expect(dietGroup.length).toBe(mockRecipeDetails.diets.length);
    });

    it(`renders ${mockRecipeDetails.diets.length} diet types spans with class name`, () => {
        const dietGroup = screen.getAllByRole("diet-item");
        dietGroup.forEach(diet => {
            expect(diet).toHaveClass("my-1 inline-block px-2 py-1 mr-2 text-sm xl:text-lg font-medium leading-5 text-blue-800 bg-blue-100 rounded-full dark:bg-blue-700 dark:text-blue-100");
        });
    });

    it(`renders ${mockRecipeDetails.diets.length} diet types spans with text`, () => {
        const dietGroup = screen.getAllByRole("diet-item");
        dietGroup.forEach((diet, index) => {
            expect(diet).toHaveTextContent(mockRecipeDetails.diets[index]);
        });
    });

    it('renders a paragraph with total prepare time', () => {
        const prepareTime = screen.getByTestId("prepare-time");
        expect(prepareTime.textContent).toEqual(`${mockRecipeDetails.preparationMinutes} minutes`);
    });

    it('renders a paragraph with total prepare time with class name', () => {
        const prepareTime = screen.getByTestId("prepare-time");
        expect(prepareTime).toHaveClass("text-sm text-gray-500 md:text-md xl:text-lg dark:text-gray-400");
    });

    it('renders all caloric breakdown items', () => {
        const nutrients = screen.getAllByRole("caloric-item");
        expect(nutrients.length).toBe(3)
    });

    it('renders percentage value for each caloric breakdown item', () => {
        const nutrients = screen.getAllByRole("caloric-item");
        nutrients.forEach((nutrient, index) => {
            expect(nutrient.textContent).toEqual(
                `${Object.keys(mockRecipeDetails.nutrition.caloricBreakdown)[index]}${Object.values(mockRecipeDetails.nutrition.caloricBreakdown)[index]}%`.replaceAll("percent", ""));
        });
    });

    it('renders image with src', () => {
        const image = screen.getByRole("img");
        expect(image).toHaveAttribute("src");
    });

    it('renders image with alt', () => {
        const image = screen.getByRole("img");
        expect(image).toHaveAttribute("alt", mockRecipeDetails.title);
    });

    it('renders image with class name', () => {
        const image = screen.getByRole("img");
        expect(image).toHaveClass("mb-2 md:mx-auto");
    });

    it('renders all nutrients', () => {
        const nutrients = screen.getAllByRole("nutrient-item");
        expect(nutrients.length).toBe(mockRecipeDetails.nutrition.nutrients.filter(item => usedNutrients.includes(item.name)).length);
    });

    it('renders nutrient name', () => {
        const nutrient = screen.getByRole("nutrient-item");
        expect(nutrient.children[0].textContent).toEqual(mockRecipeDetails.nutrition.nutrients[0].name);
    });

    it('renders nutrient name with class name', () => {
        const nutrient = screen.getByRole("nutrient-item");
        expect(nutrient.children[0]).toHaveClass("text-sm text-gray-500 md:text-md dark:text-gray-400");
    });

    it('render nutrient text', () => {
        const nutrient = screen.getByRole("nutrient-item");
        expect(nutrient.children[1].textContent).toEqual(`${mockRecipeDetails.nutrition.nutrients[0].amount} ${mockRecipeDetails.nutrition.nutrients[0].unit}`);
    });

    it('render nutrient text with class name', () => {
        const nutrient = screen.getByRole("nutrient-item");
        expect(nutrient.children[1]).toHaveClass("text-sm text-gray-500 md:text-md dark:text-gray-400 bg-white rounded-full p-3");
    });

    it('renders ingredients heading h5', () => {
        const heading = screen.getByRole("heading", { name: "Ingredients" });
        expect(heading).toBeInTheDocument();
    });

    it('renders ingredients list', () => {
        const list = screen.getByRole("list");
        expect(list).toBeInTheDocument();
    });

    it('renders ingredients list with class name', () => {
        const list = screen.getByRole("list");
        expect(list).toHaveClass("list-none text-center");
    });

    it('renders all list items', () => {
        const listItems = screen.getAllByRole("listitem");
        expect(listItems.length).toBe(mockRecipeDetails.extendedIngredients.length);
    });

    it('renders list item with ingredient name text', () => {
        const listItem = screen.getAllByRole("listitem");
        listItem.forEach((item, index) => {
            expect(item.textContent).toEqual(mockRecipeDetails.extendedIngredients[index].original);
        });
    });

    it('renders list item with class name', () => {
        const listItem = screen.getAllByRole("listitem");
        expect(listItem[0]).toHaveClass("text-md text-gray-500 md:text-md dark:text-gray-400 xl:text-lg");
    });

    it('renders instructions heading h5', () => {
        const heading = screen.getByRole("heading", { name: "Instructions" });
        expect(heading).toBeInTheDocument();
    });

    it('renders instructions paragraph', () => {
        const paragraph = screen.getByRole("description");
        expect(paragraph).toBeInTheDocument();
    });

    it('renders instructions paragraph with text', () => {
        const paragraph = screen.getByRole("description");
        expect(paragraph.textContent).toEqual(mockRecipeDetails.instructions.replaceAll(".", ". "));
    });

    it('renders summary heading h5', () => {
        const heading = screen.getByRole("heading", { name: "Summary" });
        expect(heading).toBeInTheDocument();
    });

    it('renders detailed table heading h5', () => {
        const heading = screen.getByRole("heading", { name: "Detailed nutrition information" });
        expect(heading).toBeInTheDocument();
    });

    it('renders detailed table', () => {
        const table = screen.getByRole("table");
        expect(table).toBeInTheDocument();
    });
});
