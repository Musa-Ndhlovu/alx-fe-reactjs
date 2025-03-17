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

return 
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
   
      <div>
        <label className="block font-medium">Recipe</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="Enter recipe title"
          required
        />
      </div>

      
      <div>
        <label className="block font-medium">Ingredients</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="List ingredients, one per line"
          rows="4"
          required
        ></textarea>
      </div>

     
      <div>
        <label className="block font-medium">Preparation </label>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="List steps, one per line"
          rows="4"
          required
        ></textarea>
      </div>


<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>

</form>
</div>