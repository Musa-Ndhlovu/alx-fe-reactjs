import { useRecipeStore } from './recipeStore'

const RecommendationsList = () => {
const Recomendations = useRecipeStore (state => state.recommendations.map (id =>
state.recipes.find(recipe => recipe.id === id)
));


return (
    <div>
        <h2>NEED TO TRY: RECOMMENDATIONS</h2>
        {Recommendations.map(recipe => ( 
            <div key =  {recipe.id}>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                </div>
        ))}
    </div>
    )
};

export default RecommendationsList;