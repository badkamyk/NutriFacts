"use client";
import Select from "../../../components/Select";
import { useState } from "react";
import {
    DayMealType,
    NutrientsType,
    WeekType,
    MealType,
} from "../../../components/types/MealTypes";
import Link from "next/link";

export default function MealPlanner() {
    const [calories, setCalories] = useState("2000");
    const [diet, setDiet] = useState("");
    const [data, setData] = useState<WeekType | null>(null);

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
        setTimeout(() => {
            console.log("test");
        }, 10000);
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

    const renderMealForOneDay = () => {
        return (
            data &&
            Object.entries(data.week).map(([key, value]) => {
                return (
                    <div key={key} className="mb-12">
                        <h2 className="text-2xl font-bold text-center my-1 px-2 py-1 mr-2 xl:text-lg 2xl:text-xl leading-5 text-blue-800 bg-blue-100 rounded-full dark:bg-blue-700 dark:text-blue-100">
                            {key.toUpperCase()}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {value.meals.map((meal: DayMealType) => {
                                return (
                                    <div
                                        key={meal.id}
                                        className="bg-white rounded-lg shadow-lg p-4  hover:bg-blue-200 hover:cursor-pointer"
                                    >
                                        <Link href={`/recipe/${meal.id}`}>
                                            <h3 className="text-xl font-bold">{meal.title}</h3>
                                            <p className="text-gray-500 text-md">
                                                Time to prepare: {meal.readyInMinutes} minutes
                                            </p>
                                            <p className="text-gray-500 xl:text-md 2xl:text-lg">
                                                {meal.servings} servings
                                            </p>
                                            {Object.entries(value.nutrients).map(([key, value]) => {
                                                return (
                                                    <p
                                                        key={key}
                                                        className="my-1 px-2 py-1 mr-2 text-sm xl:text-md 2xl:text-lg font-medium w-[60%] leading-5 text-blue-800 bg-green-100 rounded-full dark:bg-blue-700 dark:text-blue-100"
                                                    >
                                                        {key}: {value}
                                                    </p>
                                                );
                                            })}
                                        </Link>
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
                Plan your meal for next day or week
            </h1>
            <form
                onSubmit={onSubmit}
                className="w-[70%] mx-auto xl:w-[50%] 2xl:w-[40%] mb-12"
            >
                <Select
                    value={diet}
                    onChange={onChangeDiet}
                    label={"Choose diet"}
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
                    label={"Choose calories"}
                    id={"calories"}
                    options={["2000", "2500", "3000", "3500", "4000", "4500", "5000"]}
                />
                <button
                    type="submit"
                    className="mt-6 w-full py-3 px-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
