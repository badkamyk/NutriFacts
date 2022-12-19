'use client'
import React, { useState, useRef } from "react";
import Script from 'next/script';
import Head from 'next/head';
import { IngredientType } from "./types/IngredientType";
import { RecipeType } from "./types/RecipeType";


type SearchType = {
    setIngredients?: React.Dispatch<React.SetStateAction<IngredientType[]>>;
    setRecipe?: React.Dispatch<React.SetStateAction<RecipeType[]>>;
    chosenCategory: string;
    setChosenCategory: React.Dispatch<React.SetStateAction<string>>;
}

export default function FindRecipe({ setIngredients, setRecipe, chosenCategory, setChosenCategory }: SearchType) {
    const [search, setSearch] = useState("");
    const [buttonText, setButtonText] = useState("Analyze");
    const inputRef = useRef<HTMLInputElement>(null);


    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    function fetcher(url: string) {
        fetch(url).then((res) => res.json())
    }

    const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (chosenCategory === "nutrition") {
                const response = await fetch(`https://api.calorieninjas.com/v1/nutrition?query=${search}`, {
                    method: "GET",
                    headers: {
                        'X-Api-Key': 'YOUR_CN_API',
                        "Content-Type": "application/json",
                    },
                });
                const parseRes = await response.json();
                setIngredients && setIngredients(parseRes.items);
            } else if (chosenCategory === "recipe") {
                const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${search}&number=10&apiKey=YOUR_SP_API`, {
                    method: "GET",
                });

                const parseRes = await response.json();
                setRecipe && setRecipe(parseRes);
            }
        } catch (err) {
            if (err instanceof Error) {
                console.log(err.message);
            }
        }

    }

    const changeDropDownTextOnButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = e.currentTarget;
        const text = button.textContent;
        if (text === "Analyze") {
            setChosenCategory("nutrition");
            setButtonText("Analyze");

        } else if (text === "Find recipe") {
            setChosenCategory("recipe");
            setButtonText("Find recipe");
        }
        inputRef?.current?.focus();
    }

    return (
        <>
            <Head>
                <title>NutriFacts</title>
                <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css" />
            </Head>
            <Script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js" />
            <form onSubmit={onSubmitForm} className="px-3">
                <div className="flex">
                    <label htmlFor="search-dropdown"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your meal ingredients</label>
                    <button id="dropdown-button" data-dropdown-toggle="dropdown"
                        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                        type="button">{buttonText}
                        <svg aria-hidden="true" className="ml-1 w-4 h-4"
                            fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"></path>
                        </svg>
                    </button>
                    <div id="dropdown"
                        className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                        data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top"
                        style={{
                            position: "absolute",
                            inset: "auto auto 0px 0px",
                            margin: "0px",
                            transform: "translate3d(897px, 5637px, 0px)"
                        }}>
                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                            <li>
                                <button type="button" onClick={changeDropDownTextOnButtonClick}
                                    className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Analyze
                                </button>
                            </li>
                            <li>
                                <button type="button" onClick={changeDropDownTextOnButtonClick}
                                    className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Find
                                    recipe
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="relative w-full">
                        <input onChange={handleSearch} value={search} type="search" id="search-dropdown" ref={inputRef}
                            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                            placeholder="Ingredients..." />
                        <button type="submit"
                            className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}
