import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Register from "./components/Register"
import Login from "./components/Login"


const AllRoutes = () => {
  return (
    <Routes>
      <Route  path= "/" element= {<Home />}/>
      <Route  path= "/register" element= {<Register />}/>
      <Route  path= "/login" element= {<Login />}/>
    </Routes>
  )
}

export default AllRoutes