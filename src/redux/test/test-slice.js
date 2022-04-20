import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    type:"",
    questions:[],
    results:[],
    error: null,
    loading: false
};

const testSlice = createSlice({
    name: "test",
    initialState,
    extraReducers: {

    }
});

export default testSlice.reducer;