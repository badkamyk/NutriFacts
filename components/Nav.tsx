'use client'
// import '../app/globals.css'

import { Navbar, Button } from "flowbite-react";
import Image from 'next/image';


export const Nav = () => {
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
                    <span className={"xl:text-lg"}>Shop</span>
                </Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link
                    className={"lg:text-md xl:text-lg 2xl:text-xl"}
                    href="/navbars"
                    active={true}
                >
                    Home
                </Navbar.Link>
                <Navbar.Link
                    className={"lg:text-md xl:text-lg 2xl:text-xl"}
                    href="/navbars">
                    Nutrition analysis
                </Navbar.Link>
                {/* <Navbar.Link
                    className={"lg:text-md xl:text-lg 2xl:text-xl"}
                    href="/navbars">
                    Our products
                </Navbar.Link> */}
                <Navbar.Link
                    className={"lg:text-md xl:text-lg 2xl:text-xl"}
                    href="/navbars">
                    Cart
                </Navbar.Link>
                <Navbar.Link
                    className={"lg:text-md xl:text-lg 2xl:text-xl"}
                    href="/navbars">
                    Contact
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}
