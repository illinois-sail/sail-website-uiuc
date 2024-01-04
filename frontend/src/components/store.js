import thunk from "redux-thunk";
import rootReducer from "../reducers";
import { configureStore } from "@reduxjs/toolkit";

const initialState = {};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), thunk],
});

export default store;