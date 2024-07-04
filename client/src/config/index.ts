import axios, {AxiosInstance} from "axios";

const BaseUrl = "http://localhost:1900/api";

const fetch:AxiosInstance = axios.create({
  baseURL: "http://localhost:1900/api"
})

export { BaseUrl, fetch };
