'use client'
import SearchInput from "../../../components/SearchInput";
import ProductInfo from "../../../components/ProductInfo";
import ResultTable from "../../../components/ResultTable";
import { useState } from "react";
import { IngredientType } from "../../../components/types/IngredientType";

export default function Page() {
    const [ingredients, setIngredients] = useState<Array<IngredientType>>([]);

    // const renderProductInfoHTML = ingredients.map((ingredient) => {
    //         return (
    //             <ProductInfo key={ingredient.name} ingredients={ingredients}/>
    //         )
    //     }
    // )

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="text-center pt-6 px-2">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl
                 lg:text-6xl dark:text-white">Analyze
                    your meal</h1>
                <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    Type in your ingredients and we will analyze the nutrition facts of your meal.
                </p>
            </header>
            <main>
                <SearchInput setIngredients={setIngredients} />
                <div className="flex gap-3 flex-wrap px-3 mt-6 mx-auto">
                    {/*{renderProductInfoHTML}*/}
                    <ProductInfo ingredients={ingredients} />
                    {/*<ProductInfo />*/}
                    {/*<ProductInfo />*/}
                    {/*<ProductInfo />*/}
                    {/*<ProductInfo />*/}
                    {/*<ProductInfo />*/}
                    {/*<ProductInfo />*/}
                    {/*<ProductInfo />*/}
                    {/*<ProductInfo />*/}
                    {/*<ProductInfo />*/}
                    {/*<ProductInfo />*/}
                    {/*<ProductInfo />*/}
                </div>
                {/* <ResultTable /> */}
            </main>
        </div>
    )
}
