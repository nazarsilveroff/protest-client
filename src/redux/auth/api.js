import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

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

const authAPI = {
    signup,
    signin,
    logout,
    googleOAuth,
    getCurrent,
};

export default authAPI;
