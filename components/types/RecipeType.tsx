export type MissingIngredientType = {
    id: number,
    amount: number,
    unit: string,
    unitLong: string,
    unitShort: string,
    aisle: string,
    name: string,
    original: string,
    originalName: string,
    meta: Array<string>,
    extendedName: string,
    image: string
}

export type RecipeType = {
    id: number;
    title: string;
    image: string;
    imageType: string;
    usedIngredientCount: number;
    missedIngredientCount: number;
    missedIngredients: Array<MissingIngredientType>;
    unusedIngredients: Array<MissingIngredientType>;
    likes: number;
}
