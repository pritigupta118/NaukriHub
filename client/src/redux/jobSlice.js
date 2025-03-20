import { createSlice } from "@reduxjs/toolkit";


const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    allJobs: [],
    allAdminJobs: [],
    jobSearchInput: "",
    searchQuery: "",
    filterQuery: "",
    singleJob: null,
    appliedJobs: []
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
    },
    setAppliedJobs: (state, action) => {
      state.appliedJobs = action.payload
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
    },
    setFilterQuery: (state, action) => {
      state.filterQuery = action.payload
    }
  }
})

export const {setAllJobs, setSingleJob, setAllAdminJobs, setjobSearchInput, setAppliedJobs,setSearchQuery, setFilterQuery} = jobSlice.actions
export default jobSlice.reducer