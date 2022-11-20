import React from 'react'

export default function AboutDiets() {
    const diets = [
        { name: "Vegan", description: "A vegan diet is a diet that excludes meat, eggs, dairy products and all other animal-derived ingredients." },
        { name: "Vegetarian", description: "A vegetarian diet is a diet that excludes meat, fish, and poultry, but includes eggs and dairy products." }, { name: "Pescetarian", description: "A pescetarian diet is a diet that includes fish, but excludes meat, eggs, and dairy products." }, { name: "Ketogenic", description: "A ketogenic diet is a very low-carb diet with numerous health benefits." },
        { name: "Paleo", description: "Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. We also allow honey and maple syrup (popular in Paleo desserts, but strict Paleo followers may disagree). Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods." },
        { name: "Primal", description: "A primal diet is a diet based on eating whole, unprocessed foods." },
        { name: "Whole30", description: "Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds. Ingredients not allowed include added sweeteners (natural and artificial, except small amounts of fruit juice), dairy (except clarified butter or ghee), alcohol, grains, legumes (except green beans, sugar snap peas, and snow peas), and food additives, such as carrageenan, MSG, and sulfites." },
        { name: "Gluten Free", description: "A gluten free diet is a diet that excludes gluten." },
        { name: "Low FODMAP", description: "FODMAP stands for fermentable oligo-, di-, mono-saccharides and polyols. Our ontology knows which foods are considered high in these types of carbohydrates (e.g. legumes, wheat, and dairy products)" },
        { name: "Pescetarian", description: "Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not." },]

    return (
        <div className="p-6">
            <h1 className="text-6xl font-bold mb-3">Diet types</h1>
            <p className="text-2xl mb-3">Here you can find a list of all the diets we support.</p>
            <p className="text-2xl mb-3">You can use these diets to plan your meals.</p>
            <div className="flex flex-col gap-12 border-t-2">
                {diets.map((diet) => {
                    return (
                        <div key={diet.name} className="flex flex-col gap-3 border-b-2 py-3">
                            <h2 className="text-4xl font-bold">{diet.name}</h2>
                            <p className="text-2xl">{diet.description}</p>
                        </div>
                    );
                })}
            </div>

        </div>
    )
}
