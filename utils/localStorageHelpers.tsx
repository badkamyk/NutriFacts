export function saveRecipeToLocalStorage(id: string) {
    let currentValue = localStorage.getItem("savedRecipes");
    if (currentValue && currentValue.includes(id)) {
        currentValue = currentValue.replaceAll(`,${id}`, "");
        localStorage.setItem("savedRecipes", currentValue);
    } else {
        localStorage.setItem("savedRecipes", `${currentValue},${id}`);
    }
    console.log(localStorage.getItem("savedRecipes"));
}

export function checkIfInLocalStorage(id: string) {
    const currentValue = localStorage.getItem("savedRecipes");
    if (currentValue && currentValue.includes(id)) {
        return true;
    }
    return false;
}