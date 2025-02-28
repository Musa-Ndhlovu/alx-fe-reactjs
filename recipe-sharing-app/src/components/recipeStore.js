import { startTransition } from 'react';
import {create } from 'zustand'

const useRecipeStore = create(set => ({
    recipes: [],
    addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe, deleteRecipe, updateRecipe] })),
    setRecipes: (recipes) => set({ recipes })
}));


  export default recipeStore;