import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'

//alx-react-app-props
import ProfilePage from './ProfilePage';
import UserInfo from './UserInfo';
import UserDetails from './UserDetails';
import {UserContext} from './UserContext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
  
      <WelcomeMessage />
    </>
  )

  function App() {
    const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  
    return <ProfilePage userData={userData} />;
  }
}

return (
  <UserContext.Provider value = {userData}>
    <profilePage />
  </UserContext.Provider>
)

export default App;

