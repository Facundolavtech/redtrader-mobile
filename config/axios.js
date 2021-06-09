import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://redtrader-api.com:9443/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
