import Head from "next/head";

export default function About() {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="py-6 flex flex-col gap-y-3">
                <div className="flex px-3 flex-col items-center flex-1 md:px-20 lg:px-20 xl:px-20 2xl:px-20 text-left">
                    <h1 className="text-6xl font-bold">About</h1>
                    <p className="mt-6 text-2xl w-full lg:w-1/2">
                        This is a project made by <a href="#"
                                                     className="text-blue-500 hover:text-blue-600">Kamyk</a>. This
                        application serves as a nutrition analyzer,
                        meal planer and recipe finder. It is made using the Spoonacular and CalorieNinjas APIs. The
                        application is made using Next.js and TailwindCSS.
                    </p>
                    <p className="mt-9 text-2xl lg:w-1/2">Type in your ingredients and get a list of recipes that you
                        can make with them. Click on chosen one and check details about preparation.</p>
                    <p className="mt-9 text-2xl lg:w-1/2">Analyze your ingredients. You&apos;ll get information about
                        macronutrients, recommended values of sodium, sugar, saturated fat etc. </p>
                    <p className="mt-9 text-2xl lg:w-1/2">Choose your diet type like Vegan, amount of calories then
                        search for a whole week meal plan. You can add meals to your favorite list, so you can reuse
                        them later.</p>

                </div>
            </div>
        </div>
    )
}
