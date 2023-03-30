import axios, { type AxiosInstance, CanceledError } from "axios";

export default function create(endpoint: string) {
  return axios.create({ baseURL: endpoint, headers: {} });
}

export { AxiosInstance, CanceledError };
