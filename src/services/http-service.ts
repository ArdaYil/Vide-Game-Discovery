import httpClient, { AxiosInstance } from "./httpClient";

class HttpClient<T> {
  private httpInstance: AxiosInstance;

  public constructor(endpoint: string) {
    this.httpInstance = httpClient(endpoint);
  }

  public getAll(route: string, apiKey: string = "") {
    const abortController = new AbortController();

    const req = this.httpInstance.get<T>(route, {
      signal: abortController.signal,
      params: {
        key: apiKey,
      },
    });

    return { req, cancel: () => abortController.abort() };
  }
}

export default <T>(endpoint: string) => new HttpClient<T>(endpoint);
