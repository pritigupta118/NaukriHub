import React, { useState } from 'react'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { useSelector } from 'react-redux'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'

const UpdateProfile = ({open, setOpen}) => {
    const {user} = useSelector(store => store.auth)
   const [loading, setLoading] = useState(false)
    const [input, setInput] = useState(
      {
        fullName: user?.fullName,
        email: user?.email,
        phoneNumber: user?.phoneNumber,
        bio: user?.profile?.bio,
        skills: user?.profile?.skills?.map(skill => skill),
        resume: user?.profile?.resume
      }
    )
  
 return (
    <div>
      <Dialog open={open}>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]" onInteractOutside={() => setOpen(false)}>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
          </DialogHeader>
          <form>
            <div className="grid gap-4 py-4">
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='name'>Name</Label>
                <Input
                  id='name'
                  name='name'
                  value={input.fullName}
                  
                  className='col-span-3'
                />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  name='email'
                  type='email'
                  value={input.email}
                   
                  className='col-span-3'
                />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='number'>Number</Label>
                <Input
                  id='number'
                  name='number'
                  value={input.phoneNumber}
                   
                  className='col-span-3'
                />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='bio'>Bio</Label>
                <Input
                  id='bio'
                  name='bio'
                  value={input.bio}
                  
                  className='col-span-3'
                />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='skills'>Skills</Label>
                <Input
                  id='skills'
                  name='skills'
                  value={input.skills}
                   
                  className='col-span-3'
                />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='file'>Resume</Label>
                <Input
                  id='resume'
                  name='resume'
                  type='file'
                  value={input.resume}
                  accept='application/pdf'
                  className='col-span-3'
                />
              </div>
            </div>
            <DialogFooter>
              {
                loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4">Update</Button>
              }
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default UpdateProfile
