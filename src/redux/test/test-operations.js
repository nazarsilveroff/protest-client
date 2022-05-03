import {createAsyncThunk} from "@reduxjs/toolkit";

export const setTypeOfQuestionsOperation = createAsyncThunk(
    "test/getTypeOfQuestions",
    async (params, {rejectWithValue}) => {
        try {
            return params;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)


export const getAnswersOperation = createAsyncThunk(
    "test/getAnswers",
    async (params, {rejectWithValue}) => {
        try {
            return params;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

