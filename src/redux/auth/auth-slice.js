import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: {
        name: "",
        email: ""
    },
    token: "",
    isLogin: false,
    error: null,
    loading: false
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {

    }
});

export default authSlice.reducer;