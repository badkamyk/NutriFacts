'use client'

import { useState, useEffect } from "react";
import Spinner from "../../../components/Spinner";
import Image from "next/image";
import Link from "next/link";
import { saveRecipeToLocalStorage, checkIfInLocalStorage } from "../../../utils/localStorageHelpers";
import "../../../public/recipeBulk.json"
import { RecipeDetails } from "../../../components/types/RecipeDetails";

export default function Favorites() {
    const [favoritesIDs, setFavoritesIDs] = useState<string>(localStorage.getItem("savedRecipes") || "");
    const [favorites, setFavorites] = useState<RecipeDetails[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    console.log(favoritesIDs);

    useEffect(() => {
        const getFavorites = async () => {
            // const response = await fetch(` https://api.spoonacular.com/recipes/informationBulk?ids=${favoritesIDs}&apiKey=YOUR_API_KEY`);
            const response = await fetch(`recipeBulk.json`);
            const data = await response.json();
            setFavorites(data);
            setIsLoading(false);
        }
        getFavorites()
    }, [])

    const handleRemove = (id: string) => {
        checkIfInLocalStorage(id) && setFavorites(favorites.filter(favorite => favorite.id !== parseInt(id)));
        saveRecipeToLocalStorage(id);
        setFavoritesIDs(localStorage.getItem("savedRecipes") || "");
    }

    return (
        <div className="p-6 min-h-screen">
            <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">Favorite
                meals</h1>
            {isLoading ? <Spinner /> : (
                <div className="grid gap-3 grid-cols-1 grid- md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 3xl:grid-cols-6">
                    {favorites.map((recipe) => (
                        <div key={recipe.id}
                            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:bg-blue-200 dark:bg-gray-800 dark:border-gray-700">
                            <Link href={`recipe/${recipe.id}`}>
                                <Image className="rounded-t-lg" src={recipe.image} alt="" height={500} width={500} />
                            </Link>
                            <div className="p-5">
                                <Link href={`recipe/${recipe.id}`}>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{recipe.title}</h5>
                                </Link>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{recipe.instructions.substring(0, 50)}...</p>
                                <div className="flex justify-around gap-3">
                                    <Link href={`recipe/${recipe.id}`}
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Check details
                                    </Link>
                                    <button onClick={() => handleRemove(recipe.id.toString())}
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

