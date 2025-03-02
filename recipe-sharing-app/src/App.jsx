import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//zustand
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import recipeStore from './components/recipeStore'
import EditRecipeForm from './components/EditRecipeForm'
import FavoritesList from './components/FavoritesList'
import RecommendationsList from './components/RecommendationsList'

//zustand
import create from 'zustand'

//react router
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

const recipeDetails = () => <h1> Recipe Detail </h1>;


const App = () => {
return(
  <Router>
      <nav>
        <Link to = "/recipeDetails">Recipe Detail </Link>
        <Link to = "/recipeList">Recipe List</Link>
        <Link to = "/recipeStore">Recipe Store</Link>
      </nav>

      <div>
        <Routes>
          <Route path = "/recipeDetails" element = {<Recipegit Detail />} /> 
          <Route path = "/recipeList" element = {<Recipe List />} /> 
          <Route path = "/recipeStore" element = {<Recipe Store />} />
        </Routes>
      </div>
  </Router>
)
}

export default App
