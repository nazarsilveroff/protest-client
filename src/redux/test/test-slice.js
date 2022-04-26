import { createSlice } from "@reduxjs/toolkit";

import { getTypeTest } from "./test-operations";

const initialState = {
  type: "",
  questions: [],
  results: [],
  error: null,
  loading: false,
};

const testSlice = createSlice({
  name: "test",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTypeTest.pending, (state) => {
        state.error = null;
      })
      .addCase(getTypeTest.fulfilled, (state, { payload }) => {
        state.type = payload;
      })
      .addCase(getTypeTest.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export default testSlice.reducer;
