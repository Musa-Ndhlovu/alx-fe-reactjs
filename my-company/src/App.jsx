import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
  <Router>
    <Routes>
      <Route path ='/' element={<Home />} />
      <Route path ='/' element={<About />} />
      <Route path = '/' element={<Services />} />
      <Route path ='/' element ={<Contact />} />
    </Routes>
  </Router>
  );
}

export default App