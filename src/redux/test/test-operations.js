import { createAsyncThunk } from "@reduxjs/toolkit";

const getTypeTest = createAsyncThunk(
  "tests/getTypeTest",
  async (typeOfTest, thunkAPI) => {
    try {
      return typeOfTest;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something wrong :(");
    }
  }
);

export { getTypeTest };
