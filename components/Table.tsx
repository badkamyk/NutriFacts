import React from 'react'

type NutrientsType = {
    name: string;
    amount: number;
    unit: string;
    percentOfDailyNeeds: number;
}[]

export default function Table({ nutrients }: { nutrients: NutrientsType }) {

    const tableHeadings = ["Nutrient", "Amount", "Unit", "% of Daily Needs"]


    return (
        <div className="overflow-x-auto relative overflow-y-auto max-h-[400px]">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 relative">
                <thead role="rowgroup" className="text-xs text-gray-900 uppercase dark:text-gray-400 sticky top-0 bg-blue-200">
                <tr role="row">
                    {tableHeadings.map((heading, index) => (
                        <th role="columnheader" key={index} scope="col" className="py-3 px-6">
                            {heading}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody role="rowgroup">
                {nutrients.map((nutrient, index) => (
                    <tr key={index} className="bg-white dark:bg-gray-800" >
                        <th scope="row"
                            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
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
