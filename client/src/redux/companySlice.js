import { createSlice } from "@reduxjs/toolkit";

const companyslice = createSlice({
  name: "company",
  initialState: {
    singleCompany: null
  },
  reducers: {
    setSingleCompany: (state, action) => {
      state.singleCompany = action.payload
    }
  }
})

export const {setSingleCompany} = companyslice.actions

export default companyslice.reducer