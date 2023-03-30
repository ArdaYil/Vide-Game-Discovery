import httpService from "./http-service";
import config from "config";

export interface Game {}

export default () => httpService<any>("https://api.rawg.io/api/games");
