import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
    const setSearchTerm = useRecipeStore (state => state.setSearchTerm);

    
        return (
            <input
             type = "text"
            placeholder = "Search Recipes..."
            onChange = {(event) => setSearchTerm (event.target.value)}
        className = "border rounded"
            />
     ) ;

    }

    export default SearchBar;
