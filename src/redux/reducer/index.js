import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trackingList: [],
  openModalData: {
    open: false,
    id: null,
    content: null,
  },
};

export const appReducer = createSlice({
  name: "appReducer",
  initialState: {
    trackingList: [],
    openModalData: {
      open: false,
      id: null,
      content: null,
    },
    trackingListFilters:{
      description:'',
      priority:'',
    }
  },
  reducers: {
    updateTrackingList: (state, action) => {
      state.trackingList = action.payload;
    },
    addJob: (state, action) => {
      state.trackingList.push(action.payload);
    },
    updateJob: (state, action) => {
      state.trackingList = state.trackingList.map(
        (item) => item.id == action.payload.id ? action.payload : item)
      state.openModalData = initialState.openModalData;
    }
    ,
    deleteJob: (state, action) => {
      state.trackingList = state.trackingList.filter(
        (item) => item.id != action.payload.id
      );
      state.openModalData = initialState.openModalData;
    },
    openModal: (state, action) => {
      state.openModalData = action.payload;
    },
    closeModal: (state) => {
      state.openModalData = initialState.openModalData;
    },
    updateFilters: (state, action) => {
      state.trackingListFilters = action.payload;
    }
  },
});

export const {
  updateTrackingList,
  addJob,
  updateJob,
  deleteJob,
  openModal,
  closeModal,
  updateFilters,
} = appReducer.actions;
export default appReducer.reducer;
