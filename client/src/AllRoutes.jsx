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
import Applicants from "./components/admin/Applicants"
import ProtectedRoute from "./components/admin/ProtectedRoute"



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
      <Route  path= "/admin/companies" element= {<ProtectedRoute><Companies/></ProtectedRoute>}/>
      <Route  path= "/admin/companies/create" element= {<ProtectedRoute><CompanyCreate/></ProtectedRoute>}/>
      <Route  path= "/admin/companies/:id" element= {<ProtectedRoute><CompanySetup/></ProtectedRoute>}/>
      <Route  path= "/admin/jobs" element= {<ProtectedRoute><AdminJobs/></ProtectedRoute>}/>
      <Route  path= "/admin/jobs/post" element= {<ProtectedRoute><AdminJobPost/></ProtectedRoute>}/>
      <Route  path= "/admin/jobs/:id/applicants" element= {<ProtectedRoute><Applicants/></ProtectedRoute>}/>
    </Routes>
  )
}

export default AllRoutes