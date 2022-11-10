'use client'
// import '../app/globals.css'

import { Navbar, Button } from "flowbite-react";
import Image from 'next/image';
import { usePathname } from 'next/navigation';


export default function Nav() {
    const pathname = usePathname();
    return (
        <Navbar
            fluid={true}
            rounded={true}
            border={true}>
            <Navbar.Brand href="/">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    NutriFacts
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Button className={"mr-6 text-md xl:p-2"}>
                    <span className={"md:text-md lg:text-lg xl:text-xl 2xl:text-2xl"}>Shop</span>
                </Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link
                    className={"lg:text-md xl:text-lg 2xl:text-xl"}
                    href="/"
                    active={pathname === "/"}
                >
                    Home
                </Navbar.Link>
                <Navbar.Link
                    className={"lg:text-md xl:text-lg 2xl:text-xl"}
                    href="/analyze"
                    active={pathname === "/analyze"}
                >
                    Nutrition analysis
                </Navbar.Link>
                <Navbar.Link
                    className={"lg:text-md xl:text-lg 2xl:text-xl"}
                    href="/find-recipe">
                    Find a recipe
                </Navbar.Link>
                <Navbar.Link
                    className={"lg:text-md xl:text-lg 2xl:text-xl"}
                    href="/shop">
                    Shop
                </Navbar.Link>
                <Navbar.Link
                    className={"lg:text-md xl:text-lg 2xl:text-xl"}
                    href="/contact">
                    Contact
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}
