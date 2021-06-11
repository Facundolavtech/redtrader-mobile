import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://redtrader-api.com:9443/api",
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default axiosClient;
