import { COMPANY_API_END_POINT } from '@/lib/constant'
import { setSingleCompany } from '@/redux/companySlice'
import axios from 'axios'
import  { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const useGetCompanyById = (companyId) => {
  const dispatch = useDispatch()
 


useEffect(()=>{
  const fetchSingleCompany = async() => {
   try {
     const res = await axios.get(`${COMPANY_API_END_POINT}/get-company/${companyId}`, {
       withCredentials: true
     })
     console.log("singlecompanyresponse hook: ", res);
     
     if (res.data.success) {
       dispatch(setSingleCompany(res.data.company))
     }
   } catch (error) {
    console.error('Error fetching company:', error);
  
    
   }
  }
 
    fetchSingleCompany();

},[companyId, dispatch])
}

export default useGetCompanyById
