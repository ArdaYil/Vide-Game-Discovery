import httpService from "./http-service";
import configModule from "../../config/config.json";

interface FetchGamesReponse {
  count: number;
  results: Genre[];
}

export interface Genre {
  id: number;
  name: string;
}

export default () => httpService<FetchGamesReponse>(configModule.endpoint);
