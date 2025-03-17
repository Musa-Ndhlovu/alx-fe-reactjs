import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { darkMode } from '../tailwind.config'
import React from 'react'
import tailwindConfig from '../tailwind.config'
import HomePage from './components/HomePage'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';


<HomePage />
  
function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
    
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
