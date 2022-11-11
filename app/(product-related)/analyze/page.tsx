'use client'
import SearchInput from "../../../components/SearchInput";
import ProductInfo from "../../../components/ProductInfo";
import { useState } from "react";
import { IngredientType } from "../../../components/types/IngredientType";
import {RecipeType} from "../../../components/types/RecipeType";


export default function Page() {
    const [ingredients, setIngredients] = useState<Array<IngredientType>>([]);
    const [recipe, setRecipe] = useState<Array<RecipeType>>([]);

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="text-center pt-6 px-2">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl
                 lg:text-6xl dark:text-white">Analyze
                    your meal</h1>
                <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    Type in your ingredients and we will analyze the nutrition facts of your meal.
                    If no quantity is specified, the default quantity is 100 grams.
                </p>
            </header>
            <main>
                <SearchInput setIngredients={setIngredients}/>
                <div className="flex gap-3 flex-wrap px-3 mt-6 mx-auto">
                    {<ProductInfo ingredients={ingredients} />}
                    {/*{ingredients.length > 0 ? <ProductInfo ingredients={ingredients} /> : <RecipeInfo recipe={recipe} />}*/}
                </div>
            </main>
        </div>
    )
}
