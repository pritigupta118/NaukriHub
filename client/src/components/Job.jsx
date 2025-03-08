

import { useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'

const Job = () => {
  const navigate = useNavigate()
  const jobId = "hjdgkshk"
  return (
    <div onClick={() => navigate(`/description/${jobId}`)} className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer text-black flex flex-col gap-3">
      <div className='flex justify-between items-center'>
        <p className='text-sm text-gray-600'>2 days ago</p>
        <Button className='rounded-full bg-white' size="icon" variant="outline"><Bookmark /></Button>
      </div>
      <div className='flex gap-3 items-center'>
        <Button size="icon" className='rounded-full' variant="outline">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-500">Location</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-lg">Job title</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="flex gap-2 text-foreground">
        <Badge variant="default" className="text-blue-700 bg-gray-100 font-bold hover:bg-gray-100">12 Positins</Badge>
        <Badge variant="default" className="text-red-800 bg-gray-100 font-bold hover:bg-gray-100">Remote</Badge>
        <Badge variant="default" className="text-violet-800 bg-gray-100 font-bold hover:bg-gray-100">12LPA</Badge>
      </div>
    </div>
  )
}

export default Job
