'use client'
import { Table } from "flowbite-react"

export default function ResultTable() {
    return (
        <Table className="text-xl">
            <Table.Head>
                <Table.HeadCell className="text-sm md:text-sm lg:text-md xl:text-lg 2xl:text-xl">
                    Ingredient
                </Table.HeadCell>
                <Table.HeadCell>
                    Total sum
                </Table.HeadCell>
                {/* <Table.HeadCell>
                    Category
                </Table.HeadCell>
                <Table.HeadCell>
                    Price
                </Table.HeadCell> */}
                <Table.HeadCell>
                    <span className="sr-only">
                        Check substitutes
                    </span>
                </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-sm md:text-sm lg:text-md xl:text-lg 2xl:text-xl">
                        Apple MacBook Pro 17&quot;
                    </Table.Cell>
                    <Table.Cell>
                        Sliver
                    </Table.Cell>
                    {/* <Table.Cell>
                        Laptop
                    </Table.Cell>
                    <Table.Cell>
                        $2999
                    </Table.Cell> */}
                    <Table.Cell>
                        <a
                            href="/tables"
                            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                        >
                            Edit
                        </a>
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Microsoft Surface Pro
                    </Table.Cell>
                    <Table.Cell>
                        White
                    </Table.Cell>
                    {/* <Table.Cell>
                        Laptop PC
                    </Table.Cell>
                    <Table.Cell>
                        $1999
                    </Table.Cell> */}
                    <Table.Cell>
                        <a
                            href="/tables"
                            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                        >
                            Edit
                        </a>
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        Magic Mouse 2
                    </Table.Cell>
                    <Table.Cell>
                        Black
                    </Table.Cell>
                    {/* <Table.Cell>
                        Accessories
                    </Table.Cell>
                    <Table.Cell>
                        $99
                    </Table.Cell> */}
                    <Table.Cell>
                        <a
                            href="/tables"
                            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                        >
                            Check substitutes
                        </a>
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table >
    )
}