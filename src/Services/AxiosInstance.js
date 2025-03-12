import axios from "axios";

const API_URL = "http://localhost:8085/api/v1/";

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
