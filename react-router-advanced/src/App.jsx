import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'
import {BrowserRouter as Router, Routes, Route, Switch, Link}
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

    <Switch>

      <Route path="," components = {profile} />
      <Route path="/blog/:id" components = {ProfileDetails} />
      <Route path="BlogPost" components = {ProfileSettings} />
    </Switch>

    </div>
  )

}



export default App;