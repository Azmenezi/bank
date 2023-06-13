import { instance, authInstance } from ".";
import jwt_decode from "jwt-decode";
const login = async (userInfo) => {
  try {
    const { data } = await authInstance.post("/login", userInfo);
    storeToken(data.access);
    return data;
  } catch (error) {
    if (error.response.data.name === "ValidationError") {
        alert(
            "password with value (adswda) fails to match the required pattern: /[a-zA-Z0-9]{8,30}/"
        );
      } else if (error.response.data.name === "Authentication Error") {
        alert("Invalid credentials");
      }
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
    if (error.response.data.name === "ValidationError") {
        alert(
          "Your password must contain at least 1 uppercase letter, 1 number, and no less than 8 characters"
        );
      } else if (error.response.data.name === "MongoServerError") {
        alert("This user already exists");
      }
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

const getUsers = async () => {
  try {
    const { data } = await authInstance.get("/users");
    return data;
  } catch (error) {
    console.log(error);
  }
};
const getUserId = async (Id) => {
  try {
    const { data } = await authInstance.get(`/users`);
    const index = data.findIndex((data) => {
      return data._id == Id;
    });
    return data[index];
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
  getUsers,
  getUserId,
};
