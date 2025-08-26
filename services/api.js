import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.15.64:3000",
});

export default api;

//semelhante ao web, mas nesse caso utilizo o ip da minha máquina
