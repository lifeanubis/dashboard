import { configureStore } from "@reduxjs/toolkit";
import sideNavReducer from "./feature/sideNavSlice";

export const store = configureStore({
  reducer: sideNavReducer,
});
