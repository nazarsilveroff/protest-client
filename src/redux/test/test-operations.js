import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from 'axios';

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


// axios.defaults.baseURL = 'http://localhost:3003';

const getQuestions = createAsyncThunk(
  "tests/getQuestions",
  async (questions, thunkAPI) => {
    try {
      return questions;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something wrong :(");
    }
  }
);

export { getTypeTest, getQuestions};
