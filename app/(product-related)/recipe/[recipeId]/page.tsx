import {Suspense} from "react";
import {RecipeDetailts} from "../../../../components/types/RecipeDetailts";
import Spinner from "../../../../components/Spinner";
import Image from "next/image";

async function getRecipe(id: string) {
    const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=YOUR_API_KEY`);
    return res.json();
}

const grayTickSVG = <svg className="inline w-4 h-4 mr-1.5 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          clip-rule="evenodd"></path>
</svg>

const greenTickSVG = <svg className="inline w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"></path>
</svg>

function Details(details: RecipeDetailts) {
    return (
        // <ul>
        //     {details.extendedIngredients.map((ingredient) => (
        //         <li key={ingredient.id}>{ingredient.name}</li>
        //     ))}
        // </ul>
        <div className="p-3">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white mb-12">{details.title}</h1>
            <div className="md:flex lg:flex xl:flex 2xl:flex gap-9">
                <img src={details.image} alt={details.title} width={500} height={500}/>
                <div>
                    <h2 className="text-2xl font-bold dark:text-white">Diet information:</h2>
                    <ul className="space-y-1 max-w-md list-inside text-gray-500 dark:text-gray-400">
                        {details.vegetarian ? <li>{greenTickSVG}Vegetarian</li> : <li>{grayTickSVG}Vegetarian</li>}
                        {details.vegan ? <li>{greenTickSVG}Vegan</li> : <li>{grayTickSVG}Vegan</li>}
                        {details.glutenFree ? <li>{greenTickSVG}Gluten free</li> : <li>{grayTickSVG}Gluten free</li>}
                        {details.dairyFree ? <li>{greenTickSVG}Dairy free</li> : <li>{grayTickSVG}Dairy free</li>}
                        {details.lowFodmap ? <li>{greenTickSVG}Low fodmap</li> : <li>{grayTickSVG}Low fodmap</li>}
                    </ul>
                </div>
            </div>
            <p>{details.summary}</p>
        </div>
    );
}


export default async function Page({params}: { params: { recipeId: string } }) {
    const _mealDetails = await getRecipe(params.recipeId);

    return (
        <>
            <Suspense fallback={<Spinner/>}>
                <Details {..._mealDetails}/>
            </Suspense>
        </>
    );
}
