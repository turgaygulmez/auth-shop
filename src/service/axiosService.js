import axios from "axios";
import { API_URL } from "./constants";

export default class AxiosService {
  constructor() {
    axios.defaults.withCredentials = true;
    this.httpClient = axios.create({});

    this.httpClient.interceptors.request.use(
      async (config) => {
        config.baseURL = API_URL;
        return config;
      },
      (error) => Promise.reject(error)
    );
  }
}
