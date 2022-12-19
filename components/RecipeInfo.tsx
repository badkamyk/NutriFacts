import { RecipeType } from "./types/RecipeType";
import MealCard from "./MealCard";
import { useState } from "react";

export default function RecipeInfo({ recipe }: { recipe: Array<RecipeType> }) {
    const [addedToFavorites, setAddedToFavorites] = useState<string[]>([]);


    const sortByMissingIngredients = (a: RecipeType, b: RecipeType) => {
        return a.missedIngredientCount - b.missedIngredientCount;
    }

    const setRecipeAsc = recipe.sort(sortByMissingIngredients);

    return (
        setRecipeAsc.length > 0 ?
            <div
                className="max-w-full flex md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-6 flex-wrap mb-3 justify-center">
                {setRecipeAsc.map((recipe) => (
                    <MealCard key={recipe.title} mealInfo={recipe} addedToFavorites={addedToFavorites}
                              setAddedToFavorites={setAddedToFavorites}/>
                ))}
            </div>
            : <h2 className="text-center w-full text-sm lg:text-md xl:text-lg 2xl:text-xl">Your results will be shown
                here</h2>

    )
}
