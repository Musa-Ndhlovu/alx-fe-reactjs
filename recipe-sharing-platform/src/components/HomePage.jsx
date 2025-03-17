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

            <ul>
                {recipe.map((recipe, index) => (
                    <li key={index} ClassName="mb-2 p-2 border rounded">
                        <h2 className="text-md font-bold">{recipe.id}</h2>
                        <h3 className="text-md font-light">{recipe.summary}</h3>
                    </li>
                )
            )}
            </ul>
        </div>
    )
}

export default HomePage