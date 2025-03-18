import { APPLICANTS_API_END_POINT } from '@/lib/constant'
import { setAppliedJobs } from '@/redux/jobSlice'
import axios from 'axios'
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAppliedJobs = () => {
  const dispatch = useDispatch()
useEffect(()=>{
  const fetchAppliedJobs = async() => {
    try {
      const res = await axios.get(`${APPLICANTS_API_END_POINT}/get`,{
        withCredentials: true
      })

      if (res?.data?.success) {
        dispatch(setAppliedJobs(res?.data?.application))
      }
    } catch (error) {
      console.log(error);
      
    }
  }
  fetchAppliedJobs()
},[])
}

export default useGetAppliedJobs
