import { useEffect } from "react";
import { useState } from "react";

const HomePage = () => {
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        fetch("data.json")
        .then((response) => response.json())
        .then ((data) => setRecipe(data.recipe))
        .catch((error) => console.error("Error loading data:", error));
    })

    return(
        <div className="p-4">
            <h1 className="text-bold mb-4 text-xl">Recipe</h1>
        </div>
    )
}

export default HomePage