import { createSlice } from "@reduxjs/toolkit";

const initialState = {  
  totalCreatedLeads: 0,
  totalPurchasedLeads: 0,
  percentage:0  
}

export const leadsSlice = createSlice({
  name: 'leads',
  initialState,
  reducers: {
    add: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      //console.log(action)
      state.totalCreatedLeads = action.payload.totalCreatedLeads
      state.totalPurchasedLeads = action.payload.totalPurchasedLeads
      state.percentage = action.payload.percentage
    },
    decrease: (state) => {
      state.totalCreatedLeads = 100
      state.totalPurchasedLeads = 10
      state.percentage = 10
    },
    fromBackend: (state, action) => {
      state.totalCreatedLeads = action.payload.totalCreatedLeads
      state.totalPurchasedLeads = action.payload.totalPurchasedLeads
      state.percentage = action.payload.percentage
    },
  }
})

// Action creators are generated for each case reducer function
export const { add, decrease, fromBackend } = leadsSlice.actions

export default leadsSlice.reducer