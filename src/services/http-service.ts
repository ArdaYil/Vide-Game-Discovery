import { AxiosRequestConfig } from "axios";
import httpClient, { AxiosInstance } from "./httpClient";

class HttpClient<T> {
  private httpInstance: AxiosInstance;

  public constructor(endpoint: string) {
    this.httpInstance = httpClient(endpoint);
  }

  public getAll(
    route: string,
    apiKey: string = "",
    requestConfig: AxiosRequestConfig
  ) {
    const abortController = new AbortController();

    requestConfig.params.key = apiKey;
    requestConfig.signal = abortController.signal;

    const req = this.httpInstance.get<T>(route, requestConfig);

    return { req, cancel: () => abortController.abort() };
  }
}

export default <T>(endpoint: string) => new HttpClient<T>(endpoint);
