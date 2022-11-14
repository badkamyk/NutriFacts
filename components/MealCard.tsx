import {RecipeType} from "./types/RecipeType";
import {Card} from "flowbite-react"
import Link from "next/link"

export default function MealCard({mealInfo}: { mealInfo: RecipeType }) {
    return (
        <div className="max-w-[310px] md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
            <Card
                className="h-full max-w-full"
                imgAlt={mealInfo.title}
                imgSrc={mealInfo.image}
            >
                <Link href={``}>
                    <h3 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {mealInfo.title}
                    </h3>
                </Link>
                <div className="mt-2.5 mb-5 flex items-center">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mr-1 w-[50%]">{`${mealInfo.missedIngredientCount} missing ingredients`} </span>
                    <div className="flex gap-1 flex-wrap max-w-sm w-[50%]">
                    {mealInfo.missedIngredients.map((ingredient, index) => (
                        <span key={index} className="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">{ingredient.name}</span>
                    ))}
                    </div>
                </div>
                <div className="flex items-center justify-evenly mt-auto">
      <span className="text-2xl font-bold text-gray-900 dark:text-white">
        {mealInfo.missedIngredientCount} missing ingredients
      </span>
                    <Link
                        href={`/recipe/${mealInfo.id}`}
                        className="rounded-lg bg-blue-700 ml-2 px-4 py-3.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Check details
                    </Link>
                    <a
                        href={`#`}
                        className="rounded-lg bg-blue-700 ml-2 px-4 py-3.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to favorites
                    </a>
                </div>
            </Card>
        </div>
    );
}
