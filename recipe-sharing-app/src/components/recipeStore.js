import { startTransition } from 'react';
import {create } from 'zustand'

const useRecipeStore = create(set => ({
    recipes: [],
    //search and filtering
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