import React, { useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { useDispatch } from 'react-redux'
import { setSingleCompany } from '@/redux/companySlice'
import axios from 'axios'
import { COMPANY_API_END_POINT } from '@/lib/constant'

const CompanyCreate = () => {
  const navigate = useNavigate()
  const [companyName, setCompanyName] = useState()
  const dispatch = useDispatch()

  const registerNewCompany = async() => {
try {
      const res = await axios.post(`${COMPANY_API_END_POINT}/register`, {companyName}, {
        headers : {"Content-Type": "application/json"},
        withCredentials: true
      })

  
      if (res?.data?.success) {
        dispatch(setSingleCompany(res.data.newCompany))
        toast.success(res.data.message)
        const companyId = res?.data?.newCompany?._id
        navigate(`/admin/companies/${companyId}`)
      }
} catch (error) {
  console.log(error);
  
}
  }
  return (
    <div className='max-w-4xl mx-auto p-4'>
      <div className='my-10'>
        <h1 className='font-bold text-2xl'>Your Company Name</h1>
        <p className="text-gray-500 text-sm sm:text-base">What would you like to give your company name ? you can change this later</p>
      </div>
      <Label>Company Name</Label>
      <Input
        type="text"
        className="my-2"
        onChange = {(e) => setCompanyName(e.target.value)}
        placeholder="Microsoft, Gooogle etc."
      />
      <div className='flex items-center gap-2 my-10'>
        <Button variant="outline" onClick={()=> navigate("/admin/companies")}>Cancle</Button>
        <Button onClick={registerNewCompany}>Continue</Button>
      </div>
    </div>
  )
}

export default CompanyCreate
