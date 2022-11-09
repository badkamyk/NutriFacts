'use client'
import { IngredientType } from "./types/IngredientType";
import { Card, Table } from "flowbite-react";

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
                    return nutritionName === "name" ? null : <Table.Cell>{productAddedObj[nutritionName as keyof IngredientType]}</Table.Cell>
                })}
            </Table.Row>
        )
    })


    return (
        ingredients.length ?
            <Table className="mx-auto">
                <Table.Head>
                    {tableHead}
                </Table.Head>
                <Table.Body className="divide-y">
                    {tableBody}
                </Table.Body>
            </Table> : <h2 className="text-center w-full text-sm lg:text-md xl:text-lg 2xl:text-xl">Your results will be shown here</h2>
    )
}
