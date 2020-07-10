import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    test: false,
  },
  reducers: {
    test: (state) => {
      state.test = true;
    },
  },
});

export const { test } = dashboardSlice.actions;

export default dashboardSlice.reducer;
