"use client";
import Select from "../../../components/Select";
import { saveRecipeToLocalStorage, checkIfInLocalStorage } from "../../../utils/localStorageHelpers";
import { useState } from "react";
import {
    DayMealType,
    NutrientsType,
    WeekType,
    MealType,
} from "../../../components/types/MealTypes";
import Link from "next/link";

export default function MealPlanner() {
    const [calories, setCalories] = useState("Choose calories");
    const [diet, setDiet] = useState("Choose diet");
    const [data, setData] = useState<WeekType | null>(null);
    const [favoritedMeal, setFavoritedMeal] = useState<string[]>([]);

    const onChangeDiet = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDiet(e.target.value);
    };

    const onChangeCalories = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCalories(e.target.value);
    };

    async function getMeal(calories: string, diet: string) {
        const res = await fetch(
            `https://api.spoonacular.com/mealplanner/generate?timeFrame=week&targetCalories=${calories}&diet=${diet}&apiKey=YOUR_API_KEY`
        );
        return res.json();
        // const res = await import("../../../public/mealWeek.json");
        // return res.default;
    }

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = getMeal(calories, diet);
        data.then((res) => {
            setData(res);
        });
    }

    function onFavoriteMeals(meal: DayMealType) {
        const mealId = meal.id.toString();
        if (favoritedMeal.includes(mealId)) {
            setFavoritedMeal((prev) => prev.filter((item) => item !== mealId));
        } else {
            setFavoritedMeal((prev) => [...prev, mealId]);
        }
        saveRecipeToLocalStorage(mealId);
    }

    function renderNutrients(nutrients: NutrientsType) {
        return (
            Object.entries(nutrients).map(([key, value]) => (
                <div key={key}>
                    <p className="text-sm font-bold">{key} <span className="text-black">{value}</span></p>
                </div>
            ))
        )
    }

    const buttonDisabled = calories === "Choose calories" || diet === "Choose diet";

    const renderMealForOneDay = () => {
        return (
            data &&
            Object.entries(data.week).map(([key, value]) => {
                return (
                    <div key={key} className="mb-12">
                        <h2 className="text-2xl font-bold text-center my-1 px-2 py-1 mr-2 xl:text-lg 2xl:text-xl leading-5 text-blue-800 bg-blue-100 rounded-full dark:bg-blue-700 dark:text-blue-100">
                            {key.toUpperCase()}
                        </h2>
                        <div className="text-xl font-bold text-center my-6 px-2 md:w-[40%] py-1 mx-auto xl:text-lg 2xl:text-xl leading-5 text-blue-800 bg-green-100 rounded-full dark:bg-blue-700 dark:text-blue-100">
                            <h3 className="text-2xl w-[50%] font-bold text-center my-1 px-2 py-2 xl:w-[40%] mx-auto xl:text-lg 2xl:text-xl leading-5 text-blue-800 bg-green-200 rounded-full dark:bg-blue-700 dark:text-blue-100">
                                Nutrients
                            </h3>
                            {renderNutrients(value.nutrients)}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {value.meals.map((meal: DayMealType) => {
                                return (
                                    <div
                                        key={meal.id}
                                        className="bg-white rounded-lg shadow-lg hover:bg-blue-200 hover:cursor-pointer p-9 relative"
                                    >
                                        <Link href={`/recipe/${meal.id}`}>
                                            <h3 className="text-xl font-bold">{meal.title}</h3>
                                            <p className="text-gray-500 text-lg">
                                                Time to prepare: {meal.readyInMinutes} minutes
                                            </p>
                                            <p className="text-gray-500 xl:text-md 2xl:text-lg">
                                                {meal.servings} servings
                                            </p>
                                        </Link>
                                        <div className="absolute w-6 h-6 top-3 right-5" onClick={() => onFavoriteMeals(meal)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" fill={checkIfInLocalStorage(meal.id.toString()) ? "red" : "none"} className="w-6 h-6 hover:fill-red-500">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                            </svg>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })
        );
    };

    return (
        <div className="px-3 min-h-screen">
            <h1 className="my-6 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white mb-12 text-center">
                Plan your meals for next week
            </h1>
            <form
                onSubmit={onSubmit}
                className="w-[70%] mx-auto xl:w-[50%] 2xl:w-[40%] mb-12"
            >
                <Select
                    value={diet}
                    onChange={onChangeDiet}
                    onBlur={onChangeDiet}
                    label={"Diet type"}
                    id={"diet"}
                    options={[
                        "Vegan",
                        "Vegetarian",
                        "Pescatarian",
                        "Ketogenic",
                        "Paleo",
                        "Primal",
                        "Whole30",
                        "Low FODMAP",
                    ]}
                />
                <Select
                    value={calories}
                    onChange={onChangeCalories}
                    onBlur={onChangeCalories}
                    label={"Calories count"}
                    id={"calories"}
                    options={["1500", "2000", "2500", "3000", "3500", "4000", "4500", "5000"]}
                />
                <button
                    disabled={buttonDisabled}
                    type="submit"
                    className={`mt-6 w-full py-3 px-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600
                     hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${buttonDisabled && "opacity-50 cursor-not-allowed"}`}
                >
                    Plan my meal
                </button>
            </form>
            <div className="flex flex-col items-center justify-center w-full">
                {renderMealForOneDay()}
            </div>
        </div>
    );
}
