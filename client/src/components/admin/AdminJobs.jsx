import React, { useEffect, useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import useGetAllCompanies from '@/hooks/useGetAllCompanies'
import { useDispatch } from 'react-redux'
import AdminJobsTable from './AdminJobsTable'
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJObs'
import { setjobSearchInput } from '@/redux/jobSlice'

const AdminJobs = () => {
  useGetAllAdminJobs()
  const [input, setInput] = useState()
  useGetAllCompanies()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(()=>{
    dispatch( setjobSearchInput(input))
  },[input])
  return (
    <div className='max-w-6xl mx-auto my-10'>
      <div className="flex flex-col gap-4 sm:flex-row p-5 md:items-center justify-between">
        <Input
          className="w-full sm:w-fit"
          placeholder="Filter by name"
          onChange={(e)=> setInput(e.target.value)}
        />
        <Button onClick={()=>navigate("/admin/jobs/post")}>New Job</Button>
      </div>
      <AdminJobsTable/>
    </div>
  )
}

export default AdminJobs
