import {useState }from "react";
import {useRecipeStore } from "./recipeStore";

const EditRecipeForm = ({recipeId, onSubmit}) => {
  const {updateRecipe} = useRecipeStore();

  
    const [RecipeDetails, AddRecipeForm] = useState ({
        name: '',
        email:'',
        message:'',
    });

    const handleChange = (event) => {
        RecipeDetails ({ ...RecipeDetails, [e.target.name]: e.target.value})
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(RecipeDetails);
    };

    updateRecipe({id: recipeId, ...formData});
    if (onSubmit) onSubmit();
  };
 
  function EditRecipeForm()  { 
    <>
    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded-lg shadow-lg">
        <label className="block mb-2">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </label>
  
        <label className="block mb-2">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </label>
  
        <label className="block mb-2">
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </label>
  
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Submit Changes
        </button>
      </form>
    );
  </>
  };
  
 export default EditRecipeForm 