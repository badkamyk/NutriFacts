import { Suspense } from "react";
import { RecipeDetails } from "../../../../components/types/RecipeDetails";
import Spinner from "../../../../components/Spinner";
import Image from "next/image";
import Table from "../../../../components/Table";


async function getRecipe(id: string) {
    // const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=YOUR_API_KEY`);
    // return res.json();
    const res = await import("../../../../public/response.json");
    return res.default;
}

const usedNutrients = [
    "Calories",
    "Fat",
    "Carbohydrates",
    "Protein",
    "Fiber",
    "Sugar",
    "Sodium",
    "Cholesterol",
    "Saturated Fat",
]


function Details(details: RecipeDetails) {
    return (
        <div
            className="p-3 max-w-full border-b-2 border-blue-200 md:flex md:flex-col md:justify-center md:items-center xl:items-start xl:gap-2 xl:p-16">
            <h1 className="mb-1.5 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white xl:mb-9">{details.title}</h1>
            <div className="md:flex">
                {details.diets.map((diet, index) => (
                    <span key={index}
                        className="my-1 inline-block px-2 py-1 mr-2 text-sm xl:text-lg font-medium leading-5 text-blue-800 bg-blue-100 rounded-full dark:bg-blue-700 dark:text-blue-100">{diet}</span>
                ))}
            </div>
            <div className="flex my-3 gap-3 justify-evenly xl:gap-6">
                <div>
                    <p className="text-sm text-gray-500 md:text-md xl:text-xl dark:text-gray-400">Total</p>
                    <p className="text-sm text-gray-500 md:text-md xl:text-lg dark:text-gray-400">
                        <b>{details.readyInMinutes}</b> minutes</p>
                </div>
                {Object.entries(details.nutrition.caloricBreakdown).map(([key, value]) => (
                    <div key={key}>
                        <p className="text-sm text-gray-500 md:text-md xl:text-xl dark:text-gray-400">{key.replace("percent", "")}</p>
                        <p className="text-sm text-gray-500 md:text-md xl:text-lg dark:text-gray-400">
                            <b>{Math.floor(value)}%</b>
                        </p>
                    </div>

                ))}
            </div>
            <div
                className=" lg:flex lg:flex-col xl:flex-row gap-9 mb-5 xl:justify-center items-start 2xl:flex">
                <Image className="mb-2 md:mx-auto" src={details.image} alt={details.title} width={500} height={500} />
                <div className="flex flex-col gap-3 mb-5 xl:w-[40%]">
                    <h5 className="text-center text-xl font-bold dark:text-white xl:text-start">Nutrition per serving</h5>
                    <div
                        className="flex max-w-full flex-wrap gap-1 justify-center items-start border-b-1 border-blue-600 xl:flex-row xl:max-w-full xl:justify-start xl:items-center">
                        {details.nutrition.nutrients.map((nutrient, index) => (
                            usedNutrients.includes(nutrient.name) && (
                                <div
                                    key={index}
                                    className="flex flex-col text-center gap-1 my-1.5 px-2 py-5 mr-2 text-sm font-medium leading-5 text-blue-800 bg-yellow-100 rounded-full dark:bg-blue-700 dark:text-blue-100">
                                    <p className="text-sm text-gray-500 md:text-md dark:text-gray-400">{nutrient.name}</p>
                                    <p className="text-sm text-gray-500 md:text-md dark:text-gray-400 bg-white rounded-full p-3">
                                        <b>{nutrient.amount}</b> {nutrient.unit}</p>
                                </div>
                            )
                        ))}
                    </div>
                </div>

                <div className="border-b-2 border-blue-300 xl:border-b-0 2xl:border-b-0 pb-3 md:border-b-0 xl:w-[40%]">
                    <h5 className="text-center text-xl font-bold dark:text-white mb-2">Ingredients</h5>
                    <ul className="list-none text-center">
                        {details.extendedIngredients.map((ingredient, index) => (
                            <li key={index}
                                className="text-md text-gray-500 md:text-md dark:text-gray-400 xl:text-lg">{ingredient.original}</li>
                        ))}

                    </ul>
                </div>
            </div>
            <div className="mb-12 md:max-w-[80%] md:mx-auto xl:max-w-[70%] xl:border-b-2 xl:border-blue-300 xl:pb-9">
                <h5 className="text-center text-xl font-bold dark:text-white mb-2">Instructions</h5>
                <div className="text-sm text-gray-500 md:text-md dark:text-gray-400 xl:text-lg 2xl:text-xl"
                    dangerouslySetInnerHTML={{ __html: details.summary }} />
            </div>
            <div className="mx-auto">
                <h2 className="text-center text-xl font-bold dark:text-white mb-2r">Detailed nutrition information</h2>
                <Table nutrients={details.nutrition.nutrients} />
            </div>
        </div>
    );
}


export default async function Page({ params }: { params: { recipeId: string } }) {
    const _mealDetails = await getRecipe(params.recipeId);

    return (
        <div className="min-h-screen">
            <Suspense fallback={<Spinner />}>
                <Details {..._mealDetails} />
            </Suspense>
        </div>
    );
}
