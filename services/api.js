import axios from "axios";

const api = axios.create({
  baseURL: "https://williams-trouserless-tajuana.ngrok-free.dev", 
});

export default api;
