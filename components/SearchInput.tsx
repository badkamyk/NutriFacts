'use client'
import {useState} from "react";
import Form from "../components/Form";
import {IngredientType} from "./types/IngredientType";

export default function SearchInput({setIngredients}: { setIngredients: (ingredients: Array<IngredientType>) => void }) {
    const [search, setSearch] = useState("");
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://api.calorieninjas.com/v1/nutrition?query=${search}`, {
                method: "GET",
                headers: {
                    'X-Api-Key': 'YOUR_API_KEY',
                    "Content-Type": "application/json",

                },
            });
            const parseRes = await response.json();
            setIngredients(parseRes.items);
        } catch (err) {
            if (err instanceof Error) {
                console.log(err.message);
            }
        }
    }

    return (
        <Form onSubmitForm={onSubmitForm} handleSearch={handleSearch} value={search}
              placeholder={"Type in ingredients"}/>
    )
}
