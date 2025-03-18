import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, Eye, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AdminJobsTable = () => {
  const { allAdminJobs, jobSearchInput } = useSelector(store => store.jobs)
  const [filterJob, setFilterJob] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    const filteredJob = allAdminJobs.length >= 0 && allAdminJobs.filter((job) => {
      if (!jobSearchInput) {
        return true
      }
      return job?.company?.companyName.toLowerCase().includes(jobSearchInput.toLowerCase()) || job?.title.toLowerCase().includes(jobSearchInput.toLowerCase())
    }

    )
    setFilterJob(filteredJob)
  }, [allAdminJobs, jobSearchInput])
  return (
    <div className='p-4'>
      <Table>
        <TableCaption>A list of recent posted Jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            filterJob?.map((job, index) => (
              <TableRow key={job?._id}>
                <TableCell>{job?.company?.companyName}</TableCell>
                <TableCell>{job?.title}</TableCell>
                <TableCell>{job?.createdAt.split("T")[0]}</TableCell>
                <TableCell className='text-right cursor-pointer'>
                  <Popover>
                    <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                    <PopoverContent className="w-36">
                      <div onClick={() => navigate(`/admin/companies/${job?._id}`)} className="flex items-center gap-4 w-fit cursor-pointer">
                        <Edit2 className='w-4' />
                        <span>Edit</span>
                      </div>
                      <div onClick={() => navigate(`/admin/jobs/${job?._id}/applicants`)} className="flex items-center gap-4 w-fit cursor-pointer">
                        <Eye className='w-4' />
                        <span>Applicants</span>
                      </div>
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

export default AdminJobsTable
