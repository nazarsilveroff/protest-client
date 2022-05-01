import {createAsyncThunk} from "@reduxjs/toolkit";

import authAPI from "../auth/api";

export const signUpOperation = createAsyncThunk(
    "auth/signup",
    async (params, {rejectWithValue}) => {
        try {
            return await authAPI.signup(params);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const signInOperation = createAsyncThunk(
    "auth/login",
    async (params, {rejectWithValue}) => {
        try {
            return await authAPI.signin(params);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const googleOAuthOperation = createAsyncThunk(
    "auth/login",
    async (params, {rejectWithValue}) => {
        try {
            return await authAPI.googleOAuth(params);
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
            return  await authAPI.getCurrent(auth.token);
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
            return await authAPI.logout(auth.token);
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