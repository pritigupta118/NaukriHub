

import { useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'

const Job = ({job}) => {
  const navigate = useNavigate()
  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime)
    const currentTime = new Date()
    const timeDifference = currentTime - createdAt
    return Math.floor(timeDifference/(1000*24*60*60))
  }
  return (
    <div onClick={() => navigate(`/description/${job?._id}`)} className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer text-black flex flex-col gap-3">
      <div className='flex justify-between items-center'>
        <p className='text-sm text-gray-600'>{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
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
          <h1 className="font-bold text-lg">{job?.company?.companyName}</h1>
          <p className="text-sm text-gray-500">{job?.location}</p>
        </div>
      </div>

      <div>
        <h1 className="font-semibold text-base">{job?.title}</h1>
        <p className='text-sm'>{job?.description}</p>
      </div>
      <div className="flex gap-2 text-foreground">
        <Badge variant="default" className="text-blue-700 bg-gray-100 font-bold hover:bg-gray-100">{job?.position} Positins</Badge>
        <Badge variant="default" className="text-red-800 bg-gray-100 font-bold hover:bg-gray-100">{job?.jobType}</Badge>
        <Badge variant="default" className="text-violet-800 bg-gray-100 font-bold hover:bg-gray-100">{job?.salary}</Badge>
      </div>
    </div>
  )
}

export default Job
