import React from "react";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

function App()  {
    return (
    <Router>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Profile/>}/>
        <Route path = "/ProfileDetails" element = {<ProfileDetails />} />
        <Route path = "/ProfileSettings" element = {<ProfileSettings />} />
        
      </Routes>
  
    </Router>
    )
  }
  


export default Profile;