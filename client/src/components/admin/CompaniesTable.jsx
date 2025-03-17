import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'

const CompaniesTable = () => {
  const { companies, searchInputText } = useSelector(store => store.company)
  const [filterCompany, setFilterCompany] = useState()

  useEffect(() => {
    const filteredCompany = companies.length >= 0 && companies.filter((company) => {
      if (!searchInputText) {
        return true
      }
      return company?.companyName.toLowerCase().includes(searchInputText.toLowerCase())
    }

    )
    setFilterCompany(filteredCompany)
  }, [companies, searchInputText])
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
          {
            filterCompany?.map((company, index) => (
              <TableRow key={company?._id}>
                <TableCell>
                  <Avatar>
                    <AvatarImage src={company?.logo} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell>{company?.companyName}</TableCell>
                <TableCell>{company?.createdAt.split("T")[0]}</TableCell>
                <TableCell className='text-right cursor-pointer'>
                  <Popover>
                    <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                    <PopoverContent className="w-32">
                      <div className="flex items-center gap-4 w-fit cursor-pointer">
                        <Edit2 className='w-4' />
                        <span>Edit</span>
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

export default CompaniesTable
