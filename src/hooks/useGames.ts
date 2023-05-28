import { AxiosRequestConfig } from "axios";
import { GameQuery } from "../App";
import useData from "../hooks/useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatform";

interface PlatformObject {
  platform: Platform;
}

export interface Game {
  id: number;
  metacritic: number;
  name: string;
  background_image: string;
  parent_platforms: PlatformObject[];
  genres: Genre[];
}

export default (gameQuery: GameQuery) =>
  useData<Game>("/games", [gameQuery], {
    params: {
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.parent_platforms?.id,
    },
  });
