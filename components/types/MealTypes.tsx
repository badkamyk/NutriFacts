export type DayMealType = {
    id: number;
    imageType: string;
    title: string;
    readyInMinutes: number;
    servings: number;
    sourceUrl: string;
}

export type NutrientsType = {
    calories: number;
    protein: number;
    fat: number;
    carbohydrates: number;
}

export type MealType = {
    id: number;
    imageType: string;
    title: string;
    readyInMinutes: number;
    servings: number;
    sourceUrl: string;
    nutrients: NutrientsType;
}

export type WeekType = {
    week: {
        [key: string]: {
            meals: Array<MealType>;
            nutrients: NutrientsType;
        }
    }
}