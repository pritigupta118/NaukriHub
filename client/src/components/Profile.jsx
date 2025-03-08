import React, { useState } from 'react'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import { Avatar, AvatarImage } from './ui/avatar'
import AppliedJobTable from './AppliedJobTable'
import UpdateProfile from './UpdateProfile'

const Profile = () => {
  const [open, setOpen] = useState(false)
    const skills = ["html", "css", "js", "react"]
    const isResume = true
  return (
  <div className='px-4'>
      <div className="max-w-4xl mx-auto border-gray-200 border rounded-md my-5 p-8 flex flex-col gap-5">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="profile" />
            </Avatar>
            <div>
              <h1>Full Name</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <Button onClick={() => setOpen(true)} className="text-right" variant="outline"><Pen /></Button>
        </div>
        <div>
          <div className="flex items-center gap-2 my-2">
            <Mail />
            <span>priti@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 my-2">
            <Contact />
            <span>7483984785</span>
          </div>
  
        </div>
        <div className="flex flex-col gap-2">
          <h1>Skills</h1>
          <div className="flex items-center gap-2">
            {skills.length !== 0 ?
              skills.map((item, index) => <Badge key={index}>{item}</Badge>) :
              (
                <p>No skills</p>
              )
            }
          </div>
  
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
  <Label className="font-bold">Resume</Label>
  {
    isResume ? <a target="blank" href="https://youtube.com" className="text-blue-500 w-full hover:underline cursor-pointer">    priigupta.pdf</a> : <p>NA</p>
  }
        </div>
        </div>
        <div className="max-w-4xl mx-auto rounded-md my-5">
            <h1 className="font-bold">My Applications</h1>
            <AppliedJobTable/>
          </div>
          <UpdateProfile open={open} setOpen={setOpen}/>
      </div>
  )
}

export default Profile
