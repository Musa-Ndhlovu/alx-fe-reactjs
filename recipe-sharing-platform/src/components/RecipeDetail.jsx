import { useEffect } from "react";
import { useState } from "react";

const RecipeDetail= () => {
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        fetch("data.json")
        .then((response) => response.json())
        .then ((data) => setRecipe(data.recipe))
        .catch((error) => console.error("Error loading data:", error));
    })
}