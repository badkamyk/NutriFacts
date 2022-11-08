import Nav from "../../components/Nav";
import Head from "next/head";

export default function Page() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Nav />
            <header className="text-center mt-6 px-2">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl
                 lg:text-6xl dark:text-white">We
                    invest in the world’s potential</h1>
                <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    Type in your ingredients and we will analyze the nutrition facts of your meal.
                </p>
            </header>

            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
                    </div>
                </div>
            </main>
        </div>
    )
}
