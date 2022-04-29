import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "./api";

const Error = {
  AUTH_FAILED: "Invalid email or password.",
  UNKNOWN: "Unknown backend error occurred.",
};

const register = createAsyncThunk(
  "auth/sign-up",
  async (credentials, { rejectWithValue }) => {
    try {
      await api.register(credentials);
      const { data } = await api.login(credentials);
      api.setToken(data.accessToken);
      return data;
    } catch (error) {
      if (error.message === "Request failed with status code 409") {
        return rejectWithValue("Provided email already exists");
      }
      return rejectWithValue(Error.UNKNOWN);
    }
  }
);

const login = createAsyncThunk(
  "auth/sign-in",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await api.login(credentials);
      api.setToken(data.accessToken);
      return data;
    } catch (error) {
      if (error.message === "Request failed with status code 403") {
        return rejectWithValue("Email doesn't exist / Password is wrong");
      }
      return rejectWithValue(Error.UNKNOWN);
    }
  }
);
const logOut = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await api.logout();
      api.setToken("");
    } catch (error) {
      return rejectWithValue(Error.UNKNOWN);
    }
  }
);

export { register, login, logOut };
