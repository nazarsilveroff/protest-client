import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_BASE_URL

axios.defaults.baseURL = SERVER_URL;

const addToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}


const signup = async (params) => {
    const {data} = await axios.post("/auth/sign-up", params);
    addToken(data.token);
    return data;
}

const signin = async (params) => {
    const {data} = await axios.post("/auth/sign-in", params);
    addToken(data.token);
    return data;
}

const googleOAuth = async (params) => {
    const {data} = await axios.post("/auth/google", params);
    addToken(data.token);
    return data;
}

const getCurrent = async (token) => {
    addToken(token);
    const {data} = await axios.get("/user/current");
    return data;
}

const logout = async (token) => {
    addToken(token);
    const {data} = await axios.get("/auth/logout");
    return data;
}

const authApi = {
    signup,
    signin,
    logout,
    googleOAuth,
    getCurrent,
};

export default authApi;
