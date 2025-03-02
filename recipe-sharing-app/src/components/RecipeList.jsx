// RecipeList component
import { recipeStore } from './recipeStore';
import { useNavigate } from "react-router-dom";


const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  return(
    <Router>
        <nav>
          <Link to = "/recipeDetails">Recipe Details</Link>
          <Link to = "/recipeList">Recipe List</Link>
          <Link to = "/recipeStore">Recipe Store</Link>
        </nav>
  
        <div>
          <Routes>
            <Route path = "/recipeDetails" element = {<recipe Details />} /> 
            <Route path = "/recipeList" element = {<Recipe List />} /> 
            <Route path = "/recipeStore" element = {<Recipe Store />} />
          </Routes>
        </div>
    </Router>
  )
  }
export default RecipeList