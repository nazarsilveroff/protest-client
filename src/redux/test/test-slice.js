import { createSlice } from "@reduxjs/toolkit";

import { getTypeTest, getQuestions } from "./test-operations";

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
      })
      
      // ==========================================================

      .addCase(getQuestions.pending, (state, _) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getQuestions.fulfilled, (state, { payload }) => {
        state.questions = payload;
        state.loading = false;
      })
      .addCase(getQuestions.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.message.error;
      });
  },
});

export default testSlice.reducer;
