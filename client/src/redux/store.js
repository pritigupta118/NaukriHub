import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import jobSlice from "./jobSlice"


const store = configureStore({
  reducer: {
    auth: authSlice,
    jobs: jobSlice
  }
})

export default store;