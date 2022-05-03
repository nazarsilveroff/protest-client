import {createAsyncThunk} from "@reduxjs/toolkit";

import authApi from "./auth-api";

export const signUpOperation = createAsyncThunk(
    "auth/signup",
    async (params, {rejectWithValue}) => {
        try {
            return await authApi.signup(params);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const signInOperation = createAsyncThunk(
    "auth/login",
    async (params, {rejectWithValue}) => {
        try {
            return await authApi.signin(params);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const googleOAuthOperation = createAsyncThunk(
    "auth/googleOAuth",
    async (params, {rejectWithValue}) => {
        try {
            return await authApi.googleOAuth(params);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const currentOperation = createAsyncThunk(
    "auth/current",
    async (_, {getState, rejectWithValue}) => {
        try {
            const {auth} = getState();
            return  await authApi.getCurrent(auth.token);
        } catch (error) {
            return rejectWithValue(error);
        }
    },
    {
        condition: (_, {getState}) => {
            const {auth} = getState();
            if(!auth.token) {
                return false;
            }
        }
    }
);

export const logoutOperation = createAsyncThunk(
    "auth/logout",
    async (_, {getState,rejectWithValue}) => {
        try {
            const {auth} = getState();
            return await authApi.logout(auth.token);
        } catch (error) {
            return rejectWithValue(error);
        }
    },
    {
        condition: (_, {getState}) => {
            const {auth} = getState();
            if(!auth.token) {
                return false;
            }
        }
    }
);