import {
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import appReducer from "./reducer/index";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})
export default configureStore({
  reducer: {
    appReducer: appReducer,
    middleware: customizedMiddleware,
  },
});
