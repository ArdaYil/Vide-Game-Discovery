import httpService from "./http-service";
import configModule from "../../config/config.json";

interface FetchGamesReponse {
  count: number;
  results: Game[];
}

interface Platform {
  image_background: string;
}
interface PlatformObject {
  platform: Platform;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  platforms: PlatformObject[];
}

export default () => httpService<FetchGamesReponse>(configModule.endpoint);
