import axios from "axios";

const Api = axios.create({ 
  baseURL: "http://localhost:9300/api",
  withCredentials: true
});

export default Api;