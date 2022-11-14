type ExtendedIngredients = {
    id: number;
    aisle: string;
    image: string;
    consistency: string;
    name: string;
    original: string;
    originalName: string;
    amount: number;
    unit: string;
    meta: string[];
    measures: {
        us: {
            amount: number;
            unitShort: string;
            unitLong: string;
        };
        metric: {
            amount: number;
            unitShort: string;
            unitLong: string;
        };
    };
}

export type WinePairing = {
    pairedWines: string[];
    pairingText: string;
    productMatches: {
        id: number;
        title: string;
        description: string;
        price: string;
        imageUrl: string;
        averageRating: number;
        ratingCount: number;
        score: number;
        link: string;
    }[];
}

export type RecipeDetailts = {
    id: number,
    vegetarian: boolean,
    vegan: boolean,
    glutenFree: boolean,
    dairyFree: boolean,
    veryHealthy: boolean,
    cheap: boolean,
    veryPopular: boolean,
    sustainable: boolean,
    weightWatcherSmartPoints: number,
    gaps: string,
    lowFodmap: boolean,
    preparationMinutes: number,
    cookingMinutes: number,
    aggregateLikes: number,
    healthScore: number,
    creditsText: string,
    sourceName: string,
    pricePerServing: number,
    extendedIngredients: ExtendedIngredients[],
    title: string,
    image: string,
    imageType: string,
    instructions: string,
    readyInMinutes: number,
    servings: number,
    sourceUrl: string,
    analyzedInstructions: {
        name: string;
    }
    summary: string,
    winePairing: WinePairing,
}
