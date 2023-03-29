import httpClient, {AxiosInstance} from "./httpClient";

class HttpClient<T> {
  private httpInstance: AxiosInstance;

  public constructor(endpoint: string) {
    this.httpInstance = httpClient(endpoint);
  }

  public getAll(key: string | undefined) {
    const abortController = new AbortController();

    const keyStr = key ? `?key=${key}`: "";
    const req = this.httpInstance.get<T>(`/games${keyStr}`, {signal: abortController.signal});

    return {req, cancel: abortController.abort}
  }
}

export default <T>(endpoint: string) => new HttpClient<T>(endpoint);
