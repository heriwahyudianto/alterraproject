import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import thunk from "redux-thunk";

import leadsReducer from "./features/leads/leadSlice";

const reducers = combineReducers({
  leads: leadsReducer
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})
export default store