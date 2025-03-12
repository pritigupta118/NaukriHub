import React, { useState } from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { RadioGroup } from './ui/radio-group'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import axios from 'axios'
import { USER_API_END_POINT } from '@/lib/constant'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'

const Register = () => {
  const dispatch = useDispatch()
  const {loading} = useSelector(store => store.auth)
  const navigate = useNavigate()
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  })

  const onChange = (e) => {
    setInput({...input, [e.target.name]: e.target.value})
  }

  const onFileChange = (e) => {
    setInput({...input, file: e.target.files[0]})
  }

  const submitHandler = async(e) => {
   e.preventDefault()
   const formData = new FormData()
   formData.append("fullName", input.fullName)
    formData.append("email", input.email)
    formData.append("phoneNumber", input.phoneNumber)
    formData.append("password", input.password)
    formData.append("role", input.role)
    if (input.file) {
      formData.append("file", input.file)
    }


   try {
    dispatch(setLoading(true))
    const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
      headers: {
        "Content-Type": "multipart/form",
      },
      withCredentials: true,
    })
  console.log("message", res.data.message);
  
    if (res.data.success) {
        dispatch(setUser(res.data.user))
      navigate('/')
      toast.success(res.data.message)
    }
   } catch (error) {
    console.log("Error while registering", error);
    toast.error(error.response.data.message)
   } finally {
    dispatch(setLoading(false))
   }
   
  }
  return (
    <div className='flex items-center justify-center max-w-7xl mx-auto p-2'>
    <form onSubmit={submitHandler} className='w-full sm:4/12 md:w-4/12 border border-gray-200 rounded-md p-4 my-10 bg-amber-300  text-black'>
        <h1 className='font-bold text-2xl mb-5 text-black text-center'>Sign Up</h1>
        <div className='my-2'>
            <Label>Full Name</Label>
            <Input
                type="text"
                name="fullName"
                value={input.fullName}
                onChange={onChange}
                placeholder="patel"
                className='bg-white'
            />
        </div>
        <div className='my-2'>
            <Label>Email</Label>
            <Input
                type="email"
               value={input.email}
               onChange={onChange}
                name="email"
                placeholder="patel@gmail.com"
                className='bg-white'
            />
        </div>
        <div className='my-2'>
            <Label>Phone Number</Label>
            <Input
                type="text"
                value={input.phoneNumber}
                name="phoneNumber"
                onChange={onChange}
                placeholder="8080808080"
                className='bg-white'
            />
        </div>
        <div className='my-2'>
            <Label>Password</Label>
            <Input
                type="password"
                value={input.password}
                onChange={onChange}
                name="password"
                placeholder="patel@gmail.com"
                className='bg-white'
            />
        </div>
        <div className='flex items-center justify-between'>
            <RadioGroup className="flex items-center gap-4 my-5">
                <div className="flex items-center space-x-2">
                    <Input
                        type="radio"
                        name="role"
                        value="student"
                        checked={input.role === "student"}
                       onChange={onChange}
                        className="cursor-pointer"
                    />
                    <Label htmlFor="r1">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <Input
                        type="radio"
                        name="role"
                        value="recruiter"
                        checked={input.role === "recruiter"}
                        onChange={onChange}
                        className="cursor-pointer"
                    />
                    <Label htmlFor="r2">Recruiter</Label>
                </div>
            </RadioGroup>
          
        </div>
        <div className='flex flex-col items-start sm:flex-row sm:items-center gap-2'>
                <Label>Profile</Label>
                <Input
                    accept="image/*"
                    type="file"
                   onChange={onFileChange}
                    className="cursor-pointer bg-white"
                />
            </div>
        {
            loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4">Signup</Button>
        }
      
        <span className='text-sm'>Already have an account? <Link to="/login" className='text-blue-600'>Login</Link></span>
    </form>
</div>
  )
}

export default Register
