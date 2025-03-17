import { Route, Routes } from "react-router-dom"
import Home from "./components/pages/Home"


import Jobs from "./components/pages/Jobs"
import Browse from "./components/pages/Browse"
import Login from "./components/Login"
import Register from "./components/Register"
import Profile from "./components/Profile"
import JobDescription from "./components/pages/JobDescription"
import Companies from "./components/admin/Companies"
import CompanyCreate from "./components/admin/CompanyCreate"
import CompanySetup from "./components/admin/CompanySetup"
import AdminJobs from "./components/admin/AdminJobs"
import AdminJobPost from "./components/admin/AdminJobPost"



const AllRoutes = () => {
  return (
    <Routes>
      <Route  path= "/" element= {<Home />}/>
      <Route  path= "/register" element= {<Register />}/>
      <Route  path= "/login" element= {<Login />}/>
      <Route  path= "/jobs" element= {<Jobs />}/>
      <Route  path= "/browse" element= {<Browse />}/>
      <Route  path= "/profile" element= {<Profile/>}/>
      <Route  path= "/description/:id" element= {<JobDescription/>}/>
      <Route  path= "/admin/companies" element= {<Companies/>}/>
      <Route  path= "/admin/companies/create" element= {<CompanyCreate/>}/>
      <Route  path= "/admin/companies/:id" element= {<CompanySetup/>}/>
      <Route  path= "/admin/jobs" element= {<AdminJobs/>}/>
      <Route  path= "/admin/jobs/post" element= {<AdminJobPost/>}/>
    </Routes>
  )
}

export default AllRoutes