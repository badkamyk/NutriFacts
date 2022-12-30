'use client'
import { IngredientType } from "./types/IngredientType";
import { Table } from "flowbite-react";


export default function ProductInfo({ ingredients }: { ingredients: Array<IngredientType> }) {
    const macronutrientsValues = Object.keys({ product: "Product", ...ingredients[0] });
    const tableHead = macronutrientsValues.map((name) => {
        return name === "name" ? null : <Table.HeadCell key={name} role="columnheader"
                                                        className="md-text:sm lg:text-md xl:text-md 2xl:text-lg">{name.replaceAll("_", " ")}</Table.HeadCell>
    })

    const tableBody = ingredients.map((ingredient) => {
        const productAddedObj = { product: ingredient.name, ...ingredient }
        return (
            <Table.Row key={productAddedObj.fat_saturated_g} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                {macronutrientsValues.map((nutritionName) => {
                    return nutritionName === "name" ? null :
                        <Table.Cell
                            key={productAddedObj.calories + Math.random()}
                            className="md-text:sm lg:text-md xl:text-md 2xl:text-xl">{productAddedObj[nutritionName as keyof IngredientType]}</Table.Cell>
                })}
            </Table.Row>
        )
    })

    function sumNutrientsByKey(ingredients: Array<IngredientType>) {
        return ingredients.reduce((acc, ingredient) => {
            for (const key in ingredient) {
                if (key !== "name") {
                    acc[key] = (acc[key] || 0) + Number(ingredient[key as keyof IngredientType])
                }
            }
            return acc;
        }, {} as { [key: string]: number })
    }

    const sumOfMacronutrients = sumNutrientsByKey(ingredients);

    const sumNutrientsHTML = macronutrientsValues.map((nutritionName, index) => {
            return nutritionName === "name" ? null :
                nutritionName === "product" ?
                    <Table.Cell
                        key={nutritionName + index}
                        className="bg-lime-100 border-t-4 border-blue-300 md-text:sm lg:text-md xl:text-lg 2xl:text-xl">total
                        sum</Table.Cell>
                    : <Table.Cell
                        key={nutritionName + index}
                        className="bg-lime-100 border-t-4 border-blue-300 md-text:sm lg:text-md xl:text-lg 2xl:text-xl">{sumOfMacronutrients[nutritionName].toFixed(2)}</Table.Cell>

        }
    )

    const recommendedNutrientValue = {
        sodium_mg: 2300,
        fat_saturated_g: 25,
        fiber_g: 30,
        sugar_g: 36,
    }

    const createPercentageParagraph = (nutritionName: string, recommendedValue: number, key: string) => {
        const percentage = (sumOfMacronutrients[nutritionName] / recommendedValue) * 100;
        return <p key={key}
                  className={`text-sm md-text:sm lg:text-md xl:text-lg 2xl:text-xl ${percentage > 100 && "text-red-600"}`}>{percentage.toFixed(1)}
            % of recommended {nutritionName.replaceAll("_", " ")} value</p>
    }

    const renderPercentageHTML = () => {
        return Object.keys(recommendedNutrientValue).map((nutritionName) => {
            return createPercentageParagraph(nutritionName, recommendedNutrientValue[nutritionName as keyof typeof recommendedNutrientValue], nutritionName + Math.random())
        })
    }

    return (
        ingredients.length ?
            <>
                <Table className="mx-auto">
                    <Table.Head>
                        {tableHead}
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {tableBody}
                        <Table.Row>
                            {sumNutrientsHTML}
                        </Table.Row>
                    </Table.Body>
                </Table>
                <div>
                    <h2 className="text-md lg:text-lg xl:text-xl 2xl:text-2xl text-teal-800">Crucial information</h2>
                    <h3 className="text-sm md-text:sm lg:text-md xl:text-lg 2xl:text-xl">Your meal contains:</h3>
                    <div>
                        {renderPercentageHTML()}
                    </div>
                </div>
            </>
            :
            <h2 className="text-center w-full text-sm lg:text-md xl:text-lg 2xl:text-xl">Your results will be shown
                here</h2>
    )
}
