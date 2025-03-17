import { createSlice } from "@reduxjs/toolkit";


const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    allJobs: [],
    allAdminJobs: [],
    jobSearchInput: "",
    singleJob: null
  },
  reducers: {
    setAllJobs: (state, action) => {
      state.allJobs = action.payload
    },
    setSingleJob: (state, action) => {
      state.singleJob = action.payload
    },
    setAllAdminJobs: (state, action) => {
      state.allAdminJobs = action.payload
    },
    setjobSearchInput: (state, action) => {
      state.jobSearchInput = action.payload
    }
  }
})

export const {setAllJobs, setSingleJob, setAllAdminJobs, setjobSearchInput} = jobSlice.actions
export default jobSlice.reducer