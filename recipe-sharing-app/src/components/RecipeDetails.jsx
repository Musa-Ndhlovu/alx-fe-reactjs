 // RecipeDetails component
 import { useRecipeStore } from './recipeStore';

 const RecipeDetails = ({ recipeDetails}) =>
      recipe = useRecipeStore (state => 
        state.recipe.find(recipe => recipe.id === recipeDetails.id)
    );

    if (!recipe) {
        return <p>Recipe not found</p>
    }

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>

    <button type = "button" className="bg-green text-white rounded">
        Edit Recipe 
    </button>

    <button type = "button" className = "bg-green text-white rounded">
        Delete Recipe 
    </button>
    </div>
    );


export default RecipeDetail;