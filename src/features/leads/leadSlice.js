import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {  
  status: 'idle',
  error: null,
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
      state.status = 'ok'
      state.totalCreatedLeads = action.payload.totalCreatedLeads
      state.totalPurchasedLeads = action.payload.totalPurchasedLeads
      state.percentage = action.payload.percentage
    },
    decrease: (state) => {
      state.status = 'ok'
      state.totalCreatedLeads = 100
      state.totalPurchasedLeads = 10
      state.percentage = 10
    },
    fromBackend: (state, action) => {
      /*console.log('fromBackend action', action.payload)
      state.totalCreatedLeads = action.payload.totalCreatedLeads
      state.totalPurchasedLeads = action.payload.totalPurchasedLeads
      state.percentage = action.payload.percentage*/
    },
  } ,
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeads.pending, (state, action) => {        
          state.status = 'pending'
      })
      .addCase(fetchLeads.fulfilled, (state, action) => {
        state.status = 'fulfilled'    
        console.log('fulfilled', action.payload) 
        state.totalCreatedLeads = action.payload.totalCreatedLeads
        state.totalPurchasedLeads = action.payload.totalPurchasedLeads
        state.percentage = action.payload.percentage        
      })
      .addCase(fetchLeads.rejected, (state, action) => {
        state.status = 'rejected'   
      })
  },
})
export const fetchLeads = createAsyncThunk('leads/fromBackend', async () => {
  const response = await fetch(`https://62cf92c4826a88972d0e8235.mockapi.io/api/v1/lead/1`, {
      headers: {}
    })    
  let data = await response.json();
  console.log('eAsyncThunk = ',data);
  return data
})

// Action creators are generated for each case reducer function
export const { add, decrease, fromBackend } = leadsSlice.actions

export default leadsSlice.reducer