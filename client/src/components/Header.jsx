
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { Button } from "./ui/button";





export default function Header() {
  const user = false
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (

    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#f6f8fc]/80 backdrop-blur-md" : "bg-[#f6f8fc]/80 backdrop-blur-md border-b border-opacity-10"}`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-[#3c0b91]">
          <Link to='/'>NaukriHub</Link>
          </div>
          <div className="flex items-center gap-5 text-black font-medium">
            <ul className="flex justify-center gap-5">
              <li>Home</li>
              <li>Job</li>
              <li>Browse</li>
            </ul>

            {
              !user ? (
                <div className="flex items-center gap-2">
                  <Link to='/login'><Button variant="outline">Login</Button></Link>
                  <Link to='/register'><Button className="bg-[#6A38C2] hover:bg-[#3c0b91]">Register</Button></Link>
                </div>
              ) : (
                <Popover>
              <PopoverTrigger asChild>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className=''>
                  <div className='flex gap-2 space-y-2'>
                    <Avatar className="cursor-pointer">
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    </Avatar>
                    <div>
                      <h4 className='font-medium'>Priti Gupta</h4>
                      <p className='text-sm text-muted-foreground'>A Full satck Developer</p>
                    </div>
                  </div>
                  <div className='flex flex-col gap-4 my-4 text-gray-600'>
                    {/* {
                      user && user.role === 'student' && (
                        <div className='flex w-fit items-center gap-2 cursor-pointer'>
                          <User2 />
                          <Button variant="link"> <Link to="/profile">View Profile</Link></Button>
                        </div>
                      )
                    } */}
                    <div className='flex w-fit items-center gap-2 cursor-pointer'>
                          <User2 />
                          <Button variant='outline'>Profile</Button>
                        </div>

                    <div className='flex w-fit items-center gap-2 cursor-pointer'>
                      <LogOut />
                      <Button variant="outline">Logout</Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>

            </Popover>
              )
            }
         
          </div>
        </div>
      </div>
    </header>
  )

}