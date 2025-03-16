import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'

const CompaniesTable = () => {
  return (
    <div className='p-4'>
      <Table>
        <TableCaption>A list of recent registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
        <TableRow>
          <TableCell>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </TableCell>
          <TableCell>Company Name</TableCell>
          <TableCell>15-03-2025</TableCell>
          <TableCell  className='text-right cursor-pointer'>
            <Popover>
              <PopoverTrigger><MoreHorizontal/></PopoverTrigger>
              <PopoverContent className="w-32">
                <div className="flex items-center gap-4 w-fit cursor-pointer">
                  <Edit2 className='w-4'/>
                  <span>Edit</span>
                </div>
              </PopoverContent>
            </Popover>
          </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default CompaniesTable
