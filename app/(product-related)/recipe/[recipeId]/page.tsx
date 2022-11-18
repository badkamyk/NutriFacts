import { Suspense } from "react";
import { RecipeDetails } from "../../../../components/types/RecipeDetails";
import Spinner from "../../../../components/Spinner";
import Image from "next/image";
import Table from "../../../../components/Table";

// import { saveRecipeToLocalStorage } from "../../../../utils/localStorageHelpers";


async function getRecipe(id: string) {
    const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=YOUR_API_KEY`);
    return res.json();
    // const res = await import("../../../../public/response.json");
    // return res.default;
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
            <header className="flex justify-between">
                <h1 className="mb-1.5 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white xl:mb-9">{details.title}</h1>
                <div className="ml-12">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        fill="none" className="w-8 h-8 lg:w-12 lg:h-12 hover:fill-red-500">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                </div>
            </header>
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
                    <h5 className="text-center text-xl font-bold dark:text-white xl:text-start">Nutrition per
                        serving</h5>
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
                <div className="text-sm text-gray-500 md:text-md dark:text-gray-400 xl:text-lg 2xl:text-xl">
                    <p> {details.instructions.replaceAll(".", ". ")}wash and rinse pork chops and place into the skillet.cut them into bite sized pieces and add half of the Basil Garlic simmer sauce.boil your water and start working on cooking your bow-tie pasta.when you have finished with boiling and draining your pasta, add it to the pork along with the rest of the Basil Garlic Simmering Sauce, mixing lightly.Next you will top with the Chunky Bruschetta Finishing Sauce, cover with Parmesan, and cover. Cooking on low heat 2 to 3 minutes or until heated through.</p>
                </div>
            </div>
            <div className="mb-12 md:max-w-[80%] md:mx-auto xl:max-w-[70%] xl:border-b-2 xl:border-blue-300 xl:pb-9">
                <h5 className="text-center text-xl font-bold dark:text-white mb-2">Summary</h5>
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
