import axios from "axios";

const backendApi = axios.create({
  baseURL: "https://contablexpert-backend.onrender.com", 
  headers: {
    "Content-Type": "application/json",
  },
});

export default backendApi;