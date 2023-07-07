import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducer/index";
export default configureStore({
  reducer: {
    appReducer: appReducer,
  },
});
