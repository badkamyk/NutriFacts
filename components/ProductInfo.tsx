'use client'
import { IngredientType } from "./types/IngredientType";
import { Table } from "flowbite-react";

export default function ProductInfo({ ingredients }: { ingredients: Array<IngredientType> }) {
    const macronutrientsValues = Object.keys({ product: "Product", ...ingredients[0] });
    const tableHead = macronutrientsValues.map((name) => {

        return name === "name" ? null : <Table.HeadCell>{name.replaceAll("_", " ")}</Table.HeadCell>
    })

    const tableBody = ingredients.map((ingredient) => {
        const productAddedObj = { product: ingredient.name, ...ingredient }
        return (
            <Table.Row key={productAddedObj.name} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                {macronutrientsValues.map((nutritionName) => {
                    return nutritionName === "name" ? null :
                        <Table.Cell>{productAddedObj[nutritionName as keyof IngredientType]}</Table.Cell>
                })}
            </Table.Row>
        )
    })


    function sumNutrientsByKey(ingredients: Array<IngredientType>) {
        return ingredients.reduce((acc, ingredient) => {
            for (const key in ingredient) {
                if (key !== "name") {
                    acc[key] = (acc[key] || 0) + Number(ingredient[key as keyof IngredientType])
                    // acc[key] = (acc[key] || 0) + ingredient[key as keyof IngredientType]
                }
            }
            return acc;
        }, {} as { [key: string]: number })

    }

    const sumOfMacronutrients = sumNutrientsByKey(ingredients);

    const sumNutritientsHTML = macronutrientsValues.map((nutritionName) => {
        return nutritionName === "name" ? null :
            nutritionName === "product" ?
                <Table.Cell className="bg-lime-100 border-t-4 border-blue-300">total sum</Table.Cell>
                : <Table.Cell
                    // className="bg-lime-100 border-t-4 border-blue-300">{parseFloat(sumOfMacronutrients[nutritionName]).toFixed(2)}</Table.Cell>
                    className="bg-lime-100 border-t-4 border-blue-300">{sumOfMacronutrients[nutritionName].toFixed(2)}</Table.Cell>

        }
    )
    return (
        ingredients.length ?
            <Table className="mx-auto">
                <Table.Head>
                    {tableHead}
                </Table.Head>
                <Table.Body className="divide-y">
                    {tableBody}
                    {sumNutritientsHTML}
                </Table.Body>
            </Table> :
            <h2 className="text-center w-full text-sm lg:text-md xl:text-lg 2xl:text-xl">Your results will be shown
                here</h2>
    )
}
