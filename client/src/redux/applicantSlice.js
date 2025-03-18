import { createSlice } from "@reduxjs/toolkit";

const applicantSlice = createSlice({
  name: "applicant",
  initialState: {
    allApplicants: [],
    activeStatus: ""
  },
  reducers: {
    setAllApplicants : (state, action) => {
      state.allApplicants = action.payload
    },
    setActiveStatus : (state, action) => {
      state.activeStatus = action.payload
    }
  }
})

export const {setAllApplicants, setActiveStatus} = applicantSlice.actions
export default applicantSlice.reducer