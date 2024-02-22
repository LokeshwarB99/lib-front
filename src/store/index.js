import { configureStore, createSlice } from "@reduxjs/toolkit";

const userDetailsSlice = createSlice({
  name: "libDetails",
  initialState: {
    details: {},
  },
  reducers: {
    setDetails(state, action) {
      state.details = action.payload;
    },
  },
});

export const {
  setDetails
} = userDetailsSlice.actions;

const store = configureStore({
  reducer: userDetailsSlice.reducer,
});

export default store;
