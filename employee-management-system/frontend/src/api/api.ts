import axios from "axios";

const API_URL = "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_URL,
});

export const setToken = (token: string | null) => {
  if (token) {
    api.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete api.defaults.headers.common["x-auth-token"];
  }
};

export default api;
