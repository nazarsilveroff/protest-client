import {createSlice} from "@reduxjs/toolkit";
import {getAnswersOperation, setTypeOfQuestionsOperation} from "./test-operations";

const initialState = {
    type: "",
    answers: [],
    error: null,
    loading: false,
};

const testSlice = createSlice({
    name: "test",
    initialState,
    extraReducers: {

        //set type of questions
        [setTypeOfQuestionsOperation.pending]:(state)=>{
            state.loading = true;
            state.error = null;
        },
        [setTypeOfQuestionsOperation.fulfilled]:(state, {payload})=>{
            state.type = payload;
            state.loading = false;
        },
        [setTypeOfQuestionsOperation.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },

        //get answers
        [getAnswersOperation.pending]:(state)=>{
            state.loading = true;
            state.error = null;
        },
        [getAnswersOperation.fulfilled]:(state, {payload})=>{
            state.answers = payload;
            state.loading = false;
        },
        [getAnswersOperation.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },

    },
});

export default testSlice.reducer;
