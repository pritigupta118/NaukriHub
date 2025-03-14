import { useParams } from "react-router-dom"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { setSingleJob } from "@/redux/jobSlice"
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from "@/lib/constant"
import { toast } from "sonner"




const JobDescription = () => {
  const params= useParams()
  const dispatch = useDispatch()
  const {user} = useSelector(store => store.auth)
  const {singleJob} = useSelector(store => store.jobs)
  const jobId = params.id
  const isInitiallyApplied = singleJob?.applications?.some(application => application.applicant === user?._id) || false

  const [isApplied, setIsApplied]= useState(isInitiallyApplied)

   const applyHandler = async() => {
    try {
      const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, {withCredentials: true})
      console.log(res.data);
      
      if (res.data.success) {
        setIsApplied(true)
        const updatedSingleJob = {...singleJob, applications:[...singleJob.applications, {applicant: user?._id}]}
        dispatch(setSingleJob(updatedSingleJob))
        toast.success(res.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
    }
   }
  useEffect(()=> {
    const fetchSingleJob = async() => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {withCredentials: true})

        if (res.data.success) {
          dispatch(setSingleJob(res.data.job))
          setIsApplied(res.data.job.applications.some(application => application.applicant === user?._id))
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchSingleJob()
  }, [jobId, dispatch, user._id])
  return (
    <div className="max-w-7xl mx-auto my-10 p-4">
      <div className="justify-between items-center grid grid-col gap-6 sm:flex">
        <div>
          <h1 className="font-bold text-xl">{singleJob?.title}</h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge variant="default" className="text-blue-700 bg-gray-100 font-bold hover:bg-gray-100">{singleJob?.position} Positins</Badge>
            <Badge variant="default" className="text-red-800 bg-gray-100 font-bold hover:bg-gray-100">{singleJob?.jobType}</Badge>
            <Badge variant="default" className="text-violet-800 bg-gray-100 font-bold hover:bg-gray-100">{singleJob?.salary}</Badge>

          </div>
        </div>
        <div>
        <Button
                onClick={isApplied ? null : applyHandler}
                    disabled={isApplied}
                    className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#7209b7] hover:bg-[#5f32ad]'}`}>
                    {isApplied ? 'Already Applied' : 'Apply Now'}
                </Button>
        </div>
      </div>
      <h1 className="border-b border-gray-200 py-4 font-medium">{singleJob?.description}</h1>
      <div>
        <h1 className="font-bold my-1">Role: <span className="pl-4 font-thin">{singleJob?.title}</span></h1>
        <h1 className="font-bold my-1">Location: <span className="pl-4 font-thin">{singleJob?.location}</span></h1>
        <h1 className="font-bold my-1">Description: <span className="pl-4 font-thin">{singleJob?.description}</span></h1>
        <h1 className="font-bold my-1">Experience: <span className="pl-4 font-thin">{singleJob?.experienceLevel} years</span></h1>
        <h1 className="font-bold my-1">Salary: <span className="pl-4 font-thin">{singleJob?.salary}</span></h1>
        <h1 className="font-bold my-1">Total Applicants: <span className="pl-4 font-thin">{singleJob?.applications?.length}</span></h1>
        <h1 className="font-bold my-1">Posted Date: <span className="pl-4 font-thin">{new Date(singleJob?.createdAt).toLocaleDateString('en-GB')}
</span></h1>
      </div>
    </div>
  )
}

export default JobDescription
