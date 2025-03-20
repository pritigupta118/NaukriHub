
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { AlignJustify, LogOut, User2 } from "lucide-react";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "sonner";
import { setUser } from "@/redux/authSlice";
import { USER_API_END_POINT } from "@/lib/constant";



export default function Header() {
  const {user} = useSelector(store => store.auth)
  const dispatch = useDispatch()
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

 
  const logoutHandler= async() => {
   try {
     const res = await axios.post(`${USER_API_END_POINT}/logout`, { withCredentials: true,})
     if (res.data.success) {
      dispatch(setUser(null))
       navigate("/")
       toast.success(res.data.message)
     }
   } catch (error) {
    console.log(error);
    toast.error(error.response.data.message)
    
   }
  }

  return (

    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#f6f8fc]/80 backdrop-blur-md" : "bg-[#f6f8fc]/80 backdrop-blur-md border-b border-opacity-10"}`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between py-4">
          <div className="text-2xl font-bold">
          <Link to='/'><span className="text-amber-500">Naukri</span><span className="text-[#6A38C2]">Hub</span></Link>
          </div>
          <div className="hidden md:flex items-center gap-5 text-black font-medium">
          {
            user && user?.role === "recruiter" ? (
              <ul className="flex justify-center gap-5">
              <Link to='/admin/companies'><li>Companies</li></Link>
              <Link to='/admin/jobs'><li>Jobs</li></Link>
            </ul>

            ) : (
              <ul className="flex justify-center gap-5">
              <Link to='/'><li>Home</li></Link>
              <Link to='/jobs'><li>Jobs</li></Link>
              <Link to='/browse'><li>Browse</li></Link>
            </ul>
            )
          }


            {
              !user ? (
                <div className="flex items-center gap-2">
                  <Link to='/login'><Button variant="outline">Login</Button></Link>
                  <Link to='/register'><Button className="bg-[#6A38C2] hover:bg-[#3c0b91]">Register</Button></Link>
                </div>
              ) : (
                <Popover>
              <PopoverTrigger asChild className="cursor-pointer">
                <Avatar>
                  <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className=''>
                  <div className='flex gap-2 space-y-2'>
                    <Avatar className="cursor-pointer">
                      <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                    </Avatar>
                    <div>
                      <h4 className='font-medium'>{user?.fullName}</h4>
                      <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
                    </div>
                  </div>
                  <div className='flex flex-col gap-4 my-4 text-gray-600'>
                    {
                      user && user.role === 'student' && 
                    (  <div className='flex w-fit items-center gap-2 cursor-pointer'>
                          <User2 />
                          <Link to='/profile'><Button variant='outline'>Profile</Button></Link>
                        </div>)
                        }

                    <div className='flex w-fit items-center gap-2 cursor-pointer'>
                      <LogOut />
                      <Button onClick={logoutHandler} variant="outline">Logout</Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>

            </Popover>
              )
            }
         
          </div>
          <div className="flex sm:hidden">
          <Popover>
              <PopoverTrigger asChild className="cursor-pointer">
              <AlignJustify />
              </PopoverTrigger>
              <PopoverContent className="w-40">
                <div className='flex flex-col gap-4'>
                {
            user && user?.role === "recruiter" ? (
              <div className="flex flex-col justify-center gap-5">
              <Link to='/admin/companies'><Button className="w-full">Companies</Button></Link>
              <Link to='/admin/jobs'><Button className="w-full">Jobs</Button></Link>
            </div>

            ) : (
              <div className="flex flex-col justify-center gap-5">
              <Link to='/jobs'><Button className="w-full">Jobs</Button></Link>
              <Link to='/browse'><Button className="w-full">Browse</Button></Link>
            </div>
            )
          }
               {
                !user ? (
                  <>
             
                  <div>
               <Link to="/login"><Button variant="outline" className="w-full">Login</Button></Link>
                
               </div>
               <div>
               <Link to="/register"><Button className="w-full bg-[#6A38C2] ">Register</Button></Link>
                
               </div>
                      
               </>
                ) : (
                  <>
                  {
                      user && user.role === 'student' && 
                    (  
                          <Link to='/profile'><Button variant='outline' className="w-full">Profile</Button></Link>
                      )
                        }
                  <Button onClick={logoutHandler} className="w-full bg-[#6A38C2]">Logout</Button>
                  </>
                )
               }
             
                </div>
              </PopoverContent>

            </Popover>
          
          </div>
        </div>
      </div>
    </header>
  )

}