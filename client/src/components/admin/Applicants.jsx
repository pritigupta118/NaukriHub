import React, { useEffect } from 'react'
import ApplicantsTable from './ApplicantsTable'
import axios from 'axios'
import { APPLICANTS_API_END_POINT } from '@/lib/constant'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setAllApplicants } from '@/redux/applicantSlice'
import { Button } from '../ui/button'
import { ArrowLeft } from 'lucide-react'

const Applicants = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const navigate = useNavigate()
  const { allApplicants } = useSelector(store => store.applicant)
  useEffect(() => {
    const fetchAllApplicants = async () => {
      try {
        const res = await axios.get(`${APPLICANTS_API_END_POINT}/${params.id}/applicants`, {
          withCredentials: true
        })
        dispatch(setAllApplicants(res?.data?.job))
      } catch (error) {
        console.log(error);

      }
    }
    fetchAllApplicants()
  }, [])
  return (
    <div className='max-w-7xl mx-auto p-4'>
      <Button size="icon" onClick={() => navigate("/admin/jobs")} variant="outline" className="flex items-center gap-2 text-gray-500 font-semibold">
        <ArrowLeft />
      </Button>
      <h1 className='font-bold text-xl my-5'>Applicants: {allApplicants?.applications?.length}</h1>
      <ApplicantsTable />
    </div>
  )
}

export default Applicants
