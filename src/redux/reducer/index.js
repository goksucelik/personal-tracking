import { createSlice } from "@reduxjs/toolkit";
export const appReducer = createSlice({
  name: "appReducer",
  initialState: {
    trackingList: [],
  },
  reducers: {
    updateTrackingList: (state, action) => {
      state.trackingList = action.payload;
    },
    addJob: (state, action) => {
      state.trackingList.push(action.payload);
    },
    updateJob: (state, action) => {
      // Yapılacak
    },
    deleteJob: (state, action) => {
      state.trackingList += action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { updateTrackingList, addJob, updateJob, deleteJob } =
  appReducer.actions;
export default appReducer.reducer;
