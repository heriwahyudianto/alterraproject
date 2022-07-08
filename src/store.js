import { configureStore } from "@reduxjs/toolkit";
import leadReducer from "./features/leads/leadSlice";

export const store = configureStore({
  reducer: {
    leads: leadReducer
  }
})