import {RecipeType} from "./types/RecipeType";
import MealCard from "./MealCard";

export default function RecipeInfo({recipe} : {recipe: Array<RecipeType>}) {
    return (
        <div className="flex flex-col gap-3">
            {recipe.map((recipe) => (
                <MealCard key={recipe.title} mealInfo={recipe} />
            ))}
        </div>
    )


}
