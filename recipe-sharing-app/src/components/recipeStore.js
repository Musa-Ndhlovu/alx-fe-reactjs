import { startTransition } from 'react';
import {create } from 'zustand'

const useRecipeStore = create(set => ({
  //adding and removing favorites
  recipes: ['lasagne', 'mac and cheese' , 'bolognse', 'sushi', 'shakusha'],
  favorite:['lasagne', 'bolognse', 'shakusha'],
  addFavorite: (recipeId) = set (state => ({ 
    favorites: [...state.favorites, recipeId]
  })),
  removeFavorite: (recipeId) => set(state =>({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  recommendations: [],
  generateRecommendations: () => set (state =>{
    const recommended = state.recipes.filter(recipes => state.favorites.includes (recipes.id) && Math.random() > 0.5
  );
return {recommendations: recommended};
  }),
    //search and filtering(YOH!!!!!!!!!!!!!!!)
searchTerm: '',
setSearchTerm: (term) => set({searchTerm: term}),
filteredRecipes: [],
filterRecipes: () => set(state => ({ filteredRecipes: state.recipes.filter(recipes =>
  recipes.title.toLowerCase().includes(state.searchTerm.toLowerCase())
)}
)),
//end of search and filtering
    addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe, deleteRecipe, updateRecipe] })),
    setRecipes: (recipes) => set({ recipes })

}));


  export default recipeStore;