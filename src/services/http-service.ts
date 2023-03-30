import httpClient, { AxiosInstance } from "./httpClient";

class HttpClient<T> {
  private httpInstance: AxiosInstance;

  public constructor(endpoint: string) {
    this.httpInstance = httpClient(endpoint);
  }

  public getAll() {
    const abortController = new AbortController();

    const req = this.httpInstance.get<T>(
      `/games?key=231485f29f3f43858992896d502ceb58`,
      { signal: abortController.signal }
    );

    return { req, cancel: abortController.abort };
  }
}

export default <T>(endpoint: string) => new HttpClient<T>(endpoint);
