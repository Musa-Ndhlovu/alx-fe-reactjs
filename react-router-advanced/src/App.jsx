import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'
import {BrowserRoutes as Router, Routes, Route}
import Profile from './components/Profile'
import ProfileDetails from './components/ProfileDetails'
import ProfileSettings from './components/ProfileSettings'


const App = () => {
  return (
    <div>
    <h1>Profile</h1>
    <nav>
      <ul>
        <li><Link to = "Profile"> </Link></li>
        <li><Link to = "ProfileDetails"></Link></li>
        <li><Link to = "ProfileSettings"></Link></li>
      </ul>
    </nav>
    </div>
  )

}



export default App;