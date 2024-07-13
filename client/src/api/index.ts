import axios, { AxiosResponse } from "axios";

const BASEURL = "http://localhost:1900/api";
axios.defaults.baseURL = BASEURL;
axios.defaults.withCredentials = true;

interface ApiI {
  get: (endPoints: string) => Promise<AxiosResponse>;
  post: (endPoint: string, body: any) => Promise<AxiosResponse>;
  delete: (endPoints: string) => Promise<AxiosResponse>;
  put: (endPoints: string, body?: any) => Promise<AxiosResponse>;
}

class Api implements ApiI {
  public async put(endPoints: string, body?: any): Promise<AxiosResponse> {
    if (!body) return axios.put(endPoints);
    return axios.put(endPoints, body);
  }

  public async get(endPoint: string): Promise<AxiosResponse> {
    return axios.get(endPoint);
  }

  public async post(endPoints: string, body?: any): Promise<AxiosResponse> {
    return axios.post(endPoints, body);
  }

  public async delete(endPoints: string): Promise<AxiosResponse> {
    return axios.delete(endPoints);
  }
}

const instancApi: ApiI = new Api();

export default instancApi;
export type { ApiI, AxiosResponse as ResponseI };
