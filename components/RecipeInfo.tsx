import {RecipeType} from "./types/RecipeType";
import MealCard from "./MealCard";

export default function RecipeInfo({recipe}: { recipe: Array<RecipeType> }) {
    const sortByMissingIngredients = (a: RecipeType, b: RecipeType) => {
        return a.missedIngredientCount - b.missedIngredientCount;
    }

    const setRecipeAsc = recipe.sort(sortByMissingIngredients);

    return (

        setRecipeAsc.length > 0 ?
            <div className="flex flex-row gap-3 flex-wrap">
                {setRecipeAsc.map((recipe) => (
                    <MealCard key={recipe.title} mealInfo={recipe}/>
                ))}
            </div>
            : <h2 className="text-center w-full text-sm lg:text-md xl:text-lg 2xl:text-xl">Your results will be shown
                here</h2>

    )


}
