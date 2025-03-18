import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { useSelector } from 'react-redux'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { MoreHorizontal } from 'lucide-react'


const ApplicantsTable = () => {
  const { allApplicants } = useSelector(store => store.applicant)
  const shortlistingStatus = ["accepted", "rejected"]
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
                <TableCell className="text-right">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className="w-32">
                      {
                        shortlistingStatus.map((status, index) => {
                          return (
                            <div key={index} className='flex w-fit items-center my-2 cursor-pointer'>
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
