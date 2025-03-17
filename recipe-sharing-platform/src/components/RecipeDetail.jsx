import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail= () => {
    const {id} = useParams();
    const [recipe, setRecipe] = useState([]);

    useEffect() 
        fetch("data.json")
        .then((response) => response.json())
        .then ((data) => setRecipe(data.recipe))
        .catch((error) => console.error("Error loading data:", error));
      }

   

    return (
        <div className="mx-auto font-lg">
            <img src={recipe.image} alt={recipe.title} className="rounded-lg" />
            <h1 className="text-xl">Ingredients</h1>
            <li key={index}>{ingredient}</li>
        </div>
    )

    <div>
    <h1 className="text-xl">Intructions</h1>
    {recipe.instructions.map((step, index) => (
    <li key={index}>{step}</li>
))}



export default RecipeDetail;