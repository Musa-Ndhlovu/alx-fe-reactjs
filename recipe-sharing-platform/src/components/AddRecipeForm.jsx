import { useState } from "react"

const AddRecipeForm = ({onAddRecipe}) => {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState(""); 

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !ingredients || !instructions) {
            alert("Please fill in all fields.");
            return;
          }
}
}
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>