import axios from "axios";

const API_URL = "https://server-utdrs.vercel.app/api/v1/";

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
