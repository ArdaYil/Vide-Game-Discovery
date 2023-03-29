import axios, { type AxiosInstance, CanceledError } from "axios";

export default (endpoint: string) => {
  return axios.create({ baseURL: endpoint, headers: {} });
};

export { AxiosInstance, CanceledError };
