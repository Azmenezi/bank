import { instance, authInstance } from ".";
import jwt_decode from "jwt-decode";
const login = async (userInfo) => {
  try {
    const { data } = await authInstance.post("/login", userInfo);
    storeToken(data.access);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const register = async (userInfo) => {
  try {
    const formData = new FormData();
    for (const key in userInfo) formData.append(key, userInfo[key]);
    const { data } = await authInstance.post("/register", formData);
    storeToken(data.access);
    return data;
  } catch (error) {
    console.log(error.response);
  }
};

const getProfile = async () => {
  try {
    const { data } = await authInstance.get("/profile");
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getBalance = async () => {
  try {
    const { data } = await instance.get("/balance");
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getTransactions = async () => {
  try {
    const { data } = await instance.get("/transactions");
    return data;
  } catch (error) {
    console.log(error);
  }
};

const storeToken = (access) => {
  localStorage.setItem("access", access);
};

const checkToken = () => {
  const access = localStorage.getItem("access");
  if (access) {
    const decode = jwt_decode(access);
    const currentTime = Date.now() / 1000;
    if (decode.exp < currentTime) {
      localStorage.removeItem("access");
      return false;
    }
    return true;
  }
  return false;
};

const logout = () => {
  localStorage.removeItem("access");
};

export {
  login,
  register,
  getProfile,
  getBalance,
  getTransactions,
  storeToken,
  checkToken,
  logout,
};
