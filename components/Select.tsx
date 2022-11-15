export default function Select({
                                   label,
                                   options,
                                   onChange,
                                   id,
                                   value,
                               }: { label: string, options: Array<string>, onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void, id: string, value: string }) {
    return (
        <div className="mb-6">
            <label htmlFor={id}
                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">{label}</label>
            <select onChange={onChange} id="countries" value={value}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Choose {id}</option>
                {options.map((option, index) => (
                    <option key={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

