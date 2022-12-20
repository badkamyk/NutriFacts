'use client'
import { CalendarDaysIcon, GlobeAltIcon, ScaleIcon, ClipboardDocumentIcon } from '@heroicons/react/24/outline'

export const features = [
    {
        name: 'Countless recipes',
        description:
            'Choose from a wide variety of recipes, from all over the world. We have recipes for every occasion, from breakfast to dinner, and everything in between.',
        icon: GlobeAltIcon,
    },
    {
        name: 'Analyze your meal',
        description:
            'Type in your ingredients and we will analyze the nutrition facts of your meal.',
        icon: ScaleIcon,
    },
    {
        name: 'Save your favorite meals',
        description:
            'Save your favorite meals and recipes to your profile, and access them whenever you want.',
        icon: ClipboardDocumentIcon,
    },
    {
        name: 'Generate a meal plan',
        description:
            'Generate a meal plan for the week based on your diet type and calories per day.',
        icon: CalendarDaysIcon,
    },
]

export default function Feature() {
    return (
        <div className="py-12 bg-yellow-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-lg font-semibold text-indigo-600">Awareness</h2>
                    <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                        A better way to control important details
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Take care of your daily ingredients and recipes.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0" role="region">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <div
                                        className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white" role="img">
                                        <feature.icon className="h-6 w-6" aria-hidden="true"/>
                                    </div>
                                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
