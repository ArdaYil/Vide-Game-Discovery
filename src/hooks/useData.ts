import { useEffect, useState } from "react";
import { CanceledError } from "../services/httpClient";
import { apiKey } from "../../config/config.json";
import httpService from "../services/http-service";
import configModule from "../../config/config.json";
import { AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default function useData<T>(
  endpoint: string,
  dependencies: any[] = [],
  requestData: AxiosRequestConfig = { params: {} }
) {
  const client = httpService<FetchResponse<T>>(configModule.endpoint);

  const [data, setData] = useState<T[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const { req, cancel } = client.getAll(endpoint, apiKey, requestData);

    setIsLoading(true);

    req
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;

        setErrors(error.message);
        setIsLoading(false);
      });

    return cancel;
  }, [...dependencies]);

  return { data, errors, isLoading, setData, setErrors };
}
