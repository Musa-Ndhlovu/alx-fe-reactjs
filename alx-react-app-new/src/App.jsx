import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import WeclomeMessage from './components/WelcomeMessage'
import Counter from './components/Counter'


  

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
  
      <WelcomeMessage />
    </>


  )
}
export default App;


