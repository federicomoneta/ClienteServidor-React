import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api", //esto hay que configurar con el backend
  headers: {
    "Content-type": "application/json"
  }
});