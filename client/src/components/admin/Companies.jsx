import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'
import useGetAllCompanies from '@/hooks/useGetAllCompanies'

const Companies = () => {
  useGetAllCompanies()
  const navigate = useNavigate()
  return (
    <div className='max-w-6xl mx-auto my-10'>
      <div className="flex flex-col gap-4 sm:flex-row p-5 md:items-center justify-between">
        <Input
          className="w-full sm:w-fit"
          placeholder="Filter by name"
        />
        <Button onClick={()=>navigate("/admin/companies/create")}>New Company</Button>
      </div>
      <CompaniesTable/>
    </div>
  )
}

export default Companies
