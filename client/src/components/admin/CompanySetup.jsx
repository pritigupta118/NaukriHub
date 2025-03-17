import { ArrowLeft, Loader2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'
import { COMPANY_API_END_POINT } from '@/lib/constant'
import { useSelector } from 'react-redux'
import useGetCompanyById from '@/hooks/useGetCompanyById'

const CompanySetup = () => {
  const params = useParams()
 useGetCompanyById(params.id);
 const {singleComapny} = useSelector(store => store.company)
  const [input, setInput] = useState({
    companyName: "",
    description: "",
    website: "",
    location: "",
    file: ""
  })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const onChangeHandler = (e) => {
   setInput({...input, [e.target.name]: e.target.value})
  }

  const onFileHandler = (e) => {
    const file = e.target.files?.[0]
    setInput({...input, file})
  }
  // useEffect(()=>{
  //   if (singleComapny) {
  //    setInput({
  //      companyName: singleComapny.companyName || "",
  //      description: singleComapny.description || "",
  //      website: singleComapny.website || "",
  //      location: singleComapny.location || "",
  //      file: singleComapny.file|| null
  //    })
  //   }
       
   
  //  },[singleComapny])

  const submitHandler = async(e) => {
    e.preventDefault();
    console.log("company intput: ", input);
    const formData = new FormData()
    formData.append("companyName", input.companyName)
    formData.append("description", input.description)
    formData.append("website", input.website)
    formData.append("location", input.location)

    if (input.file) {
      formData.append("file", input.file)
    }
    try {
      setLoading(true)
     const res = await axios.put(`${COMPANY_API_END_POINT}/update/${params.id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      withCredentials: true
     })

     if (res.data.success) {
      toast.success(res.data.message)
      navigate("/admin/companies")
     }
      }
    catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
    } finally {
      setLoading(false)
    }
  }





  return (
    <div className='max-w-xl mx-auto p-2'>
            <Button size="icon" onClick={() => navigate("/admin/companies")} variant="outline" className="flex items-center gap-2 text-gray-500 font-semibold">
                <ArrowLeft />
                
            </Button>
    <form onSubmit={submitHandler} className='my-10'>
        <div className='flex items-center justify-center gap-5 p-8'>
            <h1 className='font-bold text-xl'>Company Setup</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div>
                <Label>Company Name</Label>
                <Input
                    type="text"
                    name="companyName"
                    value={input.companyName}
                    onChange={onChangeHandler}
                />
            </div>
            <div>
                <Label>Description</Label>
                <Input
                    type="text"
                    name="description"
                    value={input.description}
                    onChange={onChangeHandler}
                />
            </div>
            <div>
                <Label>Website</Label>
                <Input
                    type="text"
                    name="website"
                    value={input.website}
                    onChange={onChangeHandler}
                />
            </div>
            <div>
                <Label>Location</Label>
                <Input
                    type="text"
                    name="location"
                   value={input.location}
                   onChange={onChangeHandler}
                />
            </div>
            <div>
                <Label>Logo</Label>
                <Input
                    type="file"
                    accept="image/*"
                    onChange={onFileHandler}
                />
            </div>
        </div>
        {
            loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4">Update</Button>
        }
    </form>
</div>
  )
}

export default CompanySetup
