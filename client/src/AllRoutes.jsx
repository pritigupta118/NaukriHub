import { Route, Routes } from "react-router-dom"
import Home from "./components/pages/Home"


import Jobs from "./components/pages/Jobs"
import Browse from "./components/pages/Browse"
import Login from "./components/Login"
import Register from "./components/Register"
import Profile from "./components/Profile"
import JobDescription from "./components/pages/JobDescription"



const AllRoutes = () => {
  return (
    <Routes>
      <Route  path= "/home" element= {<Home />}/>
      <Route  path= "/register" element= {<Register />}/>
      <Route  path= "/login" element= {<Login />}/>
      <Route  path= "/jobs" element= {<Jobs />}/>
      <Route  path= "/browse" element= {<Browse />}/>
      <Route  path= "/profile" element= {<Profile/>}/>
      <Route  path= "/description/:id" element= {<JobDescription/>}/>
    </Routes>
  )
}

export default AllRoutes