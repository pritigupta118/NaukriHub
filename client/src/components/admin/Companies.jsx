import React, { useEffect, useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'
import useGetAllCompanies from '@/hooks/useGetAllCompanies'
import { useDispatch } from 'react-redux'
import { setSearchInputText } from '@/redux/companySlice'

const Companies = () => {
  const [input, setInput] = useState()
  useGetAllCompanies()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(()=>{
    dispatch( setSearchInputText(input))
  },[input])
  return (
    <div className='max-w-6xl mx-auto my-10'>
      <div className="flex flex-col gap-4 sm:flex-row p-5 md:items-center justify-between">
        <Input
          className="w-full sm:w-fit"
          placeholder="Filter by name"
          onChange={(e)=> setInput(e.target.value)}
        />
        <Button onClick={()=>navigate("/admin/companies/create")}>New Company</Button>
      </div>
      <CompaniesTable/>
    </div>
  )
}

export default Companies
