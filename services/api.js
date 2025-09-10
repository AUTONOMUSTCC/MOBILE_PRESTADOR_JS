import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.197.117:5232", 
});

export default api;
