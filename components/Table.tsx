import React from 'react'

type Nutrients = {
    name: string;
    amount: number;
    unit: string;
    percentOfDailyNeeds: number;
}[]

export default function Table({ nutrients }: { nutrients: Nutrients }) {

    const tableHeadings = ["Nutrient", "Amount", "Unit", "% of Daily Needs"]


    return (
        <div className="overflow-x-auto relative overflow-y-auto max-h-[400px]">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 relative">
                <thead className="text-xs text-gray-900 uppercase dark:text-gray-400 sticky top-0 bg-blue-200">
                    <tr>
                        {tableHeadings.map((heading, index) => (
                            <th key={index} scope="col" className="py-3 px-6">
                                {heading}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {nutrients.map((nutrient, index) => (
                        <tr key={index} className="bg-white dark:bg-gray-800">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {nutrient.name}
                            </th>
                            <td className="py-4 px-6">
                                {nutrient.amount}
                            </td>
                            <td className="py-4 px-6">
                                {nutrient.unit}
                            </td>
                            <td className="py-4 px-6">
                                {nutrient.percentOfDailyNeeds}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}
