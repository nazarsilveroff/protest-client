import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

const setToken = (token) =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

const register = async (credentials) =>
  await axios.post("auth/sign-up", credentials);

const login = async (credentials) =>
  await axios.post("auth/sign-in", credentials);
const logout = async () => await axios.post("auth/logout");

export {
  setToken,
  /* auth */
  register,
  login,
  logout,
};
