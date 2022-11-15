'use client'
import Select from "../../../components/Select"
import {useState} from "react";

export default function MealPlanner() {
    const [timeframe, setTimeframe] = useState<"day" | "week">("day")
    const [calories, setCalories] = useState("2000")
    const [diet, setDiet] = useState("")

    const onChangeDiet = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDiet(e.target.value)
    }

    const onChangeCalories = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCalories(e.target.value)
    }

    const onChangeTimeframe = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTimeframe(e.target.value as "day" | "week")
    }

    return (
        <div className="px-3">
            <h1 className="my-6 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white mb-12">Plan
                your meal for next day or week</h1>
            <div className="w-[40%] mr-auto">
                <Select value={timeframe} onChange={onChangeTimeframe} label={"Choose timeframe"} id={"timeframe"}
                        options={["1 day", "1 week"]}/>
                <Select value={diet} onChange={onChangeDiet} label={"Choose diet"} id={"diet"}
                        options={["Vegan", "Vegetarian", "Pescatarian", "Ketogenic", "Paleo", "Primal", "Whole30", "Low FODMAP"]}/>
                <Select value={calories} onChange={onChangeCalories} label={"Choose calories"} id={"calories"}
                        options={["2000", "2500", "3000", "3500", "4000", "4500", "5000"]}/>
            </div>
        </div>
    )
}


