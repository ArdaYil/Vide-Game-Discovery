import httpService from "./http-service";
import config from "config";

export interface Game {}

export default () => httpService<Game>(config.get("endpoint"));
