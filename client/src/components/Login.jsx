import React, { useState } from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { RadioGroup } from './ui/radio-group'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

const Login = () => {
   const [input, setInput] = useState({
      email: "",
      password: "",
      role: "",
    })

    const onChange = (e) => {
      setInput({...input, [e.target.name]: e.target.value})
    }

    const submitHandler = async(e) => {
      e.preventDefault()
      console.log(input);
      
     }
  
  return (
    <div className='flex items-center justify-center max-w-7xl mx-auto p-2'>
    <form onSubmit={submitHandler} className='w-full sm:4/12 md:w-4/12 border border-gray-200 rounded-md p-4 my-10 bg-amber-300  text-black'>
        <h1 className='font-bold text-2xl mb-5 text-black text-center'>Login</h1>
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
        {/* {
            loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4">Signup</Button>
        } */}
        <Button type="submit" className="w-full my-4">Login</Button>
        <span className='text-sm'>Don't  have an account? <Link to="/register" className='text-blue-600'>Register</Link></span>
    </form>
</div>
  )
}

export default Login
