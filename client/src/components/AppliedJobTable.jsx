import { useSelector } from "react-redux"
import { Badge } from "./ui/badge"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"



const AppliedJobTable = () => {
  const {appliedJobs} = useSelector(store => store.jobs)
  return (
    <div>
      <Table>
        <TableCaption>A list of your applied jobs.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            appliedJobs?.length <= 0 ? <span>You haven't applied to any job.</span> : appliedJobs.map((appliedJob) => (
              <TableRow key={appliedJob._id}>
                <TableCell>{new Date(appliedJob.createdAt).toLocaleDateString("en-GB")}</TableCell>
                <TableCell>{appliedJob.job.title}</TableCell>
                <TableCell>{appliedJob.job.company?.companyName}</TableCell>
                <TableCell className="text-right"><Badge className={`${appliedJob.status === "rejected" ? "bg-red-400" : appliedJob.status === "pending" ? "bg-gray-700" : "bg-green-500"}`}>{appliedJob.status}</Badge></TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}

export default AppliedJobTable
