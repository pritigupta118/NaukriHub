import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { useSelector } from 'react-redux'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import {MoreHorizontal } from 'lucide-react'
import axios from 'axios'
import { APPLICANTS_API_END_POINT } from '@/lib/constant'
import { toast } from 'sonner'




const shortlistingStatus = ["accepted", "rejected"];

const ApplicantsTable = () => {

  const { allApplicants } = useSelector(store => store.applicant)
  
  const statusHandler = async(status,id) => {
   
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.post(`${APPLICANTS_API_END_POINT}/status/${id}/update`, {status})

      
      if (res?.data?.success) {
        toast.success(res?.data?.message)
      }
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div>

      <Table>
        <TableCaption>A list users to your recent applied job</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>FullName</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            allApplicants && allApplicants?.applications?.map((item) => (
              <TableRow key={item?._id}>
                <TableCell>{item?.applicant?.fullName}</TableCell>
                <TableCell>{item?.applicant?.email}</TableCell>
                <TableCell>{item?.applicant?.phoneNumber}</TableCell>
                <TableCell>
                  {
                    item?.applicant?.profile?.resume ? <a className="text-blue-600 cursor-pointer" href={item?.applicant?.profile?.resume} target='_blank'>{item?.applicant?.profile?.resumeOriginalName}</a> : <span>NA</span>
                  }
                </TableCell>
                <TableCell>{new Date(item?.createdAt).toLocaleDateString('en-GB')}</TableCell>
                <TableCell className="flex justify-end">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className="w-32">
                      {
                        shortlistingStatus.map((status, index) => {
                          return (
                            <div onClick={()=> statusHandler(status, item?._id)} key={index} className='flex w-fit items-center my-2 cursor-pointer'>
                              <span>{status}</span>
                            </div>
                          )
                        })
                      }
                    </PopoverContent>
                  </Popover> 
                </TableCell>
              </TableRow>
            ))
          }


        </TableBody>

      </Table>
    </div>
  )
}

export default ApplicantsTable
