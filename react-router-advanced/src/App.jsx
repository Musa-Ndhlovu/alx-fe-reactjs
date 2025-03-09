import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'
import {BrowserRouter as Router, Routes, Route, Switch, Link}
import Profile from './components/Profile'
import ProfileDetails from './components/ProfileDetails'
import ProfileSettings from './components/ProfileSettings'
import ProtectedRoute from './components/ProtectedRoute'

function App () {

const  [isAuthenticated, setIsAuthenticated] = useState (false);

  return (
  <router>
    <div>
    <h1>Profile</h1>
    <nav>
      <ul>
        <li><Link to = "Profile"> </Link></li>
        <li><Link to = "ProfileDetails"></Link></li>
        <li><Link to = "ProfileSettings"></Link></li>
      </ul>
    </nav>

   <Routes>
    <Route path = "/profile" element = {<Profile setIsAuthenticated = {setIsAuthenticated}/>} />
 
{/*ProtectedRoute*/}
<Route element = {<ProtectedRoute isAuthenticated = {isAuthenticated} />}>
      <Route path = "/profile" element = {<Profile />}/>

      <Route path="," components = {profile} />
      <Route path="/blog/:id" components = {ProfileDetails} />
      <Route path="BlogPost" components = {ProfileSettings} />
      </Routes>

    </div>
  </Router>
)
}
export default App