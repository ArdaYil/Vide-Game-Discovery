import httpService from "./http-service";
import configModule from "../../config/config.json";

interface FetchGamesReponse {
  count: number;
  results: Game[];
}

export interface Platform {
  image_background: string;
  id: number;
}
interface PlatformObject {
  platform: Platform;
}

export interface Game {
  id: number;
  metacritic: number;
  name: string;
  background_image: string;
  parent_platforms: PlatformObject[];
}

export default () => httpService<FetchGamesReponse>(configModule.endpoint);
