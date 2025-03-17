import { createSlice } from "@reduxjs/toolkit";

const companyslice = createSlice({
  name: "company",
  initialState: {
    singleCompany: null,
    companies: [],
    searchInputText: ""
  },
  reducers: {
    setSingleCompany: (state, action) => {
      state.singleCompany = action.payload
    },
    setCompanies: (state, action) => {
      state.companies = action.payload
    },
    setSearchInputText: (state, action) => {
      state.searchInputText = action.payload
    }
  }
})

export const {setSingleCompany, setCompanies, setSearchInputText} = companyslice.actions

export default companyslice.reducer