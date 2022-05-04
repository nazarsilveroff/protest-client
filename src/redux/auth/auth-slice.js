import {createSlice} from "@reduxjs/toolkit";

import {
    currentOperation,
    googleOAuthOperation,
    logoutOperation,
    signInOperation,
    signUpOperation
} from "./auth-operations";


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
        //signUp
        [signUpOperation.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [signUpOperation.fulfilled]: (state, {payload}) => {
            state.user = {...payload.user};
            state.token = payload.token;
            state.loading = false;
            state.isLogin = true;
        },
        [signUpOperation.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload.response.data;
        },


        //signIn
        [signInOperation.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [signInOperation.fulfilled]: (state, {payload}) => {
            state.user = {...payload.user};
            state.token = payload.token;
            state.loading = false;
            state.isLogin = true;
        },
        [signInOperation.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload.response.data;
        },


        //logout
        [logoutOperation.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [logoutOperation.fulfilled]: (state) => {
            state.user = {...initialState.user};
            state.token = "";
            state.isLogin = false;
            state.loading = false;
        },
        [logoutOperation.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },

        //googleOAuth
        [googleOAuthOperation.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [googleOAuthOperation.fulfilled]: (state, {payload}) => {
            state.user = {...payload.user};
            state.token = payload.token;
            state.loading = false;
            state.isLogin = true;
        },
        [googleOAuthOperation.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },

        //current
        [currentOperation.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [currentOperation.fulfilled]: (state, {payload}) => {
            state.user = {...payload.user};
            state.token = payload.token;
            state.loading = false;
            state.isLogin = true;
        },
        [currentOperation.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },
    }
});

export default authSlice.reducer;