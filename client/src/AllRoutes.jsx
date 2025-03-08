import { Route, Routes } from "react-router-dom"
import Home from "./components/pages/Home"


import Jobs from "./components/pages/Jobs"
import Browse from "./components/pages/Browse"
import Login from "./components/Login"
import Register from "./components/Register"



const AllRoutes = () => {
  return (
    <Routes>
      <Route  path= "/home" element= {<Home />}/>
      <Route  path= "/register" element= {<Register />}/>
      <Route  path= "/login" element= {<Login />}/>
      <Route  path= "/jobs" element= {<Jobs />}/>
      <Route  path= "/browse" element= {<Browse />}/>
    </Routes>
  )
}

export default AllRoutes