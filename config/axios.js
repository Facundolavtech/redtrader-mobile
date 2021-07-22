import axios from "axios";

const development_uri = "http://192.168.100.246:4000/api";
const production_uri = "https://redtrader-api.com:9443/api";

const axiosClient = axios.create({
  baseURL: production_uri,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default axiosClient;
