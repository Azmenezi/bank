import axios from "axios";

const instance = axios.create({
  baseURL: "https://coded-projects-api.herokuapp.com/api/bank/v3",
});
const authInstance = axios.create({
  baseURL: "https://coded-projects-api.herokuapp.com/api/auth/v3",
});

instance.interceptors.request.use((config) => {
  const access = localStorage.getItem("access");
  if (access) {
    config.headers.Authorization = `Bearer ${access}`;
  }
  return config;
});

authInstance.interceptors.request.use((config) => {
  const access = localStorage.getItem("access");
  if (access) {
    config.headers.Authorization = `Bearer ${access}`;
  }
  return config;
});

export { authInstance, instance };
