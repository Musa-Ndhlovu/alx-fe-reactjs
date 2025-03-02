import {useState }from "react";
import {useRecipeStore } from "./recipeStore";
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({ recipeId }) => {
    const {deleteRecipe} = useRecipeStore();
    const navigate = useNavigate();

    const handleDelete = () => {
        deleteRecipe(recipeId);
        navigate("/")
    }
}

    return (
        <button 
        onClick = {handleDelete} 
        className= "backgroundColor: green text: black hover:backgroundColor blue">
        Delete Button
        </button>
    )


export default DeleteRecipeButton