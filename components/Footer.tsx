'use client'
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white mt-auto">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                    <Link href="/about" className="px-5 py-2 text-base text-gray-500 hover:text-gray-900">
                        About
                    </Link>
                    <Link href="about-diets" className="px-5 py-2 text-base text-gray-500 hover:text-gray-900">
                        Diets
                    </Link>
                    <Link href="#" className="px-5 py-2 text-base text-gray-500 hover:text-gray-900">
                        Privacy policy
                    </Link>
                    <Link href="terms-of-use" className="px-5 py-2 text-base text-gray-500 hover:text-gray-900">
                        Terms of use
                    </Link>
                </nav>
                <p className="mt-8 text-center text-base text-gray-400">
                    &copy; 2022 NutriFacts, Inc. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
